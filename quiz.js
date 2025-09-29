// ======================================================
// Pepsi's Master Quiz — main script (no inline JS needed)
// - gathers inline question sets (questions.js, Spectroscopy.js)
// - injects MathJax
// - runs the quiz app
// ======================================================

/* ----------------- Small utilities ----------------- */
const $ = id => document.getElementById(id);
const clamp = (x,min,max)=>Math.max(min,Math.min(max,x));
const r1 = x => Math.round(x*10)/10; // round to 0.1
const fmtPts = x => (Math.abs(x - Math.round(x)) < 1e-9 ? String(Math.round(x)) : x.toFixed(1));
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }

// Markdown (inline) → HTML for **bold** / *italic*, ignoring $...$ TeX spans
function mdInline(s){
  const parts = String(s).split('$');
  for (let i=0;i<parts.length;i+=2){
    parts[i] = parts[i]
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.+?)\*/g, '<i>$1</i>');
  }
  return parts.join('$');
}

/* ----------------- MathJax injection ----------------- */
(function injectMathJax(){
  if (window.MathJax && document.getElementById('MathJax-script')) return;
  window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' }
  };
  const s = document.createElement('script');
  s.id = 'MathJax-script';
  s.async = true;
  s.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-svg.js';
  document.head.appendChild(s);
})();
function typeset(el){
  if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(()=>{});
}

/* -------------- Gather inline question sets -------------- */
// Expect your data files to define:
//   window.questions   (first set)
//   window.questions2  (second set)
// Add more here if you create them.
window.__QUIZ_SETS__ = [];
window.__QUIZ_SET_NAMES__ = [];
if (Array.isArray(window.questions))  { window.__QUIZ_SETS__.push(window.questions);  window.__QUIZ_SET_NAMES__.push('questions.js'); }

/* ----------------- DOM refs ----------------- */
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

// Availability + quick picks
const availableCountEl = $('availableCount');
const btnAll  = $('btnAll');
const btn25   = $('btn25');
const btn50   = $('btn50');
const btn100  = $('btn100');

/* ----------------- App state ----------------- */
let allQuestions = [];
let selectedQuestions = [];
let selectionCategories = new Set();
let orderMode = 'mixed';
let idx = 0;
let points = 0;
let total = 0;
let maxPointsTotal = 0;
let lifelines = 3;
let history = [];
let currentIsMulti = false;
let checked = false;
let multiSelection = new Set();
let locked = false;

/* ----------------- Data loading ----------------- */
const sampleData = [
  {category:"Spectroscopy – IR", question:"Beer–Lambert: $A=\\varepsilon l c$ or <math><mi>A</mi><mo>=</mo><mi>ε</mi><mi>l</mi><mi>c</mi></math>.", choices:["$\\alpha$","<math><mi>\\mu</mi></math>","dipole moment $\\mu$","index of refraction"], correctIndex:2, points:10, explanation:"IR selection rule: change in dipole moment."}
];

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
    explanation: q.explanation||'',
    _shuffled: false
  };
}

async function loadAllSources(){
  // Prefer inline sets that were loaded before this script
  if (Array.isArray(window.__QUIZ_SETS__) && window.__QUIZ_SETS__.length > 0) {
    const merged = window.__QUIZ_SETS__.flat();
    allQuestions = merged.map(normalizeQuestion);
    const names = Array.isArray(window.__QUIZ_SET_NAMES__) && window.__QUIZ_SET_NAMES__.length
      ? window.__QUIZ_SET_NAMES__.join(', ')
      : 'inline scripts';
    sourceInfo.innerHTML = 'Source: <em>' + names + '</em>';
    return;
  }
  // Fallback
  allQuestions = sampleData.map(normalizeQuestion);
  sourceInfo.innerHTML = 'Source: <em>embedded sample</em>';
}

/* ----------------- Category UI ----------------- */
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
    div.innerHTML = `<input type="checkbox" id="${id}" data-cat="${cat}" checked> <span>${mdInline(cat)}</span>`;
    categoriesEl.appendChild(div);
  });
  selectionCategories = new Set(cats);
  updateCatChip();
  syncAvailableUI();
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
    syncAvailableUI();
  });
}

/* --------- Availability + quick picks --------- */
function getAvailablePool() {
  const chosen = [...selectionCategories];
  return allQuestions.filter(q => chosen.includes(q.category));
}
function syncAvailableUI({keepCustom=false} = {}) {
  const pool = getAvailablePool();
  const count = pool.length;
  availableCountEl.textContent = `${count} available`;
  if (!keepCustom) numQuestions.value = count;
  startBtn.disabled = (count === 0);
}
function setCountTo(n) { numQuestions.value = Math.min(n, getAvailablePool().length); }
btnAll.addEventListener('click', () => setCountTo(getAvailablePool().length));
btn25.addEventListener('click', () => setCountTo(25));
btn50.addEventListener('click', () => setCountTo(50));
btn100.addEventListener('click', () => setCountTo(100));

/* ----------------- Build selection ----------------- */
function setProgress(i, total){
  const pct = Math.round((i/Math.max(1,total))*100);
  bar.style.width = pct + '%';
  qposChip.textContent = `Question ${Math.min(i+1,total)}/${total}`;
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
  selectedQuestions = pool.slice(0, n).map(q => ({
    ...q,
    choices: [...q.choices],
    correctIndices: [...q.correctIndices],
    _shuffled: false
  }));
  total = selectedQuestions.length;
  maxPointsTotal = selectedQuestions.reduce((s,q)=>s+q.points,0);
  updateTotalPointsChip();
}
function updateTotalPointsChip(){
  pointsChip.textContent = `${fmtPts(points)} / ${fmtPts(maxPointsTotal)} pts`;
}

/* ----------------- Game flow ----------------- */
function startGame(){
  if(selectionCategories.size === 0){ alert('Pick at least one category.'); return; }
  buildSelection();
  if(total === 0){ alert('No questions available for the selected categories.'); return; }
  points = 0; idx = 0; lifelines = 3; history = []; checked = false; multiSelection.clear(); locked = false;
  screenStart.classList.add('hidden');
  screenResult.classList.add('hidden');
  screenQuiz.classList.remove('hidden');
  lifesChip.textContent = `50/50 × ${lifelines}`;
  lifeCount.textContent = `× ${lifelines} left`;
  updateTotalPointsChip();
  renderQuestion();
}

function shuffleChoicesInPlace(q){
  if (q._shuffled) return q;
  const n = q.choices.length;
  const order = [...Array(n).keys()];
  shuffle(order);
  const newChoices = order.map(i => q.choices[i]);
  const corr = new Set(q.correctIndices);
  const newCorr = [];
  for (let j=0;j<n;j++){ if (corr.has(order[j])) newCorr.push(j); }
  q.choices = newChoices;
  q.correctIndices = newCorr;
  q._shuffled = true;
  return q;
}

function renderQuestion(){
  let q = selectedQuestions[idx];
  q = shuffleChoicesInPlace(q);

  currentIsMulti = (q.correctIndices && q.correctIndices.length > 1);
  checked = false; multiSelection.clear(); locked = false;

  setProgress(idx, total);
  qnum.textContent = `Question ${idx+1} of ${total}`;

  const alreadyHasSATA = /\bselect all that apply\b/i.test(q.question);
  qtext.innerHTML = mdInline(q.question) + (
    currentIsMulti && !alreadyHasSATA
      ? ' <span class="badge" style="margin-left:6px">[Select all that apply]</span>'
      : ''
  );

  sataNote.classList.toggle('hidden', !currentIsMulti);
  answers.innerHTML = '';
  explain.classList.add('hidden'); explain.innerHTML = '';
  nextBtn.disabled = true; nextBtn.textContent = currentIsMulti ? 'Check' : 'Next';
  catBadge.textContent = q.category;
  modeBadge.classList.toggle('hidden', !currentIsMulti);
  ptsBadge.textContent = `+0 pts`;

  const keys = ['1','2','3','4','5','6','7','8','9'];
  q.choices.forEach((choice, i)=>{
    const el = document.createElement('label');
    el.className = 'opt';
    const type = currentIsMulti ? 'checkbox' : 'radio';
    el.innerHTML = `
      <input type="${type}" name="ans" value="${i}">
      <span class="key">${keys[i] || i+1}</span>
      <span class="txt">${mdInline(choice)}</span>`;
    answers.appendChild(el);
  });

  answers.onclick = (e) => {
    const opt = e.target.closest('.opt');
    if (!opt) return;
    const input = opt.querySelector('input');
    if (!input || input.disabled) return;

    if (currentIsMulti) {
      input.checked = !input.checked;
      input.dispatchEvent(new Event('change', {bubbles:true}));
    } else {
      if (!input.checked) input.checked = true;
      if(!locked) checkSingle([...answers.querySelectorAll('.opt')].indexOf(opt));
    }
  };
  answers.onchange = (e)=>{
    if (!currentIsMulti) return;
    const input = e.target.closest('input[type="checkbox"]');
    if (!input || input.disabled) return;
    const opt = input.closest('.opt');
    const items = [...answers.querySelectorAll('.opt')];
    const i = items.indexOf(opt);
    if (i < 0) return;
    if (input.checked) {
      multiSelection.add(i); opt.classList.add('picked');
    } else {
      multiSelection.delete(i); opt.classList.remove('picked');
    }
    nextBtn.disabled = (multiSelection.size === 0);
  };

  fiftyBtn.disabled = currentIsMulti || lifelines <= 0;
  fiftyBtn.title = currentIsMulti
    ? 'Disabled for multiple-answer questions'
    : (lifelines > 0 ? 'Eliminate two incorrect options (3 uses per run)' : 'No 50/50 left');

  typeset(qtext);
  typeset(answers);
}

function disableCurrentInputs(){
  answers.onclick = null;
  answers.onchange = null;
  answers.querySelectorAll('input').forEach(inp => inp.disabled = true);
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
  const isRight = (i === correct);
  const earned = isRight ? q.points : 0;
  points += earned;
  ptsBadge.textContent = `+${fmtPts(earned)} pts`;
  updateTotalPointsChip();
  setProgress(idx+1, total);
  if(q.explanation){ explain.innerHTML = mdInline(q.explanation); explain.classList.remove('hidden'); typeset(explain); }
  nextBtn.disabled = false;
  disableCurrentInputs();
  history.push({ idx, category:q.category, question:q.question, choices:q.choices, correctIndices:q.correctIndices, picked:i, pointsEarned: earned, explanation:q.explanation||'' });
}

function checkMulti(){
  if(checked) return;
  checked = true;
  const q = selectedQuestions[idx];
  const correctSet = new Set(q.correctIndices);
  const pickedSet = new Set([...multiSelection]);

  const opts = [...answers.querySelectorAll('.opt')];
  opts.forEach((opt, j)=>{
    const picked = pickedSet.has(j);
    const correct = correctSet.has(j);
    if (picked && correct) opt.classList.add('correct');
    else if (picked && !correct) opt.classList.add('wrong');
    else if (!picked && correct) opt.classList.add('correct','missed');
  });

  const c = correctSet.size;
  const hits = [...pickedSet].filter(i => correctSet.has(i)).length;
  const falsePos = [...pickedSet].filter(i => !correctSet.has(i)).length;
  const share = q.points / c;
  let earned = share * (hits - falsePos);
  earned = clamp( r1(earned), 0, q.points );
  points += earned;

  ptsBadge.textContent = `+${fmtPts(earned)} pts`;
  updateTotalPointsChip();
  setProgress(idx+1, total);

  if(q.explanation){ explain.innerHTML = mdInline(q.explanation); explain.classList.remove('hidden'); typeset(explain); }
  nextBtn.disabled = false; nextBtn.textContent = 'Next';
  disableCurrentInputs();

  history.push({ idx, category:q.category, question:q.question, choices:q.choices, correctIndices:q.correctIndices, picked:[...pickedSet], pointsEarned: earned, explanation:q.explanation||'' });
}

function apply5050(){
  if (currentIsMulti) return;
  if (lifelines <= 0) return;

  const q = selectedQuestions[idx];
  const correctSet = new Set(q.correctIndices);
  const opts = [...answers.querySelectorAll('.opt')];
  const visibleWrongs = opts
    .map((el,i)=>({el,i}))
    .filter(o => !o.el.classList.contains('hidden') && !correctSet.has(o.i));

  if (visibleWrongs.length === 0) return;

  shuffle(visibleWrongs);
  const toHideCount = Math.min(2, visibleWrongs.length);
  visibleWrongs.slice(0, toHideCount).forEach(o => o.el.classList.add('hidden'));

  lifelines--;
  lifesChip.textContent = `50/50 × ${lifelines}`;
  lifeCount.textContent = `× ${lifelines} left`;
  fiftyBtn.disabled = true;
  fiftyBtn.title = lifelines > 0 ? 'Eliminate two incorrect options (3 uses per run)' : 'No 50/50 left';
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

  finalScore.textContent = `${fmtPts(points)} / ${fmtPts(maxPointsTotal)} pts`;
  const pointsPct = maxPointsTotal ? Math.round((points / maxPointsTotal)*100) : 0;

  const perfects = history.filter(h=>{
    if(Array.isArray(h.picked)){
      const setP = new Set(h.picked||[]);
      const setC = new Set(h.correctIndices||[]);
      return setP.size===setC.size && [...setC].every(v=>setP.has(v));
    }
    return h.picked=== (h.correctIndices? h.correctIndices[0]: -1);
  }).length;

  accuracy.textContent = `Score: ${pointsPct}% • Perfect: ${perfects}/${total}`;
  const cats = [...new Set(history.map(h=> selectedQuestions[h.idx]?.category || h.category))];
  catsPlayed.textContent = cats.join(' • ');

  let title = 'Well done!';
  if(pointsPct === 100) title = 'Absolute Unit! 🧪✨';
  else if(pointsPct >= 85) title = 'Distinction-level performance!';
  else if(pointsPct >= 70) title = 'Strong pass!';
  else if(pointsPct >= 50) title = 'Keep going — solid effort!';
  else title = 'Good start — review & retry!';
  winTitle.textContent = title;

  const frag = document.createDocumentFragment();
  history.forEach((h, n)=>{
    const wrap = document.createElement('div');
    wrap.className = 'panel';
    const q = selectedQuestions[h.idx] || h;
    const correctSet = new Set(q.correctIndices||[]);
    const pickedSet  = new Set(Array.isArray(h.picked)? h.picked : (h.picked==null? [] : [h.picked]));
    let html = `<div class="tag">Q${n+1} • <b>${q.category}</b>${(q.correctIndices||[]).length>1? ' • multiple answers':''} • Earned: ${fmtPts(h.pointsEarned)} / ${fmtPts(q.points)} pts</div>`;
    html += `<div class="question" style="font-size:18px">${mdInline(q.question)}</div>`;
    html += '<div class="answers" style="margin-top:8px">';
    q.choices.forEach((c, i)=>{
      const cls = correctSet.has(i) ? (pickedSet.has(i) ? 'correct' : 'correct missed')
               : (pickedSet.has(i) ? 'wrong' : '');
      html += `<div class="opt ${cls}" style="cursor:default"><span class="key">${i+1}</span> <span>${mdInline(c)}</span></div>`;
    });
    html += '</div>';
    if(q.explanation){ html += `<div class="explain" style="margin-top:8px">${mdInline(q.explanation)}</div>`; }
    wrap.innerHTML = html;
    frag.appendChild(wrap);
  });
  reviewBox.innerHTML = '';
  reviewBox.appendChild(frag);
  typeset(reviewBox);
}

/* ----------------- Keyboard & buttons ----------------- */
window.addEventListener('keydown', (e)=>{
  if(screenQuiz.classList.contains('hidden')) return;
  const opts = [...answers.querySelectorAll('.opt')];
  if(/^[1-9]$/.test(e.key)){
    const i = parseInt(e.key,10)-1;
    if(opts[i]){
      if(currentIsMulti){
        const input = opts[i].querySelector('input[type="checkbox"]');
        if (input && !input.disabled) {
          input.checked = !input.checked;
          input.dispatchEvent(new Event('change', {bubbles:true}));
        }
      } else {
        if(!locked) checkSingle(i);
      }
    }
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

selectAllBtn.addEventListener('click', ()=>{
  categoriesEl.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.checked=true);
  selectionCategories = new Set(uniqueCategories(allQuestions));
  updateCatChip();
  syncAvailableUI();
});
clearAllBtn.addEventListener('click', ()=>{
  categoriesEl.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.checked=false);
  selectionCategories.clear();
  updateCatChip();
  syncAvailableUI();
});
orderSel.addEventListener('change', ()=>{ orderMode = orderSel.value; });
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', ()=>{
  if(currentIsMulti && !checked){ checkMulti(); } else { nextQuestion(); }
});
skipBtn.addEventListener('click', skipQuestion);
reviewBtn.addEventListener('click', ()=> reviewBox.classList.toggle('hidden'));
restartBtn.addEventListener('click', ()=>{ screenResult.classList.add('hidden'); screenStart.classList.remove('hidden'); });
fiftyBtn.addEventListener('click', apply5050);

/* ----------------- Fun image animation ----------------- */
function initFlaus(){
  const img = $('flaus');
  if(!img) return;

  const animations = [
    'anim-shake','anim-jump','anim-flip-x','anim-flip-y','anim-spin',
    'anim-wobble','anim-bounce','anim-swing','anim-pulse','anim-rubber',
    'anim-tada','anim-jello','anim-zoom'
  ];
  function randomizeDuration(){
    const ms = Math.floor(600 + Math.random() * 500);
    document.documentElement.style.setProperty('--anim-duration', ms + 'ms');
  }
  function playRandomAnimation(){
    randomizeDuration();
    const next = animations[Math.floor(Math.random() * animations.length)];
    img.classList.add('animating');
    animations.forEach(a => img.classList.remove(a));
    void img.offsetWidth;
    img.classList.add(next);
  }
  img.addEventListener('animationend', () => {
    animations.forEach(a => img.classList.remove(a));
    img.classList.remove('animating');
  });
  img.addEventListener('click', playRandomAnimation);
  img.setAttribute('tabindex', '0');
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playRandomAnimation();
    }
  });
  setTimeout(()=> img.classList.add('anim-pulse'), 300);
  img.addEventListener('animationend', (e) => {
    if (e.animationName === 'pulse') img.classList.remove('anim-pulse');
  });
}

/* ----------------- Init ----------------- */
(async function init(){
  await loadAllSources();
  renderCategories();
  attachCategoryHandlers();
  pointsChip.textContent = '0 / 0 pts';
  qposChip.textContent = 'Question 0/0';
  lifesChip.textContent = '50/50 × 3';
  syncAvailableUI();
  initFlaus();
})();
