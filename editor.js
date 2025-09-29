/* editor.js — in-page question editor + exporter
   - Injects a “Manage Questions” button on the start screen
   - Add/Edit/Delete/Duplicate questions
   - Export to questions.js (single array: window.questions = [ ... ])
   - Import .json or .js (replace or merge); robust parsing (concat, comments, BOM)
   - Live search without losing focus; AI helper instructions
*/

(function () {
  // ---- Utilities ----
  function el(tag, attrs = {}, ...children) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class" || k === "className") n.className = v;
      else if (k === "style") {
        if (typeof v === "string") n.setAttribute("style", v);
        else if (v && typeof v === "object") Object.assign(n.style, v);
      } else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if (typeof v === "boolean") { if (v) n.setAttribute(k, ""); }
      else n.setAttribute(k, v);
    }
    for (const ch of children.flat()) {
      if (ch == null) continue;
      n.append(ch instanceof Node ? ch : document.createTextNode(String(ch)));
    }
    return n;
  }
  const byId = (id) => document.getElementById(id);
  const typesetWithin = (node) => {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([node]).catch(()=>{});
    }
  };
  const debounce = (fn, ms=120) => {
    let t = 0;
    return (...args)=>{ clearTimeout(t); t = setTimeout(()=>fn(...args), ms); };
  };

  // ---- Access to the quiz's bank ----
  function getBank() {
    if (window.quizAPI && typeof window.quizAPI.getBank === "function") {
      return window.quizAPI.getBank();
    }
    const merged = [];
    if (Array.isArray(window.__QUIZ_SETS__)) window.__QUIZ_SETS__.forEach((a) => merged.push(...a));
    return merged.map((q) => ({
      category: q.category,
      question: q.question,
      choices: [...q.choices],
      correctIndices: Array.isArray(q.correctIndices)
        ? [...q.correctIndices]
        : Number.isInteger(q.correctIndex) ? [q.correctIndex] : [],
      points: typeof q.points === "number" ? q.points : 10,
      explanation: q.explanation || "",
    }));
  }
  function setBank(newBank) {
    if (window.quizAPI && typeof window.quizAPI.setBank === "function") {
      window.quizAPI.setBank(newBank);
    } else {
      console.warn("quizAPI.setBank not found — changes will not reflect in quiz until page reload with exported file.");
    }
  }

  // ---- Inject “Manage Questions” button on start screen ----
  const screenStart = byId("screenStart");
  if (!screenStart) return;

  const controlsRow = screenStart.querySelector(".flex.right") || el("div", { class: "flex right" });
  const manageBtn = el("button", { class: "btn secondary", type: "button" }, "Manage Questions");
  controlsRow.insertBefore(manageBtn, controlsRow.firstChild);
  if (!controlsRow.parentNode) screenStart.appendChild(controlsRow);

  // ---- Styles ----
  document.head.appendChild(el("style", { html: `
  .qe-modal { position: fixed; inset: 0; background: rgba(0,0,0,.35); display:flex; align-items:center; justify-content:center; z-index: 9999; }
  .qe-card  { width:min(1100px,95vw); max-height:90vh; overflow:auto; background:#111; color:#eee; border-radius:14px; box-shadow:0 10px 30px rgba(0,0,0,.5); }
  .qe-head  { padding:14px 16px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #333; position: sticky; top:0; background:#111; z-index:1; }
  .qe-body  { padding:12px 16px; }
  .qe-row   { display:grid; grid-template-columns: 1fr auto; gap:10px; align-items:center; }
  .qe-list  { width:100%; border-collapse:collapse; }
  .qe-list th, .qe-list td { border-bottom:1px solid #2a2a2a; padding:8px; vertical-align:top; }
  .qe-list tr:hover { background:#161616; }
  .qe-actions button { margin-right:6px; }
  .qe-bad   { display:inline-block; padding:.1rem .4rem; border-radius:.4rem; background:#222; font-size:.8rem; }
  .qe-form  { display:grid; grid-template-columns: 1fr; gap:10px; }
  .qe-flex  { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
  .qe-choices .row { display:grid; grid-template-columns: 1.5rem 1fr auto; gap:6px; align-items:center; }
  .qe-choices input[type="text"]{ width:100%; }
  .qe-foot  { display:flex; justify-content:space-between; padding:12px 16px; border-top:1px solid #333; position: sticky; bottom:0; background:#111; }
  .qe-muted { color:#aaa; font-size:.9rem; }
  .btn.smol { font-size:.85rem; padding:.3rem .5rem; }
  .btn.warn { background:#8b1a1a; }
  .btn.edit { background:#69f0ae; }
  .btn.secondary  { background:#1a1a24; color:#fff; border:2px solid #2a2a34 }
  .qe-code  { background:#0b0b0b; border:1px solid #222; border-radius:8px; padding:.2rem .4rem; display:inline-block; }
  .qe-block { background:#0b0b0b; border:1px solid #222; border-radius:8px; padding:.5rem .7rem; margin:.35rem 0; overflow:auto; }
  ul.qe-ul { margin:.35rem 0 .2rem 1.2rem; }

  /* Full-width inputs / textareas */
  .qe-form input[type="text"],
  .qe-form input[type="number"],
  .qe-form textarea { width: 100%; box-sizing: border-box; }

  /* Toolbar with persistent search */
  .qe-toolbar { display:grid; grid-template-columns: 1fr auto auto; gap:10px; align-items:center; margin:0 0 8px 0; }
  .qe-search { display:flex; align-items:center; gap:6px; }
  .qe-search input[type="search"]{ width:100%; max-width:440px; padding:.45rem .6rem; border-radius:8px; border:1px solid #2a2a2a; background:#0c0c0f; color:#eee; }
  .qe-stat { color:#aaa; font-size:.9rem; }
  `}));

  // ---- Modal builder ----
  function openEditor() {
    const modal = el("div", { class: "qe-modal" });
    const card  = el("div", { class: "qe-card" });
    modal.appendChild(card);

    // State
    let bank = getBank();
    let filter = "";            // category filter
    let query  = "";            // search query
    let editingIndex = null;    // null=list; number=editing; 'new'=adding

    // Header
    const qeCountSpan = el("span", { class: "qe-bad" }, `${bank.length} items`);
    const title   = el("h3", { html: "Question Bank" });
    const head    = el("div", { class: "qe-head" },
      el("div", { class: "qe-flex" }, title, qeCountSpan),
      (()=> {
        const importBtn = el("button", { class: "btn ghost smol", type: "button" }, "Import");
        const exportBtn = el("button", { class: "btn secondary smol", type: "button" }, "Export questions.js");
        const addBtn    = el("button", { class: "btn primary smol", type: "button" }, "Add New");
        const closeBtn  = el("button", { class: "btn smol", type: "button" }, "Close");
        importBtn.onclick = handleImport;
        exportBtn.onclick = doExport;
        addBtn.onclick    = () => openForm("new");
        closeBtn.onclick  = () => modal.remove();
        return el("div", { class: "qe-flex" }, addBtn, exportBtn, importBtn, closeBtn);
      })()
    );

    // Body containers
    const body     = el("div", { class: "qe-body" });
    const listWrap = el("div");
    const formWrap = el("div", { style: { display: "none" } });

    // Footer
    const saveAllBtn = el("button", { class: "btn secondary smol", type: "button" }, "Save to quiz");
    const discardBtn = el("button", { class: "btn ghost smol", type: "button" }, "Discard changes");
    saveAllBtn.onclick = saveToQuiz;
    discardBtn.onclick = () => { if (confirm("Discard all unsaved edits and reload from the quiz?")) { bank = getBank(); syncCount(); renderTable(); refreshCatOptions(); } };
    const foot = el("div", { class: "qe-foot" },
      el("div", { class: "qe-muted" }, "Tip: duplicate before editing if you want to branch a question."),
      el("div", { class: "qe-flex" }, saveAllBtn, discardBtn)
    );

    card.append(head, body);
    body.append(listWrap, formWrap);
    card.appendChild(foot);

    // ---- Toolbar (persistent) ----
    const catSel = el("select", { id: "qeCatSel", "aria-label":"Filter category" });
    const searchInput = el("input", {
      type: "search",
      placeholder: "Search in category, question, choices, explanation…",
      value: "",
      autocomplete: "off",
      "aria-label": "Search"
    });
    searchInput.addEventListener("input", debounce(()=> { query = searchInput.value; renderTable(); }, 60));

    const statEl = el("div", { class: "qe-stat" }, "—");

    const toolbar = el("div", { class: "qe-toolbar" },
      el("div", {},
        el("div", { class: "qe-flex" },
          el("label", { class: "qe-muted", style:"min-width:110px" }, "Filter category:"),
          catSel
        )
      ),
      el("div", { class: "qe-search" }, searchInput),
      statEl
    );

    // ---- AI helper (instructions + prompt) ----
    const aiHelper = el("details", { class: "qe-muted", open:false, style:"margin:6px 0 10px 0" },
      el("summary", {}, "How to create more questions with AI (click to expand)"),
      (() => {
        const box = el("div", { class: "qe-block" });
        box.innerHTML = `
          <div><b>File format required by this quiz</b></div>
          <div class="qe-block"><code>window.questions = [
  {
    "category": "Spectroscopy",
    "question": "Which bond gives a strong IR band near $1700\\,\\mathrm{cm^{-1}}$?",
    "choices": ["C=O", "O–H", "C–H", "N–H"],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Carbonyl stretches are typically around $1700\\,\\mathrm{cm^{-1}}$."
  }
];</code></div>
          <ul class="qe-ul">
            <li><b>category</b>: string • <b>question</b>: string (TeX allowed via MathJax)</li>
            <li><b>choices</b>: array of strings • <b>correctIndices</b>: array of 0-based indices</li>
            <li><b>points</b> (optional, default 10) • <b>explanation</b> (optional)</li>
            <li>Only one global array: <code>window.questions = [ ... ]</code> (no categories wrapper).</li>
          </ul>

          <div style="margin:.4rem 0 .2rem"><b>Copy-paste prompt you can give to an AI</b></div>
          <div class="qe-block"><code>
You are generating multiple-choice quiz data for a web quiz that uses MathJax and expects a single JS file that begins with:
window.questions = [ ... ];

Rules:
- Each item is an object with keys:
  category (string), question (string), choices (array of strings),
  correctIndices (array of 0-based integers), points (number, often 10),
  explanation (string, optional).
- Render math using TeX: use $...$ for inline; $$...$$ for display.
- No trailing commas. Return ONLY valid JavaScript beginning with:
window.questions = [
  ...objects...
];
- Do NOT wrap in a function or export; no module syntax.

Now generate N questions about &lt;TOPIC(S)&gt; across categories &lt;CATS&gt;.
Aim for clear stems, plausible distractors, and include brief explanations.
          </code></div>

          <div><b>Mini example (2 items)</b></div>
          <div class="qe-block"><code>window.questions = [
  {
    "category": "IR",
    "question": "Approximate wavenumber of a carbonyl stretch?",
    "choices": ["$\\sim$ 1700 cm$^{-1}$", "1100 cm$^{-1}$", "3000 cm$^{-1}$", "2200 cm$^{-1}$"],
    "correctIndices": [0],
    "points": 10,
    "explanation": "C=O typically around $1700\\,\\mathrm{cm^{-1}}$."
  },
  {
    "category": "Beer–Lambert",
    "question": "Given $A=\\varepsilon l c$, which variable is path length?",
    "choices": ["$A$", "$\\varepsilon$", "$l$", "$c$"],
    "correctIndices": [2],
    "points": 10
  }
];</code></div>
          <div class="qe-muted">Tip: For literal dollar signs in text, write <code>\\$</code>.</div>
        `;
        return box;
      })()
    );

    // ---- Table (persistent head; re-render body only) ----
    const tbl = el("table", { class: "qe-list" });
    const thead = el("thead", {},
      el("tr", {},
        el("th", {}, "#"),
        el("th", {}, "Category"),
        el("th", {}, "Question"),
        el("th", {}, "Choices"),
        el("th", {}, "Correct"),
        el("th", {}, "Pts"),
        el("th", {}, "Actions")
      )
    );
    const tbody = el("tbody");
    tbl.append(thead, tbody);

    // Mount persistent UI once
    listWrap.append(toolbar, aiHelper, tbl);

    // Populate category options; keep selection if possible
    function refreshCatOptions() {
      const cats = [...new Set(bank.map((q) => q.category))].sort();
      const prev = catSel.value;
      catSel.innerHTML = "";
      catSel.appendChild(el("option", { value: "" }, "All categories"));
      cats.forEach((c) => catSel.appendChild(el("option", { value: c }, c)));
      catSel.value = cats.includes(prev) ? prev : "";
      filter = catSel.value;
    }
    catSel.onchange = ()=> { filter = catSel.value; renderTable(); };

    // Render table body + stats only (does not touch the toolbar; search keeps focus)
    function renderTable() {
      editingIndex = null;
      formWrap.style.display = "none";
      listWrap.style.display = "";

      const qLower = (query || "").trim().toLowerCase();
      const rows = bank
        .map((q, i) => ({ q, i }))
        .filter(({ q }) => !filter || q.category === filter)
        .filter(({ q }) => {
          if (!qLower) return true;
          const hay = [
            q.category || "",
            q.question || "",
            (q.choices || []).join(" "),
            q.explanation || ""
          ].join(" ").toLowerCase();
          return hay.includes(qLower);
        });

      // Stats
      const shownPts = rows.reduce((s, {q}) => s + (q.points || 10), 0);
      statEl.textContent = `${rows.length}/${bank.length} shown`;

      // Body
      tbody.innerHTML = "";
      rows.forEach(({ q, i }) => {
        const corr = Array.isArray(q.correctIndices) ? q.correctIndices : [];
        const tr = el("tr", {},
          el("td", {}, String(i + 1)),
          el("td", {}, q.category),
          el("td", {}, (q.question || "").slice(0, 140) + ((q.question || "").length > 140 ? "…" : "")),
          el("td", {}, String(q.choices?.length || 0)),
          el("td", {}, corr.join(", ")),
          el("td", {}, String(q.points ?? 10)),
          el("td", { class: "qe-actions" },
            (() => {
              const wrap = el("div", { class: "qe-flex" });
              const bEdit = el("button", { class: "btn smol edit", type: "button" }, "Edit");
              const bDup  = el("button", { class: "btn smol", type: "button" }, "Duplicate");
              const bDel  = el("button", { class: "btn smol warn", type: "button" }, "Delete");
              bEdit.onclick = () => openForm(i);
              bDup.onclick  = () => { bank.splice(i + 1, 0, JSON.parse(JSON.stringify(q))); syncCount(); renderTable(); refreshCatOptions(); };
              bDel.onclick  = () => {
                if (confirm("Delete this question?")) {
                  bank.splice(i, 1);
                  syncCount();
                  renderTable();
                  refreshCatOptions();
                }
              };
              wrap.append(bEdit, bDup, bDel);
              return wrap;
            })()
          )
        );
        tbody.appendChild(tr);
      });
    }

    function syncCount() { qeCountSpan.textContent = `${bank.length} items`; }

    // ---- Add/Edit form ----
    function openForm(indexOrNew) {
      const editingNew = indexOrNew === "new";
      editingIndex = editingNew ? null : indexOrNew;
      const model = editingNew
        ? { category: "", question: "", choices: ["", "", "", ""], correctIndices: [], points: 10, explanation: "" }
        : JSON.parse(JSON.stringify(bank[editingIndex]));

      listWrap.style.display = "none";
      formWrap.style.display = "";
      formWrap.innerHTML = "";

      const form = el("div", { class: "qe-form" });

      const catInp = el("input", { type: "text", value: model.category, placeholder: "Category" });
      const ptsInp = el("input", { type: "number", step: "1", min: "0", value: model.points ?? 10 });
      const qTxt   = el("textarea", { rows: "6", placeholder: "Question text (supports inline math via MathJax)" });
      qTxt.value   = model.question || "";

      // Math help
      const mathHelp = el("details", { class: "qe-muted", open:true, style:"margin:4px 0 8px 0" },
        el("summary", {}, "Math formatting quick guide (TeX & MathML)"),
        (() => {
          const box = el("div", { class: "qe-block" });
          box.innerHTML = `
            <div><b>Inline vs Display</b></div>
            <ul class="qe-ul">
              <li>Inline TeX: <code>$E = kT$</code> → $E = kT$.</li>
              <li>Display TeX: <code>$$V(r)=4\\varepsilon[(\\sigma/r)^{12}-(\\sigma/r)^6]$$</code><br>
                  $$V(r)=4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12}-\\left(\\frac{\\sigma}{r}\\right)^6\\right]$$
              </li>
              <li>MathML works too: <code>&lt;math&gt;...&lt;/math&gt;</code>.</li>
            </ul>
            <div><b>Common TeX blocks</b></div>
            <ul class="qe-ul">
              <li>Fractions/indices: <code>\\frac{a}{b}</code>, <code>x_i</code>, <code>x_{i,j}</code></li>
              <li>Powers/roots: <code>r^{-6}</code>, <code>\\sqrt{x}</code>, <code>\\sqrt[n]{x}</code></li>
              <li>Sums/integrals: <code>\\sum_{i=1}^n i^2</code>, <code>\\int_0^{\\infty} e^{-x}\\,dx</code></li>
              <li>Greek/symbols: <code>\\alpha,\\beta,\\mu,\\varepsilon,\\Delta,\\approx,\\propto</code></li>
              <li>Auto-sizing: <code>\\left(\\frac{a}{b}\\right)</code>; Units: <code>\\mathrm{cm^{-1}}</code>, thin space <code>\\,</code></li>
              <li>Literal dollar: write <code>\\$</code> (“Cost is \\$20”).</li>
            </ul>
          `;
          return box;
        })()
      );

      // Choices builder
      const choiceWrap = el("div", { class: "qe-choices" });
      function rebuildChoices() {
        choiceWrap.innerHTML = "";
        (model.choices || []).forEach((txt, idx) => {
          const row = el("div", { class: "row" },
            el("input", {
              type: "checkbox",
              checked: model.correctIndices.includes(idx),
              title: "Correct?",
              onchange: (e) => {
                const i = idx;
                const set = new Set(model.correctIndices);
                if (e.target.checked) set.add(i); else set.delete(i);
                model.correctIndices = [...set].sort((a,b)=>a-b);
              }
            }),
            el("input", {
              type: "text",
              value: txt,
              placeholder: `Choice ${idx + 1}`,
              oninput: (e) => { model.choices[idx] = e.target.value; }
            }),
            el("div", { class: "qe-flex" },
              el("button", {
                class: "btn smol", type: "button",
                onclick: () => { model.choices.splice(idx+1,0,""); model.correctIndices = model.correctIndices.map(ci => ci>idx? ci+1:ci); rebuildChoices(); }
              }, "+"),
              el("button", {
                class: "btn smol", type: "button",
                onclick: () => {
                  if (model.choices.length<=1) return;
                  const wasCorrect = model.correctIndices.includes(idx);
                  model.choices.splice(idx,1);
                  model.correctIndices = model.correctIndices
                    .filter(ci => ci!==idx)
                    .map(ci => ci>idx? ci-1 : ci);
                  if (wasCorrect && model.correctIndices.length===0 && model.choices.length>0) model.correctIndices=[0];
                  rebuildChoices();
                }
              }, "–")
            )
          );
          choiceWrap.appendChild(row);
        });
      }
      if (!Array.isArray(model.choices) || model.choices.length===0) model.choices = ["",""];
      rebuildChoices();

      const expTxt = el("textarea", { rows: "4", placeholder: "Explanation (optional)" });
      expTxt.value = model.explanation || "";

      function saveForm() {
        model.category = catInp.value.trim();
        model.question = qTxt.value.trim();
        model.points   = Number(ptsInp.value)||0;
        model.explanation = expTxt.value;
        model.choices = (model.choices||[]).map(s => String(s||'').trim());
        model.choices = model.choices.filter((s,i,arr)=> s!=='' || i < arr.length-1);
        model.correctIndices = Array.from(new Set(
          (model.correctIndices||[]).filter(i => Number.isInteger(i) && i>=0 && i<model.choices.length)
        )).sort((a,b)=>a-b);

        if (!model.category || !model.question) { alert('Category and Question are required.'); return; }
        if (!Array.isArray(model.choices) || model.choices.length<2) { alert('Please provide at least 2 choices.'); return; }
        if (model.correctIndices.length===0) { alert('Select at least one correct choice.'); return; }

        if (editingNew) bank.push(model); else bank[editingIndex] = model;
        syncCount();
        refreshCatOptions();
        renderTable();
      }

      const btns = el("div", { class: "qe-flex" },
        el("button", { class: "btn primary", type: "button", onclick: saveForm }, "Save"),
        el("button", { class: "btn ghost",   type: "button", onclick: ()=>{ renderTable(); } }, "Cancel")
      );

      form.append(
        el("div", { class: "qe-row" },
          el("div", {}, el("label", { class: "qe-muted" }, "Category"), catInp),
          el("div", {}, el("label", { class: "qe-muted" }, "Points"),   ptsInp)
        ),
        el("div", {}, el("label", { class: "qe-muted" }, "Question"), qTxt, mathHelp),
        el("div", {}, el("label", { class: "qe-muted" }, "Choices (check the correct ones)"), choiceWrap),
        el("div", {}, el("label", { class: "qe-muted" }, "Explanation (optional)"), expTxt),
        btns
      );
      formWrap.appendChild(form);
      typesetWithin(formWrap);
    }

    // ------- Robust Import helpers -------
    function stripBOM(s){ return s.replace(/^\uFEFF/, ""); }
    function tryParseJSONLike(txt){
      try {
        const j = JSON.parse(txt);
        if (Array.isArray(j)) return j;
        if (j && Array.isArray(j.questions)) return j.questions;
      } catch {}
      return null;
    }
    function parseArrayLoose(lit){
      try { const j = JSON.parse(lit); if (Array.isArray(j)) return j; } catch {}
      try { const out = Function('"use strict";return (' + lit + ')')(); if (Array.isArray(out)) return out; } catch {}
      return null;
    }
    function tryRegexExtract(txt){
      let m = txt.match(/window\s*\.\s*questions\s*=\s*(\[[\s\S]*?\])\s*;?/);
      if (m) { const arr = parseArrayLoose(m[1]); if (arr) return arr; }
      m = txt.match(/window\s*\.\s*questions[^;\n]*?concat\s*\(\s*(\[[\s\S]*?\])\s*\)/);
      if (m) { const arr = parseArrayLoose(m[1]); if (arr) return arr; }
      m = txt.match(/window\s*\.\s*questions2[^;\n]*?concat\s*\(\s*(\[[\s\S]*?\])\s*\)/);
      if (m) { const arr = parseArrayLoose(m[1]); if (arr) return arr; }
      return null;
    }
    function trySandboxEval(txt){
      try {
        const fn = new Function(`
          "use strict";
          const sandbox = { window: {} };
          (function(window){ ${txt} })(sandbox.window);
          return sandbox.window.questions || sandbox.window.questions2 || null;
        `);
        const out = fn();
        if (Array.isArray(out)) return out;
      } catch {}
      return null;
    }
    function parseQuestionsFromText(raw){
      const txt = stripBOM(String(raw));
      let arr = tryParseJSONLike(txt); if (arr) return arr;
      arr = tryRegexExtract(txt);     if (arr) return arr;
      arr = trySandboxEval(txt);       if (arr) return arr;
      throw new Error("Could not parse file. Expected a JSON array, {questions:[...]}, or a JS file that sets window.questions / window.questions2.");
    }

    // Import
    function normalizeArray(arr) {
      return arr.map((q) => ({
        category: String(q.category || ""),
        question: String(q.question || ""),
        choices: Array.isArray(q.choices) ? q.choices.map(String) : [],
        correctIndices: Array.isArray(q.correctIndices)
          ? q.correctIndices.slice()
          : Number.isInteger(q.correctIndex) ? [q.correctIndex] : [],
        points: typeof q.points === "number" ? q.points : 10,
        explanation: q.explanation || "",
      }));
    }
    function handleImport() {
      const inp = el("input", { type: "file", accept: ".json,.js" });
      inp.onchange = async () => {
        const f = inp.files?.[0]; if (!f) return;
        const txt = await f.text();
        let arr = null;
        try { arr = parseQuestionsFromText(txt); }
        catch (e) {
          console.error(e);
          alert("Could not parse file. Expected a JSON array, {questions:[...]}, or a file that defines window.questions / window.questions2.\n\nFirst 200 chars:\n" + String(txt).slice(0,200));
          return;
        }
        const normalized = normalizeArray(arr);
        if (confirm("Replace current bank with imported questions?\n(Click Cancel to MERGE instead.)")) bank = normalized;
        else bank.push(...normalized);
        syncCount();
        renderTable();
        refreshCatOptions();
      };
      inp.click();
    }

    // Export
    function doExport() {
      const payload = bank.map((q) => ({
        category: q.category,
        question: q.question,
        choices: q.choices,
        correctIndices: q.correctIndices,
        points: q.points,
        explanation: q.explanation,
      }));
      const js = "window.questions = " + JSON.stringify(payload, null, 2) + ";\n";
      const blob = new Blob([js], { type: "application/javascript" });
      const url = URL.createObjectURL(blob);
      const a = el("a", { href: url, download: "questions.js" });
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 0);
    }

    // Save to quiz (persist, close modal, return to start screen)
    function saveToQuiz() {
      if (!(window.quizAPI && typeof window.quizAPI.setBank === "function")) {
        alert("Your quiz script doesn't expose a setter. Export to questions.js and include it on the page to apply changes.");
        return;
      }
      setBank(bank);
      try {
        if (typeof window.renderCategories === "function") window.renderCategories();
        if (typeof window.syncAvailableUI === "function") window.syncAvailableUI({ keepCustom: true });
        if (typeof window.updateCatChip === "function") window.updateCatChip();
        const sStart  = byId("screenStart");
        const sQuiz   = byId("screenQuiz");
        const sResult = byId("screenResult");
        if (sQuiz)   sQuiz.classList.add("hidden");
        if (sResult) sResult.classList.add("hidden");
        if (sStart)  sStart.classList.remove("hidden");
      } catch {}
      modal.remove();
      setTimeout(()=> alert("Saved! Your updated question bank is now live. Pick categories and press Start."), 0);
    }

    // Initialize view
    refreshCatOptions();
    renderTable();
    document.body.appendChild(modal);
    typesetWithin(modal);
  }

  manageBtn.addEventListener("click", openEditor);

  // ---- Optional bridge for quizzes that didn’t expose quizAPI ----
  if (!window.quizAPI) {
    try {
      if (window.allQuestions && Array.isArray(window.allQuestions)) {
        window.quizAPI = {
          getBank: () =>
            window.allQuestions.map((q) => ({
              category: q.category,
              question: q.question,
              choices: [...q.choices],
              correctIndices: [
                ...(q.correctIndices || (Number.isInteger(q.correctIndex) ? [q.correctIndex] : [])),
              ],
              points: q.points ?? 10,
              explanation: q.explanation || "",
            })),
          setBank: (arr) => {
            window.allQuestions = arr.map((q) => ({
              category: q.category,
              question: q.question,
              choices: [...q.choices],
              correctIndices: [...q.correctIndices],
              points: q.points ?? 10,
              explanation: q.explanation || "",
            }));
            if (typeof window.renderCategories === "function") window.renderCategories();
            if (typeof window.syncAvailableUI === "function") window.syncAvailableUI({ keepCustom:true });
          },
        };
      }
    } catch {}
  }
})();
