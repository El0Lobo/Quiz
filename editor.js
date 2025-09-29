/* editor.js — in-page question editor + exporter
   - Injects a “Manage Questions” button on the start screen
   - Add/Edit/Delete/Duplicate questions
   - Export to questions.js (single array: window.questions = [ ... ])
   - Import .json or .js (replace or merge); robust parsing (concat, comments, BOM)
*/

(function () {
  // ---- Utilities ----
  function el(tag, attrs = {}, ...children) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class" || k === "className") {
        n.className = v;
      } else if (k === "style") {
        if (typeof v === "string") n.setAttribute("style", v);
        else if (v && typeof v === "object") Object.assign(n.style, v);
      } else if (k === "html") {
        n.innerHTML = v;
      } else if (k.startsWith("on") && typeof v === "function") {
        n.addEventListener(k.slice(2), v);
      } else if (typeof v === "boolean") {
        if (v) n.setAttribute(k, "");
      } else {
        n.setAttribute(k, v);
      }
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

  // Access to the quiz's bank
  function getBank() {
    if (window.quizAPI && typeof window.quizAPI.getBank === "function") {
      return window.quizAPI.getBank();
    }
    // Fallback: merge inline sets
    const merged = [];
    if (Array.isArray(window.__QUIZ_SETS__)) window.__QUIZ_SETS__.forEach((a) => merged.push(...a));
    return merged.map((q) => ({
      category: q.category,
      question: q.question,
      choices: [...q.choices],
      correctIndices: Array.isArray(q.correctIndices)
        ? [...q.correctIndices]
        : Number.isInteger(q.correctIndex)
        ? [q.correctIndex]
        : [],
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

  // ---- Styles for modal ----
  const style = el("style", {
    html: `
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
  .btn.secondary  {background:#1a1a24; color: #ffffffff; border:2px solid #2a2a34}
  .qe-code  { background:#0b0b0b; border:1px solid #222; border-radius:8px; padding:.2rem .4rem; display:inline-block; }
  .qe-block { background:#0b0b0b; border:1px solid #222; border-radius:8px; padding:.5rem .7rem; margin:.35rem 0; overflow:auto; }
  ul.qe-ul { margin:.35rem 0 .2rem 1.2rem; }
  `,
  });
  document.head.appendChild(style);

  // ---- Modal builder ----
  function openEditor() {
    const modal = el("div", { class: "qe-modal" });
    const card = el("div", { class: "qe-card" });
    modal.appendChild(card);

    // State
    let bank = getBank();
    let filter = "";
    let editingIndex = null; // null = list; number = editing that index; 'new' = adding

    // Header
    const qeCountSpan = el("span", { class: "qe-bad", id: "qeCount" }, `${bank.length} items`);
    const title = el("h3", { html: "Question Bank" });
    const headLeft = el("div", { class: "qe-flex" }, title, qeCountSpan);
    const importBtn = el("button", { class: "btn ghost smol", type: "button" }, "Import");
    const exportBtn = el("button", { class: "btn secondary smol", type: "button" }, "Export questions.js");
    const addBtn    = el("button", { class: "btn primary smol", type: "button" }, "Add New");
    const closeBtn  = el("button", { class: "btn smol", type: "button" }, "Close");
    const head = el("div", { class: "qe-head" },
      headLeft,
      el("div", { class: "qe-flex" }, addBtn, exportBtn, importBtn, closeBtn)
    );

    // Body containers
    const body = el("div", { class: "qe-body" });
    const listWrap = el("div");
    const formWrap = el("div", { style: { display: "none" } });

    // Footer (bind directly to the nodes; no getElementById timing issues)
    const leftHint   = el("div", { class: "qe-muted" }, "Tip: duplicate before editing if you want to branch a question.");
    const saveAllBtn = el("button", { class: "btn secondary smol", type: "button" }, "Save to quiz");
    const discardBtn = el("button", { class: "btn ghost smol", type: "button" }, "Discard changes");
    const rightBtns  = el("div", { class: "qe-flex" }, saveAllBtn, discardBtn);
    const foot       = el("div", { class: "qe-foot" }, leftHint, rightBtns);

    card.append(head, body);
    body.append(listWrap, formWrap);
    card.appendChild(foot);

    // Filter + list
    function renderList() {
      editingIndex = null;
      formWrap.style.display = "none";
      listWrap.style.display = "";
      const cats = [...new Set(bank.map((q) => q.category))].sort();

      const filterBar = el("div", { class: "qe-row", style: { margin: "0 0 8px 0" } },
        el("div", {},
          el("div", { class: "qe-flex" },
            el("label", { class: "qe-muted" }, "Filter category:"),
            (() => {
              const sel = el("select", { id: "qeCatSel" });
              sel.appendChild(el("option", { value: "" }, "All categories"));
              cats.forEach((c) => sel.appendChild(el("option", { value: c }, c)));
              sel.value = filter;
              sel.onchange = () => { filter = sel.value; renderList(); };
              return sel;
            })()
          )
        ),
        el("div", { class: "qe-flex qe-muted" }, "Total points: ", String(bank.reduce((s, q) => s + (q.points || 10), 0)))
      );

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
      bank
        .map((q, i) => ({ q, i }))
        .filter((o) => !filter || o.q.category === filter)
        .forEach(({ q, i }) => {
          const corr = Array.isArray(q.correctIndices) ? q.correctIndices : [];
          const tr = el("tr", {},
            el("td", {}, String(i + 1)),
            el("td", {}, q.category),
            el("td", {}, (q.question || "").slice(0, 120) + ((q.question || "").length > 120 ? "…" : "")),
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
                bDup.onclick  = () => { bank.splice(i + 1, 0, JSON.parse(JSON.stringify(q))); syncCount(); renderList(); };
                bDel.onclick  = () => {
                  if (confirm("Delete this question?")) {
                    bank.splice(i, 1);
                    syncCount();
                    renderList();
                  }
                };
                wrap.append(bEdit, bDup, bDel);
                return wrap;
              })()
            )
          );
          tbody.appendChild(tr);
        });

      tbl.append(thead, tbody);
      listWrap.innerHTML = "";
      listWrap.append(filterBar, tbl);
    }

    function syncCount() {
      qeCountSpan.textContent = `${bank.length} items`;
    }

    // Add/Edit form
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
      const qTxt   = el("textarea", { rows: "4", placeholder: "Question text (supports inline math via MathJax)" });
      qTxt.value = model.question || "";

      // ***** Math help — examples & pitfalls *****
      const mathHelp = el(
        "details",
        { class: "qe-muted", open: true, style: "margin:4px 0 8px 0" },
        el("summary", {}, "Math formatting quick guide (TeX & MathML)"),
        (() => {
          const box = el("div", { class: "qe-block" });
          box.innerHTML = `
            <div><b>Inline vs Display</b></div>
            <ul class="qe-ul">
              <li>Inline TeX: <code>$E = kT$</code> renders → $E = kT$.</li>
              <li>Display TeX: <code>$$V(r)=4\\varepsilon[(\\sigma/r)^{12}-(\\sigma/r)^6]$$</code> renders as:<br>
                  $$V(r)=4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12}-\\left(\\frac{\\sigma}{r}\\right)^6\\right]$$
              </li>
              <li>MathML also works: <code>&lt;math&gt;...&lt;/math&gt;</code>.</li>
            </ul>

            <div><b>Common TeX building blocks</b></div>
            <ul class="qe-ul">
              <li>Fractions/indices: <code>\\frac{a}{b}</code>, <code>x_i</code>, <code>x_{i,j}</code> → $\\frac{a}{b}$, $x_i$, $x_{i,j}$</li>
              <li>Powers/roots: <code>r^{-6}</code>, <code>\\sqrt{x}</code>, <code>\\sqrt[n]{x}</code> → $r^{-6}$, $\\sqrt{x}$, $\\sqrt[n]{x}$</li>
              <li>Sums/integrals: <code>\\sum_{i=1}^n i^2</code>, <code>\\int_0^{\\infty} e^{-x}\\,dx</code></li>
              <li>Greek/symbols: <code>\\alpha,\\beta,\\mu,\\varepsilon,\\Delta,\\approx,\\propto</code></li>
              <li>Auto-sizing: <code>\\left(\\frac{a}{b}\\right)</code></li>
              <li>Units: <code>\\mathrm{cm^{-1}}</code>, thin space <code>\\,</code> → $100\\,\\mathrm{cm^{-1}}$</li>
            </ul>

            <div><b>Aligned display (amsmath)</b></div>
            <div class="qe-block"><code>$$
\\begin{aligned}
A &= \\varepsilon l c\\\\
\\tilde\\nu &= \\frac{1}{2\\pi c}\\sqrt{\\frac{k}{\\mu}}
\\end{aligned}
$$</code></div>

            <div><b>Literal dollar signs & gotchas</b></div>
            <ul class="qe-ul">
              <li>Literal <code>$</code> → <code>\\$</code>: “Cost is \\$20”.</li>
              <li>Group with braces: <code>x_{12}</code>, <code>\\frac{1}{2}</code>.</li>
              <li>Prefer TeX subscripts to HTML when inside math.</li>
            </ul>

            <div><b>Pasteable snippets</b></div>
            <div class="qe-block"><code>The molar absorptivity has units $\\mathrm{L\\,mol^{-1}\\,cm^{-1}}$.</code></div>
            <div class="qe-block"><code>Beer\\text{–}Lambert: $A=\\varepsilon l c$; carbonyl near $\\tilde\\nu\\approx 1700\\,\\mathrm{cm^{-1}}$.</code></div>

            <div class="qe-muted">Inline: <code>$...$</code> or <code>\\(...\\)</code>; Display: <code>$$...$$</code> or <code>\\[...\\]</code>. MathML: <code>&lt;math&gt;...&lt;/math&gt;</code>.</div>
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
                const arr = new Set(model.correctIndices);
                if (e.target.checked) arr.add(i); else arr.delete(i);
                model.correctIndices = [...arr].sort((a, b) => a - b);
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
                onclick: () => { model.choices.splice(idx + 1, 0, ""); model.correctIndices = model.correctIndices.map((ci) => ci > idx ? ci + 1 : ci); rebuildChoices(); }
              }, "+"),
              el("button", {
                class: "btn smol", type: "button",
                onclick: () => {
                  if (model.choices.length <= 1) return;
                  const wasCorrect = model.correctIndices.includes(idx);
                  model.choices.splice(idx, 1);
                  model.correctIndices = model.correctIndices
                    .filter((ci) => ci !== idx)
                    .map((ci) => (ci > idx ? ci - 1 : ci));
                  if (wasCorrect && model.correctIndices.length === 0 && model.choices.length > 0) {
                    model.correctIndices = [0];
                  }
                  rebuildChoices();
                }
              }, "–")
            )
          );
          choiceWrap.appendChild(row);
        });
      }
      if (!Array.isArray(model.choices) || model.choices.length === 0) model.choices = ["", ""];
      rebuildChoices();

      const expTxt = el("textarea", { rows: "3", placeholder: "Explanation (optional)" });
      expTxt.value = model.explanation || "";

      function saveForm() {
        // Validation
        model.category = catInp.value.trim();
        model.question = qTxt.value.trim();
        model.points = Number(ptsInp.value) || 0;
        model.explanation = expTxt.value;
        model.choices = (model.choices || []).map((s) => String(s || "").trim());
        // Remove empty trailing choices
        model.choices = model.choices.filter((s, i, arr) => s !== "" || i < arr.length - 1);
        if (model.category === "" || model.question === "") { alert("Category and Question are required."); return; }
        if (!Array.isArray(model.choices) || model.choices.length < 2) { alert("Please provide at least 2 choices."); return; }
        // Ensure at least one correct index and all within bounds
        model.correctIndices = Array.from(new Set(model.correctIndices.filter((i) => Number.isInteger(i) && i >= 0 && i < model.choices.length))).sort((a, b) => a - b);
        if (model.correctIndices.length === 0) { alert("Select at least one correct choice."); return; }

        if (editingNew) bank.push(model); else bank[editingIndex] = model;
        syncCount();
        renderList();
      }

      // Buttons
      const btns = el("div", { class: "qe-flex" },
        el("button", { class: "btn primary", type: "button", onclick: saveForm }, "Save"),
        el("button",  { class: "btn ghost",   type: "button", onclick: () => { renderList(); } }, "Cancel")
      );

      // Layout
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

      // Typeset examples inside the help
      typesetWithin(formWrap);
    }

    // ------- Robust import helpers -------
    function stripBOM(s){ return s.replace(/^\uFEFF/, ""); }

    function tryParseJSONLike(txt){
      try {
        const j = JSON.parse(txt);
        if (Array.isArray(j)) return j;
        if (j && Array.isArray(j.questions)) return j.questions;
      } catch {}
      return null;
    }

    // Parse an array literal permissively (JSON first, then JS array literal)
    function parseArrayLoose(lit){
      try { const j = JSON.parse(lit); if (Array.isArray(j)) return j; } catch {}
      try {
        // Allow comments/trailing commas in the literal
        // eslint-disable-next-line no-new-func
        const out = Function('"use strict";return (' + lit + ')')();
        if (Array.isArray(out)) return out;
      } catch {}
      return null;
    }

    function tryRegexExtract(txt){
      // window.questions = [ ... ];
      let m = txt.match(/window\s*\.\s*questions\s*=\s*(\[[\s\S]*?\])\s*;?/);
      if (m) { const arr = parseArrayLoose(m[1]); if (arr) return arr; }

      // (window.questions || []).concat([ ... ])
      m = txt.match(/window\s*\.\s*questions[^;\n]*?concat\s*\(\s*(\[[\s\S]*?\])\s*\)/);
      if (m) { const arr = parseArrayLoose(m[1]); if (arr) return arr; }

      // window.questions2 = ...concat([ ... ])
      m = txt.match(/window\s*\.\s*questions2[^;\n]*?concat\s*\(\s*(\[[\s\S]*?\])\s*\)/);
      if (m) { const arr = parseArrayLoose(m[1]); if (arr) return arr; }

      return null;
    }

    function trySandboxEval(txt){
      // Evaluate inside an isolated scope so top-level "window" in the file points to our dummy, not the real window.
      try {
        // eslint-disable-next-line no-new-func
        const fn = new Function(`
          "use strict";
          const sandbox = { window: {} };
          (function(window){ 
            ${txt}
          })(sandbox.window);
          return sandbox.window.questions || sandbox.window.questions2 || null;
        `);
        const out = fn();
        if (Array.isArray(out)) return out;
      } catch (e) {
        // swallow; we'll report a friendly error later
      }
      return null;
    }

    function parseQuestionsFromText(raw){
      const txt = stripBOM(String(raw));

      // 1) Plain JSON or {questions:[...]}
      let arr = tryParseJSONLike(txt);
      if (arr) return arr;

      // 2) Regex extract the array literal after common wrappers
      arr = tryRegexExtract(txt);
      if (arr) return arr;

      // 3) Safe sandboxed evaluation to handle arbitrary “building” of window.questions
      arr = trySandboxEval(txt);
      if (arr) return arr;

      throw new Error("Could not parse file. Expected a JSON array, {questions:[...]}, or a JS file that sets window.questions / window.questions2.");
    }

    // Import (.json or .js with window.questions = [ ... ])
    function normalizeArray(arr) {
      return arr.map((q) => ({
        category: String(q.category || ""),
        question: String(q.question || ""),
        choices: Array.isArray(q.choices) ? q.choices.map(String) : [],
        correctIndices: Array.isArray(q.correctIndices)
          ? q.correctIndices.slice()
          : Number.isInteger(q.correctIndex)
          ? [q.correctIndex]
          : [],
        points: typeof q.points === "number" ? q.points : 10,
        explanation: q.explanation || "",
      }));
    }

    function handleImport() {
      const inp = el("input", { type: "file", accept: ".json,.js" });
      inp.onchange = async () => {
        const f = inp.files?.[0];
        if (!f) return;
        const txt = await f.text();
        let arr = null;
        try {
          arr = parseQuestionsFromText(txt);
        } catch (e) {
          console.error(e);
          alert("Could not parse file. Expected a JSON array, {questions:[...]}, or a file that defines window.questions / window.questions2.\n\nFirst 200 chars:\n" + String(txt).slice(0,200));
          return;
        }
        const normalized = normalizeArray(arr);
        if (confirm("Replace current bank with imported questions?\n(Click Cancel to MERGE instead.)")) {
          bank = normalized;
        } else {
          bank.push(...normalized);
        }
        syncCount();
        renderList();
      };
      inp.click();
    }

    // Export (single array -> window.questions = [ ... ])
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

    // Save to quiz (push edits into running quiz)
    // Save to quiz (push edits, close modal, go back to start screen)
function saveToQuiz() {
  if (!(window.quizAPI && typeof window.quizAPI.setBank === "function")) {
    alert("Your quiz script doesn't expose a setter. Export to questions.js and include it on the page to apply changes.");
    return;
  }

  // 1) Persist into the running quiz
  setBank(bank);

  // 2) Refresh the quiz UI and force the Start screen to be visible
  try {
    if (typeof window.renderCategories === "function") window.renderCategories();
    if (typeof window.syncAvailableUI === "function") window.syncAvailableUI({ keepCustom: true });
    if (typeof window.updateCatChip === "function") window.updateCatChip();

    const sStart  = document.getElementById("screenStart");
    const sQuiz   = document.getElementById("screenQuiz");
    const sResult = document.getElementById("screenResult");
    if (sQuiz)   sQuiz.classList.add("hidden");
    if (sResult) sResult.classList.add("hidden");
    if (sStart)  sStart.classList.remove("hidden");
  } catch (e) {
    console.debug("UI refresh after save skipped:", e);
  }

  // 3) Close the editor modal
  modal.remove();

  // 4) Optional little confirmation
  setTimeout(() => {
    alert("Saved! Your updated question bank is now live. Pick categories and press Start.");
  }, 0);
}


    // Discard (reload from quiz)
    function discard() {
      if (!confirm("Discard all unsaved edits and reload from the quiz?")) return;
      bank = getBank();
      syncCount();
      renderList();
    }

    // Wire-up (bind to nodes directly; no byId lookups)
    addBtn.onclick     = () => openForm("new");
    exportBtn.onclick  = doExport;
    importBtn.onclick  = handleImport;
    closeBtn.onclick   = () => modal.remove();
    saveAllBtn.onclick = saveToQuiz;
    discardBtn.onclick = discard;

    renderList();
    document.body.appendChild(modal);

    // Typeset any math inside the modal (e.g., in the help)
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
                ...(q.correctIndices ||
                  (Number.isInteger(q.correctIndex) ? [q.correctIndex] : [])),
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
    } catch { /* ignore */ }
  }
})();
