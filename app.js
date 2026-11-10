/* Stack — application logic.
   All state lives in localStorage. Works fully offline. */

const TUTOR_ENDPOINT = ""; // Optional: set to your RAG/AI endpoint to enable remote answers.
const STORAGE_KEY = "stack:progress";
const THEME_KEY = "stack:theme";
const TRACKER_KEY = "stack:tracker_v5";

// The 5 CPUT modules
const CPUT_MODULES = [
  { name: "Communication", code: "CMM157S" },
  { name: "Retailing 1", code: "RET150S" },
  { name: "Retail Operations Management 1", code: "ROM150S" },
  { name: "Retail Financial Management 1", code: "RFM150S" },
  { name: "Business Computer Applications", code: "BCA157S" }
];

// Every module has TWO exam papers — each worth 100 marks.
const EXAM_TIMETABLE = [
  { date: "24 November 2026", module: "Business Computer Applications", paper: "Paper 1" },
  { date: "08 December 2026", module: "Business Computer Applications", paper: "Paper 2" },
  { date: "25 November 2026", module: "Communication", paper: "Paper 1" },
  { date: "09 December 2026", module: "Communication", paper: "Paper 2" },
  { date: "26 November 2026", module: "Retail Operations Management 1", paper: "Paper 1" },
  { date: "10 December 2026", module: "Retail Operations Management 1", paper: "Paper 2" },
  { date: "30 November 2026", module: "Retailing 1", paper: "Paper 1" },
  { date: "11 December 2026", module: "Retailing 1", paper: "Paper 2" },
  { date: "07 December 2026", module: "Retail Financial Management 1", paper: "Paper 1" },
  { date: "14 December 2026", module: "Retail Financial Management 1", paper: "Paper 2" }
];

const QUICK_START_QUESTIONS = [
  "What is the difference between feasibility and viability?",
  "How do I calculate break-even?",
  "What are the 4 Ps of marketing?",
  "Difference between leadership and management",
  "Explain Maslow's hierarchy of needs",
  "How do I calculate VAT inclusive/exclusive?"
];

let currentChapter = null;
let currentTab = "notes";
let quizState = null;

// Tracker State
let trackerData = [];
let activeModuleId = null;

// Chat State
let chatHistory = [];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// One-time migration from the old "brainstack:*" keys so existing users keep their data.
function migrateStorage() {
  const pairs = [
    ["brainstack:progress", STORAGE_KEY],
    ["brainstack:theme", THEME_KEY],
    ["brainstack:tracker_v5", TRACKER_KEY]
  ];
  pairs.forEach(([oldK, newK]) => {
    if (!localStorage.getItem(newK)) {
      const old = localStorage.getItem(oldK);
      if (old !== null) localStorage.setItem(newK, old);
    }
  });
}

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
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { t.hidden = true; }, ms);
}

function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
function setChapterScore(id, score, total) {
  const p = getProgress();
  const prev = p[id] || { best: 0, attempts: 0 };
  p[id] = {
    best: Math.max(prev.best, score),
    total,
    attempts: prev.attempts + 1
  };
  saveProgress(p);
  renderSidebar();
}
function resetProgress() {
  if (!confirm("Reset all quiz progress and tracker data? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TRACKER_KEY);
  renderSidebar();
  if (currentChapter) renderChapter(currentChapter.id);
  if (location.hash === "#tracker") renderTrackerDashboard();
  showToast("Progress reset");
}

function applyTheme() {
  const theme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.classList.toggle("dark", theme === "dark");
}
$("#themeBtn").addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});

function mdToHtml(md) {
  const lines = md.trim().split("\n");
  const out = [];
  let inList = false, listType = null;
  let inTable = false, tableRows = [];

  function inline(t) {
    return escapeHtml(t)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }
  function closeList() {
    if (inList) { out.push(`</${listType}>`); inList = false; listType = null; }
  }
  function flushTable() {
    if (!inTable) return;
    const cells = (r) => r.split("|").slice(1, -1).map(c => c.trim());
    const [header, ...rows] = tableRows;
    const ths = cells(header).map(c => `<th>${inline(c)}</th>`).join("");
    const trs = rows
      .filter(r => !/^\|[\s\-|:]+\|$/.test(r))
      .map(r => `<tr>${cells(r).map(c => `<td>${inline(c)}</td>`).join("")}</tr>`)
      .join("");
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
    }
    else if (/^\d+\. /.test(t)) {
      if (!inList || listType !== "ol") { closeList(); out.push("<ol>"); inList = true; listType = "ol"; }
      out.push(`<li>${inline(t.replace(/^\d+\.\s+/, ""))}</li>`);
    }
    else { closeList(); out.push(`<p>${inline(t)}</p>`); }
  }
  closeList(); flushTable();
  return out.join("\n");
}

function renderSidebar() {
  const list = $("#chapterList");
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

function renderHome() {
  const progress = getProgress();
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="home"]').classList.add("active");

  const modules = [...new Set(CHAPTERS.map(c => c.module))];

  let html = `
    <div class="dashboard-header">
      <h1>Your Study Dashboard</h1>
      <p>Read the notes. Take the quiz. Ask Stack AI. All offline-ready.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h4>All-in-One Notes</h4>
        <p>5 complete modules structured clearly so you can study without flipping through old PDFs.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h4>Offline Ready</h4>
        <p>Study on the bus or without data. Everything is saved to your device automatically.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🧠</div>
        <h4>Active Recall Quizzes</h4>
        <p>8-question quizzes per topic with instant scores and full explanations to test your memory.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤖</div>
        <h4>AI Tutor</h4>
        <p>Ask anything. The AI Tutor is grounded in your course notes and finds the exact section you need.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h4>Mark Tracker</h4>
        <p>Each module has <strong>two 100-mark exam papers</strong>. Track both and see your projected final mark.</p>
      </div>
    </div>

    <div class="timetable-widget">
      <h3>📅 Upcoming Exams</h3>
      <div class="timetable-groups">
        ${renderTimetableGroupsHtml()}
      </div>
    </div>
  `;

  modules.forEach(mod => {
    const modChapters = CHAPTERS.filter(c => c.module === mod);

    html += `<div class="module-section">`;
    html += `<div class="module-title">${escapeHtml(mod)}</div>`;
    html += `<div class="card-grid">`;

    html += modChapters.map(ch => {
      const p = progress[ch.id];
      const pct = p ? Math.round((p.best / p.total) * 100) : 0;
      return `<div class="card" data-chapter="${ch.id}">
        <div class="card-top">
          <span class="chapter-num">${escapeHtml(ch.number)}</span>
        </div>
        <h3>${escapeHtml(ch.title)}</h3>
        <p>${escapeHtml(ch.summary)}</p>
        <div class="card-progress-wrap">
          <div class="card-progress-label">
            <span>Progress</span>
            <span>${pct}%</span>
          </div>
          <div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div>
        </div>
      </div>`;
    }).join("");

    html += `</div></div>`;
  });

  $("#main").innerHTML = html;

  $$(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = `#chapter/${c.dataset.chapter}`;
  }));
}

// Group the timetable by module so both papers show together.
function renderTimetableGroupsHtml() {
  const groups = {};
  EXAM_TIMETABLE.forEach(ex => {
    if (!groups[ex.module]) groups[ex.module] = [];
    groups[ex.module].push(ex);
  });
  return Object.entries(groups).map(([mod, exams]) => `
    <div class="timetable-group">
      <div class="timetable-group-title">${escapeHtml(mod)}</div>
      ${exams.map(ex => `
        <div class="timetable-item">
          <span class="timetable-date">${escapeHtml(ex.date)}</span>
          <span class="timetable-module">${escapeHtml(ex.paper)} <span class="timetable-marks">· 100 marks</span></span>
        </div>
      `).join("")}
    </div>
  `).join("");
}

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
      <button class="tab" data-tab="ask">Ask Stack AI</button>
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
  if (currentTab === "notes") {
    body.innerHTML = `<div class="content">${mdToHtml(ch.notes)}</div>`;
  } else if (currentTab === "quiz") {
    renderQuiz(ch);
  } else if (currentTab === "ask") {
    renderAsk(ch);
  }
}

// ---------- QUIZ LOGIC ----------
function renderQuiz(ch) {
  if (!quizState) {
    quizState = {
      index: 0,
      answers: new Array(ch.quiz.length).fill(undefined),
      questions: shuffle(ch.quiz),
      done: false,
      reviewing: false
    };
  }

  const body = $("#chapterBody");
  const total = quizState.questions.length;

  if (quizState.reviewing) {
    let reviewHtml = `<h2>Review Answers</h2>`;
    quizState.questions.forEach((q, i) => {
      const userAns = quizState.answers[i];
      const isCorrect = userAns === q.answer;

      reviewHtml += `<div class="review-item">
        <div class="q-text">${i+1}. ${escapeHtml(q.q)}</div>
        <div class="a-row ${isCorrect ? 'correct' : 'wrong'}">
          Your answer: ${String.fromCharCode(65 + userAns)}. ${escapeHtml(q.options[userAns])}
          ${isCorrect ? '✓' : '✗'}
        </div>
        ${!isCorrect ? `<div class="a-row correct">
          Correct answer: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}
        </div>` : ''}
        <div class="quiz-explain" style="margin-top:12px">
          <strong>Why:</strong> ${escapeHtml(q.explain)}
        </div>
      </div>`;
    });

    body.innerHTML = reviewHtml + `
      <div class="quiz-actions" style="justify-content:center; margin-top:32px">
        <button class="btn btn-primary" id="retryBtn">Retake Quiz</button>
        <button class="btn" id="backToScoreBtn">Back to Score</button>
      </div>
    `;

    $("#retryBtn").addEventListener("click", () => { quizState = null; renderQuiz(ch); });
    $("#backToScoreBtn").addEventListener("click", () => { quizState.reviewing = false; renderQuiz(ch); });
    return;
  }

  if (quizState.done) {
    const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
    const pct = Math.round((score / total) * 100);
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good — review the wrong answers." : "Re-read the notes and try again.";

    body.innerHTML = `
      <div class="score-card">
        <div class="score-big">${score}/${total}</div>
        <div class="score-label">${pct}% correct</div>
        <div class="score-msg">${msg}</div>
        <div class="quiz-actions" style="justify-content:center; margin-top:32px">
          <button class="btn btn-primary" id="reviewBtn">Review Answers</button>
          <button class="btn" id="retryBtn">Retake Quiz</button>
        </div>
      </div>
    `;

    $("#reviewBtn").addEventListener("click", () => {
      quizState.reviewing = true;
      renderQuiz(ch);
    });
    $("#retryBtn").addEventListener("click", () => {
      quizState = null; renderQuiz(ch);
    });
    return;
  }

  const q = quizState.questions[quizState.index];
  const selected = quizState.answers[quizState.index];
  const pct = Math.round((quizState.index / total) * 100);

  const optionsHtml = q.options.map((opt, i) => {
    const isSelected = selected === i;
    return `<button class="quiz-option ${isSelected ? 'selected' : ''}" data-idx="${i}">
      <span class="letter">${String.fromCharCode(65 + i)}</span>
      <span>${escapeHtml(opt)}</span>
    </button>`;
  }).join("");

  body.innerHTML = `
    <div class="quiz-progress-wrap">
      <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-question">
      <div class="q-num">Question ${quizState.index + 1} of ${total}</div>
      <div class="q-text">${escapeHtml(q.q)}</div>
      <div class="quiz-options">${optionsHtml}</div>
    </div>
    <div class="quiz-actions">
      <button class="btn btn-primary" id="nextBtn" ${selected === undefined ? 'disabled' : ''}>
        ${quizState.index === total - 1 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  `;

  $$(".quiz-option").forEach(btn => btn.addEventListener("click", () => {
    quizState.answers[quizState.index] = Number(btn.dataset.idx);
    renderQuiz(ch);
  }));

  $("#nextBtn").addEventListener("click", () => {
    if (quizState.index === total - 1) {
      quizState.done = true;
      const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
      setChapterScore(ch.id, score, total);
    } else {
      quizState.index++;
    }
    renderQuiz(ch);
  });
}

// ============================================================
//  AI TUTOR — grounded retrieval engine over ALL course notes
// ============================================================

const STOPWORDS = new Set([
  "the","a","an","is","are","was","were","of","to","in","on","for","and","or","what","how","why","when",
  "which","who","does","do","can","i","my","with","that","this","it","be","by","from","as","at","if","so",
  "am","me","we","us","our","you","your","they","them","their","he","she","his","her","its","but","not",
  "no","nor","than","then","too","very","just","only","also","such","some","any","all","each","every",
  "both","few","more","most","other","into","over","under","about","after","before","between","during",
  "through","up","down","out","off","again","further","once","here","there","where","will","would","should",
  "could","may","might","must","shall","have","has","had","being","been","get","got","make","made"
]);

const SYNONYMS = {
  calculate: ["compute","formula","calculation","work","derive","find","equation","math"],
  formula: ["calculate","equation","calculation","compute"],
  difference: ["compare","versus","vs","distinguish","contrast","differ"],
  compare: ["difference","versus","vs","contrast"],
  versus: ["difference","compare","vs"],
  vs: ["difference","compare","versus"],
  define: ["definition","meaning","explain","describe"],
  definition: ["define","meaning","explain"],
  meaning: ["define","definition"],
  explain: ["define","describe","meaning"],
  exam: ["test","assessment","paper","examination"],
  test: ["exam","assessment","paper"],
  paper: ["exam","test","assessment"],
  assessment: ["exam","test","paper"],
  profit: ["margin","earnings","income","gain"],
  loss: ["deficit","negative"],
  cost: ["expense","expenditure","price"],
  price: ["cost","pricing"],
  revenue: ["sales","income","turnover"],
  sales: ["revenue","turnover"],
  vat: ["tax","taxation","value-added"],
  tax: ["vat","taxation"],
  inventory: ["stock","inventory","goods"],
  stock: ["inventory","goods"],
  employee: ["worker","staff","personnel","labour","labor"],
  worker: ["employee","staff"],
  staff: ["employee","workers"],
  manager: ["management","supervisor","leader"],
  management: ["manager","managing","supervise"],
  leader: ["leadership","manager"],
  leadership: ["leader","managing"],
  motivation: ["motivate","incentive","drive"],
  motivate: ["motivation","incentive"],
  communication: ["communicate","message","communicating"],
  communicate: ["communication","message"],
  conflict: ["dispute","disagreement","clash"],
  team: ["group","teamwork"],
  group: ["team","teamwork"],
  customer: ["client","consumer","buyer"],
  consumer: ["customer","client","buyer"],
  buy: ["purchase","buying"],
  purchase: ["buy","buying"],
  sell: ["sale","selling"],
  sale: ["sell","selling"],
  promotion: ["advertising","marketing"],
  marketing: ["market","promotion"],
  segmentation: ["segment","segments","target"],
  target: ["targeting","targets"],
  break: ["breakeven","break-even","bep"],
  breakeven: ["break-even","bep"],
  "break-even": ["breakeven","bep"]
};

const SUFFIX_RULES = [
  [/ies$/, "y"],
  [/sses$/, "ss"],
  [/edly$/, ""],
  [/ing$/, ""],
  [/ed$/, ""],
  [/ment$/, ""],
  [/ness$/, ""],
  [/tion$/, "t"],
  [/sion$/, "s"],
  [/ly$/, ""],
  [/est$/, ""],
  [/es$/, ""],
  [/s$/, ""]
];

function stem(word) {
  if (word.length < 4) return word;
  for (const [re, rep] of SUFFIX_RULES) {
    if (re.test(word)) {
      const s = word.replace(re, rep);
      if (s.length >= 3) return s;
    }
  }
  return word;
}

function tokenize(text) {
  return String(text).toLowerCase()
    .replace(/[^a-z0-9\s&'-]/g, " ")
    .split(/\s+/)
    .filter(w => w && w.length > 1 && !STOPWORDS.has(w));
}

function expandTerms(terms) {
  const out = new Set();
  for (const t of terms) {
    out.add(t);
    out.add(stem(t));
    const syn = SYNONYMS[t] || SYNONYMS[stem(t)];
    if (syn) {
      for (const s of syn) {
        out.add(s);
        for (const w of tokenize(s)) { out.add(w); out.add(stem(w)); }
      }
    }
  }
  return out;
}

let TUTOR_INDEX = null;

function buildIndex() {
  if (TUTOR_INDEX) return TUTOR_INDEX;
  const sections = [];
  const docFreq = {};

  for (const ch of CHAPTERS) {
    // Break notes into ## sections
    const parts = ch.notes.split(/^##\s+/m);
    parts.forEach((part, i) => {
      if (!part.trim()) return;
      const lines = part.split("\n");
      const heading = (i === 0 ? "Overview" : lines[0]).trim();
      const body = (i === 0 ? part : lines.slice(1).join("\n")).trim();
      const text = heading + "\n" + body;
      const tokens = tokenize(text);
      const stems = new Set(tokens.map(stem));
      for (const s of stems) docFreq[s] = (docFreq[s] || 0) + 1;
      sections.push({
        chapterId: ch.id,
        chapterNumber: ch.number,
        chapterTitle: ch.title,
        module: ch.module,
        heading,
        body,
        text,
        tokens,
        stems,
        lower: text.toLowerCase(),
        isFaq: false
      });
    });

    // FAQs are curated high-value answers — index them too
    (ch.faq || []).forEach(f => {
      const text = f.q + " " + f.a;
      const tokens = tokenize(text);
      const stems = new Set(tokens.map(stem));
      for (const s of stems) docFreq[s] = (docFreq[s] || 0) + 1;
      sections.push({
        chapterId: ch.id,
        chapterNumber: ch.number,
        chapterTitle: ch.title,
        module: ch.module,
        heading: "Q: " + f.q,
        body: f.a,
        text,
        tokens,
        stems,
        lower: text.toLowerCase(),
        isFaq: true
      });
    });
  }

  TUTOR_INDEX = { sections, docFreq, N: sections.length };
  return TUTOR_INDEX;
}

function scoreSection(section, queryStems, queryTerms, preferredChapterId) {
  let score = 0;
  for (const qs of queryStems) {
    if (section.stems.has(qs)) {
      const df = TUTOR_INDEX.docFreq[qs] || 1;
      const idf = Math.log(1 + TUTOR_INDEX.N / df);
      score += idf;
    }
  }
  // Exact term presence bonus (substring)
  for (const qt of queryTerms) {
    if (section.lower.includes(qt)) score += 0.3;
  }
  // Heading boost
  const headingLower = section.heading.toLowerCase();
  for (const qt of queryTerms) {
    if (headingLower.includes(qt)) score += 1.0;
  }
  // Chapter title boost
  const chTitleLower = section.chapterTitle.toLowerCase();
  for (const qt of queryTerms) {
    if (chTitleLower.includes(qt)) score += 0.5;
  }
  // FAQ boost
  if (section.isFaq) score *= 1.3;
  // Preferred chapter boost (contextual)
  if (preferredChapterId && section.chapterId === preferredChapterId) score *= 1.4;
  return score;
}

function extractRelevantSentences(body, queryTerms, maxSentences = 4) {
  const lines = body.split(/\n+/).map(l => l.trim()).filter(Boolean);
  const scored = lines.map((line, i) => {
    const lower = line.toLowerCase();
    let hits = 0;
    for (const t of queryTerms) if (lower.includes(t)) hits++;
    return { line: line.length > 400 ? line.slice(0, 400) + "…" : line, hits, index: i };
  });
  const top = scored.filter(s => s.hits > 0).sort((a, b) => b.hits - a.hits).slice(0, maxSentences);
  top.sort((a, b) => a.index - b.index);
  if (!top.length) return body.slice(0, 600);
  return top.map(s => s.line).join("\n\n");
}

function defaultSuggestions(preferredChapterId) {
  if (preferredChapterId) {
    const ch = CHAPTERS.find(c => c.id === preferredChapterId);
    if (ch && ch.faq && ch.faq.length) return ch.faq.slice(0, 4).map(f => f.q);
  }
  return QUICK_START_QUESTIONS.slice(0, 4);
}

function aiAnswer(question, preferredChapterId) {
  const rawTokens = tokenize(question);
  if (!rawTokens.length) {
    return {
      text: "Please type a question about the course content — for example, *\"How do I calculate break-even?\"*",
      suggestions: defaultSuggestions(preferredChapterId)
    };
  }

  buildIndex();
  const queryTerms = rawTokens;
  const queryStems = expandTerms(rawTokens);

  const scored = TUTOR_INDEX.sections
    .map(s => ({ section: s, score: scoreSection(s, queryStems, queryTerms, preferredChapterId) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length || scored[0].score < 0.8) {
    return {
      text: "Hmm — I couldn't find a strong match for that in the course notes. Try rephrasing, or pick one of the suggestions below. You can also browse the **Notes** tab directly.",
      suggestions: defaultSuggestions(preferredChapterId)
    };
  }

  const top = scored.slice(0, 3);
  const best = top[0].section;
  const bestChapter = CHAPTERS.find(c => c.id === best.chapterId);

  let answerBody;
  if (best.isFaq) {
    answerBody = best.body;
  } else {
    answerBody = extractRelevantSentences(best.body, queryTerms, 4);
  }

  const heading = best.isFaq ? best.heading.replace(/^Q:\s*/, "") : best.heading;
  const text = `**${heading}**\n\n${answerBody}`;

  // Build related suggestions from the other top-scoring sections
  const related = top.slice(1).map(x => x.section).filter(s => s.heading !== best.heading);
  const suggestions = [];
  related.forEach(s => {
    if (s.isFaq) suggestions.push(s.heading.replace(/^Q:\s*/, ""));
    else suggestions.push(`${s.chapterTitle}: ${s.heading}`);
  });
  if (!suggestions.length) {
    (bestChapter.faq || []).slice(0, 3).forEach(f => suggestions.push(f.q));
  }

  return {
    text,
    suggestions: [...new Set(suggestions)].slice(0, 4),
    source: `${best.chapterNumber}. ${best.chapterTitle} · ${best.module}`
  };
}

// Optional remote RAG call (disabled by default). Sends top note passages as context.
async function remoteAnswer(question, chapterScope) {
  buildIndex();
  const queryTerms = tokenize(question);
  const queryStems = expandTerms(queryTerms);
  const top = TUTOR_INDEX.sections
    .map(s => ({ s, score: scoreSection(s, queryStems, queryTerms, chapterScope?.id) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  const context = top.map(x => `[${x.s.chapterTitle} — ${x.s.heading}]\n${x.s.body}`).join("\n\n---\n\n");
  const res = await fetch(TUTOR_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, context, chapterId: chapterScope?.id || null })
  });
  if (!res.ok) throw new Error("Remote tutor failed");
  const data = await res.json();
  return { text: data.answer || "", suggestions: data.suggestions || [], source: data.source };
}

// ---------- CHAT UI ----------
function renderChatInto(container, chapterScope) {
  chatHistory = [];
  const placeholder = chapterScope
    ? `Ask about ${chapterScope.title}…`
    : "Ask anything about your course notes…";
  container.innerHTML = `
    <div class="chat-container">
      <div class="chat-thread" id="chatThread"></div>
      <div class="chat-input-wrap">
        <textarea id="askInput" placeholder="${escapeHtml(placeholder)}"></textarea>
        <button class="btn btn-primary" id="askBtn">Ask</button>
      </div>
    </div>
  `;
  $("#askBtn").addEventListener("click", () => handleAsk(chapterScope));
  $("#askInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAsk(chapterScope); }
  });
  $("#askInput").focus();
  renderChatThread(chapterScope);
}

function renderAsk(ch) {
  renderChatInto($("#chapterBody"), ch);
}

function renderAskGlobal() {
  currentChapter = null;
  activeModuleId = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="ask"]').classList.add("active");
  $("#main").innerHTML = `
    <div class="dashboard-header">
      <h1>🤖 Ask Stack AI</h1>
      <p>An AI Tutor grounded in your course notes. Ask any question across all 5 modules.</p>
    </div>
    <div id="chatMount"></div>
  `;
  renderChatInto($("#chatMount"), null);
}

function emptyChatHtml(chapterScope) {
  const suggestions = chapterScope
    ? (chapterScope.faq || []).slice(0, 4).map(f => f.q)
    : QUICK_START_QUESTIONS;
  const scopeText = chapterScope
    ? `about <strong>${escapeHtml(chapterScope.title)}</strong>`
    : `about your course`;
  return `<div class="chat-empty">
    <div class="chat-empty-icon">🤖</div>
    <h3>Hi, I'm Stack AI</h3>
    <p>I'm grounded in your course notes. Ask me anything ${scopeText}.</p>
    <div class="chat-suggestions">
      ${suggestions.map(s => `<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}
    </div>
  </div>`;
}

function renderChatMessage(msg) {
  if (msg.role === "user") {
    return `<div class="chat-msg user"><div class="chat-bubble">${escapeHtml(msg.text)}</div></div>`;
  }
  if (msg.pending) {
    return `<div class="chat-msg assistant"><div class="chat-bubble chat-typing">
      <span></span><span></span><span></span>
    </div></div>`;
  }
  return `<div class="chat-msg assistant">
    <div class="chat-bubble">
      ${mdToHtml(msg.text)}
      ${msg.source ? `<div class="chat-source">Source: ${escapeHtml(msg.source)}</div>` : ""}
      ${msg.suggestions && msg.suggestions.length ? `
        <div class="chat-suggestions chat-suggestions-inline">
          ${msg.suggestions.map(s => `<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}
        </div>` : ""}
    </div>
  </div>`;
}

function renderChatThread(chapterScope) {
  const thread = $("#chatThread");
  if (!thread) return;
  if (!chatHistory.length) {
    thread.innerHTML = emptyChatHtml(chapterScope);
  } else {
    thread.innerHTML = chatHistory.map(renderChatMessage).join("");
    thread.scrollTop = thread.scrollHeight;
  }
  bindChatChips(chapterScope);
}

function bindChatChips(chapterScope) {
  $$(".chat-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.q;
      const input = $("#askInput");
      if (input) input.value = q;
      handleAsk(chapterScope);
    });
  });
}

async function handleAsk(chapterScope, questionOverride) {
  const input = $("#askInput");
  const q = (questionOverride || input?.value || "").trim();
  if (!q) return;
  if (input) input.value = "";

  chatHistory.push({ role: "user", text: q });
  chatHistory.push({ role: "assistant", pending: true });
  renderChatThread(chapterScope);

  // Small delay so the typing indicator feels natural
  await new Promise(r => setTimeout(r, 300));

  let result;
  if (TUTOR_ENDPOINT) {
    try {
      result = await remoteAnswer(q, chapterScope);
    } catch (err) {
      result = aiAnswer(q, chapterScope?.id);
    }
  } else {
    result = aiAnswer(q, chapterScope?.id);
  }

  chatHistory.pop(); // remove pending
  chatHistory.push({
    role: "assistant",
    text: result.text,
    suggestions: result.suggestions,
    source: result.source
  });
  renderChatThread(chapterScope);
}

// ============================================================
//  MARK TRACKER
// ============================================================
function getTrackerData() {
  try { return JSON.parse(localStorage.getItem(TRACKER_KEY)) || []; }
  catch { return []; }
}

function saveTrackerData(data) {
  localStorage.setItem(TRACKER_KEY, JSON.stringify(data));
}

window.deleteTrackerAssessment = function(modId, assId) {
  if (!confirm("Delete this assessment?")) return;
  const mod = trackerData.find(m => m.id === modId);
  if (mod) {
    mod.assessments = mod.assessments.filter(a => a.id !== assId);
    saveTrackerData(trackerData);
    renderTrackerModule(modId);
  }
};

window.deleteTrackerModule = function(modId) {
  if (!confirm("Remove this module and all its marks from the tracker?")) return;
  trackerData = trackerData.filter(m => m.id !== modId);
  saveTrackerData(trackerData);
  renderTrackerDashboard();
};

function calculateModuleStats(mod) {
  let currentMark = 0;
  let remainingWeight = 0;
  let projectedMark = 0;

  if (!mod.assessments) return { current: 0, remaining: 0, projected: 0 };

  mod.assessments.forEach(a => {
    const mark = parseFloat(a.mark) || 0;
    const weight = parseFloat(a.weight) || 0;

    if (a.status === 'released') {
      currentMark += (mark * weight) / 100;
    } else if (a.status === 'pending') {
      remainingWeight += weight;
      if (a.mark !== "" && a.mark !== null && !isNaN(mark)) {
        projectedMark += (mark * weight) / 100;
      }
    }
  });

  return {
    current: currentMark,
    remaining: remainingWeight,
    projected: currentMark + projectedMark
  };
}

function renderTracker() {
  if (activeModuleId) {
    renderTrackerModule(activeModuleId);
  } else {
    renderTrackerDashboard();
  }
}

function renderTrackerDashboard() {
  activeModuleId = null;
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="tracker"]').classList.add("active");

  trackerData = getTrackerData();

  const availableToAdd = CPUT_MODULES.filter(cputMod =>
    !trackerData.some(t => t.name === cputMod.name)
  );

  let availableHtml = availableToAdd.map(mod =>
    `<button class="module-pill" onclick="window.addModuleFromList('${escapeHtml(mod.name)}', '${escapeHtml(mod.code)}')">
      <span class="plus">+</span> ${escapeHtml(mod.name)}
    </button>`
  ).join("");

  let cardsHtml = trackerData.map(mod => {
    const stats = calculateModuleStats(mod);
    return `<div class="module-card">
      <div>
        <h3>${escapeHtml(mod.name)}</h3>
        <div class="code">${escapeHtml(mod.code)}</div>
      </div>
      ${examSummaryHtml(mod)}
      <div class="module-card-stats">
        <div><span>Current Mark:</span> <strong>${stats.current.toFixed(2)}%</strong></div>
        <div><span>Projected:</span> <strong>${stats.projected.toFixed(2)}%</strong></div>
        <div><span>Remaining Weight:</span> <strong>${stats.remaining.toFixed(2)}%</strong></div>
      </div>
      <div class="module-card-actions">
        <button class="btn btn-primary" onclick="window.openModule('${mod.id}')" style="flex:1;">View Marks</button>
        <button class="btn btn-text" onclick="window.deleteTrackerModule('${mod.id}')">Remove</button>
      </div>
    </div>`;
  }).join("");

  $("#main").innerHTML = `
    <div class="tracker-header">
      <div class="dashboard-header" style="margin:0;">
        <h1>Mark Tracker</h1>
        <p>Each module has <strong>two 100-mark exam papers</strong>. Click a module to track marks.</p>
      </div>
    </div>

    ${availableHtml ? `<div class="available-modules">${availableHtml}</div>` : ''}

    <div class="tracker-grid">
      ${cardsHtml || `<div class="empty" style="grid-column: 1/-1;"><h2>No modules tracked yet</h2><p>Click one of the modules above to begin.</p></div>`}
    </div>
  `;
}

// Small exam-mark summary block for the module card
function examSummaryHtml(mod) {
  const exams = (mod.assessments || []).filter(a => (a.type || "").startsWith("Exam"));
  if (!exams.length) return "";
  return `<div class="module-card-exams">
    ${exams.map(a => {
      const hasMark = a.mark !== "" && a.mark !== null && !isNaN(parseFloat(a.mark));
      const m = hasMark ? parseFloat(a.mark).toFixed(0) : "—";
      return `<div class="module-card-exam">
        <span>${escapeHtml(a.type)}</span>
        <strong>${m}${hasMark ? "/100" : ""}</strong>
      </div>`;
    }).join("")}
  </div>`;
}

window.addModuleFromList = function(name, code) {
  const now = Date.now();
  trackerData.push({
    id: "mod_" + now,
    name: name,
    code: code,
    // Seed with the two 100-mark exam papers (weight 50% each)
    assessments: [
      { id: "ass_" + now + "_1", type: "Exam Paper 1", status: "pending", mark: "", weight: 50 },
      { id: "ass_" + now + "_2", type: "Exam Paper 2", status: "pending", mark: "", weight: 50 }
    ]
  });
  saveTrackerData(trackerData);
  renderTrackerDashboard();
  showToast(`${name} added — two 100-mark exam papers are ready to track.`);
};

window.openModule = function(id) {
  activeModuleId = id;
  renderTracker();
};

window.addNewAssessment = function(modId) {
  const mod = trackerData.find(m => m.id === modId);
  if (!mod) return;

  mod.assessments.push({
    id: "ass_" + Date.now(),
    type: "Test",
    status: "pending",
    mark: "",
    weight: ""
  });
  saveTrackerData(trackerData);
  renderTrackerModule(modId);
};

function renderTrackerModule(modId) {
  const mod = trackerData.find(m => m.id === modId);
  if (!mod) { activeModuleId = null; renderTrackerDashboard(); return; }

  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="tracker"]').classList.add("active");

  const stats = calculateModuleStats(mod);

  let rowsHtml = (mod.assessments || []).map(a => `
    <tr>
      <td>
        <select data-mod="${modId}" data-ass="${a.id}" data-field="type" onchange="window.updateAss(this)">
          <option value="Exam Paper 1" ${a.type === 'Exam Paper 1' ? 'selected' : ''}>Exam Paper 1</option>
          <option value="Exam Paper 2" ${a.type === 'Exam Paper 2' ? 'selected' : ''}>Exam Paper 2</option>
          <option value="Test" ${a.type === 'Test' ? 'selected' : ''}>Test</option>
          <option value="TUT" ${a.type === 'TUT' ? 'selected' : ''}>TUT</option>
          <option value="Assignment" ${a.type === 'Assignment' ? 'selected' : ''}>Assignment</option>
          <option value="Class Task" ${a.type === 'Class Task' ? 'selected' : ''}>Class Task</option>
          <option value="Project" ${a.type === 'Project' ? 'selected' : ''}>Project</option>
          <option value="Other" ${a.type === 'Other' ? 'selected' : ''}>Other</option>
        </select>
      </td>
      <td>
        <select data-mod="${modId}" data-ass="${a.id}" data-field="status" onchange="window.updateAss(this)">
          <option value="released" ${a.status === 'released' ? 'selected' : ''}>Released</option>
          <option value="pending" ${a.status === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="suppressed" ${a.status === 'suppressed' ? 'selected' : ''}>Suppressed</option>
        </select>
      </td>
      <td><input type="number" value="${a.mark}" placeholder="0–100" data-mod="${modId}" data-ass="${a.id}" data-field="mark" onchange="window.updateAss(this)" step="0.1" min="0" max="100"></td>
      <td><input type="number" value="${a.weight}" placeholder="0" data-mod="${modId}" data-ass="${a.id}" data-field="weight" onchange="window.updateAss(this)" step="0.1" min="0" max="100"></td>
      <td><button class="btn-text" onclick="window.deleteTrackerAssessment('${modId}', '${a.id}')" style="color:var(--danger); font-size:18px;">✕</button></td>
    </tr>
  `).join("");

  $("#main").innerHTML = `
    <div style="margin-bottom: 24px;">
      <button class="btn" onclick="window.backToTracker()" style="margin-bottom: 16px;">← Back to Modules</button>
      <div class="dashboard-header" style="margin:0;">
        <h1>${escapeHtml(mod.name)} <span style="font-size: 18px; color: var(--text-muted); font-weight: 500;">(${escapeHtml(mod.code)})</span></h1>
        <p>Each exam paper is worth <strong>100 marks</strong>. Enter the mark (0–100) and its weight.</p>
      </div>
    </div>

    <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">
      <strong>Released</strong> = actual mark received. <strong>Pending</strong> = exam not yet written or mark not yet received (enter an estimate to include it in the projection).
    </p>

    <div class="tracker-table-wrap">
      <table class="tracker-table">
        <thead>
          <tr>
            <th style="width: 40%;">Type</th>
            <th style="width: 20%;">Status</th>
            <th style="width: 15%;">Mark (/100)</th>
            <th style="width: 15%;">Weight (%)</th>
            <th style="width: 10%;"></th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="5" style="text-align:center; padding: 32px; color: var(--text-muted);">No assessments added yet. Click the button below.</td></tr>`}
        </tbody>
      </table>
    </div>

    <div style="display: flex; gap: 16px; margin-bottom: 32px;">
      <button class="btn btn-primary" onclick="window.addNewAssessment('${modId}')" style="flex: 1;">+ Add Assessment</button>
    </div>

    <div class="tracker-summary-box">
      ${summaryHtml(stats)}
    </div>
  `;
}

function summaryHtml(stats) {
  return `
    <h4>Module Summary</h4>
    <div class="tracker-summary-row">
      <span>Current Mark (Released)</span>
      <strong>${stats.current.toFixed(2)}%</strong>
    </div>
    <div class="tracker-summary-row">
      <span>Remaining Weight (Pending)</span>
      <strong>${stats.remaining.toFixed(2)}%</strong>
    </div>
    <div class="tracker-summary-row total">
      <span>Projected Final Mark</span>
      <strong>${stats.projected.toFixed(2)}%</strong>
    </div>
    <p style="font-size: 13px; color: var(--text-muted); margin: 16px 0 0 0; text-align: center;">
      * Projected mark uses your estimated marks entered in Pending rows.
    </p>
  `;
}

window.backToTracker = function() {
  activeModuleId = null;
  renderTrackerDashboard();
};

window.updateAss = function(el) {
  const modId = el.dataset.mod;
  const assId = el.dataset.ass;
  const field = el.dataset.field;
  const val = el.value;

  const mod = trackerData.find(m => m.id === modId);
  if (mod) {
    const ass = mod.assessments.find(a => a.id === assId);
    if (ass) {
      ass[field] = val;
      saveTrackerData(trackerData);

      const stats = calculateModuleStats(mod);
      const summaryBox = $(".tracker-summary-box");
      if (summaryBox) summaryBox.innerHTML = summaryHtml(stats);
    }
  }
};

// ---------- ROUTER ----------
function renderTimetable() {
  currentChapter = null;
  activeModuleId = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="timetable"]').classList.add("active");

  $("#main").innerHTML = `
    <div class="dashboard-header">
      <h1>Exam Timetable</h1>
      <p>Every module has <strong>two 100-mark exam papers</strong>. Keep track of both dates.</p>
    </div>
    <div class="timetable-widget">
      <div class="timetable-groups">
        ${renderTimetableGroupsHtml()}
      </div>
    </div>
  `;
}

function route() {
  const hash = location.hash || "#home";
  if (hash.startsWith("#chapter/")) {
    activeModuleId = null;
    renderChapter(hash.replace("#chapter/", ""));
  } else if (hash === "#ask") {
    activeModuleId = null;
    renderAskGlobal();
  } else if (hash === "#timetable") {
    activeModuleId = null;
    renderTimetable();
  } else if (hash === "#tracker") {
    renderTracker();
  } else {
    activeModuleId = null;
    renderHome();
  }
  if (window.innerWidth <= 800) $("#sidebar").classList.remove("open");
}

window.addEventListener("hashchange", route);
$("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#resetBtn").addEventListener("click", resetProgress);

$$('[data-nav="home"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#home"; }
}));
$$('[data-nav="timetable"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#timetable"; }
}));
$$('[data-nav="tracker"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#tracker"; }
}));
$$('[data-nav="ask"]').forEach(el => el.addEventListener("click", (e) => {
  if (el.tagName === "A") { e.preventDefault(); location.hash = "#ask"; }
}));

function updateOffline() { $("#offlinePill").hidden = navigator.onLine; }
window.addEventListener("online", updateOffline);
window.addEventListener("offline", updateOffline);

// Register Service Worker for Offline Use
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(reg => {
      console.log("Service Worker registered. Scope:", reg.scope);

      reg.onupdatefound = () => {
        const installingWorker = reg.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              showToast("New update available! Refresh to apply.");
            } else {
              console.log("App cached and ready for offline use!");
              showToast("App ready for offline use!");
            }
          }
        };
      };
    }).catch((err) => {
      console.error("Service Worker registration failed:", err);
      showToast("Offline mode failed to start.");
    });
  });
}

migrateStorage();
applyTheme();
renderSidebar();
updateOffline();
route();
