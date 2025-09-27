
/*
  =========================
  EXTERNAL DATA LOADING
  =========================
  Provide one or more JSON files via the URL, e.g.

    quiz.html?data=questions.json
    quiz.html?data=core.json,advanced.json

  Each file must contain an array of question objects with ONE of:
    - correctIndex: number (single-correct)
    - correctIndices: number[] (multi-correct)

  Shape:
    {
      "category": "Quantum Chemistry",
      "question": "Which statements about MP2 are true?",
      "choices": ["Captures dynamic correlation","Variational","Same as CISD","Size-extensive for non-interacting systems"],
      "correctIndices": [0,3],          // ← multi-answer
      "points": 10,                      // optional (default 10)
      "explanation": "MP2 includes some dynamic correlation; it is not variational."
    }
*/

// ---------- Helpers ----------
const $ = id => document.getElementById(id);
const screenStart = $('screenStart');
const screenQuiz  = $('screenQuiz');
const screenResult= $('screenResult');
const categoriesEl= $('categories');
const selectAllBtn= $('selectAll');
const clearAllBtn = $('clearAll');
const startBtn    = $('startBtn');
const orderSel    = $('order');
const numQuestions= $('numQuestions');
const pointsChip  = $('pointsChip');
const categoryChip= $('categoryChip');
const qposChip    = $('qpos');
const lifesChip   = $('lifes');
const sourceInfo  = $('sourceInfo');

// Quiz controls
const bar         = $('bar');
const qnum        = $('qnum');
const qtext       = $('qtext');
const sataNote    = $('sataNote');
const answers     = $('answers');
const explain     = $('explain');
const nextBtn     = $('nextBtn');
const skipBtn     = $('skipBtn');
const fiftyBtn    = $('fiftyBtn');
const lifeCount   = $('lifeCount');
const catBadge    = $('catBadge');
const modeBadge   = $('modeBadge');
const ptsBadge    = $('ptsBadge');

// Result
const winTitle    = $('winTitle');
const finalScore  = $('finalScore');
const accuracy    = $('accuracy');
const catsPlayed  = $('catsPlayed');
const reviewBtn   = $('reviewBtn');
const restartBtn  = $('restartBtn');
const reviewBox   = $('review');

// Config: sources from URL (?data=a.json,b.json) or default
function getSourcesFromQuery(){
  const u = new URL(location.href);
  const val = u.searchParams.get('data');
  if(!val) return null;
  return val.split(',').map(s=>s.trim()).filter(Boolean);
}
const CONFIG = { sources: getSourcesFromQuery() || ['questions.json'] };

// Sample fallback (only used if fetch fails)
const sampleData = [
  {category:"Quantum Chemistry", question:"The variational principle ensures that…", choices:["the trial energy is always ≤ true ground-state energy","the trial energy is always ≥ true ground-state energy","the trial wavefunction is orthogonal to the ground state by construction","the expectation value of H is stationary for any trial function"], correctIndex:1, points:10, explanation:"Variational energies are upper bounds to the true ground-state energy."},
  {category:"Spectroscopy", question:"Select all that apply to IR-active vibrations.", choices:["Change in dipole moment","Change in polarizability only","Totally symmetric modes in every molecule","Overtones are always forbidden"], correctIndices:[0], points:10, explanation:"IR activity requires a dipole change; polarizability change governs Raman, not IR."}
];

// ---------- State ----------
let allQuestions = [];
let selectedQuestions = [];
let selectionCategories = new Set();
let orderMode = 'mixed';
let idx = 0; // current question index
let points = 0;
let total = 0;
let lifelines = 3; // 3× 50/50 per run
let history = []; // for review
let currentIsMulti = false;
let checked = false; // whether current question has been checked
let multiSelection = new Set();

// ---------- Data loading & normalization ----------
async function fetchArray(url){
  const res = await fetch(url, {cache:'no-store'});
  if(!res.ok) throw new Error(res.status+" "+res.statusText);
  const data = await res.json();
  if(Array.isArray(data)) return data; // array root
  if(Array.isArray(data.questions)) return data.questions; // {questions:[...]}
  throw new Error('JSON must be an array or {questions:[…]}');
}

function normalizeQuestion(q, i){
  if(typeof q.category!== 'string' || typeof q.question!== 'string' || !Array.isArray(q.choices)){
    throw new Error('Invalid question at index '+i);
  }
  let correctIndices = [];
  if(Array.isArray(q.correctIndices)){
    correctIndices = q.correctIndices.slice();
  } else if(typeof q.correctIndex === 'number'){
    correctIndices = [q.correctIndex];
  } else {
    throw new Error('Missing correctIndex/correctIndices at index '+i);
  }
  correctIndices = correctIndices.filter(n => Number.isInteger(n) && n>=0 && n<q.choices.length);
  if(correctIndices.length === 0) throw new Error('No valid correct indices at index '+i);

  return {
    category: q.category,
    question: q.question,
    choices: q.choices,
    correctIndices,
    points: typeof q.points==='number'? q.points : 10,
    explanation: q.explanation||''
  };
}

async function loadAllSources(){
  // If inline JS sets exist, use them
  if (Array.isArray(window.__QUIZ_SETS__) && window.__QUIZ_SETS__.length > 0) {
    const merged = window.__QUIZ_SETS__.flat();
    allQuestions = merged.map(normalizeQuestion);
    const names = Array.isArray(window.__QUIZ_SET_NAMES__) ? window.__QUIZ_SET_NAMES__.join(', ') : 'inline scripts';
    sourceInfo.innerHTML = 'Source: <em>' + names + '</em>';
    return;
  }

  // Otherwise, keep the original JSON fetch path
  sourceInfo.innerHTML = 'Source: <em>'+CONFIG.sources.join(', ')+'</em>';
  try{
    const arrays = await Promise.all(CONFIG.sources.map(fetchArray));
    const merged = arrays.flat();
    allQuestions = merged.map(normalizeQuestion);
  }catch(err){
    console.warn('Falling back to sample data due to:', err);
    allQuestions = sampleData.map(normalizeQuestion);
    sourceInfo.innerHTML = 'Source: <em>embedded sample (fetch failed)</em>';
  }
}

function uniqueCategories(data){
  return [...new Set(data.map(q => q.category))].sort();
}

function renderCategories(){
  const cats = uniqueCategories(allQuestions);
  categoriesEl.innerHTML = '';
  cats.forEach(cat => {
    const id = 'cat_'+cat.replace(/[^A-Za-z0-9_]+/g,'_');
    const div = document.createElement('label');
    div.className = 'cat';
    div.innerHTML = `<input type="checkbox" id="${id}" data-cat="${cat}" checked> <span>${cat}</span>`;
    categoriesEl.appendChild(div);
  });
  selectionCategories = new Set(cats);
  updateCatChip();
}

function updateCatChip(){
  const list = [...selectionCategories];
  categoryChip.textContent = list.length? `${list.length} cat${list.length>1?'egories':''} selected` : 'No categories selected';
}

function attachCategoryHandlers(){
  categoriesEl.addEventListener('change', (e)=>{
    const cb = e.target.closest('input[type="checkbox"]');
    if(!cb) return;
    const cat = cb.getAttribute('data-cat');
    if(cb.checked) selectionCategories.add(cat); else selectionCategories.delete(cat);
    updateCatChip();
  });
}

function setProgress(i, total){
  const pct = Math.round((i/total)*100);
  bar.style.width = pct + '%';
  qposChip.textContent = `Question ${Math.min(i+1,total)}/${total}`;
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}

function buildSelection(){
  const chosenCats = [...selectionCategories];
  let pool = allQuestions.filter(q => chosenCats.includes(q.category));
  if(orderMode === 'byCategory'){
    const groups = {};
    chosenCats.forEach(c=> groups[c] = []);
    pool.forEach(q => groups[q.category].push(q));
    Object.values(groups).forEach(g=>shuffle(g));
    pool = chosenCats.flatMap(c => groups[c]);
  } else {
    shuffle(pool);
  }
  const n = Math.min(parseInt(numQuestions.value||10,10), pool.length);
  selectedQuestions = pool.slice(0, n).map(q => ({...q}));
  total = selectedQuestions.length;
}

function startGame(){
  if(selectionCategories.size === 0){ alert('Pick at least one category.'); return; }
  buildSelection();
  if(total === 0){ alert('No questions available for the selected categories.'); return; }
  points = 0; idx = 0; lifelines = 3; history = []; checked = false; multiSelection.clear();
  screenStart.classList.add('hidden');
  screenResult.classList.add('hidden');
  screenQuiz.classList.remove('hidden');
  lifesChip.textContent = `50/50 × ${lifelines}`;
  lifeCount.textContent = `× ${lifelines} left`;
  pointsChip.textContent = `${points} pts`;
  renderQuestion();
}

function renderQuestion(){
  const q = selectedQuestions[idx];
  currentIsMulti = (q.correctIndices && q.correctIndices.length > 1);
  checked = false; multiSelection.clear();
  setProgress(idx, total);
  qnum.textContent = `Question ${idx+1} of ${total}`;
  qtext.textContent = q.question + (currentIsMulti ? ' [Select all that apply]' : '');
  sataNote.classList.toggle('hidden', !currentIsMulti);
  answers.innerHTML = '';
  explain.classList.add('hidden'); explain.textContent = '';
  nextBtn.disabled = true; nextBtn.textContent = currentIsMulti ? 'Check' : 'Next';
  catBadge.textContent = q.category;
  modeBadge.classList.toggle('hidden', !currentIsMulti);
  ptsBadge.textContent = `+${q.points} pts`;

  const keys = ['1','2','3','4','5','6','7','8','9'];
  q.choices.forEach((choice, i)=>{
    const el = document.createElement('label');
    el.className = 'opt';
    const type = currentIsMulti ? 'checkbox' : 'radio';
    el.innerHTML = `<input type="${type}" name="ans" value="${i}"><span class="key">${keys[i]||i+1}</span> <span>${choice}</span>`;
    el.addEventListener('click', ()=> optionClicked(i));
    answers.appendChild(el);
  });
  fiftyBtn.disabled = false;
}

let locked = false; // prevent double evaluation for single-choice

function optionClicked(i){
  if(currentIsMulti){
    if(multiSelection.has(i)) multiSelection.delete(i); else multiSelection.add(i);
    nextBtn.disabled = multiSelection.size === 0;
  } else {
    if(locked) return;
    checkSingle(i);
  }
}

function checkSingle(i){
  locked = true; checked = true;
  const q = selectedQuestions[idx];
  const correct = q.correctIndices[0];
  const opts = [...answers.querySelectorAll('.opt')];
  opts.forEach((opt, j)=>{
    if(j === correct) opt.classList.add('correct');
    if(j === i && i !== correct) opt.classList.add('wrong');
  });
  const isRight = i === correct;
  if(isRight){ points += q.points; ptsBadge.textContent = `+${q.points} pts`; } else { ptsBadge.textContent = `+0 pts`; }
  pointsChip.textContent = `${points} pts`;
  setProgress(idx+1, total);
  if(q.explanation){ explain.textContent = q.explanation; explain.classList.remove('hidden'); }
  nextBtn.disabled = false;
  history.push({ idx, category:q.category, question:q.question, choices:q.choices, correctIndices:q.correctIndices, picked:i, pointsEarned: isRight ? q.points : 0, explanation:q.explanation||'' });
}

function checkMulti(){
  if(checked) return;
  checked = true;
  const q = selectedQuestions[idx];
  const correctSet = new Set(q.correctIndices);
  const pickedSet = new Set([...multiSelection]);
  const isRight = (pickedSet.size === correctSet.size) && [...correctSet].every(v => pickedSet.has(v));

  const opts = [...answers.querySelectorAll('.opt')];
  opts.forEach((opt, j)=>{
    if(correctSet.has(j)) opt.classList.add('correct');
    if(pickedSet.has(j) && !correctSet.has(j)) opt.classList.add('wrong');
  });

  if(isRight){ points += q.points; ptsBadge.textContent = `+${q.points} pts`; } else { ptsBadge.textContent = `+0 pts`; }
  pointsChip.textContent = `${points} pts`;
  setProgress(idx+1, total);
  if(q.explanation){ explain.textContent = q.explanation; explain.classList.remove('hidden'); }
  nextBtn.disabled = false; nextBtn.textContent = 'Next';
  history.push({ idx, category:q.category, question:q.question, choices:q.choices, correctIndices:q.correctIndices, picked:[...pickedSet], pointsEarned: isRight ? q.points : 0, explanation:q.explanation||'' });
}

function apply5050(){
  if(lifelines <= 0) return;
  const q = selectedQuestions[idx];
  const correctSet = new Set(q.correctIndices);
  const opts = [...answers.querySelectorAll('.opt')];
  const wrongs = opts.map((el,i)=>({el,i})).filter(o=>!correctSet.has(o.i));
  shuffle(wrongs);
  if(currentIsMulti){
    const removeCount = Math.max(1, Math.floor(wrongs.length/2));
    wrongs.slice(0, removeCount).forEach(o=>o.el.classList.add('hidden'));
  } else {
    const toHide = wrongs.slice(0, Math.max(0, wrongs.length - 1));
    toHide.forEach(o=>o.el.classList.add('hidden'));
  }
  lifelines--;
  lifesChip.textContent = `50/50 × ${lifelines}`;
  lifeCount.textContent = `× ${lifelines} left`;
  fiftyBtn.disabled = true;
}

function nextQuestion(){
  locked = false; checked = false; multiSelection.clear();
  idx++;
  if(idx >= total){ endGame(); } else { renderQuestion(); }
}

function skipQuestion(){
  if(checked) return;
  const q = selectedQuestions[idx];
  history.push({ idx, category:q.category, question:q.question, choices:q.choices, correctIndices:q.correctIndices, picked:null, pointsEarned:0, explanation:q.explanation||'' });
  setProgress(idx+1, total);
  nextQuestion();
}

function endGame(){
  screenQuiz.classList.add('hidden');
  screenResult.classList.remove('hidden');
  finalScore.textContent = `${points} pts`;
  const correctCount = history.filter(h=>{
    if(Array.isArray(h.picked)){
      const setP = new Set(h.picked||[]);
      const setC = new Set(h.correctIndices||[]);
      return setP.size===setC.size && [...setC].every(v=>setP.has(v));
    }
    return h.picked=== (h.correctIndices? h.correctIndices[0]: -1);
  }).length;
  const acc = total? Math.round((correctCount/total)*100) : 0;
  accuracy.textContent = `${acc}% correct`;
  const cats = [...new Set(history.map(h=> selectedQuestions[h.idx]?.category || h.category))];
  catsPlayed.textContent = cats.join(' • ');

  let title = 'Well done!';
  if(acc === 100) title = 'Absolute Unit! 🧪✨';
  else if(acc >= 85) title = 'Distinction-level performance!';
  else if(acc >= 70) title = 'Strong pass!';
  else if(acc >= 50) title = 'Keep going — solid effort!';
  else title = 'Good start — review & retry!';
  winTitle.textContent = title;

  const frag = document.createDocumentFragment();
  history.forEach((h, n)=>{
    const wrap = document.createElement('div');
    wrap.className = 'panel';
    const q = selectedQuestions[h.idx] || h;
    const correctSet = new Set(q.correctIndices||[]);
    const pickedSet  = new Set(Array.isArray(h.picked)? h.picked : (h.picked==null? [] : [h.picked]));
    let html = `<div class="tag">Q${n+1} • <b>${q.category}</b>${(q.correctIndices||[]).length>1? ' • multiple answers':''}</div>`;
    html += `<div class="question" style="font-size:18px">${q.question}</div>`;
    html += '<div class="answers" style="margin-top:8px">';
    q.choices.forEach((c, i)=>{
      const cls = correctSet.has(i) ? 'correct' : (pickedSet.has(i) && !correctSet.has(i) ? 'wrong' : '');
      html += `<div class="opt ${cls}" style="cursor:default"><span class="key">${i+1}</span> <span>${c}</span></div>`;
    });
    html += '</div>';
    if(q.explanation){ html += `<div class="explain" style="margin-top:8px">${q.explanation}</div>`; }
    wrap.innerHTML = html;
    frag.appendChild(wrap);
  });
  reviewBox.innerHTML = '';
  reviewBox.appendChild(frag);
}

// Keyboard shortcuts
window.addEventListener('keydown', (e)=>{
  if(screenQuiz.classList.contains('hidden')) return;
  const opts = [...answers.querySelectorAll('.opt')];
  if(/^[1-9]$/.test(e.key)){
    const i = parseInt(e.key,10)-1;
    if(opts[i]) optionClicked(i);
  } else if(e.key.toLowerCase()==='f'){
    if(!fiftyBtn.disabled && lifelines>0) apply5050();
  } else if(e.key.toLowerCase()==='n' || e.key === 'Enter'){
    if(!checked && currentIsMulti && !nextBtn.disabled){
      checkMulti();
    } else if(!nextBtn.disabled){
      nextQuestion();
    }
  }
});

// Wire up controls
selectAllBtn.addEventListener('click', ()=>{
  categoriesEl.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.checked=true);
  selectionCategories = new Set(uniqueCategories(allQuestions));
  updateCatChip();
});
clearAllBtn.addEventListener('click', ()=>{
  categoriesEl.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.checked=false);
  selectionCategories.clear();
  updateCatChip();
});
orderSel.addEventListener('change', ()=>{ orderMode = orderSel.value; });
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', ()=>{
  if(currentIsMulti && !checked){ checkMulti(); } else { nextQuestion(); }
});
skipBtn.addEventListener('click', skipQuestion);
reviewBtn.addEventListener('click', ()=> reviewBox.classList.toggle('hidden'));
restartBtn.addEventListener('click', ()=>{ screenResult.classList.add('hidden'); screenStart.classList.remove('hidden'); });

// Init
(async function init(){
  await loadAllSources();
  renderCategories();
  attachCategoryHandlers();
  pointsChip.textContent = '0 pts';
  qposChip.textContent = 'Question 0/0';
  lifesChip.textContent = '50/50 × 3';
})();
