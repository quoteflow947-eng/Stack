/* Stack — Exam papers. 10 papers total (2 per module, all 100 marks). */

const EXAM_PAPERS = [
  /* ============================================================
     ROM 1 — Paper A: Business Foundations
     ============================================================ */
  {
    id: "rom1_foundations",
    module: "Retail Operations Management 1",
    name: "Business Foundations",
    duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is NOT listed as a challenge for South African entrepreneurs?",
        options: ["Limited access to funding", "Bureaucracy and red tape", "Too much mentorship", "Crime and safety concerns"],
        answer: 2, explanation: "Lack of mentorship is the challenge — not too much of it." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Fixed costs are R150,000, selling price is R20, variable cost is R5. What is the break-even quantity?",
        options: ["7,500 units", "10,000 units", "15,000 units", "30,000 units"],
        answer: 1, explanation: "BEQ = 150,000 ÷ (20 − 5) = 10,000 units." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is a fixed cost for a retail store?",
        options: ["Raw materials", "Monthly rent", "Direct wages", "Packaging per unit"],
        answer: 1, explanation: "Rent does not change with output." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "A company sells 8,000 units in a market of 40,000. What is its market share?",
        options: ["8%", "15%", "20%", "32%"],
        answer: 2, explanation: "8,000 ÷ 40,000 × 100 = 20%." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is the correct order of the four-step control process?",
        options: ["Measure → Set standards → Compare → Correct", "Set standards → Measure → Compare → Correct", "Compare → Set standards → Measure → Correct", "Set standards → Compare → Measure → Correct"],
        answer: 1, explanation: "Standards → Measurement → Comparison → Corrective action." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "List and briefly describe FIVE traits of a successful entrepreneur. (10)",
        modelAnswer: "Any five from: Innovative, Risk-taker (calculated), Self-confident, Hardworking, Goal-oriented, Leadership skills, Decision-making, Persistent, Adaptable, Problem-solver, Creative, Organised.",
        rubric: [
          { label: "Innovative / creative", marks: 2, groups: [["innovative", "creative", "innovate", "innovation"]] },
          { label: "Risk-taker", marks: 2, groups: [["risk", "risk-taker", "calculated risk"]] },
          { label: "Self-confident / self-belief", marks: 2, groups: [["self-confident", "self confident", "confidence", "self-belief"]] },
          { label: "Hardworking / persistent", marks: 2, groups: [["hardworking", "hard work", "persistent", "persistence", "determined"]] },
          { label: "Goal-oriented / leadership / organised", marks: 2, groups: [["goal-oriented", "goals", "leader", "organised", "organized", "adaptive", "adaptable", "problem-solver"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "List FIVE sections that must appear in a business plan. (10)",
        modelAnswer: "Any five from: Cover sheet, Table of contents, Executive summary, Management team, Macro/market analysis, Products/services plan, Marketing plan, Operational plan, Financial plan, Appendices.",
        rubric: [
          { label: "Executive summary", marks: 2, groups: [["executive summary", "executive-summary"]] },
          { label: "Management team", marks: 2, groups: [["management team", "management", "team cv"]] },
          { label: "Market analysis", marks: 2, groups: [["market analysis", "market research", "macro analysis"]] },
          { label: "Marketing plan", marks: 2, groups: [["marketing plan", "marketing strategy"]] },
          { label: "Financial plan / operational", marks: 2, groups: [["financial plan", "financials", "operational plan", "operations plan", "production plan"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Discuss the importance of entrepreneurship for the South African economy and evaluate THREE challenges that entrepreneurs face in South Africa. Provide examples where possible. (30)",
        modelAnswer: "Entrepreneurship is vital for job creation, innovation, economic growth, solving social problems and self-reliance. South African entrepreneurs face: (1) Limited access to funding — banks require collateral; (2) Bureaucracy — lengthy registration; (3) Crime and safety — extra security costs; (4) Skills gaps; (5) Market access against established chains. Evaluation should weigh which is most critical.",
        rubric: [
          { label: "Importance of entrepreneurship (2+)", marks: 8, groups: [["job", "employment"], ["innovation", "new products"], ["economic growth", "economy"], ["social", "community"], ["self-reliance", "self reliance"]] },
          { label: "Challenge 1: Funding", marks: 4, groups: [["funding", "capital", "finance"], ["collateral", "loans", "banks"]] },
          { label: "Challenge 2: Bureaucracy / red tape", marks: 4, groups: [["bureaucracy", "red tape", "registration"]] },
          { label: "Challenge 3: Crime / other", marks: 4, groups: [["crime", "safety", "theft"], ["skills", "market access", "competition"]] },
          { label: "Evaluation / weighing challenges", marks: 6, groups: [["most critical", "greatest", "compare", "evaluate", "more serious", "biggest"]] },
          { label: "Examples", marks: 4, groups: [["for example", "e.g.", "such as", "instance", "spaza", "township"]] }
        ] },
      { section: "D", sectionTitle: "Applied", type: "table", marks: 30,
        prompt: "Complete the break-even and market-share calculations for the three businesses below. (30)",
        description: "Round answers to the nearest whole number. Only the highlighted cells need to be filled in.",
        columns: ["Business", "Fixed Costs (R)", "Price (R)", "Var. Cost (R)", "Total Market (units)", "BEQ (units)", "Market Share % (if sales = BEQ)"],
        rows: [
          { cells: [
            { value: "RetailCo", locked: true }, { value: 120000, locked: true }, { value: 25, locked: true }, { value: 10, locked: true }, { value: 60000, locked: true },
            { expected: 8000, tolerance: 1, marks: 5 },
            { expected: 13.33, tolerance: 0.05, marks: 5 }
          ]},
          { cells: [
            { value: "FashionSA", locked: true }, { value: 90000, locked: true }, { value: 30, locked: true }, { value: 15, locked: true }, { value: 40000, locked: true },
            { expected: 6000, tolerance: 1, marks: 5 },
            { expected: 15, tolerance: 0.05, marks: 5 }
          ]},
          { cells: [
            { value: "GreenMart", locked: true }, { value: 200000, locked: true }, { value: 50, locked: true }, { value: 20, locked: true }, { value: 25000, locked: true },
            { expected: 6667, tolerance: 2, marks: 5 },
            { expected: 26.67, tolerance: 0.05, marks: 5 }
          ]}
        ] }
    ]
  },

  /* ============================================================
     ROM 1 — Paper B: Leadership & Operations
     ============================================================ */
  {
    id: "rom1_leadership",
    module: "Retail Operations Management 1",
    name: "Leadership & Operations",
    duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Leadership focuses on ______, while management focuses on ______.",
        options: ["process and execution; people and vision", "people and vision; process and execution", "authority; influence", "stability; change"],
        answer: 1, explanation: "Leadership = people and vision; Management = process and execution." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "A manager who makes all decisions without consulting staff is using which style?",
        options: ["Democratic", "Laissez-faire", "Autocratic", "Servant"],
        answer: 2, explanation: "Autocratic (authoritarian) leadership." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which type of power comes from the leader's personality and likeability?",
        options: ["Coercive", "Legitimate", "Referent", "Expert"],
        answer: 2, explanation: "Referent power comes from admiration." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "In Maslow's hierarchy, which need comes directly above Safety?",
        options: ["Physiological", "Social", "Esteem", "Self-actualisation"],
        answer: 1, explanation: "Physiological → Safety → Social → Esteem → Self-actualisation." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "In Herzberg's two-factor theory, which of these is a hygiene factor?",
        options: ["Recognition", "Achievement", "Working conditions", "Growth"],
        answer: 2, explanation: "Hygiene factors include working conditions, pay, job security." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Name and briefly describe the THREE leadership styles. (10)",
        modelAnswer: "Autocratic: manager decides alone. Participative/Democratic: managers and employees decide together. Free-rein/Laissez-faire: manager sets objectives and employees work freely.",
        rubric: [
          { label: "Autocratic (authoritarian)", marks: 3, groups: [["autocratic", "authoritarian"]], },
          { label: "Participative (democratic)", marks: 3, groups: [["participative", "democratic", "democracy"]] },
          { label: "Free-rein (laissez-faire)", marks: 4, groups: [["free-rein", "free rein", "laissez", "laissez-faire"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "List and briefly explain FIVE types of power in leadership. (10)",
        modelAnswer: "Coercive (fear), Reward (praise/pay), Legitimate (position), Referent (personality), Expert (knowledge/skills).",
        rubric: [
          { label: "Coercive", marks: 2, groups: [["coercive", "fear", "punishment"]] },
          { label: "Reward", marks: 2, groups: [["reward", "praise", "pay", "promotion"]] },
          { label: "Legitimate", marks: 2, groups: [["legitimate", "position", "title", "job title"]] },
          { label: "Referent", marks: 2, groups: [["referent", "personality", "likeab"]] },
          { label: "Expert", marks: 2, groups: [["expert", "knowledge", "skill", "experience"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Compare transformational and transactional leadership. Evaluate which style is more effective in a retail environment and support your answer with examples. (30)",
        modelAnswer: "Transformational leaders inspire, motivate and encourage innovation and change. Transactional leaders focus on routine, structure, clear tasks, and use rewards/punishments. Retail has both — transactional suits routine shop-floor operations; transformational suits change initiatives (e.g. new brand launch). Evaluation should acknowledge both have a place, but transformational is more durable for growth.",
        rubric: [
          { label: "Defines transformational", marks: 6, groups: [["transformational"], ["inspire", "motivate", "innovate", "change"]] },
          { label: "Defines transactional", marks: 6, groups: [["transactional"], ["reward", "punish", "routine", "structure"]] },
          { label: "Compares both", marks: 6, groups: [["difference", "compare", "whereas", "unlike", "however", "on the other hand"]] },
          { label: "Evaluates effectiveness", marks: 6, groups: [["more effective", "better suited", "best", "evaluation", "depends", "context"]] },
          { label: "Retail examples", marks: 6, groups: [["retail", "store", "shop", "cashier", "manager", "customer", "branch"]] }
        ] },
      { section: "D", sectionTitle: "Applied", type: "table", marks: 30,
        prompt: "Analyse each workplace scenario below. Identify the leadership style, the type of power being used, and the level of Maslow's need being addressed. (30)",
        description: "Use the drop-downs to select the best answer for each scenario.",
        columns: ["Scenario", "Leadership Style", "Power Type", "Maslow Need"],
        rows: [
          { cells: [
            { value: "Manager threatens to fire anyone late again.", locked: true },
            { expected: "autocratic", options: ["autocratic", "democratic", "laissez-faire"], marks: 3 },
            { expected: "coercive", options: ["coercive", "reward", "legitimate", "referent", "expert"], marks: 3 },
            { expected: "safety", options: ["physiological", "safety", "social", "esteem", "self-actualisation"], marks: 4 }
          ]},
          { cells: [
            { value: "Team votes on new shift schedule together.", locked: true },
            { expected: "democratic", options: ["autocratic", "democratic", "laissez-faire"], marks: 3 },
            { expected: "legitimate", options: ["coercive", "reward", "legitimate", "referent", "expert"], marks: 3 },
            { expected: "social", options: ["physiological", "safety", "social", "esteem", "self-actualisation"], marks: 4 }
          ]},
          { cells: [
            { value: "Manager gives bonus for hitting sales targets.", locked: true },
            { expected: "autocratic", options: ["autocratic", "democratic", "laissez-faire"], marks: 3 },
            { expected: "reward", options: ["coercive", "reward", "legitimate", "referent", "expert"], marks: 3 },
            { expected: "esteem", options: ["physiological", "safety", "social", "esteem", "self-actualisation"], marks: 4 }
          ]}
        ] }
    ]
  },

  /* ============================================================
     COMMUNICATION — Paper A: Communicating at Work
     ============================================================ */
  {
    id: "comm_work",
    module: "Communication",
    name: "Communicating at Work",
    duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the process of putting a message into a code called?",
        options: ["Decoding", "Encoding", "Feedback", "Channel"],
        answer: 1, explanation: "Encoding = translating a thought into symbols/words." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which communication model is purely one-way with no feedback loop?",
        options: ["Transactional", "Interactive", "Linear", "Convergence"],
        answer: 2, explanation: "Linear models describe one-way communication." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is 'noise' in the communication process?",
        options: ["Loud talking", "The receiver's response", "Any interference that distorts the message", "The channel used"],
        answer: 2, explanation: "Noise is any interference that distorts the message." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "A till operator escalating a POS error to the floor supervisor is an example of:",
        options: ["Upward communication", "Downward communication", "Diagonal communication", "Informal communication"],
        answer: 0, explanation: "Upward communication flows from staff to management." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is an informal communication channel?",
        options: ["A company handbook", "A policy manual", "The grapevine (office gossip)", "An official performance review"],
        answer: 2, explanation: "The grapevine is the informal network." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Name FIVE of the eight core elements of the communication process. (10)",
        modelAnswer: "Sender/Source, Encoding, Message, Channel/Medium, Receiver, Decoding, Feedback, Interference/Noise.",
        rubric: [
          { label: "Sender / Source", marks: 2, groups: [["sender", "source", "encoder"]] },
          { label: "Encoding", marks: 2, groups: [["encoding", "encode"]] },
          { label: "Message", marks: 2, groups: [["message", "content"]] },
          { label: "Channel", marks: 2, groups: [["channel", "medium", "media"]] },
          { label: "Receiver / Decoding / Feedback / Noise", marks: 2, groups: [["receiver", "decode", "decoding", "feedback", "noise", "interference"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain the difference between a linear communication model and a transactional communication model. (10)",
        modelAnswer: "Linear: one-way, sender to receiver, no feedback loop. Transactional: simultaneous, continuous exchange where both parties act as sender and receiver at the same time, with shared context and feedback.",
        rubric: [
          { label: "Linear = one-way / no feedback", marks: 3, groups: [["one-way", "one way", "no feedback", "single direction"]] },
          { label: "Transactional = simultaneous / continuous", marks: 3, groups: [["simultaneous", "continuous", "both sender", "two-way", "two way"]] },
          { label: "Feedback / context in transactional", marks: 4, groups: [["feedback", "context", "shared experience", "shared meaning"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Discuss the three main types of communication models (linear, interactive, transactional). Explain when each is most appropriate in a retail environment and provide examples. (30)",
        modelAnswer: "Linear (Laswell, Shannon-Weaver): one-way, no feedback, good for announcements (e.g. store policy email, notices). Interactive (Schramm): two-way, turns taken, good for customer queries or staff feedback. Transactional (Barnlund): simultaneous two-way with shared context, best for complex customer negotiations or team meetings. Retail examples: PA announcement (linear), WhatsApp customer enquiry (interactive), face-to-face complaint handling (transactional).",
        rubric: [
          { label: "Explains linear model", marks: 6, groups: [["linear"], ["one-way", "one way", "no feedback"]] },
          { label: "Explains interactive model", marks: 6, groups: [["interactive"], ["two-way", "two way", "turns", "respond"]] },
          { label: "Explains transactional model", marks: 6, groups: [["transactional"], ["simultaneous", "shared context", "continuous"]] },
          { label: "Retail application examples", marks: 6, groups: [["retail", "store", "shop", "customer"], ["example", "e.g.", "instance", "such as"]] },
          { label: "Evaluation / appropriateness", marks: 6, groups: [["appropriate", "best suited", "which to use", "when to use", "depends", "evaluate"]] }
        ] },
      { section: "D", sectionTitle: "Applied Case", type: "essay", marks: 30,
        prompt: "Read the scenario and answer the question that follows.\n\nSCENARIO: A store manager at a mid-sized clothing retailer sends a one-line email to all staff saying 'New uniform policy effective immediately — see attachment'. Over the next week, 12 of 40 staff continue wearing old uniforms. Several complain they never saw the email; others say they couldn't open the attachment.\n\nQUESTION: Analyse this scenario using the communication process. Identify at least THREE barriers to effective communication, and recommend how the manager could have communicated the message more effectively. (30)",
        modelAnswer: "The manager chose a low-richness channel (email) for a policy change with staff. Barriers: medium barrier (email too lean for a policy requiring questions), feedback barrier (no confirmation of receipt/understanding), frame of reference (staff may not check email during shifts), information overload (one-liner + long attachment), possibly noise (unclear subject line). Recommendations: use richer channel (in-person meeting or shift handover), provide feedback loop (sign-off sheet), ensure attachment accessible, use multiple channels, follow up.",
        rubric: [
          { label: "Identifies email/channel choice issue", marks: 5, groups: [["email", "channel", "medium", "low richness", "lean"]] },
          { label: "Identifies feedback barrier", marks: 5, groups: [["feedback", "no confirmation", "no response", "not confirmed"]] },
          { label: "Identifies frame of reference / access issue", marks: 4, groups: [["frame of reference", "didn't see", "attachment", "access", "didn't read"]] },
          { label: "Identifies information overload / unclear message", marks: 4, groups: [["information overload", "unclear", "ambiguous", "too brief", "confusing"]] },
          { label: "Recommends richer channel", marks: 6, groups: [["face-to-face", "in-person", "meeting", "handover", "briefing", "richer"]] },
          { label: "Recommends feedback loop", marks: 6, groups: [["feedback loop", "acknowledge", "confirm", "sign", "follow-up", "follow up"]] }
        ] }
    ]
  },

  /* ============================================================
     COMMUNICATION — Paper B: Communication in Crisis
     ============================================================ */
  {
    id: "comm_crisis",
    module: "Communication",
    name: "Communication in Crisis",
    duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is a Frame of Reference barrier?",
        options: ["A noisy fan in the background", "A manager's ego preventing them from listening", "A bad internet connection", "Sending an email instead of a letter"],
        answer: 1, explanation: "Ego is part of one's frame of reference." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "A culture that relies on implicit communication and reading between the lines is a:",
        options: ["Low-context culture", "High-context culture", "Direct culture", "Monochronic culture"],
        answer: 1, explanation: "High-context cultures rely on implicit cues." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is 'Groupthink'?",
        options: ["Thinking creatively as a team", "The desire for harmony overriding critical thinking", "A method of brainstorming", "When the leader thinks for the group"],
        answer: 1, explanation: "Groupthink prioritises harmony over critical evaluation." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "In the Thomas-Kilmann model, which style is a 'win-win' approach?",
        options: ["Competing", "Accommodating", "Collaborating", "Avoiding"],
        answer: 2, explanation: "Collaborating aims for a win-win solution." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "In Tuckman's model, which stage is characterised by conflict, power struggles and resistance?",
        options: ["Forming", "Storming", "Norming", "Performing"],
        answer: 1, explanation: "The Storming stage is characterised by conflict." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Name the FIVE categories of communication barriers. (10)",
        modelAnswer: "Frame of reference, Perceptual, Noise (physical + psychological), Medium, Feedback.",
        rubric: [
          { label: "Frame of reference", marks: 2, groups: [["frame of reference", "frame-of-reference"]] },
          { label: "Perceptual", marks: 2, groups: [["perceptual", "perception"]] },
          { label: "Noise", marks: 2, groups: [["noise", "physical noise", "psychological noise"]] },
          { label: "Medium", marks: 2, groups: [["medium", "channel", "wrong channel"]] },
          { label: "Feedback", marks: 2, groups: [["feedback", "no feedback"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "List the FIVE conflict modes from the Thomas-Kilmann model and briefly explain each. (10)",
        modelAnswer: "Competing (win-lose, assertive/uncooperative), Collaborating (win-win, assertive/cooperative), Compromising (each gives up something, lose-lose), Avoiding (withdraw), Accommodating (give in).",
        rubric: [
          { label: "Competing", marks: 2, groups: [["competing", "forcing"]] },
          { label: "Collaborating", marks: 2, groups: [["collaborating", "collaboration", "win-win", "win win"]] },
          { label: "Compromising", marks: 2, groups: [["compromising", "compromise"]] },
          { label: "Avoiding", marks: 2, groups: [["avoiding", "withdraw", "avoid"]] },
          { label: "Accommodating", marks: 2, groups: [["accommodating", "accommodate", "give in"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Analyse the VIBE Retail case study. Using Tuckman's stages of group development, explain what stage the team is stuck in and why. Then apply the Thomas-Kilmann model to explain how the manager should resolve the conflict. (30)",
        modelAnswer: "VIBE is stuck in Storming — Chaloe relied on emails (low richness), the newcomer Sakina made an error, and Mihlali publicly humiliated her. Chaloe avoided intervening. The conflict escalated because roles and norms were not established. Resolution: move toward Norming by facilitating face-to-face mediation (Collaborating in TKI), setting clear ground rules, and daily check-ins. This addresses root causes and builds trust.",
        rubric: [
          { label: "Identifies Storming stage", marks: 5, groups: [["storming", "storm"]] },
          { label: "Explains why (conflict, public humiliation, low-richness email)", marks: 6, groups: [["conflict", "humiliat", "email", "low richness", "avoid", "no leadership"]] },
          { label: "References Tuckman's stages", marks: 4, groups: [["tuckman", "forming", "norming", "performing", "adjourning"]] },
          { label: "Recommends Collaborating (TKI)", marks: 6, groups: [["collaborating", "win-win", "win win", "mediation", "face-to-face", "face to face"]] },
          { label: "Practical resolution steps", marks: 5, groups: [["ground rules", "check-in", "check in", "daily", "one-on-one", "one on one"]] },
          { label: "Evaluation of long-term fix", marks: 4, groups: [["long-term", "long term", "sustain", "durable", "trust"]] }
        ] },
      { section: "D", sectionTitle: "Applied Case", type: "essay", marks: 30,
        prompt: "Read the scenario and answer the question.\n\nSCENARIO: SHOPPERS Electronics experienced a 15% drop in customer satisfaction. In a meeting to discuss it, the store manager (Sipho) opened aggressively by blaming floor staff. Floor supervisor (Lerato) blamed online coordinator (Devan) for 'stealing' staff. A junior employee tried to report that POS tills were broken, but Sipho cut him off. Sipho later apologised and facilitated a resolution.\n\nQUESTION: Analyse the communication barriers in this scenario. Identify the type of conflict and evaluate Sipho's shift in conflict style. (30)",
        modelAnswer: "Barriers: psychological (defensiveness from aggression), active silencing (junior cut off → feedback barrier), frame of reference (Sipho blaming floor). Flows: downward (Sipho initiating), upward (junior reporting). Conflict: process conflict (how work gets done) + resource scarcity (staff). Sipho initially used Competing/Forcing; later shifted to Compromising/Collaborating (apologising, facilitating). Evaluation: resolution addresses symptoms not root causes — understaffing and broken POS remain.",
        rubric: [
          { label: "Identifies communication barriers", marks: 6, groups: [["barrier", "defensive", "silencing", "cut off", "frame of reference", "feedback"]] },
          { label: "Identifies communication flows (downward/upward)", marks: 5, groups: [["downward", "upward", "top-down", "bottom-up", "hierarchy"]] },
          { label: "Identifies process/task conflict", marks: 5, groups: [["process conflict", "task conflict", "resource", "scarce", "overlap", "turf"]] },
          { label: "Identifies Competing → Collaborating shift", marks: 6, groups: [["competing", "forcing", "collaborating", "collaboration", "compromise", "shift", "transition"]] },
          { label: "Evaluates resolution", marks: 8, groups: [["symptom", "root cause", "understaff", "POS", "technical", "unsustain", "long-term"]] }
        ] }
    ]
  },

  /* ============================================================
     RETAILING 1 — Paper A: Retail Strategy & Customers
     ============================================================ */
  {
    id: "ret_strategy",
    module: "Retailing 1",
    name: "Retail Strategy & Customers",
    duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is a target market?",
        options: ["A group of people a firm decides to direct its marketing efforts to", "The entire population of a country", "The competitors in a specific area", "A list of all products in a store"],
        answer: 0, explanation: "A target market is the specific group a business aims its marketing at." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is a psychographic segmentation factor?",
        options: ["Age", "Purchase occasion", "Lifestyle", "Income"],
        answer: 2, explanation: "Psychographic includes lifestyle and personality." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is a type of customer service?",
        options: ["In-store assistance", "After-sales service", "Online support", "All of the above"],
        answer: 3, explanation: "All are valid types of customer service." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "In the FAB acronym, what does the B stand for?",
        options: ["Buying", "Bargain", "Benefits", "Balance"],
        answer: 2, explanation: "FAB = Features, Advantages, Benefits." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the FIRST step in the 9-step sales process?",
        options: ["Approaching the customer", "Preparing for the sale", "Overcoming obstacles", "Completing paperwork"],
        answer: 1, explanation: "Step 1 is preparing for the sale." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Name the FOUR main bases for market segmentation and give an example of each. (10)",
        modelAnswer: "Profile/Demographic (age, income, gender); Geographic (local, regional); Psychographic (lifestyle, personality); Behavioural (usage rate, occasion).",
        rubric: [
          { label: "Demographic/Profile", marks: 2, groups: [["demographic", "profile", "age", "income", "gender"]] },
          { label: "Geographic", marks: 2, groups: [["geographic", "location", "region", "area"]] },
          { label: "Psychographic", marks: 2, groups: [["psychographic", "lifestyle", "personality"]] },
          { label: "Behavioural", marks: 2, groups: [["behavioural", "behavioral", "usage", "occasion", "benefit"]] },
          { label: "Example provided", marks: 2, groups: [["for example", "e.g.", "such as", "instance"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain FOUR types of obstacles a salesperson may encounter and how to overcome each. (10)",
        modelAnswer: "Real (product actually lacks feature), Misinformed (customer believes wrong info), Emotional (fear, anxiety), Delaying (need to think). Overcome by clarifying, offering alternatives, providing evidence, following up.",
        rubric: [
          { label: "Real obstacle", marks: 2, groups: [["real", "genuine", "actual lack"]] },
          { label: "Misinformed obstacle", marks: 2, groups: [["misinformed", "wrong info", "mistaken", "false belief"]] },
          { label: "Emotional obstacle", marks: 2, groups: [["emotional", "feeling", "anxiety", "fear"]] },
          { label: "Delaying obstacle", marks: 2, groups: [["delay", "think about", "later", "postpone"]] },
          { label: "Overcoming tactics", marks: 2, groups: [["clarify", "explain", "evidence", "alternative", "follow up", "follow-up"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Explain customer segmentation. Discuss its benefits for a retail business and evaluate which segmentation base is most useful for a South African township retailer. (30)",
        modelAnswer: "Segmentation = dividing the market into distinct, homogenous subgroups (Kotler). Benefits: focused marketing, product development, customer loyalty, better customer service, competitive advantage. For township retail, a mix of Profile (income), Behavioural (small pack purchases, daily buying) and Geographic (near transport) is most useful. Evaluation: demographic + behavioural together are more useful than either alone.",
        rubric: [
          { label: "Defines segmentation", marks: 5, groups: [["segment", "distinct group", "dividing market", "subgroup"]] },
          { label: "Lists benefits", marks: 8, groups: [["focus", "loyalty", "customer service", "product development", "competitive", "targeting"]] },
          { label: "Discusses bases", marks: 6, groups: [["demographic", "geographic", "psychographic", "behavioural", "behavioral"]] },
          { label: "Evaluates for township context", marks: 7, groups: [["township", "south african", "spaza", "informal", "low income"]] },
          { label: "Conclusion / recommendation", marks: 4, groups: [["conclude", "recommend", "in summary", "therefore", "overall"]] }
        ] },
      { section: "D", sectionTitle: "Applied", type: "table", marks: 30,
        prompt: "Classify each customer description under the correct segmentation base. (30)",
        description: "Choose the best-fitting segmentation base for each customer.",
        columns: ["Customer Description", "Segmentation Base"],
        rows: [
          { cells: [
            { value: "Sipho is a 22-year-old student earning R3,000 a month.", locked: true },
            { expected: "demographic", options: ["demographic", "geographic", "psychographic", "behavioural"], marks: 5 }
          ]},
          { cells: [
            { value: "Naledi buys a 2L cold drink every Friday for her family.", locked: true },
            { expected: "behavioural", options: ["demographic", "geographic", "psychographic", "behavioural"], marks: 5 }
          ]},
          { cells: [
            { value: "Thandi only shops at stores within 3km of her home.", locked: true },
            { expected: "geographic", options: ["demographic", "geographic", "psychographic", "behavioural"], marks: 5 }
          ]},
          { cells: [
            { value: "Johan is an adventurous eco-conscious buyer who values sustainability.", locked: true },
            { expected: "psychographic", options: ["demographic", "geographic", "psychographic", "behavioural"], marks: 5 }
          ]},
          { cells: [
            { value: "Grace buys a new dress every payday as a personal treat.", locked: true },
            { expected: "behavioural", options: ["demographic", "geographic", "psychographic", "behavioural"], marks: 5 }
          ]},
          { cells: [
            { value: "Musa lives in Khayelitsha and shops locally.", locked: true },
            { expected: "geographic", options: ["demographic", "geographic", "psychographic", "behavioural"], marks: 5 }
          ]}
        ] }
    ]
  },

  /* ============================================================
     RETAILING 1 — Paper B: Retail Operations & Environment
     ============================================================ */
  {
    id: "ret_operations",
    module: "Retailing 1",
    name: "Retail Operations & Environment",
    duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "A store located in a shopping mall is an example of:",
        options: ["Central Business District", "Shopping Center/Mall", "Online retail", "Freestanding site"],
        answer: 1, explanation: "A mall is a Shopping Center." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of these is a key element of retail merchandising?",
        options: ["Product assortment", "Pricing strategy", "Visual merchandising", "All of the above"],
        answer: 3, explanation: "All are key elements." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Township consumers often prefer:",
        options: ["Large pack sizes", "Smaller pack sizes", "Expensive luxury items", "Buying in bulk monthly"],
        answer: 1, explanation: "They prefer smaller pack sizes due to income constraints." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is a consumer right under the CPA?",
        options: ["Right to be misled", "Right to safety", "Right to steal", "Right to ignore prices"],
        answer: 1, explanation: "The right to safety is a fundamental customer right." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "In the Eisenhower Matrix, tasks that are Urgent and Important should be:",
        options: ["Delegated", "Done first", "Scheduled", "Not done at all"],
        answer: 1, explanation: "Urgent and Important tasks are done first." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain the FIVE-step retail location selection process. (10)",
        modelAnswer: "1. Market research and data analysis. 2. Identify potential sites. 3. Site evaluation and feasibility study. 4. Financial analysis and budgeting. 5. Final selection and negotiation.",
        rubric: [
          { label: "Market research", marks: 2, groups: [["market research", "data analysis", "research"]] },
          { label: "Identify sites", marks: 2, groups: [["identify", "potential sites", "shortlist"]] },
          { label: "Evaluate / feasibility", marks: 2, groups: [["feasibility", "evaluate", "assess"]] },
          { label: "Financial analysis", marks: 2, groups: [["financial", "budget", "cost", "analysis"]] },
          { label: "Final selection / negotiate", marks: 2, groups: [["select", "negotiate", "final", "sign"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Discuss FOUR challenges faced by township retailers in South Africa. (10)",
        modelAnswer: "Security issues (crime, theft), infrastructure limitations (roads, electricity), competition from informal traders, access to finance. Also: seasonal demand, transport costs.",
        rubric: [
          { label: "Security / crime", marks: 3, groups: [["security", "crime", "theft", "safety", "looting"]] },
          { label: "Infrastructure", marks: 3, groups: [["infrastructure", "roads", "electricity", "water", "internet"]] },
          { label: "Informal competition", marks: 2, groups: [["informal", "competition", "spaza", "street vendor"]] },
          { label: "Finance / funding", marks: 2, groups: [["finance", "funding", "capital", "loan", "cash flow"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Discuss the characteristics of South African township retailing. Evaluate the challenges and opportunities that retailers face in this environment, and propose strategies to succeed. (30)",
        modelAnswer: "Township characteristics: high population density, lower-to-middle income, mix of formal and informal trade. Challenges: security, infrastructure, competition, price sensitivity. Opportunities: growing market, community loyalty, digital transformation, small-pack trend. Strategies: affordable pricing, community engagement, localised products, radio/flyers/word-of-mouth.",
        rubric: [
          { label: "Describes township characteristics", marks: 6, groups: [["high density", "population", "low income", "middle income", "informal", "formal"]] },
          { label: "Identifies challenges", marks: 6, groups: [["security", "crime", "infrastructure", "competition", "price sensitive"]] },
          { label: "Identifies opportunities", marks: 6, groups: [["opportunity", "growth", "digital", "loyalty", "small pack"]] },
          { label: "Proposes strategies", marks: 8, groups: [["affordable", "community", "localise", "localize", "radio", "flyer", "word-of-mouth", "word of mouth"]] },
          { label: "Conclusion", marks: 4, groups: [["conclusion", "overall", "in summary", "therefore"]] }
        ] },
      { section: "D", sectionTitle: "Applied", type: "table", marks: 30,
        prompt: "Classify each retail scenario under the relevant legislation or concept. (30)",
        description: "Select the best classification for each scenario.",
        columns: ["Scenario", "Classification"],
        rows: [
          { cells: [
            { value: "A customer returns a defective kettle after 3 days.", locked: true },
            { expected: "cpa", options: ["cpa", "eca", "none"], marks: 5 }
          ]},
          { cells: [
            { value: "A retailer sends SMS marketing without opt-in.", locked: true },
            { expected: "eca", options: ["cpa", "eca", "none"], marks: 5 }
          ]},
          { cells: [
            { value: "Shop displays goods without price tags.", locked: true },
            { expected: "cpa", options: ["cpa", "eca", "none"], marks: 5 }
          ]},
          { cells: [
            { value: "A customer is misled about product origin.", locked: true },
            { expected: "cpa", options: ["cpa", "eca", "none"], marks: 5 }
          ]},
          { cells: [
            { value: "Store sends promotional email to an existing customer who never opted out.", locked: true },
            { expected: "eca", options: ["cpa", "eca", "none"], marks: 5 }
          ]},
          { cells: [
            { value: "Retailer advertises a product that has no stock.", locked: true },
            { expected: "cpa", options: ["cpa", "eca", "none"], marks: 5 }
          ]}
        ] }
    ]
  },

  /* ============================================================
     RFM 1 — Paper A: Financial Calculations
     ============================================================ */
  {
    id: "rfm_calculations",
    module: "Retail Financial Management 1",
    name: "Financial Calculations",
    duration: 150,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the current standard VAT rate in South Africa?",
        options: ["14%", "15%", "16%", "0%"],
        answer: 1, explanation: "The standard rate is 15% since 1 April 2018." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which inventory valuation method assumes the oldest stock is sold first?",
        options: ["Weighted Average", "FIFO", "LIFO", "Specific Identification"],
        answer: 1, explanation: "FIFO assumes oldest stock is sold first." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "How is the weighted average price calculated?",
        options: ["Total units ÷ Total value", "Total value ÷ Total units", "Highest − Lowest price", "Selling price × 15%"],
        answer: 1, explanation: "Weighted average = Total value ÷ Total units." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What does the EOQ formula help a business calculate?",
        options: ["Total profit", "The optimal order size", "Break-even point", "VAT payable"],
        answer: 1, explanation: "EOQ calculates the optimal order size." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the purpose of Safety Stock?",
        options: ["To fill warehouse space", "To act as a buffer against delivery delays", "To increase carrying costs", "To replace EOQ"],
        answer: 1, explanation: "Safety stock protects against lead time variations." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain how VAT payable to SARS is calculated. Include the definition of Input VAT and Output VAT. (10)",
        modelAnswer: "Output VAT is VAT charged on sales (collected from customers). Input VAT is VAT paid on purchases (from suppliers). VAT payable to SARS = Output VAT − Input VAT.",
        rubric: [
          { label: "Defines Output VAT", marks: 3, groups: [["output vat", "output", "sales vat", "vat on sales"]] },
          { label: "Defines Input VAT", marks: 3, groups: [["input vat", "input", "purchase vat", "vat on purchase"]] },
          { label: "Formula: Output − Input", marks: 4, groups: [["output vat minus input", "output − input", "output - input", "subtract input", "difference"]] }
        ] },
      { section: "C", sectionTitle: "Table 1: FIFO Ledger", type: "table", marks: 40,
        prompt: "Complete the missing FIFO ledger values. (40)",
        description: "The following transactions occurred during March. Fill in the empty cells.",
        columns: ["Date", "Received Units", "Issued Units", "Balance Units", "Unit Cost (R)", "Balance Value (R)"],
        rows: [
          { cells: [
            { value: "1 Mar", locked: true }, { value: 100, locked: true }, { value: "—", locked: true }, { value: 100, locked: true }, { value: 10, locked: true }, { value: 1000, locked: true }
          ]},
          { cells: [
            { value: "5 Mar", locked: true }, { value: 200, locked: true }, { value: "—", locked: true },
            { expected: 300, tolerance: 0, marks: 5 },
            { value: 12, locked: true },
            { expected: 3400, tolerance: 0, marks: 5 }
          ]},
          { cells: [
            { value: "10 Mar", locked: true }, { value: "—", locked: true },
            { expected: 150, tolerance: 0, marks: 3 },
            { expected: 150, tolerance: 0, marks: 3 },
            { value: "10 & 12", locked: true },
            { expected: 1800, tolerance: 5, marks: 4 }
          ]},
          { cells: [
            { value: "15 Mar", locked: true }, { value: 100, locked: true }, { value: "—", locked: true },
            { expected: 250, tolerance: 0, marks: 3 },
            { value: 15, locked: true },
            { expected: 3300, tolerance: 5, marks: 4 }
          ]},
          { cells: [
            { value: "20 Mar", locked: true }, { value: "—", locked: true },
            { expected: 100, tolerance: 0, marks: 3 },
            { expected: 150, tolerance: 0, marks: 3 },
            { value: "12 & 15", locked: true },
            { expected: 2100, tolerance: 5, marks: 4 }
          ]},
          { cells: [
            { value: "Closing stock (units)", locked: true }, { value: "", locked: true }, { value: "", locked: true },
            { expected: 150, tolerance: 0, marks: 3 },
            { value: "—", locked: true },
            { expected: 2100, tolerance: 5, marks: 3 }
          ]}
        ] },
      { section: "D", sectionTitle: "Table 2: VAT Calculations", type: "table", marks: 30,
        prompt: "Complete the VAT table. (30)",
        description: "Round all answers to the nearest rand. Use 15% VAT.",
        columns: ["Item", "Price (excl VAT)", "VAT Amount", "Price (incl VAT)", "VAT payable to SARS"],
        rows: [
          { cells: [
            { value: "Item A", locked: true }, { value: 500, locked: true },
            { expected: 75, tolerance: 0.5, marks: 3 },
            { expected: 575, tolerance: 0.5, marks: 3 },
            { value: "—", locked: true }
          ]},
          { cells: [
            { value: "Item B", locked: true }, { value: 1200, locked: true },
            { expected: 180, tolerance: 0.5, marks: 3 },
            { expected: 1380, tolerance: 0.5, marks: 3 },
            { value: "—", locked: true }
          ]},
          { cells: [
            { value: "Item C", locked: true },
            { expected: 2000, tolerance: 0.5, marks: 4 },
            { value: 300, locked: true },
            { expected: 2300, tolerance: 0.5, marks: 3 },
            { value: "—", locked: true }
          ]},
          { cells: [
            { value: "Item D", locked: true },
            { expected: 1000, tolerance: 0.5, marks: 4 },
            { value: 150, locked: true },
            { expected: 1150, tolerance: 0.5, marks: 3 },
            { value: "—", locked: true }
          ]},
          { cells: [
            { value: "TOTAL", locked: true }, { value: 4700, locked: true }, { value: 705, locked: true }, { value: 5405, locked: true },
            { expected: 705, tolerance: 2, marks: 4 }
          ]}
        ] }
    ]
  },

  /* ============================================================
     RFM 1 — Paper B: Costing & Analysis
     ============================================================ */
  {
    id: "rfm_analysis",
    module: "Retail Financial Management 1",
    name: "Costing & Analysis",
    duration: 150,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which of the following is a Variable Cost?",
        options: ["Factory rent", "Raw materials", "Insurance", "Salaries of admin staff"],
        answer: 1, explanation: "Raw materials vary with production output." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is a Sunk Cost?",
        options: ["A cost that changes with production", "A cost already incurred and cannot be changed", "The cost of making a decision", "The cost of the next best alternative"],
        answer: 1, explanation: "Sunk costs are historical and irrelevant to future decisions." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the formula for Contribution Margin?",
        options: ["Sales − Fixed Costs", "Sales − Variable Costs", "Fixed + Variable Costs", "Profit + Fixed Costs"],
        answer: 1, explanation: "CM = Sales − Variable Costs." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which ratio measures a company's ability to pay short-term debts WITHOUT relying on inventory?",
        options: ["Current Ratio", "Quick Ratio", "Gross Profit Margin", "Return on Assets"],
        answer: 1, explanation: "The Quick Ratio excludes inventory." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "If Cost of Sales is R200,000 and Average Stock is R40,000, what is the Stock Turnover?",
        options: ["2 times", "5 times", "10 times", "20 times"],
        answer: 1, explanation: "200,000 ÷ 40,000 = 5 times." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain the difference between fixed costs and variable costs. Give an example of each. (10)",
        modelAnswer: "Fixed costs do not change with production (e.g. rent). Variable costs change directly with production (e.g. raw materials). Fixed cost per unit decreases as production increases; variable cost per unit stays constant.",
        rubric: [
          { label: "Defines fixed costs", marks: 3, groups: [["fixed", "does not change", "constant", "same regardless"]] },
          { label: "Example of fixed cost", marks: 2, groups: [["rent", "insurance", "salaries", "lease"]] },
          { label: "Defines variable costs", marks: 3, groups: [["variable", "changes with", "varies", "proportional"]] },
          { label: "Example of variable cost", marks: 2, groups: [["raw material", "materials", "direct labour", "packaging", "wages"]] }
        ] },
      { section: "C", sectionTitle: "Table 1: CVP Analysis", type: "table", marks: 40,
        prompt: "Complete the Cost-Volume-Profit analysis. (40)",
        description: "Round all answers to the nearest whole number unless stated.",
        columns: ["Metric", "Formula", "Value"],
        rows: [
          { cells: [
            { value: "Selling price per unit", locked: true }, { value: "Given", locked: true }, { value: 100, locked: true }
          ]},
          { cells: [
            { value: "Variable cost per unit", locked: true }, { value: "Given", locked: true }, { value: 60, locked: true }
          ]},
          { cells: [
            { value: "Fixed costs (total)", locked: true }, { value: "Given", locked: true }, { value: 20000, locked: true }
          ]},
          { cells: [
            { value: "Contribution Margin per unit", locked: true }, { value: "Price − Variable", locked: true },
            { expected: 40, tolerance: 0, marks: 5 }
          ]},
          { cells: [
            { value: "CM Ratio", locked: true }, { value: "CM ÷ Price × 100", locked: true },
            { expected: 40, tolerance: 0.5, marks: 5 }
          ]},
          { cells: [
            { value: "Break-Even (units)", locked: true }, { value: "Fixed ÷ CM per unit", locked: true },
            { expected: 500, tolerance: 0, marks: 6 }
          ]},
          { cells: [
            { value: "Break-Even (Rand)", locked: true }, { value: "BEP units × Price", locked: true },
            { expected: 50000, tolerance: 2, marks: 6 }
          ]},
          { cells: [
            { value: "Target Profit units (target = R10,000)", locked: true }, { value: "(Fixed + Target) ÷ CM", locked: true },
            { expected: 750, tolerance: 0, marks: 6 }
          ]},
          { cells: [
            { value: "Margin of Safety (units) if actual = 600", locked: true }, { value: "Actual − BEP", locked: true },
            { expected: 100, tolerance: 0, marks: 6 }
          ]},
          { cells: [
            { value: "Profit at 800 units", locked: true }, { value: "(Units × CM) − Fixed", locked: true },
            { expected: 12000, tolerance: 2, marks: 6 }
          ]}
        ] },
      { section: "D", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Discuss THREE financial ratios used to evaluate a company's performance. Analyse what a HIGH and LOW value of each ratio might indicate. Provide recommendations to a retail manager based on your analysis. (30)",
        modelAnswer: "Three ratios: (1) Current Ratio = CA ÷ CL (ideal 1.5:1). High = excess idle assets; Low = liquidity risk. (2) Quick Ratio = (CA − Inventory) ÷ CL (ideal 1:1). High = cash-rich; Low = over-reliant on inventory. (3) Gross Profit Margin = GP ÷ Sales × 100. High = strong pricing; Low = discounting or high COGS. Recommendations: adjust inventory, negotiate supplier terms, review pricing strategy.",
        rubric: [
          { label: "Current Ratio explained", marks: 6, groups: [["current ratio", "current assets", "current liabilities"]] },
          { label: "Quick Ratio explained", marks: 6, groups: [["quick ratio", "acid test", "exclude inventory", "without inventory"]] },
          { label: "Profitability ratio explained", marks: 6, groups: [["gross profit", "net profit", "profit margin", "profitability"]] },
          { label: "High vs low interpretation", marks: 6, groups: [["high", "low", "indicate", "means", "suggest", "signal"]] },
          { label: "Recommendations", marks: 6, groups: [["recommend", "should", "advise", "action", "improve", "review"]] }
        ] }
    ]
  },

  /* ============================================================
     BCA — Paper A: Documents & Files
     ============================================================ */
  {
    id: "bca_documents",
    module: "Business Computer Applications",
    name: "Documents & Files",
    duration: 90,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Where should you save the original downloaded ZIP file according to the file-management activity?",
        options: ["Solutions folder", "Backup Files folder", "Data Files folder", "Image Files folder"],
        answer: 1, explanation: "The ZIP stays in the Backup folder; extracted files go to Data Files." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which tab in Word is used to insert a Header and Footer?",
        options: ["Home", "Insert", "Layout", "Design"],
        answer: 1, explanation: "Headers and footers are under Insert tab." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the shortcut to select all text in a Word document?",
        options: ["Ctrl+C", "Ctrl+V", "Ctrl+A", "Ctrl+P"],
        answer: 2, explanation: "Ctrl+A selects all." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "To make an image sit inside a paragraph with text wrapping around it, you set:",
        options: ["Watermark", "Page Orientation", "Wrap Text to 'Tight'", "Font Size"],
        answer: 2, explanation: "Wrap Text → Tight." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the feature that makes the first letter of a paragraph large and drops it into the text?",
        options: ["WordArt", "Drop Cap", "Watermark", "Header"],
        answer: 1, explanation: "Drop Cap." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Describe the folder structure you would create for a retail business, listing at least FIVE sub-folders and their purpose. (10)",
        modelAnswer: "Main folder + subfolders: Solutions, Backup Files, Data Files (with Image Files and Other Files inside). Each folder organises files by purpose or type.",
        rubric: [
          { label: "Main folder mentioned", marks: 2, groups: [["main", "root", "top", "personal"]] },
          { label: "Solutions / working folder", marks: 2, groups: [["solution", "working", "active"]] },
          { label: "Backup folder", marks: 2, groups: [["backup", "archive"]] },
          { label: "Data files folder", marks: 2, groups: [["data file", "data"]] },
          { label: "Sub-folders (images/other)", marks: 2, groups: [["image", "picture", "other file", "documents"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain how you would insert an automatic date in a Word footer that updates every time you open the document. (10)",
        modelAnswer: "Insert tab → Footer → Blank. Go to Insert → Date & Time. Choose the date format. Tick 'Update automatically'. Click OK. The date updates whenever the document is reopened.",
        rubric: [
          { label: "Insert footer first", marks: 2, groups: [["insert", "footer"]] },
          { label: "Use Date & Time feature", marks: 3, groups: [["date", "time", "date & time", "date and time"]] },
          { label: "Choose format", marks: 2, groups: [["format", "style"]] },
          { label: "Tick update automatically", marks: 3, groups: [["update automatically", "auto-update", "auto update", "updates every time"]] }
        ] },
      { section: "C", sectionTitle: "Table: Word Features", type: "table", marks: 30,
        prompt: "Match each Word task to the correct menu path. (30)",
        description: "Select the correct path for each Word task.",
        columns: ["Task", "Menu Path"],
        rows: [
          { cells: [
            { value: "Insert a header", locked: true },
            { expected: "Insert → Header", options: ["Insert → Header", "Design → Header", "Home → Header", "Layout → Header"], marks: 5 }
          ]},
          { cells: [
            { value: "Add a text watermark", locked: true },
            { expected: "Design → Watermark", options: ["Insert → Watermark", "Design → Watermark", "Layout → Watermark", "Home → Watermark"], marks: 5 }
          ]},
          { cells: [
            { value: "Create two columns with a line between", locked: true },
            { expected: "Layout → Columns", options: ["Insert → Columns", "Layout → Columns", "Home → Columns", "Design → Columns"], marks: 5 }
          ]},
          { cells: [
            { value: "Insert a drop cap", locked: true },
            { expected: "Insert → Drop Cap", options: ["Insert → Drop Cap", "Design → Drop Cap", "Home → Drop Cap", "Layout → Drop Cap"], marks: 5 }
          ]},
          { cells: [
            { value: "Change page orientation", locked: true },
            { expected: "Layout → Orientation", options: ["Insert → Orientation", "Layout → Orientation", "Design → Orientation", "View → Orientation"], marks: 5 }
          ]},
          { cells: [
            { value: "Find and replace with red font", locked: true },
            { expected: "Home → Find & Replace", options: ["Home → Find & Replace", "Insert → Replace", "Design → Replace", "Layout → Replace"], marks: 5 }
          ]}
        ] },
      { section: "D", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Discuss the steps a student would follow to format a professional retail report in MS Word. Include at least FIVE formatting features and explain why each is important. (30)",
        modelAnswer: "Steps: set page layout (A4, margins, orientation), insert header/footer with name and date, apply consistent fonts and 1.5 spacing, add WordArt or styled title, use columns for long sections, insert images with Wrap Text set to Tight, add tables with merged cells and shading, use Find & Replace with formatting, apply Drop Cap to open paragraphs, add a Watermark. Each improves readability, professionalism and consistency.",
        rubric: [
          { label: "Page setup / margins / orientation", marks: 5, groups: [["page setup", "margin", "orientation", "a4"]] },
          { label: "Header / footer / date", marks: 5, groups: [["header", "footer", "page number", "date"]] },
          { label: "Fonts and spacing", marks: 5, groups: [["font", "spacing", "1.5", "arial", "line"]] },
          { label: "Images / WordArt / Drop Cap", marks: 5, groups: [["image", "picture", "wordart", "drop cap", "wrap text"]] },
          { label: "Tables and formatting", marks: 5, groups: [["table", "merge", "shading", "cell"]] },
          { label: "Justifies each (why important)", marks: 5, groups: [["important", "because", "why", "improves", "professional", "readable"]] }
        ] }
    ]
  },

  /* ============================================================
     BCA — Paper B: Data & Presentation
     ============================================================ */
  {
    id: "bca_data",
    module: "Business Computer Applications",
    name: "Data & Presentation",
    duration: 90,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which Excel function adds up a range of numbers?",
        options: ["=ADD()", "=SUM()", "=TOTAL()", "=AVERAGE()"],
        answer: 1, explanation: "SUM adds up a range." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What does the $ symbol do in a formula like $K$3?",
        options: ["Makes text bold", "Locks the cell reference (absolute)", "Adds currency", "Calculates percentages"],
        answer: 1, explanation: "It locks the cell reference." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "Which tab in Access is used to import Excel data?",
        options: ["Home tab", "External Data tab", "Create tab", "Database Tools tab"],
        answer: 1, explanation: "External Data tab → Import." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is a Query used for in Access?",
        options: ["Designing reports", "Extracting specific data from tables", "Formatting text", "Creating charts"],
        answer: 1, explanation: "Queries extract specific data." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4,
        prompt: "What is the difference between a Transition and an Animation in PowerPoint?",
        options: ["Transition is for text, Animation is for slides", "Transition is how a slide enters, Animation is how objects move on the slide", "They are the same", "Animation is only for videos"],
        answer: 1, explanation: "Transitions are for slides, Animations are for objects." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Explain how you would use VLOOKUP in Excel to find a customer's phone number from their name. (10)",
        modelAnswer: "Use =VLOOKUP(lookup_value, table_array, column_index, FALSE). Lookup value = customer name cell. Table array = the range containing names and phone numbers. Column index = the phone number's position. FALSE = exact match. Example: =VLOOKUP(A2, Customers!$A$2:$C$50, 3, FALSE).",
        rubric: [
          { label: "VLOOKUP function syntax", marks: 3, groups: [["vlookup", "v look up"]] },
          { label: "Lookup value = name", marks: 2, groups: [["lookup value", "lookup_value", "name", "first column"]] },
          { label: "Table range with columns", marks: 2, groups: [["table array", "table_array", "range", "column"]] },
          { label: "Column index number", marks: 2, groups: [["column index", "column_index", "col index", "column number"]] },
          { label: "FALSE for exact match", marks: 1, groups: [["false", "exact match", "exact"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10,
        prompt: "Describe the steps to import an Excel spreadsheet into Access and create a Query from it. (10)",
        modelAnswer: "Open External Data → New Data Source → From File → Excel. Select file, tick 'First Row Contains Column Headings', choose 'In a New Table', save. Then Create → Query Design → add the table → select fields → click Run (!) → save query.",
        rubric: [
          { label: "External Data tab", marks: 2, groups: [["external data", "external"]] },
          { label: "From File → Excel", marks: 2, groups: [["from file", "excel", "import"]] },
          { label: "First row contains headings", marks: 2, groups: [["first row", "column headings", "headers", "headings"]] },
          { label: "Query Design", marks: 2, groups: [["query design", "create query", "query"]] },
          { label: "Run query", marks: 2, groups: [["run", "exclamation", "execute", "show result"]] }
        ] },
      { section: "C", sectionTitle: "Table: Excel Functions", type: "table", marks: 30,
        prompt: "Match each business scenario to the correct Excel function. (30)",
        description: "Select the correct function for each scenario.",
        columns: ["Scenario", "Correct Function"],
        rows: [
          { cells: [
            { value: "Calculate the total of column G", locked: true },
            { expected: "SUM", options: ["SUM", "AVERAGE", "COUNT", "MAX", "IF"], marks: 5 }
          ]},
          { cells: [
            { value: "Find the average salary in F4:F52", locked: true },
            { expected: "AVERAGE", options: ["SUM", "AVERAGE", "COUNT", "MAX", "IF"], marks: 5 }
          ]},
          { cells: [
            { value: "Mark each row GOOD if profit > R1,300,000", locked: true },
            { expected: "IF", options: ["SUM", "AVERAGE", "COUNT", "MAX", "IF"], marks: 5 }
          ]},
          { cells: [
            { value: "Find the highest quantity ordered", locked: true },
            { expected: "MAX", options: ["SUM", "AVERAGE", "COUNT", "MAX", "IF"], marks: 5 }
          ]},
          { cells: [
            { value: "Count how many employees have surnames", locked: true },
            { expected: "COUNTA", options: ["SUM", "COUNTA", "COUNT", "MAX", "IF"], marks: 5 }
          ]},
          { cells: [
            { value: "Look up a customer's phone number by name", locked: true },
            { expected: "VLOOKUP", options: ["SUM", "VLOOKUP", "COUNT", "MAX", "IF"], marks: 5 }
          ]}
        ] },
      { section: "D", sectionTitle: "Essay", type: "essay", marks: 30,
        prompt: "Discuss how a small retail business could use Excel, Access and PowerPoint together in its operations. Evaluate the role of each application and provide at least TWO practical examples for each. (30)",
        modelAnswer: "Excel: sales tracking, VAT calculations, CVP analysis, ratios. Access: customer database, stock queries, reports. PowerPoint: staff training, investor pitch, monthly sales reviews. Each application plays a distinct role: Excel for calculations, Access for data relationships, PowerPoint for communication. Together they form an end-to-end office toolkit.",
        rubric: [
          { label: "Excel role discussed", marks: 5, groups: [["excel"], ["spreadsheet", "calculation", "formula"]] },
          { label: "Excel examples", marks: 4, groups: [["sales", "vat", "inventory", "budget", "forecast"]] },
          { label: "Access role discussed", marks: 5, groups: [["access"], ["database", "table", "query", "record"]] },
          { label: "Access examples", marks: 4, groups: [["customer database", "customer table", "stock query", "report", "records"]] },
          { label: "PowerPoint role discussed", marks: 5, groups: [["powerpoint", "presentation", "slide"], ["communicate", "training", "pitch", "show"]] },
          { label: "Integration / evaluation", marks: 7, groups: [["together", "integrate", "combine", "workflow", "end-to-end", "all three", "each application"]] }
        ] }
    ]
  }
];

// Helper functions for exam lookup
function findExamPaper(paperId) {
  return EXAM_PAPERS.find(p => p.id === paperId);
}
function getExamsByModule(moduleName) {
  return EXAM_PAPERS.filter(p => p.module === moduleName);
}
function getTotalExamMarks(paper) {
  return paper.questions.reduce((sum, q) => {
    if (q.type === "table") {
      return sum + q.rows.reduce((rs, row) =>
        rs + row.cells.reduce((cs, cell) =>
          cs + (cell.marks || 0), 0), 0);
    }
    return sum + (q.marks || 0);
  }, 0);
}
