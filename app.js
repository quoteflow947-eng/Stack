/* Stack — application logic v2.1. Defensive rendering + fixed navigation. */

// ============================================================
//  GLOBAL ERROR HANDLER — logs everything so you can debug
// ============================================================
window.addEventListener("error", (event) => {
  console.error("[Stack] Uncaught error:", event.error || event.message);
});

// ============================================================
//  CONSTANTS
// ============================================================
const STORAGE_KEY = "stack:progress";
const THEME_KEY = "stack:theme";
const TRACKER_KEY = "stack:tracker_v5";
const EXAMS_KEY = "stack:exams_v1";

const CPUT_MODULES = [
  { name: "Communication", code: "CMM157S" },
  { name: "Retailing 1", code: "RET150S" },
  { name: "Retail Operations Management 1", code: "ROM150S" },
  { name: "Retail Financial Management 1", code: "RFM150S" },
  { name: "Business Computer Applications", code: "BCA157S" }
];

const QUICK_START_QUESTIONS = [
  "What is the difference between feasibility and viability?",
  "How do I calculate break-even?",
  "What are the 4 Ps of marketing?",
  "Difference between leadership and management",
  "Explain Maslow's hierarchy of needs",
  "How do I calculate VAT inclusive/exclusive?"
];

// ============================================================
//  STATE
// ============================================================
let currentChapter = null;
let currentTab = "notes";
let quizState = null;
let trackerData = [];
let activeModuleId = null;
let chatHistory = [];
let currentExam = null;
let currentExamQuestionIndex = 0;
let examTimerHandle = null;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================================
//  STORAGE
// ============================================================
function migrateStorage() {
  const pairs = [["brainstack:progress", STORAGE_KEY], ["brainstack:theme", THEME_KEY], ["brainstack:tracker_v5", TRACKER_KEY]];
  pairs.forEach(([oldK, newK]) => {
    if (!localStorage.getItem(newK)) {
      const old = localStorage.getItem(oldK);
      if (old !== null) localStorage.setItem(newK, old);
    }
  });
}

function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }

function getTrackerData() {
  try { return JSON.parse(localStorage.getItem(TRACKER_KEY)) || []; } catch { return []; }
}
function saveTrackerData(d) { localStorage.setItem(TRACKER_KEY, JSON.stringify(d)); }

function getExamsData() {
  try { return JSON.parse(localStorage.getItem(EXAMS_KEY)) || {}; } catch { return {}; }
}
function saveExamsData(d) { localStorage.setItem(EXAMS_KEY, JSON.stringify(d)); }

function getExamState(paperId) {
  const all = getExamsData();
  return all[paperId] || null;
}
function saveExamState(paperId, state) {
  const all = getExamsData();
  all[paperId] = state;
  saveExamsData(all);
}

// ============================================================
//  HELPERS
// ============================================================
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function showToast(msg, ms = 3000) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { t.hidden = true; }, ms);
}
function formatTime(seconds) {
  if (seconds == null) return "--:--";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function isEmptyAnswer(a) {
  if (a == null) return true;
  if (typeof a === "string") return !a.trim();
  if (typeof a === "object") return Object.values(a).every(v => v == null || v === "");
  return false;
}

// ============================================================
//  THEME
// ============================================================
function applyTheme() {
  const theme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.classList.toggle("dark", theme === "dark");
}

// ============================================================
//  MARKDOWN
// ============================================================
function mdToHtml(md) {
  const lines = md.trim().split("\n");
  const out = [];
  let inList = false, listType = null, inTable = false, tableRows = [];
  function inline(t) {
    return escapeHtml(t)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }
  function closeList() { if (inList) { out.push(`</${listType}>`); inList = false; listType = null; } }
  function flushTable() {
    if (!inTable) return;
    const cells = (r) => r.split("|").slice(1, -1).map(c => c.trim());
    const [header, ...rows] = tableRows;
    const ths = cells(header).map(c => `<th>${inline(c)}</th>`).join("");
    const trs = rows.filter(r => !/^\|[\s\-|:]+\|$/.test(r)).map(r => `<tr>${cells(r).map(c => `<td>${inline(c)}</td>`).join("")}</tr>`).join("");
    out.push(`<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`);
    inTable = false; tableRows = [];
  }
  for (const line of lines) {
    const t = line.trim();
    if (!t) { closeList(); flushTable(); continue; }
    if (t.startsWith("|")) { tableRows.push(t); inTable = true; continue; }
    flushTable();
    if (t.startsWith("### ")) { closeList(); out.push(`<h3>${inline(t.slice(4))}</h3>`); }
    else if (t.startsWith("## ")) { closeList(); out.push(`<h2>${inline(t.slice(3))}</h2>`); }
    else if (t.startsWith("# ")) { closeList(); out.push(`<h1>${inline(t.slice(2))}</h1>`); }
    else if (t.startsWith("> ")) { closeList(); out.push(`<blockquote>${inline(t.slice(2))}</blockquote>`); }
    else if (/^- /.test(t)) {
      if (!inList || listType !== "ul") { closeList(); out.push("<ul>"); inList = true; listType = "ul"; }
      out.push(`<li>${inline(t.slice(2))}</li>`);
    } else if (/^\d+\. /.test(t)) {
      if (!inList || listType !== "ol") { closeList(); out.push("<ol>"); inList = true; listType = "ol"; }
      out.push(`<li>${inline(t.replace(/^\d+\.\s+/, ""))}</li>`);
    } else { closeList(); out.push(`<p>${inline(t)}</p>`); }
  }
  closeList(); flushTable();
  return out.join("\n");
}

// ============================================================
//  SIDEBAR
// ============================================================
function renderSidebar() {
  const list = $("#chapterList");
  if (!list) return;
  const progress = getProgress();
  const modules = [...new Set(CHAPTERS.map(c => c.module))];
  let html = "";
  modules.forEach(mod => {
    html += `<div class="nav-heading">${escapeHtml(mod)}</div>`;
    const modChapters = CHAPTERS.filter(c => c.module === mod);
    html += modChapters.map(ch => {
      const p = progress[ch.id];
      const done = p && p.best >= Math.ceil(p.total * 0.8);
      const label = p ? `${p.best}/${p.total}` : "—";
      return `<a href="#chapter/${ch.id}" class="nav-item chapter-link" data-chapter="${ch.id}">
        <span>${escapeHtml(ch.number)}. ${escapeHtml(ch.title)}</span>
        <span class="chapter-badge ${done ? 'done' : ''}">${label}</span>
      </a>`;
    }).join("");
  });
  list.innerHTML = html;
}

// ============================================================
//  HOME
// ============================================================
function renderHome() {
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="home"]')?.classList.add("active");

  const modules = [...new Set(CHAPTERS.map(c => c.module))];
  const examsData = getExamsData();
  const inProgress = Object.entries(examsData).find(([id, st]) => st.status === "in_progress");
  const recent = Object.entries(examsData)
    .filter(([id, st]) => st.status === "submitted")
    .sort((a, b) => (b[1].submittedAt || 0) - (a[1].submittedAt || 0))
    .slice(0, 3);

  let html = `
    <div class="dashboard-header">
      <h1>Your Study Dashboard</h1>
      <p>Read the notes. Take the quiz. Sit a full exam. Ask Stack AI.</p>
    </div>
    ${inProgress ? renderContinueExamCard(inProgress) : ""}
    <div class="features-grid">
      <div class="feature-card"><div class="feature-icon">📚</div><h4>All-in-One Notes</h4><p>5 complete modules, structured clearly.</p></div>
      <div class="feature-card"><div class="feature-icon">⚡</div><h4>Offline Ready</h4><p>Works on the bus, no data needed.</p></div>
      <div class="feature-card"><div class="feature-icon">✍️</div><h4>Full Exams</h4><p>Two complete 100-mark papers per module.</p></div>
      <div class="feature-card"><div class="feature-icon">🎯</div><h4>Auto-Marked</h4><p>Instant feedback with rubric-level detail.</p></div>
      <div class="feature-card"><div class="feature-icon">📊</div><h4>Mark Tracker</h4><p>Every exam score flows into your tracker.</p></div>
    </div>
    ${recent.length ? `
    <div class="recent-marks">
      <h3>Recent exam results</h3>
      ${recent.map(([id, st]) => {
        const paper = (typeof findExamPaper === "function") ? findExamPaper(id) : null;
        if (!paper) return "";
        return `<div class="recent-mark-row">
          <div>
            <div class="rm-module">${escapeHtml(paper.module)}</div>
            <div class="rm-name">${escapeHtml(paper.name)}</div>
          </div>
          <div class="rm-score">${Math.round(st.bestScore || st.score || 0)} / 100</div>
          <a href="#exam/${id}" class="btn btn-text">Review</a>
        </div>`;
      }).join("")}
    </div>` : ""}
  `;

  modules.forEach(mod => {
    const modChapters = CHAPTERS.filter(c => c.module === mod);
    html += `<div class="module-section"><div class="module-title">${escapeHtml(mod)}</div><div class="card-grid">`;
    html += modChapters.map(ch => {
      const p = getProgress()[ch.id];
      const pct = p ? Math.round((p.best / p.total) * 100) : 0;
      return `<div class="card" data-chapter="${ch.id}">
        <div class="card-top"><span class="chapter-num">${escapeHtml(ch.number)}</span></div>
        <h3>${escapeHtml(ch.title)}</h3>
        <p>${escapeHtml(ch.summary)}</p>
        <div class="card-progress-wrap"><div class="card-progress-label"><span>Quiz progress</span><span>${pct}%</span></div>
        <div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div></div>
      </div>`;
    }).join("");
    html += `</div></div>`;
  });

  $("#main").innerHTML = html;
  $$(".card").forEach(c => c.addEventListener("click", () => { location.hash = `#chapter/${c.dataset.chapter}`; }));
}

function renderContinueExamCard([paperId, state]) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  if (!paper) return "";
  const answered = Object.values(state.answers || {}).filter(a => a && !isEmptyAnswer(a)).length;
  return `<div class="continue-exam-card">
    <div>
      <div class="continue-eyebrow">Resume exam</div>
      <div class="continue-title">${escapeHtml(paper.module)} · ${escapeHtml(paper.name)}</div>
      <div class="continue-sub">In progress · ${answered} of ${paper.questions.length} answered</div>
    </div>
    <a href="#exam/${paperId}" class="btn btn-primary">Continue →</a>
  </div>`;
}

// ============================================================
//  CHAPTER
// ============================================================
function renderChapter(id) {
  const ch = CHAPTERS.find(c => c.id === id);
  if (!ch) { location.hash = "#home"; return; }
  currentChapter = ch;
  currentTab = "notes";
  quizState = null;
  chatHistory = [];

  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $(`.nav-item[data-chapter="${id}"]`)?.classList.add("active");

  $("#main").innerHTML = `
    <div class="chapter-header">
      <div class="eyebrow">${escapeHtml(ch.module)}</div>
      <h1>${escapeHtml(ch.number)}. ${escapeHtml(ch.title)}</h1>
      <p>${escapeHtml(ch.summary)}</p>
    </div>
    <div class="tabs">
      <button class="tab active" data-tab="notes">Notes</button>
      <button class="tab" data-tab="quiz">Quiz</button>
    </div>
    <div id="chapterBody"></div>
  `;
  $$(".tab").forEach(t => t.addEventListener("click", () => {
    currentTab = t.dataset.tab;
    $$(".tab").forEach(x => x.classList.toggle("active", x === t));
    renderTab();
  }));
  renderTab();
}

function renderTab() {
  const ch = currentChapter;
  if (!ch) return;
  const body = $("#chapterBody");
  if (!body) return;
  if (currentTab === "notes") body.innerHTML = `<div class="content">${mdToHtml(ch.notes)}</div>`;
  else if (currentTab === "quiz") renderQuiz(ch);
}

// ============================================================
//  QUIZ
// ============================================================
function renderQuiz(ch) {
  if (!quizState) {
    quizState = { index: 0, answers: new Array(ch.quiz.length).fill(undefined), questions: shuffle(ch.quiz), done: false, reviewing: false };
  }
  const body = $("#chapterBody");
  if (!body) return;
  const total = quizState.questions.length;

  if (quizState.reviewing) {
    let reviewHtml = `<h2>Review Answers</h2>`;
    quizState.questions.forEach((q, i) => {
      const userAns = quizState.answers[i];
      const isCorrect = userAns === q.answer;
      reviewHtml += `<div class="review-item">
        <div class="q-text">${i+1}. ${escapeHtml(q.q)}</div>
        <div class="a-row ${isCorrect ? 'correct' : 'wrong'}">Your answer: ${String.fromCharCode(65 + userAns)}. ${escapeHtml(q.options[userAns])} ${isCorrect ? '✓' : '✗'}</div>
        ${!isCorrect ? `<div class="a-row correct">Correct: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}</div>` : ''}
        <div class="quiz-explain"><strong>Why:</strong> ${escapeHtml(q.explain)}</div>
      </div>`;
    });
    body.innerHTML = reviewHtml + `<div class="quiz-actions" style="justify-content:center;margin-top:32px"><button class="btn btn-primary" id="retryBtn">Retake Quiz</button><button class="btn" id="backToScoreBtn">Back to Score</button></div>`;
    $("#retryBtn").addEventListener("click", () => { quizState = null; renderQuiz(ch); });
    $("#backToScoreBtn").addEventListener("click", () => { quizState.reviewing = false; renderQuiz(ch); });
    return;
  }
  if (quizState.done) {
    const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
    const pct = Math.round((score / total) * 100);
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good — review the wrong answers." : "Re-read the notes and try again.";
    body.innerHTML = `<div class="score-card"><div class="score-big">${score}/${total}</div><div class="score-label">${pct}% correct</div><div class="score-msg">${msg}</div><div class="quiz-actions" style="justify-content:center;margin-top:32px"><button class="btn btn-primary" id="reviewBtn">Review Answers</button><button class="btn" id="retryBtn">Retake Quiz</button></div></div>`;
    $("#reviewBtn").addEventListener("click", () => { quizState.reviewing = true; renderQuiz(ch); });
    $("#retryBtn").addEventListener("click", () => { quizState = null; renderQuiz(ch); });
    return;
  }
  const q = quizState.questions[quizState.index];
  const selected = quizState.answers[quizState.index];
  const pct = Math.round((quizState.index / total) * 100);
  const optionsHtml = q.options.map((opt, i) => `<button class="quiz-option ${selected === i ? 'selected' : ''}" data-idx="${i}"><span class="letter">${String.fromCharCode(65 + i)}</span><span>${escapeHtml(opt)}</span></button>`).join("");
  body.innerHTML = `
    <div class="quiz-progress-wrap"><div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div></div>
    <div class="quiz-question"><div class="q-num">Question ${quizState.index + 1} of ${total}</div><div class="q-text">${escapeHtml(q.q)}</div><div class="quiz-options">${optionsHtml}</div></div>
    <div class="quiz-actions"><button class="btn btn-primary" id="nextBtn" ${selected === undefined ? 'disabled' : ''}>${quizState.index === total - 1 ? "Finish Quiz" : "Next Question"}</button></div>
  `;
  $$(".quiz-option").forEach(btn => btn.addEventListener("click", () => { quizState.answers[quizState.index] = Number(btn.dataset.idx); renderQuiz(ch); }));
  $("#nextBtn").addEventListener("click", () => {
    if (quizState.index === total - 1) {
      quizState.done = true;
      const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
      const p = getProgress();
      const prev = p[ch.id] || { best: 0, attempts: 0 };
      p[ch.id] = { best: Math.max(prev.best, score), total, attempts: prev.attempts + 1 };
      saveProgress(p);
      renderSidebar();
    } else quizState.index++;
    renderQuiz(ch);
  });
}

// ============================================================
//  EXAM CENTRE  ← the fixed function
// ============================================================
function renderExamCentre() {
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");

  // DEFENSIVE CHECK — if exams.js didn't load, show a clear message
  if (typeof EXAM_PAPERS === "undefined" || !Array.isArray(EXAM_PAPERS) || EXAM_PAPERS.length === 0) {
    $("#main").innerHTML = `<div class="empty">
      <h2>⚠️ Exam data not loaded</h2>
      <p>The file <code>exams.js</code> was not found or did not load correctly.</p>
      <p>Check the following:</p>
      <ul style="text-align:left;display:inline-block;margin-top:12px;line-height:1.9">
        <li><code>exams.js</code> exists in the same folder as <code>index.html</code></li>
        <li><code>index.html</code> contains <code>&lt;script src="exams.js"&gt;&lt;/script&gt;</code></li>
        <li>Open DevTools (F12) → Console to see the actual error</li>
      </ul>
    </div>`;
    return;
  }

  const examsData = getExamsData();
  const modules = [...new Set(EXAM_PAPERS.map(p => p.module))];

  let html = `
    <div class="dashboard-header">
      <h1>Exam Centre</h1>
      <p>Each module has <strong>two complete 100-mark exams</strong>. Sit them one at a time, auto-marked.</p>
    </div>
  `;

  modules.forEach(mod => {
    const papers = EXAM_PAPERS.filter(p => p.module === mod);
    html += `<div class="exam-module-section">
      <div class="exam-module-title">${escapeHtml(mod)}</div>
      <div class="exam-grid">
        ${papers.map(paper => renderExamCard(paper, examsData[paper.id])).join("")}
      </div>
    </div>`;
  });

  $("#main").innerHTML = html;
  $$(".exam-card .exam-action-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const paperId = btn.dataset.paper;
      const st = examsData[paperId];
      if (!st || st.status === "not_started") {
        location.hash = `#exam-instructions/${paperId}`;
      } else {
        location.hash = `#exam/${paperId}`;
      }
    });
  });
}

function renderExamCard(paper, state) {
  const st = state?.status || "not_started";
  const score = state?.bestScore ?? state?.score ?? null;
  let statusBadge, actionLabel;
  if (st === "not_started") { statusBadge = `<span class="status-pill status-not-started">Not started</span>`; actionLabel = "Start exam"; }
  else if (st === "in_progress") { statusBadge = `<span class="status-pill status-progress">In progress</span>`; actionLabel = "Continue"; }
  else { statusBadge = `<span class="status-pill status-done">${Math.round(score)}/100</span>`; actionLabel = "Review / Retake"; }

  return `<div class="exam-card">
    <div class="exam-card-head">
      <div class="exam-card-name">${escapeHtml(paper.name)}</div>
      ${statusBadge}
    </div>
    <div class="exam-card-meta">${paper.questions.length} questions · ${paper.duration} min · 100 marks</div>
    <div class="exam-card-actions">
      <button class="btn btn-primary exam-action-btn" data-paper="${paper.id}">${actionLabel}</button>
    </div>
  </div>`;
}

// ============================================================
//  EXAM INSTRUCTIONS
// ============================================================
function renderExamInstructions(paperId) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  if (!paper) { location.hash = "#exams"; return; }

  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");

  const sections = {};
  paper.questions.forEach(q => {
    if (!sections[q.section]) sections[q.section] = { title: q.sectionTitle, count: 0, marks: 0 };
    sections[q.section].count++;
    sections[q.section].marks += q.marks || 0;
  });

  const existing = getExamState(paperId);
  const resumeNote = existing && existing.status === "in_progress" ? `<div class="notice">You have an in-progress attempt. Starting fresh will replace your saved answers.</div>` : "";

  $("#main").innerHTML = `
    <div class="exam-instructions">
      <div class="exam-back"><a href="#exams">← Exam Centre</a></div>
      <h1>${escapeHtml(paper.module)}</h1>
      <h2 class="exam-instructions-name">${escapeHtml(paper.name)}</h2>
      <div class="exam-instructions-stats">
        <div><span class="label">Duration</span><span class="value">${paper.duration} minutes (optional)</span></div>
        <div><span class="label">Total marks</span><span class="value">100</span></div>
        <div><span class="label">Questions</span><span class="value">${paper.questions.length}</span></div>
      </div>
      <div class="section-summary">
        <h3>Sections</h3>
        ${Object.entries(sections).map(([key, s]) => `
          <div class="section-summary-row">
            <span><strong>Section ${key}</strong> — ${escapeHtml(s.title)}</span>
            <span>${s.count} question${s.count !== 1 ? 's' : ''} · ${s.marks} marks</span>
          </div>
        `).join("")}
      </div>
      <div class="exam-rules">
        <h3>Instructions</h3>
        <ul>
          <li>Questions are shown <strong>one at a time</strong>. You can go back and change answers.</li>
          <li>You can <strong>skip</strong> a question and return to it later.</li>
          <li>Your answers <strong>auto-save</strong> — safe to close the app and continue later.</li>
          <li>Model answers are shown <strong>after you submit</strong> (first attempt only).</li>
          <li>Your mark is saved to the Mark Tracker automatically.</li>
          ${existing && existing.attempts > 0 ? `<li>You have already attempted this paper ${existing.attempts} time(s). Model answers will not be shown on retakes.</li>` : ""}
        </ul>
      </div>
      ${resumeNote}
      <div class="exam-start-buttons">
        <button class="btn btn-primary btn-lg" id="startTimed">Start with timer (${paper.duration} min)</button>
        <button class="btn btn-lg" id="startUntimed">Start without timer</button>
      </div>
    </div>
  `;

  $("#startTimed").addEventListener("click", () => startExam(paperId, true));
  $("#startUntimed").addEventListener("click", () => startExam(paperId, false));
}

function startExam(paperId, timed) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  if (!paper) return;
  const existing = getExamState(paperId);
  const attempts = existing?.attempts || 0;
  const state = {
    paperId,
    status: "in_progress",
    answers: existing?.answers || {},
    currentIndex: 0,
    timed,
    timeLeft: timed ? paper.duration * 60 : null,
    startedAt: Date.now(),
    attempts,
    showingModel: attempts === 0
  };
  saveExamState(paperId, state);
  location.hash = `#exam/${paperId}`;
}

// ============================================================
//  EXAM TAKING
// ============================================================
function renderExam(paperId) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  const state = getExamState(paperId);
  if (!paper || !state) { location.hash = "#exams"; return; }
  if (state.status === "submitted") { renderExamResults(paperId); return; }

  currentChapter = null;
  currentExam = paper;
  currentExamQuestionIndex = state.currentIndex || 0;

  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");

  renderExamView(paperId);
  if (state.timed && state.timeLeft > 0) startExamTimer(paperId);
}

function startExamTimer(paperId) {
  if (examTimerHandle) clearInterval(examTimerHandle);
  examTimerHandle = setInterval(() => {
    const state = getExamState(paperId);
    if (!state || state.status !== "in_progress") { clearInterval(examTimerHandle); return; }
    state.timeLeft = Math.max(0, (state.timeLeft || 0) - 1);
    saveExamState(paperId, state);
    const el = $("#examTimerText");
    if (el) el.textContent = formatTime(state.timeLeft);
    if (state.timeLeft <= 0) {
      clearInterval(examTimerHandle);
      showToast("Time is up — submitting exam.");
      submitExam(paperId);
    }
  }, 1000);
}

function pauseExamTimer() {
  if (examTimerHandle) { clearInterval(examTimerHandle); examTimerHandle = null; }
}

function renderExamView(paperId) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  const state = getExamState(paperId);
  if (!paper || !state) return;
  const q = paper.questions[state.currentIndex];
  const total = paper.questions.length;

  const dotNav = paper.questions.map((qq, i) => {
    const ans = state.answers[i];
    const answered = ans != null && !isEmptyAnswer(ans);
    const cls = i === state.currentIndex ? "dot active" : answered ? "dot answered" : "dot";
    return `<button class="${cls}" data-jump="${i}" title="Question ${i+1}"></button>`;
  }).join("");

  const questionBody = renderQuestionBody(q, state.answers[state.currentIndex], paperId);

  $("#main").innerHTML = `
    <div class="exam-top-bar">
      <a href="#exams" class="exam-exit" id="exitExam">✕ Exit</a>
      <div class="exam-title">${escapeHtml(paper.module)} · ${escapeHtml(paper.name)}</div>
      <div class="exam-timer" ${state.timed ? "" : "hidden"}>
        <span class="timer-icon">⏱</span><span id="examTimerText">${formatTime(state.timeLeft)}</span>
      </div>
    </div>
    <div class="exam-dot-nav">${dotNav}</div>
    <div class="exam-progress-bar"><div class="exam-progress-fill" style="width:${((state.currentIndex+1)/total)*100}%"></div></div>
    <div class="exam-question-card">
      <div class="exam-q-head">
        <span class="exam-q-section">Section ${q.section} · ${escapeHtml(q.sectionTitle)}</span>
        <span class="exam-q-marks">${q.marks} marks</span>
      </div>
      <div class="exam-q-prompt">${escapeHtml(q.prompt).replace(/\n/g, '<br>')}</div>
      <div class="exam-q-body">${questionBody}</div>
    </div>
    <div class="exam-nav">
      <button class="btn" id="prevQ" ${state.currentIndex === 0 ? "disabled" : ""}>← Previous</button>
      <button class="btn" id="skipQ">Skip</button>
      ${state.currentIndex === total - 1
        ? `<button class="btn btn-primary" id="submitQ">Finish & Submit</button>`
        : `<button class="btn btn-primary" id="nextQ">Next →</button>`}
    </div>
  `;

  $("#prevQ")?.addEventListener("click", () => { state.currentIndex = Math.max(0, state.currentIndex - 1); saveExamState(paperId, state); renderExamView(paperId); });
  $("#nextQ")?.addEventListener("click", () => { state.currentIndex = Math.min(total - 1, state.currentIndex + 1); saveExamState(paperId, state); renderExamView(paperId); });
  $("#skipQ")?.addEventListener("click", () => { state.currentIndex = Math.min(total - 1, state.currentIndex + 1); saveExamState(paperId, state); renderExamView(paperId); });
  $("#submitQ")?.addEventListener("click", () => confirmAndSubmit(paperId));
  $("#exitExam")?.addEventListener("click", (e) => { e.preventDefault(); if (confirm("Exit exam? Your answers are saved.")) { pauseExamTimer(); location.hash = "#exams"; } });
  $$(".dot").forEach(b => b.addEventListener("click", () => { state.currentIndex = Number(b.dataset.jump); saveExamState(paperId, state); renderExamView(paperId); }));

  wireQuestionInputs(paperId, q, state);
}

function renderQuestionBody(q, answer) {
  if (q.type === "mcq") {
    return q.options.map((opt, i) => `
      <button class="exam-mcq-option ${answer === i ? "selected" : ""}" data-mcq="${i}">
        <span class="mcq-letter">${String.fromCharCode(65 + i)}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `).join("");
  }
  if (q.type === "short" || q.type === "essay") {
    const val = typeof answer === "string" ? answer : "";
    const rows = q.type === "essay" ? 14 : 6;
    return `<textarea class="exam-textarea" rows="${rows}" placeholder="Type your answer here…">${escapeHtml(val)}</textarea>
      <div class="exam-wordcount"><span id="wordCount">${val ? val.trim().split(/\s+/).length : 0}</span> words</div>`;
  }
  if (q.type === "table") {
    const ans = typeof answer === "object" && answer ? answer : {};
    return `<div class="exam-table-desc">${escapeHtml(q.description || "")}</div>
      <div class="exam-table-wrap">
        <table class="exam-table">
          <thead><tr>${q.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("")}</tr></thead>
          <tbody>
            ${q.rows.map((row, ri) => `<tr>
              ${row.cells.map((cell, ci) => {
                const key = `${ri}_${ci}`;
                if (cell.locked) return `<td class="locked">${cell.value}</td>`;
                if (cell.options) {
                  const val = ans[key] || "";
                  return `<td><select data-table="${key}"><option value="">—</option>${cell.options.map(o => `<option value="${o}" ${val === o ? "selected" : ""}>${o}</option>`).join("")}</select></td>`;
                }
                return `<td><input type="number" step="any" data-table="${key}" value="${ans[key] || ""}" placeholder="?"></td>`;
              }).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>`;
  }
  return "";
}

function wireQuestionInputs(paperId, q, state) {
  if (q.type === "mcq") {
    $$(".exam-mcq-option").forEach(btn => btn.addEventListener("click", () => {
      state.answers[state.currentIndex] = Number(btn.dataset.mcq);
      saveExamState(paperId, state);
      renderExamView(paperId);
    }));
  } else if (q.type === "short" || q.type === "essay") {
    const ta = $(".exam-textarea");
    if (ta) {
      ta.addEventListener("input", () => {
        state.answers[state.currentIndex] = ta.value;
        saveExamState(paperId, state);
        const wc = $("#wordCount");
        if (wc) wc.textContent = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      });
    }
  } else if (q.type === "table") {
    $$("[data-table]").forEach(input => {
      input.addEventListener("change", () => {
        const key = input.dataset.table;
        if (!state.answers[state.currentIndex]) state.answers[state.currentIndex] = {};
        state.answers[state.currentIndex][key] = input.value;
        saveExamState(paperId, state);
      });
    });
  }
}

function confirmAndSubmit(paperId) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  const state = getExamState(paperId);
  if (!paper || !state) return;
  const unanswered = paper.questions.filter((q, i) => isEmptyAnswer(state.answers[i])).length;
  const msg = unanswered > 0
    ? `You have ${unanswered} unanswered question${unanswered !== 1 ? "s" : ""}. Submit anyway?`
    : "Submit your exam?";
  if (confirm(msg)) submitExam(paperId);
}

// ============================================================
//  SUBMIT & GRADE
// ============================================================
function submitExam(paperId) {
  pauseExamTimer();
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  const state = getExamState(paperId);
  if (!paper || !state) return;

  const graded = gradeExam(paper, state.answers);
  state.status = "submitted";
  state.score = graded.total;
  state.bestScore = Math.max(state.bestScore || 0, graded.total);
  state.submittedAt = Date.now();
  state.graded = graded;
  state.attempts = (state.attempts || 0) + 1;
  state.showingModel = state.attempts === 1;
  saveExamState(paperId, state);

  syncExamToTracker(paperId, graded.total);
  location.hash = `#exam/${paperId}`;
  renderExamResults(paperId);
}

function gradeExam(paper, answers) {
  let total = 0;
  const perQuestion = paper.questions.map((q, i) => {
    const ans = answers[i];
    const result = gradeQuestion(q, ans);
    total += result.score;
    return { question: q, answer: ans, result };
  });
  return { total: Math.round(total * 2) / 2, perQuestion };
}

function gradeQuestion(q, answer) {
  if (q.type === "mcq") {
    const correct = answer === q.answer;
    return { score: correct ? q.marks : 0, maxMarks: q.marks, criteria: [{ label: "Correct option", hit: correct, marks: q.marks, awarded: correct ? q.marks : 0 }] };
  }
  if (q.type === "short" || q.type === "essay") {
    const text = typeof answer === "string" ? answer : "";
    let score = 0;
    const criteria = (q.rubric || []).map(c => {
      const groupsHit = c.groups.filter(group => group.some(concept => textContainsConcept(text, concept))).length;
      const ratio = c.groups.length ? groupsHit / c.groups.length : 0;
      const awarded = Math.round(c.marks * ratio * 2) / 2;
      score += awarded;
      return { label: c.label, hit: groupsHit > 0, groupsHit, totalGroups: c.groups.length, marks: c.marks, awarded };
    });
    return { score: Math.round(score * 2) / 2, maxMarks: q.marks, criteria };
  }
  if (q.type === "table") {
    const ans = typeof answer === "object" && answer ? answer : {};
    let score = 0;
    const criteria = [];
    q.rows.forEach((row, ri) => {
      row.cells.forEach((cell, ci) => {
        if (cell.locked) return;
        const key = `${ri}_${ci}`;
        const studentVal = ans[key];
        const correct = checkTableCell(cell, studentVal);
        const awarded = correct ? (cell.marks || 0) : 0;
        score += awarded;
        criteria.push({ label: `Row ${ri+1}`, expected: cell.expected ?? cell.options?.[0], studentVal, hit: correct, marks: cell.marks || 0, awarded });
      });
    });
    return { score: Math.round(score * 2) / 2, maxMarks: q.marks, criteria };
  }
  return { score: 0, maxMarks: q.marks || 0, criteria: [] };
}

function checkTableCell(cell, studentVal) {
  if (studentVal == null || studentVal === "") return false;
  if (cell.options) return String(studentVal).toLowerCase() === String(cell.expected).toLowerCase();
  const num = parseFloat(studentVal);
  if (isNaN(num)) return false;
  return Math.abs(num - cell.expected) <= (cell.tolerance || 0);
}

// ============================================================
//  TEXT MATCHING
// ============================================================
const STOP_MATCH = new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","it","this","that","be","by","as","at","if","so"]);
const MATCH_SUFFIXES = [[/ies$/, "y"], [/sses$/, "ss"], [/ing$/, ""], [/ed$/, ""], [/ly$/, ""], [/s$/, ""]];

function stemMatch(w) {
  if (w.length < 4) return w;
  for (const [re, rep] of MATCH_SUFFIXES) if (re.test(w)) return w.replace(re, rep);
  return w;
}
function normalizeText(t) {
  return String(t || "").toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}
function textContainsConcept(text, concept) {
  const normText = normalizeText(text);
  const normConcept = normalizeText(concept);
  if (!normConcept) return false;
  if (normText.includes(normConcept)) return true;
  const conceptWords = normConcept.split(" ").filter(w => w.length > 2);
  if (!conceptWords.length) return normText.includes(normConcept);
  const textWords = normText.split(" ");
  const textStems = textWords.map(stemMatch);
  return conceptWords.every(cw => {
    const cs = stemMatch(cw);
    return textStems.some(ts => ts === cs || ts.includes(cs) || cs.includes(ts));
  });
}

// ============================================================
//  RESULTS
// ============================================================
function renderExamResults(paperId) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  const state = getExamState(paperId);
  if (!paper || !state || !state.graded) { location.hash = "#exams"; return; }

  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");

  const g = state.graded;
  const pct = Math.round((g.total / 100) * 100);
  const grade = gradeFromScore(g.total);
  const sectionScores = {};
  g.perQuestion.forEach(pq => {
    const s = pq.question.section;
    if (!sectionScores[s]) sectionScores[s] = { name: pq.question.sectionTitle, got: 0, max: 0 };
    sectionScores[s].got += pq.result.score;
    sectionScores[s].max += pq.question.marks;
  });

  $("#main").innerHTML = `
    <div class="exam-back"><a href="#exams">← Exam Centre</a></div>
    <div class="results-hero">
      <div class="results-title">${escapeHtml(paper.module)}</div>
      <div class="results-subtitle">${escapeHtml(paper.name)}</div>
      <div class="results-score">${g.total} <span class="results-score-max">/ 100</span></div>
      <div class="results-percent">${pct}% · ${grade}</div>
    </div>
    <div class="section-breakdown">
      <h3>Section breakdown</h3>
      ${Object.entries(sectionScores).map(([s, data]) => {
        const p = data.max ? Math.round((data.got / data.max) * 100) : 0;
        return `<div class="section-bar-row">
          <div class="sbr-label">Section ${s} · ${escapeHtml(data.name)}</div>
          <div class="sbr-bar"><div class="sbr-fill" style="width:${p}%"></div></div>
          <div class="sbr-value">${data.got.toFixed(1)} / ${data.max}</div>
        </div>`;
      }).join("")}
    </div>
    <div class="results-actions">
      <button class="btn btn-primary" id="reviewExamBtn">Review answers</button>
      <button class="btn" id="retakeBtn">Retake exam</button>
      ${state.attempts > 1 ? `<div class="retake-note">This is attempt #${state.attempts}. Model answers are hidden on retakes.</div>` : ""}
    </div>
    <div id="reviewPanel"></div>
  `;

  $("#reviewExamBtn").addEventListener("click", () => renderExamReview(paperId));
  $("#retakeBtn").addEventListener("click", () => {
    if (confirm("Retake this exam? Your best score is kept in the Tracker.")) {
      const newState = { ...getExamState(paperId), status: "not_started", answers: {}, currentIndex: 0, timeLeft: null, graded: null };
      saveExamState(paperId, newState);
      location.hash = `#exam-instructions/${paperId}`;
    }
  });
}

function gradeFromScore(score) {
  if (score >= 75) return "Distinction";
  if (score >= 70) return "Good pass";
  if (score >= 60) return "Credit";
  if (score >= 50) return "Pass";
  return "Fail";
}

function renderExamReview(paperId) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  const state = getExamState(paperId);
  if (!paper || !state || !state.graded) return;
  const showModel = state.showingModel;

  const panel = $("#reviewPanel");
  if (!panel) return;
  let html = `<h3 style="margin-top:40px">Question-by-question review</h3>`;

  state.graded.perQuestion.forEach((pq, i) => {
    const q = pq.question;
    const r = pq.result;
    const status = r.score >= r.maxMarks ? "ok" : r.score > 0 ? "partial" : "fail";
    html += `<div class="review-q review-${status}">
      <div class="review-q-head">
        <span class="review-q-num">Q${i+1}</span>
        <span class="review-q-section">${escapeHtml(q.sectionTitle)}</span>
        <span class="review-q-marks">${r.score} / ${r.maxMarks}</span>
      </div>
      <div class="review-q-prompt">${escapeHtml(q.prompt).replace(/\n/g, '<br>')}</div>
      ${q.type === "mcq" ? renderMcqReview(q, pq.answer) : ""}
      ${q.type !== "mcq" && pq.answer && !isEmptyAnswer(pq.answer) ? `<details><summary>Your answer</summary><div class="review-your-answer">${escapeHtml(stringifyAnswer(pq.answer))}</div></details>` : ""}
      ${showModel && q.modelAnswer ? `<details><summary>Model answer</summary><div class="review-model">${escapeHtml(q.modelAnswer)}</div></details>` : ""}
      <div class="review-criteria">
        ${r.criteria.map(c => `
          <div class="criterion ${c.hit ? "hit" : "miss"}">
            <span class="crit-mark">${c.awarded}/${c.marks}</span>
            <span class="crit-label">${escapeHtml(c.label)}</span>
          </div>
        `).join("")}
      </div>
    </div>`;
  });

  panel.innerHTML = html;
}

function renderMcqReview(q, answer) {
  const correct = answer === q.answer;
  return `<div class="review-mcq ${correct ? "correct" : "wrong"}">
    Your answer: ${answer != null ? String.fromCharCode(65 + answer) + ". " + escapeHtml(q.options[answer]) : "(not answered)"}
    ${!correct ? `<br>Correct: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}<br><em>${escapeHtml(q.explanation || "")}</em>` : ""}
  </div>`;
}

function stringifyAnswer(ans) {
  if (typeof ans === "string") return ans;
  if (typeof ans === "object") return Object.entries(ans).map(([k, v]) => `${k}: ${v}`).join("\n");
  return String(ans);
}

// ============================================================
//  TRACKER
// ============================================================
function syncExamToTracker(paperId, score) {
  const paper = (typeof findExamPaper === "function") ? findExamPaper(paperId) : null;
  if (!paper) return;
  const data = getTrackerData();
  let mod = data.find(m => m.name === paper.module);
  if (!mod) {
    mod = { id: "mod_" + Date.now(), name: paper.module, code: CPUT_MODULES.find(c => c.name === paper.module)?.code || "", assessments: [] };
    data.push(mod);
  }
  let ass = mod.assessments.find(a => a.examRef === paperId);
  if (!ass) {
    ass = { id: "ass_" + paperId, type: paper.name, status: "released", mark: "", weight: 50, examRef: paperId };
    mod.assessments.push(ass);
  }
  ass.mark = Math.round(score);
  ass.status = "released";
  saveTrackerData(data);
  showToast(`Mark saved: ${paper.module} · ${paper.name} = ${Math.round(score)}/100`);
}

function calculateModuleStats(mod) {
  let currentMark = 0, remainingWeight = 0, projectedMark = 0;
  if (!mod.assessments) return { current: 0, remaining: 0, projected: 0 };
  mod.assessments.forEach(a => {
    const mark = parseFloat(a.mark) || 0;
    const weight = parseFloat(a.weight) || 0;
    if (a.status === 'released') currentMark += (mark * weight) / 100;
    else if (a.status === 'pending') {
      remainingWeight += weight;
      if (a.mark !== "" && a.mark !== null && !isNaN(mark)) projectedMark += (mark * weight) / 100;
    }
  });
  return { current: currentMark, remaining: remainingWeight, projected: currentMark + projectedMark };
}

function renderTrackerDashboard() {
  activeModuleId = null;
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="tracker"]')?.classList.add("active");
  trackerData = getTrackerData();

  const availableToAdd = CPUT_MODULES.filter(c => !trackerData.some(t => t.name === c.name));
  let availableHtml = availableToAdd.map(m => `<button class="module-pill" onclick="window.addModuleFromList('${escapeHtml(m.name)}', '${escapeHtml(m.code)}')"><span class="plus">+</span> ${escapeHtml(m.name)}</button>`).join("");

  let cardsHtml = trackerData.map(mod => {
    const stats = calculateModuleStats(mod);
    return `<div class="module-card">
      <div><h3>${escapeHtml(mod.name)}</h3><div class="code">${escapeHtml(mod.code)}</div></div>
      <div class="module-card-stats">
        <div><span>Current:</span><strong>${stats.current.toFixed(2)}%</strong></div>
        <div><span>Projected:</span><strong>${stats.projected.toFixed(2)}%</strong></div>
        <div><span>Remaining:</span><strong>${stats.remaining.toFixed(2)}%</strong></div>
      </div>
      <div class="module-card-actions">
        <button class="btn btn-primary" onclick="window.openModule('${mod.id}')" style="flex:1;">View marks</button>
        <button class="btn btn-text" onclick="window.deleteTrackerModule('${mod.id}')">Remove</button>
      </div>
    </div>`;
  }).join("");

  $("#main").innerHTML = `
    <div class="dashboard-header"><h1>Mark Tracker</h1><p>Exam scores sync automatically. Add other assessments as you go.</p></div>
    ${availableHtml ? `<div class="available-modules">${availableHtml}</div>` : ""}
    <div class="tracker-grid">${cardsHtml || `<div class="empty" style="grid-column:1/-1"><h2>No modules tracked yet</h2><p>Add a module above or sit an exam — it links automatically.</p></div>`}</div>
  `;
}

window.addModuleFromList = function(name, code) {
  trackerData.push({ id: "mod_" + Date.now(), name, code, assessments: [] });
  saveTrackerData(trackerData);
  renderTrackerDashboard();
  showToast(`${name} added.`);
};
window.openModule = function(id) { activeModuleId = id; renderTrackerModule(id); };
window.deleteTrackerModule = function(id) {
  if (!confirm("Remove this module?")) return;
  trackerData = trackerData.filter(m => m.id !== id);
  saveTrackerData(trackerData);
  renderTrackerDashboard();
};
window.deleteTrackerAssessment = function(modId, assId) {
  if (!confirm("Delete this assessment?")) return;
  const mod = trackerData.find(m => m.id === modId);
  if (mod) { mod.assessments = mod.assessments.filter(a => a.id !== assId); saveTrackerData(trackerData); renderTrackerModule(modId); }
};
window.backToTracker = function() { activeModuleId = null; renderTrackerDashboard(); };
window.updateAss = function(el) {
  const modId = el.dataset.mod, assId = el.dataset.ass, field = el.dataset.field, val = el.value;
  const mod = trackerData.find(m => m.id === modId);
  if (!mod) return;
  const ass = mod.assessments.find(a => a.id === assId);
  if (!ass) return;
  ass[field] = val;
  saveTrackerData(trackerData);
  const summaryBox = $(".tracker-summary-box");
  if (summaryBox) summaryBox.innerHTML = summaryHtml(calculateModuleStats(mod));
};
window.addNewAssessment = function(modId) {
  const mod = trackerData.find(m => m.id === modId);
  if (!mod) return;
  mod.assessments.push({ id: "ass_" + Date.now(), type: "Test", status: "pending", mark: "", weight: "" });
  saveTrackerData(trackerData);
  renderTrackerModule(modId);
};

function summaryHtml(stats) {
  return `<h4>Module summary</h4>
    <div class="tracker-summary-row"><span>Current Mark (Released)</span><strong>${stats.current.toFixed(2)}%</strong></div>
    <div class="tracker-summary-row"><span>Remaining Weight (Pending)</span><strong>${stats.remaining.toFixed(2)}%</strong></div>
    <div class="tracker-summary-row total"><span>Projected Final Mark</span><strong>${stats.projected.toFixed(2)}%</strong></div>`;
}

function renderTrackerModule(modId) {
  const mod = trackerData.find(m => m.id === modId);
  if (!mod) { activeModuleId = null; renderTrackerDashboard(); return; }
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="tracker"]')?.classList.add("active");
  const stats = calculateModuleStats(mod);

  const rowsHtml = (mod.assessments || []).map(a => `
    <tr>
      <td><select data-mod="${modId}" data-ass="${a.id}" data-field="type" onchange="window.updateAss(this)">
        <option value="Test" ${a.type === 'Test' ? 'selected' : ''}>Test</option>
        <option value="TUT" ${a.type === 'TUT' ? 'selected' : ''}>TUT</option>
        <option value="Assignment" ${a.type === 'Assignment' ? 'selected' : ''}>Assignment</option>
        <option value="Class Task" ${a.type === 'Class Task' ? 'selected' : ''}>Class Task</option>
        <option value="Project" ${a.type === 'Project' ? 'selected' : ''}>Project</option>
        <option value="Other" ${a.type === 'Other' ? 'selected' : ''}>Other</option>
        ${a.examRef ? `<option value="${escapeHtml(a.type)}" selected>${escapeHtml(a.type)} (exam)</option>` : ""}
      </select></td>
      <td><select data-mod="${modId}" data-ass="${a.id}" data-field="status" onchange="window.updateAss(this)">
        <option value="released" ${a.status === 'released' ? 'selected' : ''}>Released</option>
        <option value="pending" ${a.status === 'pending' ? 'selected' : ''}>Pending</option>
        <option value="suppressed" ${a.status === 'suppressed' ? 'selected' : ''}>Suppressed</option>
      </select></td>
      <td><input type="number" value="${a.mark}" placeholder="0–100" data-mod="${modId}" data-ass="${a.id}" data-field="mark" onchange="window.updateAss(this)" min="0" max="100" ${a.examRef ? "readonly" : ""}></td>
      <td><input type="number" value="${a.weight}" placeholder="0" data-mod="${modId}" data-ass="${a.id}" data-field="weight" onchange="window.updateAss(this)" min="0" max="100"></td>
      <td>${a.examRef ? `<a href="#exam/${a.examRef}" class="btn-text">View</a>` : `<button class="btn-text" onclick="window.deleteTrackerAssessment('${modId}','${a.id}')" style="color:var(--danger)">✕</button>`}</td>
    </tr>
  `).join("");

  $("#main").innerHTML = `
    <div style="margin-bottom:24px">
      <button class="btn" onclick="window.backToTracker()" style="margin-bottom:16px">← Back to Modules</button>
      <div class="dashboard-header" style="margin:0"><h1>${escapeHtml(mod.name)} <span style="font-size:18px;color:var(--text-muted)">(${escapeHtml(mod.code)})</span></h1></div>
    </div>
    <div class="tracker-table-wrap">
      <table class="tracker-table">
        <thead><tr><th style="width:38%">Type</th><th style="width:20%">Status</th><th style="width:16%">Mark (/100)</th><th style="width:16%">Weight (%)</th><th></th></tr></thead>
        <tbody>${rowsHtml || `<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--text-muted)">No assessments yet.</td></tr>`}</tbody>
      </table>
    </div>
    <div style="display:flex;gap:16px;margin-bottom:32px">
      <button class="btn btn-primary" onclick="window.addNewAssessment('${modId}')" style="flex:1">+ Add assessment</button>
    </div>
    <div class="tracker-summary-box">${summaryHtml(stats)}</div>
  `;
}

// ============================================================
//  AI DRAWER
// ============================================================
function openChatDrawer() {
  const drawer = $("#chatDrawer");
  const overlay = $("#chatOverlay");
  if (!drawer || !overlay) return;
  drawer.classList.add("open");
  overlay.hidden = false;
  renderChatIntoDrawer(currentChapter);
}
function closeChatDrawer() {
  const drawer = $("#chatDrawer");
  const overlay = $("#chatOverlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.hidden = true;
}

function renderChatIntoDrawer(chapterScope) {
  chatHistory = [];
  const mount = $("#chatDrawerBody");
  if (!mount) return;
  const placeholder = chapterScope ? `Ask about ${chapterScope.title}…` : "Ask anything about your course…";
  mount.innerHTML = `
    <div class="chat-container chat-drawer-container">
      <div class="chat-thread" id="chatThread"></div>
      <div class="chat-input-wrap">
        <textarea id="askInput" placeholder="${escapeHtml(placeholder)}"></textarea>
        <button class="btn btn-primary" id="askBtn">Ask</button>
      </div>
    </div>
  `;
  $("#askBtn").addEventListener("click", () => handleAsk(chapterScope));
  $("#askInput").addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAsk(chapterScope); }
  });
  renderChatThread(chapterScope);
  $("#askInput").focus();
}

// ============================================================
//  AI ENGINE
// ============================================================
const STOPWORDS = new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","what","how","why","when","which","who","does","do","can","i","my","with","that","this","it","be","by","from","as","at","if","so","am","me","we","us","our","you","your","they","them","their","he","she","his","her","its","but","not","no","nor","than","then","too","very","just","only","also","such","some","any","all","each","every","both","few","more","most","other","into","over","under","about","after","before","between","during","through","up","down","out","off","again","further","once","here","there","where","will","would","should","could","may","might","must","shall","have","has","had","being","been","get","got","make","made"]);

const SYNONYMS = {
  calculate:["compute","formula","calculation","work","derive","find","equation","math"],
  formula:["calculate","equation","calculation","compute"],
  difference:["compare","versus","vs","distinguish","contrast","differ"],
  compare:["difference","versus","vs","contrast"],
  define:["definition","meaning","explain","describe"],
  definition:["define","meaning","explain"],
  explain:["define","describe","meaning"],
  exam:["test","assessment","paper"],
  test:["exam","assessment","paper"],
  profit:["margin","earnings","income","gain"],
  cost:["expense","expenditure","price"],
  price:["cost","pricing"],
  revenue:["sales","income","turnover"],
  sales:["revenue","turnover"],
  vat:["tax","taxation"],
  tax:["vat","taxation"],
  inventory:["stock","goods"],
  stock:["inventory","goods"],
  employee:["worker","staff","personnel","labour"],
  worker:["employee","staff"],
  manager:["management","supervisor","leader"],
  management:["manager","supervising"],
  leader:["leadership","manager"],
  leadership:["leader","managing"],
  motivation:["motivate","incentive","drive"],
  communication:["communicate","message"],
  conflict:["dispute","disagreement","clash"],
  team:["group","teamwork"],
  group:["team","teamwork"],
  customer:["client","consumer","buyer"],
  consumer:["customer","client","buyer"],
  promotion:["advertising","marketing"],
  marketing:["market","promotion"],
  segmentation:["segment","target"],
  target:["targeting","targets"],
  breakeven:["break-even","bep"],
  "break-even":["breakeven","bep"]
};
const AI_SUFFIXES = [[/ies$/,"y"],[/ing$/,""],[/ed$/,""],[/ly$/,""],[/s$/,""]];
function stemAI(w) { if (w.length < 4) return w; for (const [re, rep] of AI_SUFFIXES) if (re.test(w)) return w.replace(re, rep); return w; }
function tokenizeAI(t) { return String(t||"").toLowerCase().replace(/[^a-z0-9\s&'-]/g," ").split(/\s+/).filter(w => w.length > 1 && !STOPWORDS.has(w)); }
function expandAI(terms) {
  const out = new Set();
  for (const t of terms) {
    out.add(t); out.add(stemAI(t));
    const syn = SYNONYMS[t] || SYNONYMS[stemAI(t)];
    if (syn) for (const s of syn) { out.add(s); for (const w of tokenizeAI(s)) { out.add(w); out.add(stemAI(w)); } }
  }
  return out;
}

let TUTOR_INDEX = null;
function buildIndex() {
  if (TUTOR_INDEX) return TUTOR_INDEX;
  const sections = [], docFreq = {};
  for (const ch of CHAPTERS) {
    const parts = ch.notes.split(/^##\s+/m);
    parts.forEach((part, i) => {
      if (!part.trim()) return;
      const lines = part.split("\n");
      const heading = (i === 0 ? "Overview" : lines[0]).trim();
      const body = (i === 0 ? part : lines.slice(1).join("\n")).trim();
      const text = heading + "\n" + body;
      const tokens = tokenizeAI(text);
      const stems = new Set(tokens.map(stemAI));
      for (const s of stems) docFreq[s] = (docFreq[s] || 0) + 1;
      sections.push({ chapterId: ch.id, chapterNumber: ch.number, chapterTitle: ch.title, module: ch.module, heading, body, text, tokens, stems, lower: text.toLowerCase(), isFaq: false });
    });
    (ch.faq || []).forEach(f => {
      const text = f.q + " " + f.a;
      const tokens = tokenizeAI(text);
      const stems = new Set(tokens.map(stemAI));
      for (const s of stems) docFreq[s] = (docFreq[s] || 0) + 1;
      sections.push({ chapterId: ch.id, chapterNumber: ch.number, chapterTitle: ch.title, module: ch.module, heading: "Q: " + f.q, body: f.a, text, tokens, stems, lower: text.toLowerCase(), isFaq: true });
    });
  }
  TUTOR_INDEX = { sections, docFreq, N: sections.length };
  return TUTOR_INDEX;
}

function scoreSection(sec, queryStems, queryTerms, preferredId) {
  let score = 0;
  for (const qs of queryStems) {
    if (sec.stems.has(qs)) {
      const df = TUTOR_INDEX.docFreq[qs] || 1;
      score += Math.log(1 + TUTOR_INDEX.N / df);
    }
  }
  for (const qt of queryTerms) if (sec.lower.includes(qt)) score += 0.3;
  const hL = sec.heading.toLowerCase(), cL = sec.chapterTitle.toLowerCase();
  for (const qt of queryTerms) {
    if (hL.includes(qt)) score += 1.0;
    if (cL.includes(qt)) score += 0.5;
  }
  if (sec.isFaq) score *= 1.3;
  if (preferredId && sec.chapterId === preferredId) score *= 1.4;
  return score;
}

function aiAnswer(question, preferredId) {
  const rawTokens = tokenizeAI(question);
  if (!rawTokens.length) return { text: "Please type a question about the course — for example, *\"How do I calculate break-even?\"*", suggestions: defaultSuggestions(preferredId) };
  buildIndex();
  const queryTerms = rawTokens;
  const queryStems = expandAI(rawTokens);
  const scored = TUTOR_INDEX.sections.map(s => ({ s, score: scoreSection(s, queryStems, queryTerms, preferredId) })).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
  if (!scored.length || scored[0].score < 0.8) {
    return { text: "I couldn't find a strong match in the course notes. Try rephrasing, or pick a suggestion below.", suggestions: defaultSuggestions(preferredId) };
  }
  const top = scored.slice(0, 3);
  const best = top[0].s;
  const bestChapter = CHAPTERS.find(c => c.id === best.chapterId);
  let answerBody = best.isFaq ? best.body : extractRelevantSentences(best.body, queryTerms, 4);
  const heading = best.isFaq ? best.heading.replace(/^Q:\s*/, "") : best.heading;
  const text = `**${heading}**\n\n${answerBody}`;
  const related = top.slice(1).map(x => x.s).filter(s => s.heading !== best.heading);
  const suggestions = [];
  related.forEach(s => { if (s.isFaq) suggestions.push(s.heading.replace(/^Q:\s*/, "")); else suggestions.push(`${s.chapterTitle}: ${s.heading}`); });
  if (!suggestions.length) (bestChapter.faq || []).slice(0, 3).forEach(f => suggestions.push(f.q));
  return { text, suggestions: [...new Set(suggestions)].slice(0, 4), source: `${best.chapterNumber}. ${best.chapterTitle} · ${best.module}` };
}

function extractRelevantSentences(body, queryTerms, maxS = 4) {
  const lines = body.split(/\n+/).map(l => l.trim()).filter(Boolean);
  const scored = lines.map((line, i) => {
    const lower = line.toLowerCase();
    let hits = 0;
    for (const t of queryTerms) if (lower.includes(t)) hits++;
    return { line: line.length > 400 ? line.slice(0, 400) + "…" : line, hits, index: i };
  });
  const top = scored.filter(s => s.hits > 0).sort((a, b) => b.hits - a.hits).slice(0, maxS);
  top.sort((a, b) => a.index - b.index);
  if (!top.length) return body.slice(0, 600);
  return top.map(s => s.line).join("\n\n");
}

function defaultSuggestions(preferredId) {
  if (preferredId) {
    const ch = CHAPTERS.find(c => c.id === preferredId);
    if (ch && ch.faq && ch.faq.length) return ch.faq.slice(0, 4).map(f => f.q);
  }
  return QUICK_START_QUESTIONS.slice(0, 4);
}

function emptyChatHtml(scope) {
  const suggestions = scope ? (scope.faq || []).slice(0, 4).map(f => f.q) : QUICK_START_QUESTIONS;
  const scopeText = scope ? `about <strong>${escapeHtml(scope.title)}</strong>` : `about your course`;
  return `<div class="chat-empty">
    <div class="chat-empty-icon">✨</div>
    <h3>Hi, I'm Stack AI</h3>
    <p>Grounded in your course notes. Ask me anything ${scopeText}.</p>
    <div class="chat-suggestions">${suggestions.map(s => `<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>
  </div>`;
}

function renderChatMessage(m) {
  if (m.role === "user") return `<div class="chat-msg user"><div class="chat-bubble">${escapeHtml(m.text)}</div></div>`;
  if (m.pending) return `<div class="chat-msg assistant"><div class="chat-bubble chat-typing"><span></span><span></span><span></span></div></div>`;
  return `<div class="chat-msg assistant"><div class="chat-bubble">${mdToHtml(m.text)}${m.source ? `<div class="chat-source">Source: ${escapeHtml(m.source)}</div>` : ""}${m.suggestions && m.suggestions.length ? `<div class="chat-suggestions chat-suggestions-inline">${m.suggestions.map(s => `<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>` : ""}</div></div>`;
}

function renderChatThread(scope) {
  const thread = $("#chatThread");
  if (!thread) return;
  thread.innerHTML = chatHistory.length ? chatHistory.map(renderChatMessage).join("") : emptyChatHtml(scope);
  if (chatHistory.length) thread.scrollTop = thread.scrollHeight;
  $$(".chat-chip").forEach(btn => btn.addEventListener("click", () => { const q = btn.dataset.q; const inp = $("#askInput"); if (inp) inp.value = q; handleAsk(scope); }));
}

async function handleAsk(scope, override) {
  const input = $("#askInput");
  const q = (override || input?.value || "").trim();
  if (!q) return;
  if (input) input.value = "";
  chatHistory.push({ role: "user", text: q });
  chatHistory.push({ role: "assistant", pending: true });
  renderChatThread(scope);
  await new Promise(r => setTimeout(r, 250));
  const result = aiAnswer(q, scope?.id);
  chatHistory.pop();
  chatHistory.push({ role: "assistant", text: result.text, suggestions: result.suggestions, source: result.source });
  renderChatThread(scope);
}

// ============================================================
//  ROUTER  ← wrapped in try/catch so errors are visible
// ============================================================
function route() {
  try {
    pauseExamTimer();
    const hash = location.hash || "#home";

    if (hash.startsWith("#chapter/")) {
      renderChapter(hash.replace("#chapter/", ""));
    } else if (hash === "#exams") {
      renderExamCentre();
    } else if (hash.startsWith("#exam-instructions/")) {
      renderExamInstructions(hash.replace("#exam-instructions/", ""));
    } else if (hash.startsWith("#exam/")) {
      renderExam(hash.replace("#exam/", ""));
    } else if (hash === "#tracker") {
      renderTrackerDashboard();
    } else {
      renderHome();
    }
    if (window.innerWidth <= 800) $("#sidebar")?.classList.remove("open");
  } catch (err) {
    console.error("[Stack] Route error:", err);
    const main = $("#main");
    if (main) {
      main.innerHTML = `<div class="empty">
        <h2>⚠️ Something went wrong</h2>
        <p>${escapeHtml(err.message || String(err))}</p>
        <p style="margin-top:16px"><a href="#home" class="btn btn-primary">Go to Dashboard</a></p>
        <p style="margin-top:12px;font-size:13px">Open DevTools (F12) → Console for the full error.</p>
      </div>`;
    }
  }
}

// ============================================================
//  SEARCH
// ============================================================
const searchInput = $("#searchInput");
if (searchInput) {
  searchInput.addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { renderHome(); return; }
    const results = CHAPTERS.filter(ch => ch.title.toLowerCase().includes(q) || ch.summary.toLowerCase().includes(q) || ch.notes.toLowerCase().includes(q));
    $("#main").innerHTML = `<div class="dashboard-header"><h1>Search results</h1><p>${results.length} topic(s) match "${escapeHtml(q)}"</p></div>
      <div class="card-grid">${results.map(ch => `<div class="card" data-chapter="${ch.id}"><div class="card-top"><span class="chapter-num">${escapeHtml(ch.number)}</span></div><h3>${escapeHtml(ch.title)}</h3><p>${escapeHtml(ch.summary)}</p></div>`).join("") || `<div class="empty"><h2>No matches</h2><p>Try a different keyword.</p></div>`}</div>`;
    $$(".card").forEach(c => c.addEventListener("click", () => { location.hash = `#chapter/${c.dataset.chapter}`; }));
  });
}

// ============================================================
//  BOOT — order matters: nav delegation FIRST, then everything else
// ============================================================

// 1. GLOBAL NAV DELEGATION — attached before anything else can fail
document.addEventListener("click", (e) => {
  const navLink = e.target.closest('a[data-nav]');
  if (navLink) {
    e.preventDefault();
    const nav = navLink.getAttribute("data-nav");
    if (nav === "home") location.hash = "#home";
    else if (nav === "exams") location.hash = "#exams";
    else if (nav === "tracker") location.hash = "#tracker";
    return;
  }
  // Auto-handle any plain hash link (chapters, "back" links, etc.)
  const hashLink = e.target.closest('a[href^="#"]');
  if (hashLink && hashLink.getAttribute("href").length > 1) {
    // Native hash navigation works; no need to prevent default
  }
});

// 2. Hashchange listener
window.addEventListener("hashchange", route);

// 3. Menu / theme / reset / FAB — all null-guarded
const menuBtn = $("#menuBtn");
if (menuBtn) menuBtn.addEventListener("click", () => $("#sidebar")?.classList.toggle("open"));

const themeBtn = $("#themeBtn");
if (themeBtn) themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});

const resetBtn = $("#resetBtn");
if (resetBtn) resetBtn.addEventListener("click", () => {
  if (!confirm("Reset all progress, exams and tracker data? Cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TRACKER_KEY);
  localStorage.removeItem(EXAMS_KEY);
  renderSidebar();
  location.hash = "#home";
  route();
  showToast("Progress reset");
});

const aiFab = $("#aiFab");
if (aiFab) aiFab.addEventListener("click", openChatDrawer);

const closeDrawerBtn = $("#closeDrawer");
if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeChatDrawer);

const chatOverlay = $("#chatOverlay");
if (chatOverlay) chatOverlay.addEventListener("click", closeChatDrawer);

// 4. Online/offline
function updateOffline() {
  const pill = $("#offlinePill");
  if (pill) pill.hidden = navigator.onLine;
}
window.addEventListener("online", updateOffline);
window.addEventListener("offline", updateOffline);

// 5. Service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(reg => {
      reg.onupdatefound = () => {
        const w = reg.installing;
        w.onstatechange = () => {
          if (w.state === 'installed') {
            if (navigator.serviceWorker.controller) showToast("Update available — refresh to apply.");
            else showToast("Ready for offline use.");
          }
        };
      };
    }).catch(err => {
      console.warn("[Stack] SW registration failed:", err);
    });
  });
}

// 6. Boot the app
try {
  migrateStorage();
  applyTheme();
  renderSidebar();
  updateOffline();
  route();
} catch (err) {
  console.error("[Stack] Boot error:", err);
  const main = $("#main");
  if (main) {
    main.innerHTML = `<div class="empty">
      <h2>⚠️ Startup error</h2>
      <p>${escapeHtml(err.message || String(err))}</p>
      <p style="margin-top:16px"><button class="btn btn-primary" onclick="location.reload()">Reload</button></p>
    </div>`;
  }
}

// 7. Diagnostic — open DevTools (F12) to confirm
console.info(
  "%c[Stack] v2.1 booted",
  "background:#2563eb;color:#fff;padding:2px 8px;border-radius:4px;font-weight:700"
);
console.info("[Stack] Exams loaded:", typeof EXAM_PAPERS !== "undefined" ? `${EXAM_PAPERS.length} papers` : "❌ exams.js NOT loaded");
console.info("[Stack] Chapters loaded:", typeof CHAPTERS !== "undefined" ? `${CHAPTERS.length} chapters` : "❌ content.js NOT loaded");
