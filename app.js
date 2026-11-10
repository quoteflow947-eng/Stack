/* Stack — Complete single-file app.js (exams embedded) */

console.log("%c✅ Stack v3 app.js loaded", "background:#10b981;color:#fff;padding:6px 12px;border-radius:4px;font-weight:800");

// ============================================================
//  EXAM DATA — embedded here, no separate file needed
// ============================================================
const EXAM_PAPERS = [
  /* ===== ROM 1 — Business Foundations ===== */
  {
    id: "rom1_foundations", module: "Retail Operations Management 1", name: "Business Foundations", duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which is NOT a listed challenge for SA entrepreneurs?", options: ["Limited funding", "Bureaucracy", "Too much mentorship", "Crime"], answer: 2, explanation: "Lack of mentorship is the challenge, not too much." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Fixed costs R150,000, price R20, variable cost R5. Break-even quantity?", options: ["7,500", "10,000", "15,000", "30,000"], answer: 1, explanation: "150,000 ÷ (20−5) = 10,000." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which is a fixed cost?", options: ["Raw materials", "Monthly rent", "Direct wages", "Packaging"], answer: 1, explanation: "Rent does not change with output." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "8,000 units sold in a 40,000 market. Market share?", options: ["8%", "15%", "20%", "32%"], answer: 2, explanation: "8,000 ÷ 40,000 × 100 = 20%." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Correct order of the control process?", options: ["Measure→Set→Compare→Correct", "Set→Measure→Compare→Correct", "Compare→Set→Measure→Correct", "Set→Compare→Measure→Correct"], answer: 1, explanation: "Standards → Measure → Compare → Correct." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "List and briefly describe FIVE traits of a successful entrepreneur. (10)", modelAnswer: "Innovative, Risk-taker, Self-confident, Hardworking, Goal-oriented, Leader, Decision-maker, Persistent, Adaptable, Problem-solver, Creative, Organised.",
        rubric: [
          { label: "Innovative / creative", marks: 2, groups: [["innovative","creative","innovation"]] },
          { label: "Risk-taker", marks: 2, groups: [["risk"]] },
          { label: "Self-confident", marks: 2, groups: [["confident","confidence"]] },
          { label: "Hardworking / persistent", marks: 2, groups: [["hardworking","persistent","determined"]] },
          { label: "Goal / leadership / organised", marks: 2, groups: [["goal","leader","organised","adaptable","problem"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Name FIVE sections of a business plan. (10)", modelAnswer: "Cover sheet, Table of contents, Executive summary, Management team, Market analysis, Products/services, Marketing plan, Operational plan, Financial plan, Appendices.",
        rubric: [
          { label: "Executive summary", marks: 2, groups: [["executive","summary"]] },
          { label: "Management team", marks: 2, groups: [["management","team"]] },
          { label: "Market analysis", marks: 2, groups: [["market","analysis"]] },
          { label: "Marketing plan", marks: 2, groups: [["marketing","plan"]] },
          { label: "Financial / operational", marks: 2, groups: [["financial","operational","appendices"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Discuss the importance of entrepreneurship to the SA economy and evaluate THREE challenges entrepreneurs face. (30)", modelAnswer: "Entrepreneurship creates jobs, drives innovation, grows the economy, solves social problems, and encourages self-reliance. Challenges: funding (collateral required), bureaucracy, crime (security costs), skills gaps, market access. Evaluation should weigh severity.",
        rubric: [
          { label: "Importance points", marks: 8, groups: [["job","employment"],["innovation"],["economy","growth"],["social","community"],["self-reliance"]] },
          { label: "Challenge: funding", marks: 4, groups: [["funding","capital"],["collateral","banks"]] },
          { label: "Challenge: bureaucracy", marks: 4, groups: [["bureaucracy","red tape","registration"]] },
          { label: "Challenge: crime/other", marks: 4, groups: [["crime","safety"],["skills","market"]] },
          { label: "Evaluation", marks: 6, groups: [["most critical","greatest","compare","evaluate"]] },
          { label: "Examples", marks: 4, groups: [["for example","such as","e.g."]] }
        ] },
      { section: "D", sectionTitle: "Applied Table", type: "table", marks: 30, prompt: "Complete the break-even and market-share calculations. (30)", description: "Round to whole numbers.",
        columns: ["Business","Fixed (R)","Price (R)","Var (R)","Market","BEQ","Share %"],
        rows: [
          { cells: [ {value:"RetailCo",locked:true},{value:120000,locked:true},{value:25,locked:true},{value:10,locked:true},{value:60000,locked:true},{expected:8000,tolerance:1,marks:5},{expected:13.33,tolerance:0.05,marks:5} ] },
          { cells: [ {value:"FashionSA",locked:true},{value:90000,locked:true},{value:30,locked:true},{value:15,locked:true},{value:40000,locked:true},{expected:6000,tolerance:1,marks:5},{expected:15,tolerance:0.05,marks:5} ] },
          { cells: [ {value:"GreenMart",locked:true},{value:200000,locked:true},{value:50,locked:true},{value:20,locked:true},{value:25000,locked:true},{expected:6667,tolerance:2,marks:5},{expected:26.67,tolerance:0.05,marks:5} ] }
        ] }
    ]
  },

  /* ===== ROM 1 — Leadership & Operations ===== */
  {
    id: "rom1_leadership", module: "Retail Operations Management 1", name: "Leadership & Operations", duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Leadership focuses on ___; management on ___.", options: ["process; people", "people & vision; process & execution", "authority; influence", "stability; change"], answer: 1, explanation: "Leadership = vision; management = execution." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Manager decides alone. Which style?", options: ["Democratic", "Laissez-faire", "Autocratic", "Servant"], answer: 2, explanation: "Autocratic." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Power from personality/likeability?", options: ["Coercive", "Legitimate", "Referent", "Expert"], answer: 2, explanation: "Referent power." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Maslow need above Safety?", options: ["Physiological", "Social", "Esteem", "Self-actualisation"], answer: 1, explanation: "Order: Physio→Safety→Social→Esteem→Self-act." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Herzberg hygiene factor?", options: ["Recognition", "Achievement", "Working conditions", "Growth"], answer: 2, explanation: "Working conditions are hygiene." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Name and describe the THREE leadership styles. (10)", modelAnswer: "Autocratic (decides alone), Participative/Democratic (decides together), Free-rein/Laissez-faire (employees work freely).",
        rubric: [
          { label: "Autocratic", marks: 3, groups: [["autocratic","authoritarian"]] },
          { label: "Participative/Democratic", marks: 3, groups: [["participative","democratic"]] },
          { label: "Free-rein", marks: 4, groups: [["free-rein","laissez","free rein"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain FIVE types of power. (10)", modelAnswer: "Coercive (fear), Reward (pay/praise), Legitimate (position), Referent (personality), Expert (knowledge).",
        rubric: [
          { label: "Coercive", marks: 2, groups: [["coercive","fear"]] },
          { label: "Reward", marks: 2, groups: [["reward","pay","praise"]] },
          { label: "Legitimate", marks: 2, groups: [["legitimate","position"]] },
          { label: "Referent", marks: 2, groups: [["referent","personality"]] },
          { label: "Expert", marks: 2, groups: [["expert","knowledge","skill"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Compare transformational and transactional leadership. Evaluate which is more effective in retail. (30)", modelAnswer: "Transformational inspires, motivates, encourages innovation/change. Transactional focuses on routine, structure, rewards/punishments. Retail has both — transactional suits shop-floor routine; transformational suits change initiatives. Both have a place.",
        rubric: [
          { label: "Transformational defined", marks: 6, groups: [["transformational"],["inspire","motivate","innovate","change"]] },
          { label: "Transactional defined", marks: 6, groups: [["transactional"],["reward","punish","routine"]] },
          { label: "Comparison", marks: 6, groups: [["difference","compare","whereas","unlike"]] },
          { label: "Evaluation", marks: 6, groups: [["more effective","depends","context","both"]] },
          { label: "Retail examples", marks: 6, groups: [["retail","store","shop","cashier","manager"]] }
        ] },
      { section: "D", sectionTitle: "Applied Table", type: "table", marks: 30, prompt: "Analyse each workplace scenario. Identify leadership style, power type, and Maslow need. (30)", description: "Use the drop-downs.",
        columns: ["Scenario","Style","Power","Maslow Need"],
        rows: [
          { cells: [ {value:"Threatens to fire late staff.",locked:true},{expected:"autocratic",options:["autocratic","democratic","laissez-faire"],marks:3},{expected:"coercive",options:["coercive","reward","legitimate","referent","expert"],marks:3},{expected:"safety",options:["physiological","safety","social","esteem","self-actualisation"],marks:4} ] },
          { cells: [ {value:"Team votes on schedule.",locked:true},{expected:"democratic",options:["autocratic","democratic","laissez-faire"],marks:3},{expected:"legitimate",options:["coercive","reward","legitimate","referent","expert"],marks:3},{expected:"social",options:["physiological","safety","social","esteem","self-actualisation"],marks:4} ] },
          { cells: [ {value:"Bonus for hitting targets.",locked:true},{expected:"autocratic",options:["autocratic","democratic","laissez-faire"],marks:3},{expected:"reward",options:["coercive","reward","legitimate","referent","expert"],marks:3},{expected:"esteem",options:["physiological","safety","social","esteem","self-actualisation"],marks:4} ] }
        ] }
    ]
  },

  /* ===== Communication — Communicating at Work ===== */
  {
    id: "comm_work", module: "Communication", name: "Communicating at Work", duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Putting a message into a code is called?", options: ["Decoding", "Encoding", "Feedback", "Channel"], answer: 1, explanation: "Encoding." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which model has no feedback loop?", options: ["Transactional", "Interactive", "Linear", "Convergence"], answer: 2, explanation: "Linear = one-way." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "What is 'noise'?", options: ["Loud talking", "Receiver response", "Anything that distorts the message", "Channel"], answer: 2, explanation: "Noise = interference." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Till operator escalating POS error is:", options: ["Upward", "Downward", "Diagonal", "Informal"], answer: 0, explanation: "Upward = staff to management." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Informal channel example?", options: ["Handbook", "Manual", "The grapevine", "Performance review"], answer: 2, explanation: "Grapevine = informal." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Name FIVE of the 8 core elements of the communication process. (10)", modelAnswer: "Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback, Noise.",
        rubric: [
          { label: "Sender", marks: 2, groups: [["sender","source"]] },
          { label: "Encoding", marks: 2, groups: [["encoding"]] },
          { label: "Message", marks: 2, groups: [["message"]] },
          { label: "Channel", marks: 2, groups: [["channel","medium"]] },
          { label: "Receiver/Decoding/Feedback/Noise", marks: 2, groups: [["receiver","decode","feedback","noise"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain the difference between linear and transactional models. (10)", modelAnswer: "Linear = one-way, sender to receiver, no feedback. Transactional = simultaneous, continuous, both act as sender and receiver with shared context.",
        rubric: [
          { label: "Linear = one-way", marks: 3, groups: [["one-way","one way","no feedback"]] },
          { label: "Transactional = simultaneous", marks: 3, groups: [["simultaneous","continuous","both sender"]] },
          { label: "Feedback/context in transactional", marks: 4, groups: [["feedback","context","shared"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 40, prompt: "Discuss the three types of communication models and explain when each is most appropriate in retail. (40)", modelAnswer: "Linear (Laswell, Shannon-Weaver): one-way, no feedback — good for announcements. Interactive (Schramm): two-way turns — good for queries. Transactional (Barnlund): simultaneous, shared context — best for complex negotiations. Retail examples: PA (linear), WhatsApp enquiry (interactive), face-to-face complaint (transactional).",
        rubric: [
          { label: "Explains linear", marks: 8, groups: [["linear"],["one-way","no feedback"]] },
          { label: "Explains interactive", marks: 8, groups: [["interactive"],["two-way","turns"]] },
          { label: "Explains transactional", marks: 8, groups: [["transactional"],["simultaneous","shared context"]] },
          { label: "Retail examples", marks: 8, groups: [["retail","store","shop","customer"],["example","instance"]] },
          { label: "Evaluation", marks: 8, groups: [["appropriate","best suited","when to use","depends"]] }
        ] },
      { section: "D", sectionTitle: "Applied Case Essay", type: "essay", marks: 30, prompt: "SCENARIO: A store manager emails one line to staff: 'New uniform policy — see attachment.' 12 of 40 staff keep wearing old uniforms; some didn't see email; others couldn't open the attachment.\n\nQUESTION: Analyse using the communication process. Identify THREE barriers and recommend improvements. (30)", modelAnswer: "Barriers: medium barrier (email too lean for policy change), feedback barrier (no confirmation), frame of reference (staff don't check email), information overload (long attachment). Recommendations: richer channel (meeting), feedback loop (sign-off), multiple channels, accessible formats.",
        rubric: [
          { label: "Identifies email/channel issue", marks: 5, groups: [["email","channel","medium","low richness"]] },
          { label: "Feedback barrier", marks: 5, groups: [["feedback","confirmation","no response"]] },
          { label: "Frame of reference/access", marks: 4, groups: [["frame of reference","didn't see","attachment","access"]] },
          { label: "Info overload/unclear", marks: 4, groups: [["information overload","unclear","ambiguous"]] },
          { label: "Richer channel recommendation", marks: 6, groups: [["face-to-face","meeting","briefing","richer"]] },
          { label: "Feedback loop recommendation", marks: 6, groups: [["feedback loop","acknowledge","confirm","follow-up"]] }
        ] }
    ]
  },

  /* ===== Communication — Communication in Crisis ===== */
  {
    id: "comm_crisis", module: "Communication", name: "Communication in Crisis", duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which is a Frame of Reference barrier?", options: ["Noisy fan", "Manager's ego", "Bad connection", "Email vs letter"], answer: 1, explanation: "Ego = frame of reference." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "High-context culture relies on:", options: ["Explicit words", "Implicit cues", "Charts", "Contracts"], answer: 1, explanation: "High-context = implicit." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "What is Groupthink?", options: ["Creative thinking", "Desire for harmony overriding critical thinking", "Brainstorming", "Leader decides"], answer: 1, explanation: "Groupthink harms decisions." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "TKI win-win style?", options: ["Competing", "Accommodating", "Collaborating", "Avoiding"], answer: 2, explanation: "Collaborating = win-win." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Tuckman stage with conflict/power struggles?", options: ["Forming", "Storming", "Norming", "Performing"], answer: 1, explanation: "Storming." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Name the FIVE categories of communication barriers. (10)", modelAnswer: "Frame of reference, Perceptual, Noise (physical+psychological), Medium, Feedback.",
        rubric: [
          { label: "Frame of reference", marks: 2, groups: [["frame of reference"]] },
          { label: "Perceptual", marks: 2, groups: [["perceptual","perception"]] },
          { label: "Noise", marks: 2, groups: [["noise"]] },
          { label: "Medium", marks: 2, groups: [["medium","channel"]] },
          { label: "Feedback", marks: 2, groups: [["feedback"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "List the FIVE Thomas-Kilmann conflict modes and briefly explain each. (10)", modelAnswer: "Competing (win-lose, assertive), Collaborating (win-win), Compromising (each gives up), Avoiding (withdraw), Accommodating (give in).",
        rubric: [
          { label: "Competing", marks: 2, groups: [["competing","forcing"]] },
          { label: "Collaborating", marks: 2, groups: [["collaborating","win-win"]] },
          { label: "Compromising", marks: 2, groups: [["compromising"]] },
          { label: "Avoiding", marks: 2, groups: [["avoiding","withdraw"]] },
          { label: "Accommodating", marks: 2, groups: [["accommodating","give in"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 40, prompt: "Analyse the VIBE Retail case. Using Tuckman's stages, identify what stage the team is stuck in. Then apply Thomas-Kilmann to explain how the manager should resolve the conflict. (40)", modelAnswer: "VIBE is stuck in Storming — low-richness emails, public humiliation, no intervention. Resolution: move to Norming by facilitating face-to-face mediation (Collaborating in TKI), setting ground rules, daily check-ins.",
        rubric: [
          { label: "Identifies Storming", marks: 8, groups: [["storming"]] },
          { label: "Explains why", marks: 8, groups: [["conflict","humiliat","email","low richness","avoid"]] },
          { label: "Tuckman stages referenced", marks: 6, groups: [["tuckman","forming","norming","performing"]] },
          { label: "Collaborating (TKI)", marks: 8, groups: [["collaborating","win-win","mediation","face-to-face"]] },
          { label: "Practical resolution steps", marks: 6, groups: [["ground rules","check-in","daily","one-on-one"]] },
          { label: "Long-term evaluation", marks: 4, groups: [["long-term","sustain","trust"]] }
        ] },
      { section: "D", sectionTitle: "Applied Case Essay", type: "essay", marks: 30, prompt: "SCENARIO: SHOPPERS Electronics — 15% drop in satisfaction. Manager blames floor staff aggressively. Supervisor blames online coordinator. Junior employee cut off trying to report broken POS. Manager later apologises.\n\nQUESTION: Analyse the communication barriers, identify the type of conflict, and evaluate the manager's style shift. (30)", modelAnswer: "Barriers: defensiveness, active silencing (feedback barrier), frame of reference. Flows: downward (initiating), upward (junior cut off). Conflict: process + resource scarcity. Style: Competing → Compromising/Collaborating. Evaluation: fixes symptoms, not root causes.",
        rubric: [
          { label: "Communication barriers", marks: 6, groups: [["barrier","defensive","silencing","cut off","feedback"]] },
          { label: "Flows (downward/upward)", marks: 5, groups: [["downward","upward","hierarchy"]] },
          { label: "Process/task conflict", marks: 5, groups: [["process conflict","task","resource","scarce"]] },
          { label: "Competing→Collaborating shift", marks: 6, groups: [["competing","forcing","collaborating","shift"]] },
          { label: "Evaluation", marks: 8, groups: [["symptom","root cause","understaff","POS","unsustain"]] }
        ] }
    ]
  },

  /* ===== Retailing 1 — Retail Strategy & Customers ===== */
  {
    id: "ret_strategy", module: "Retailing 1", name: "Retail Strategy & Customers", duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "What is a target market?", options: ["All buyers", "A specific group a firm directs marketing to", "Competitors", "All products"], answer: 1, explanation: "Target = specific group." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Psychographic factor?", options: ["Age", "Purchase occasion", "Lifestyle", "Income"], answer: 2, explanation: "Lifestyle = psychographic." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which is a customer service type?", options: ["In-store", "After-sales", "Online", "All of the above"], answer: 3, explanation: "All are types." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "FAB = Features, Advantages, ___?", options: ["Buying", "Bargain", "Benefits", "Balance"], answer: 2, explanation: "Benefits." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "First step in sales process?", options: ["Approach", "Preparing", "Obstacles", "Paperwork"], answer: 1, explanation: "Step 1 = preparing." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Name the FOUR segmentation bases and give an example of each. (10)", modelAnswer: "Demographic (age), Geographic (region), Psychographic (lifestyle), Behavioural (usage).",
        rubric: [
          { label: "Demographic", marks: 2, groups: [["demographic","profile","age","income"]] },
          { label: "Geographic", marks: 2, groups: [["geographic","location","region"]] },
          { label: "Psychographic", marks: 2, groups: [["psychographic","lifestyle","personality"]] },
          { label: "Behavioural", marks: 2, groups: [["behavioural","usage","occasion"]] },
          { label: "Example", marks: 2, groups: [["for example","such as","e.g."]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain FOUR obstacles in selling and how to overcome each. (10)", modelAnswer: "Real, Misinformed, Emotional, Delaying. Overcome by clarifying, providing evidence, offering alternatives, following up.",
        rubric: [
          { label: "Real", marks: 2, groups: [["real","genuine"]] },
          { label: "Misinformed", marks: 2, groups: [["misinformed","wrong info"]] },
          { label: "Emotional", marks: 2, groups: [["emotional","feeling","fear"]] },
          { label: "Delaying", marks: 2, groups: [["delay","think about","later"]] },
          { label: "Tactics", marks: 2, groups: [["clarify","evidence","alternative","follow up"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Explain customer segmentation, discuss its benefits, and evaluate which base is most useful for a South African township retailer. (30)", modelAnswer: "Segmentation = dividing the market into distinct homogenous groups. Benefits: focus, loyalty, product development, better service, competitive edge. For township retail, a mix of demographic (income), behavioural (small packs, daily buying), and geographic is most useful.",
        rubric: [
          { label: "Defines segmentation", marks: 5, groups: [["segment","distinct group","dividing","subgroup"]] },
          { label: "Benefits", marks: 8, groups: [["focus","loyalty","service","product development","competitive"]] },
          { label: "Discusses bases", marks: 6, groups: [["demographic","geographic","psychographic","behavioural"]] },
          { label: "Evaluates township", marks: 7, groups: [["township","south african","spaza","informal","income"]] },
          { label: "Conclusion", marks: 4, groups: [["conclude","recommend","overall","therefore"]] }
        ] },
      { section: "D", sectionTitle: "Applied Table", type: "table", marks: 30, prompt: "Classify each customer under the correct segmentation base. (30)", description: "Choose the base.",
        columns: ["Customer","Base"],
        rows: [
          { cells: [ {value:"22-year-old student, R3,000/month.",locked:true},{expected:"demographic",options:["demographic","geographic","psychographic","behavioural"],marks:5} ] },
          { cells: [ {value:"Buys 2L cold drink every Friday.",locked:true},{expected:"behavioural",options:["demographic","geographic","psychographic","behavioural"],marks:5} ] },
          { cells: [ {value:"Shops within 3km of home.",locked:true},{expected:"geographic",options:["demographic","geographic","psychographic","behavioural"],marks:5} ] },
          { cells: [ {value:"Eco-conscious, adventurous buyer.",locked:true},{expected:"psychographic",options:["demographic","geographic","psychographic","behavioural"],marks:5} ] },
          { cells: [ {value:"Buys a new dress every payday.",locked:true},{expected:"behavioural",options:["demographic","geographic","psychographic","behavioural"],marks:5} ] },
          { cells: [ {value:"Lives in Khayelitsha, shops locally.",locked:true},{expected:"geographic",options:["demographic","geographic","psychographic","behavioural"],marks:5} ] }
        ] }
    ]
  },

  /* ===== Retailing 1 — Retail Operations & Environment ===== */
  {
    id: "ret_operations", module: "Retailing 1", name: "Retail Operations & Environment", duration: 120,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Store in a mall is which type?", options: ["CBD", "Shopping Center/Mall", "Online", "Freestanding"], answer: 1, explanation: "Mall = Shopping Center." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Key merchandising element?", options: ["Assortment", "Pricing", "Visual", "All of the above"], answer: 3, explanation: "All are elements." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Township consumers prefer:", options: ["Large packs", "Smaller packs", "Luxury items", "Monthly bulk"], answer: 1, explanation: "Smaller packs." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which is a customer right under CPA?", options: ["To be misled", "To safety", "To steal", "To ignore prices"], answer: 1, explanation: "Right to safety." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Eisenhower: Urgent+Important tasks are:", options: ["Delegated", "Done first", "Scheduled", "Ignored"], answer: 1, explanation: "Done first." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain the FIVE-step retail location selection process. (10)", modelAnswer: "1. Market research. 2. Identify sites. 3. Evaluate/feasibility. 4. Financial analysis. 5. Final selection/negotiate.",
        rubric: [
          { label: "Market research", marks: 2, groups: [["market research","data analysis"]] },
          { label: "Identify sites", marks: 2, groups: [["identify","potential sites"]] },
          { label: "Feasibility", marks: 2, groups: [["feasibility","evaluate"]] },
          { label: "Financial", marks: 2, groups: [["financial","budget"]] },
          { label: "Select/negotiate", marks: 2, groups: [["select","negotiate","sign"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Discuss FOUR challenges faced by township retailers. (10)", modelAnswer: "Security/crime, infrastructure limitations, informal competition, finance/funding.",
        rubric: [
          { label: "Security/crime", marks: 3, groups: [["security","crime","theft","looting"]] },
          { label: "Infrastructure", marks: 3, groups: [["infrastructure","roads","electricity"]] },
          { label: "Informal competition", marks: 2, groups: [["informal","competition","spaza"]] },
          { label: "Finance", marks: 2, groups: [["finance","funding","capital"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Discuss the characteristics of South African township retailing. Evaluate challenges and opportunities, and propose strategies to succeed. (30)", modelAnswer: "Characteristics: high density, lower-middle income, mixed formal/informal. Challenges: security, infrastructure, competition, price sensitivity. Opportunities: growth, community loyalty, digital. Strategies: affordable pricing, community engagement, localised products, radio/flyers.",
        rubric: [
          { label: "Characteristics", marks: 6, groups: [["density","income","informal","formal"]] },
          { label: "Challenges", marks: 6, groups: [["security","infrastructure","competition","price"]] },
          { label: "Opportunities", marks: 6, groups: [["opportunity","growth","digital","loyalty"]] },
          { label: "Strategies", marks: 8, groups: [["affordable","community","localise","radio","flyer"]] },
          { label: "Conclusion", marks: 4, groups: [["conclusion","summary","therefore"]] }
        ] },
      { section: "D", sectionTitle: "Applied Table", type: "table", marks: 30, prompt: "Classify each scenario under the relevant legislation or concept. (30)", description: "Choose the classification.",
        columns: ["Scenario","Classification"],
        rows: [
          { cells: [ {value:"Customer returns defective kettle.",locked:true},{expected:"cpa",options:["cpa","eca","none"],marks:5} ] },
          { cells: [ {value:"Retailer sends SMS without opt-in.",locked:true},{expected:"eca",options:["cpa","eca","none"],marks:5} ] },
          { cells: [ {value:"Shop displays goods without prices.",locked:true},{expected:"cpa",options:["cpa","eca","none"],marks:5} ] },
          { cells: [ {value:"Customer misled about origin.",locked:true},{expected:"cpa",options:["cpa","eca","none"],marks:5} ] },
          { cells: [ {value:"Promotional email to opted-out customer.",locked:true},{expected:"eca",options:["cpa","eca","none"],marks:5} ] },
          { cells: [ {value:"Advertises stock that doesn't exist.",locked:true},{expected:"cpa",options:["cpa","eca","none"],marks:5} ] }
        ] }
    ]
  },

  /* ===== RFM 1 — Financial Calculations ===== */
  {
    id: "rfm_calculations", module: "Retail Financial Management 1", name: "Financial Calculations", duration: 150,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Current SA VAT rate?", options: ["14%", "15%", "16%", "0%"], answer: 1, explanation: "15%." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which method sells oldest stock first?", options: ["WAVCO", "FIFO", "LIFO", "Specific"], answer: 1, explanation: "FIFO." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Weighted average price formula?", options: ["Units ÷ Value", "Value ÷ Units", "Highest − Lowest", "Price × 15%"], answer: 1, explanation: "Value ÷ Units." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "EOQ helps calculate?", options: ["Profit", "Optimal order size", "Break-even", "VAT"], answer: 1, explanation: "Optimal order size." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Safety Stock purpose?", options: ["Warehouse fill", "Buffer against delays", "Increase costs", "Replace EOQ"], answer: 1, explanation: "Buffer." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain how VAT payable to SARS is calculated. Define Input and Output VAT. (10)", modelAnswer: "Output VAT = VAT charged on sales. Input VAT = VAT paid on purchases. VAT payable = Output − Input.",
        rubric: [
          { label: "Output VAT defined", marks: 3, groups: [["output vat","vat on sales"]] },
          { label: "Input VAT defined", marks: 3, groups: [["input vat","vat on purchase"]] },
          { label: "Formula", marks: 4, groups: [["output minus input","output-input","subtract input"]] }
        ] },
      { section: "C", sectionTitle: "FIFO Ledger", type: "table", marks: 40, prompt: "Complete the FIFO ledger. (40)", description: "Fill in empty cells.",
        columns: ["Date","Recv Units","Issued Units","Bal Units","Cost (R)","Bal Value (R)"],
        rows: [
          { cells: [ {value:"1 Mar",locked:true},{value:100,locked:true},{value:"—",locked:true},{value:100,locked:true},{value:10,locked:true},{value:1000,locked:true} ] },
          { cells: [ {value:"5 Mar",locked:true},{value:200,locked:true},{value:"—",locked:true},{expected:300,tolerance:0,marks:5},{value:12,locked:true},{expected:3400,tolerance:0,marks:5} ] },
          { cells: [ {value:"10 Mar",locked:true},{value:"—",locked:true},{expected:150,tolerance:0,marks:3},{expected:150,tolerance:0,marks:3},{value:"10 & 12",locked:true},{expected:1800,tolerance:5,marks:4} ] },
          { cells: [ {value:"15 Mar",locked:true},{value:100,locked:true},{value:"—",locked:true},{expected:250,tolerance:0,marks:3},{value:15,locked:true},{expected:3300,tolerance:5,marks:4} ] },
          { cells: [ {value:"20 Mar",locked:true},{value:"—",locked:true},{expected:100,tolerance:0,marks:3},{expected:150,tolerance:0,marks:3},{value:"12 & 15",locked:true},{expected:2100,tolerance:5,marks:4} ] },
          { cells: [ {value:"Closing",locked:true},{value:"",locked:true},{value:"",locked:true},{expected:150,tolerance:0,marks:3},{value:"—",locked:true},{expected:2100,tolerance:5,marks:3} ] }
        ] },
      { section: "D", sectionTitle: "VAT Table", type: "table", marks: 30, prompt: "Complete the VAT table. (30)", description: "Round to nearest rand.",
        columns: ["Item","Excl (R)","VAT (R)","Incl (R)","VAT to SARS (R)"],
        rows: [
          { cells: [ {value:"A",locked:true},{value:500,locked:true},{expected:75,tolerance:0.5,marks:3},{expected:575,tolerance:0.5,marks:3},{value:"—",locked:true} ] },
          { cells: [ {value:"B",locked:true},{value:1200,locked:true},{expected:180,tolerance:0.5,marks:3},{expected:1380,tolerance:0.5,marks:3},{value:"—",locked:true} ] },
          { cells: [ {value:"C",locked:true},{expected:2000,tolerance:0.5,marks:4},{value:300,locked:true},{expected:2300,tolerance:0.5,marks:3},{value:"—",locked:true} ] },
          { cells: [ {value:"D",locked:true},{expected:1000,tolerance:0.5,marks:4},{value:150,locked:true},{expected:1150,tolerance:0.5,marks:3},{value:"—",locked:true} ] },
          { cells: [ {value:"TOTAL",locked:true},{value:4700,locked:true},{value:705,locked:true},{value:5405,locked:true},{expected:705,tolerance:2,marks:4} ] }
        ] }
    ]
  },

  /* ===== RFM 1 — Costing & Analysis ===== */
  {
    id: "rfm_analysis", module: "Retail Financial Management 1", name: "Costing & Analysis", duration: 150,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which is a variable cost?", options: ["Rent", "Raw materials", "Insurance", "Admin salaries"], answer: 1, explanation: "Materials vary with output." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Sunk cost is?", options: ["Changes with production", "Already incurred, cannot be changed", "Decision cost", "Alternative cost"], answer: 1, explanation: "Historical, irrelevant." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Contribution Margin formula?", options: ["Sales−Fixed", "Sales−Variable", "Fixed+Variable", "Profit+Fixed"], answer: 1, explanation: "Sales − Variable." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Ratio without inventory?", options: ["Current", "Quick", "Gross Margin", "ROA"], answer: 1, explanation: "Quick ratio." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Cost of Sales R200k, Avg Stock R40k. Stock turnover?", options: ["2", "5", "10", "20"], answer: 1, explanation: "200k ÷ 40k = 5." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain the difference between fixed and variable costs. Give an example of each. (10)", modelAnswer: "Fixed = does not change with production (rent). Variable = changes with production (materials). Fixed per unit decreases as production increases.",
        rubric: [
          { label: "Defines fixed", marks: 3, groups: [["fixed","does not change","constant"]] },
          { label: "Example of fixed", marks: 2, groups: [["rent","insurance","lease"]] },
          { label: "Defines variable", marks: 3, groups: [["variable","changes with","varies"]] },
          { label: "Example of variable", marks: 2, groups: [["raw material","materials","direct labour"]] }
        ] },
      { section: "C", sectionTitle: "CVP Table", type: "table", marks: 40, prompt: "Complete the CVP analysis. (40)", description: "Round to whole numbers.",
        columns: ["Metric","Formula","Value"],
        rows: [
          { cells: [ {value:"Price",locked:true},{value:"Given",locked:true},{value:100,locked:true} ] },
          { cells: [ {value:"Variable",locked:true},{value:"Given",locked:true},{value:60,locked:true} ] },
          { cells: [ {value:"Fixed",locked:true},{value:"Given",locked:true},{value:20000,locked:true} ] },
          { cells: [ {value:"CM/unit",locked:true},{value:"Price − Var",locked:true},{expected:40,tolerance:0,marks:5} ] },
          { cells: [ {value:"CM Ratio",locked:true},{value:"CM ÷ Price × 100",locked:true},{expected:40,tolerance:0.5,marks:5} ] },
          { cells: [ {value:"BEP units",locked:true},{value:"Fixed ÷ CM",locked:true},{expected:500,tolerance:0,marks:6} ] },
          { cells: [ {value:"BEP Rand",locked:true},{value:"BEP × Price",locked:true},{expected:50000,tolerance:2,marks:6} ] },
          { cells: [ {value:"Target units (R10k)",locked:true},{value:"(Fixed+Target)÷CM",locked:true},{expected:750,tolerance:0,marks:6} ] },
          { cells: [ {value:"Margin of Safety (600 units)",locked:true},{value:"Actual − BEP",locked:true},{expected:100,tolerance:0,marks:6} ] },
          { cells: [ {value:"Profit at 800 units",locked:true},{value:"(Units×CM)−Fixed",locked:true},{expected:12000,tolerance:2,marks:6} ] }
        ] },
      { section: "D", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Discuss THREE financial ratios. Analyse what high and low values indicate. Provide recommendations. (30)", modelAnswer: "Current ratio = CA÷CL (ideal 1.5:1). High = idle assets; Low = liquidity risk. Quick ratio = (CA−Inventory)÷CL (ideal 1:1). Gross profit margin = GP÷Sales×100. Recommendations: adjust inventory, negotiate supplier terms, review pricing.",
        rubric: [
          { label: "Current Ratio", marks: 6, groups: [["current ratio","current assets","liabilities"]] },
          { label: "Quick Ratio", marks: 6, groups: [["quick ratio","acid test","exclude inventory"]] },
          { label: "Profitability", marks: 6, groups: [["gross profit","profit margin","profitability"]] },
          { label: "High vs low interpretation", marks: 6, groups: [["high","low","indicate","means"]] },
          { label: "Recommendations", marks: 6, groups: [["recommend","should","improve","review"]] }
        ] }
    ]
  },

  /* ===== BCA — Documents & Files ===== */
  {
    id: "bca_documents", module: "Business Computer Applications", name: "Documents & Files", duration: 90,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Where to save the ZIP file?", options: ["Solutions", "Backup Files", "Data Files", "Image Files"], answer: 1, explanation: "Backup Files." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Insert header is on which tab?", options: ["Home", "Insert", "Layout", "Design"], answer: 1, explanation: "Insert tab." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Select all shortcut?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+A", "Ctrl+P"], answer: 2, explanation: "Ctrl+A." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Image wrap setting for inline?", options: ["Watermark", "Orientation", "Wrap Text → Tight", "Font"], answer: 2, explanation: "Wrap Text → Tight." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Large first letter feature?", options: ["WordArt", "Drop Cap", "Watermark", "Header"], answer: 1, explanation: "Drop Cap." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Describe a folder structure for a retail business. List at least FIVE sub-folders. (10)", modelAnswer: "Main folder + Solutions, Backup Files, Data Files (with Images and Other subfolders), each organised by purpose/type.",
        rubric: [
          { label: "Main folder", marks: 2, groups: [["main","root","top"]] },
          { label: "Solutions", marks: 2, groups: [["solution","working","active"]] },
          { label: "Backup", marks: 2, groups: [["backup","archive"]] },
          { label: "Data Files", marks: 2, groups: [["data file","data"]] },
          { label: "Sub-folders", marks: 2, groups: [["image","picture","other file","documents"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain how to insert an auto-updating date in a Word footer. (10)", modelAnswer: "Insert → Footer → Blank. Insert → Date & Time. Choose format. Tick 'Update automatically'. Click OK.",
        rubric: [
          { label: "Insert footer", marks: 2, groups: [["footer","insert"]] },
          { label: "Date & Time feature", marks: 3, groups: [["date & time","date and time","date"]] },
          { label: "Choose format", marks: 2, groups: [["format","style"]] },
          { label: "Tick update automatically", marks: 3, groups: [["update automatically","auto-update","updates every time"]] }
        ] },
      { section: "C", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Discuss the steps a student would follow to format a professional retail report in MS Word. Include at least FIVE features and explain why each matters. (30)", modelAnswer: "Steps: page setup, header/footer with date, consistent fonts and spacing, WordArt/Drop Cap, columns, images with Wrap Text Tight, tables, Find & Replace, Watermark. Each improves readability, professionalism, consistency.",
        rubric: [
          { label: "Page setup", marks: 5, groups: [["page setup","margin","orientation","a4"]] },
          { label: "Header/footer/date", marks: 5, groups: [["header","footer","page number","date"]] },
          { label: "Fonts and spacing", marks: 5, groups: [["font","spacing","1.5","arial"]] },
          { label: "Images/WordArt/Drop Cap", marks: 5, groups: [["image","wordart","drop cap","wrap text"]] },
          { label: "Tables and formatting", marks: 5, groups: [["table","merge","shading"]] },
          { label: "Justification", marks: 5, groups: [["important","because","why","improves","professional"]] }
        ] },
      { section: "D", sectionTitle: "Word Features Table", type: "table", marks: 30, prompt: "Match each Word task to the correct menu path. (30)", description: "Choose the correct path.",
        columns: ["Task","Menu Path"],
        rows: [
          { cells: [ {value:"Insert header",locked:true},{expected:"Insert → Header",options:["Insert → Header","Design → Header","Home → Header","Layout → Header"],marks:5} ] },
          { cells: [ {value:"Add text watermark",locked:true},{expected:"Design → Watermark",options:["Insert → Watermark","Design → Watermark","Layout → Watermark","Home → Watermark"],marks:5} ] },
          { cells: [ {value:"Two columns with line",locked:true},{expected:"Layout → Columns",options:["Insert → Columns","Layout → Columns","Home → Columns","Design → Columns"],marks:5} ] },
          { cells: [ {value:"Insert drop cap",locked:true},{expected:"Insert → Drop Cap",options:["Insert → Drop Cap","Design → Drop Cap","Home → Drop Cap","Layout → Drop Cap"],marks:5} ] },
          { cells: [ {value:"Change orientation",locked:true},{expected:"Layout → Orientation",options:["Insert → Orientation","Layout → Orientation","Design → Orientation","View → Orientation"],marks:5} ] },
          { cells: [ {value:"Find & Replace red font",locked:true},{expected:"Home → Find & Replace",options:["Home → Find & Replace","Insert → Replace","Design → Replace","Layout → Replace"],marks:5} ] }
        ] }
    ]
  },

  /* ===== BCA — Data & Presentation ===== */
  {
    id: "bca_data", module: "Business Computer Applications", name: "Data & Presentation", duration: 90,
    questions: [
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Which function adds a range?", options: ["=ADD()", "=SUM()", "=TOTAL()", "=AVERAGE()"], answer: 1, explanation: "SUM." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "What does $ do in $K$3?", options: ["Bold", "Locks cell (absolute)", "Currency", "Percent"], answer: 1, explanation: "Absolute reference." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Import Excel in Access: which tab?", options: ["Home", "External Data", "Create", "Database Tools"], answer: 1, explanation: "External Data." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Query is used for?", options: ["Design reports", "Extract specific data", "Format text", "Create charts"], answer: 1, explanation: "Extract data." },
      { section: "A", sectionTitle: "Multiple Choice", type: "mcq", marks: 4, prompt: "Difference between Transition and Animation?", options: ["Transition = text, Animation = slides", "Transition = how slide enters, Animation = how objects move", "Same", "Animation = video only"], answer: 1, explanation: "Transitions for slides; animations for objects." },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Explain how to use VLOOKUP to find a phone number from a customer name. (10)", modelAnswer: "=VLOOKUP(lookup_value, table_array, column_index, FALSE). Lookup = name cell. Table = range containing names and numbers. Column = position of phone. FALSE = exact match.",
        rubric: [
          { label: "VLOOKUP function", marks: 3, groups: [["vlookup"]] },
          { label: "Lookup value", marks: 2, groups: [["lookup value","name","first column"]] },
          { label: "Table range", marks: 2, groups: [["table array","range","column"]] },
          { label: "Column index", marks: 2, groups: [["column index","column number"]] },
          { label: "FALSE for exact", marks: 1, groups: [["false","exact"]] }
        ] },
      { section: "B", sectionTitle: "Short Answer", type: "short", marks: 10, prompt: "Describe the steps to import Excel into Access and create a Query. (10)", modelAnswer: "External Data → From File → Excel. Tick 'First Row Contains Headings'. Choose 'In a New Table'. Then Create → Query Design → add table → select fields → Run (!) → Save.",
        rubric: [
          { label: "External Data", marks: 2, groups: [["external data"]] },
          { label: "From File → Excel", marks: 2, groups: [["from file","excel","import"]] },
          { label: "First row contains headings", marks: 2, groups: [["first row","headings","headers"]] },
          { label: "Query Design", marks: 2, groups: [["query design","create query"]] },
          { label: "Run query", marks: 2, groups: [["run","execute"]] }
        ] },
      { section: "C", sectionTitle: "Excel Functions Table", type: "table", marks: 30, prompt: "Match each scenario to the correct Excel function. (30)", description: "Choose the function.",
        columns: ["Scenario","Function"],
        rows: [
          { cells: [ {value:"Total of column G",locked:true},{expected:"SUM",options:["SUM","AVERAGE","COUNT","MAX","IF"],marks:5} ] },
          { cells: [ {value:"Average salary in F4:F52",locked:true},{expected:"AVERAGE",options:["SUM","AVERAGE","COUNT","MAX","IF"],marks:5} ] },
          { cells: [ {value:"Mark row GOOD if profit > R1.3M",locked:true},{expected:"IF",options:["SUM","AVERAGE","COUNT","MAX","IF"],marks:5} ] },
          { cells: [ {value:"Find highest quantity ordered",locked:true},{expected:"MAX",options:["SUM","AVERAGE","COUNT","MAX","IF"],marks:5} ] },
          { cells: [ {value:"Count employees with surnames",locked:true},{expected:"COUNTA",options:["SUM","COUNTA","COUNT","MAX","IF"],marks:5} ] },
          { cells: [ {value:"Look up customer phone number",locked:true},{expected:"VLOOKUP",options:["SUM","VLOOKUP","COUNT","MAX","IF"],marks:5} ] }
        ] },
      { section: "D", sectionTitle: "Essay", type: "essay", marks: 30, prompt: "Discuss how a small retail business could use Excel, Access, and PowerPoint together. Give TWO examples for each. (30)", modelAnswer: "Excel: sales tracking, VAT/CVP, ratios. Access: customer DB, stock queries, reports. PowerPoint: staff training, investor pitch, monthly reviews. Together form an end-to-end toolkit.",
        rubric: [
          { label: "Excel role", marks: 5, groups: [["excel"],["spreadsheet","calculation","formula"]] },
          { label: "Excel examples", marks: 4, groups: [["sales","vat","inventory","budget"]] },
          { label: "Access role", marks: 5, groups: [["access"],["database","table","query"]] },
          { label: "Access examples", marks: 4, groups: [["customer database","stock query","report"]] },
          { label: "PowerPoint role", marks: 5, groups: [["powerpoint","presentation","slide"]] },
          { label: "Integration", marks: 7, groups: [["together","integrate","combine","end-to-end","workflow"]] }
        ] }
    ]
  }
];

// Safe helper — works even if exam data is somehow missing
function findExamPaper(id) {
  if (!Array.isArray(EXAM_PAPERS)) return null;
  return EXAM_PAPERS.find(p => p.id === id) || null;
}

console.log("%c✅ Exams loaded:", "color:#10b981;font-weight:700", EXAM_PAPERS.length, "papers");

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

let currentChapter = null;
let currentTab = "notes";
let quizState = null;
let trackerData = [];
let activeModuleId = null;
let chatHistory = [];
let currentExam = null;
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
function getProgress() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function getTrackerData() { try { return JSON.parse(localStorage.getItem(TRACKER_KEY)) || []; } catch { return []; } }
function saveTrackerData(d) { localStorage.setItem(TRACKER_KEY, JSON.stringify(d)); }
function getExamsData() { try { return JSON.parse(localStorage.getItem(EXAMS_KEY)) || {}; } catch { return {}; } }
function saveExamsData(d) { localStorage.setItem(EXAMS_KEY, JSON.stringify(d)); }
function getExamState(id) { return getExamsData()[id] || null; }
function saveExamState(id, s) { const a = getExamsData(); a[id] = s; saveExamsData(a); }

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
function formatTime(s) {
  if (s == null) return "--:--";
  const m = Math.floor(s / 60), sec = s % 60;
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
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
    return escapeHtml(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>");
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
      <div class="feature-card"><div class="feature-icon">📚</div><h4>All-in-One Notes</h4><p>5 complete modules.</p></div>
      <div class="feature-card"><div class="feature-icon">⚡</div><h4>Offline Ready</h4><p>Works without data.</p></div>
      <div class="feature-card"><div class="feature-icon">✍️</div><h4>Full Exams</h4><p>Two 100-mark papers per module.</p></div>
      <div class="feature-card"><div class="feature-icon">🎯</div><h4>Auto-Marked</h4><p>Instant rubric-level feedback.</p></div>
      <div class="feature-card"><div class="feature-icon">📊</div><h4>Mark Tracker</h4><p>Exam scores sync automatically.</p></div>
    </div>
    ${recent.length ? `
    <div class="recent-marks">
      <h3>Recent exam results</h3>
      ${recent.map(([id, st]) => {
        const paper = findExamPaper(id);
        if (!paper) return "";
        return `<div class="recent-mark-row">
          <div><div class="rm-module">${escapeHtml(paper.module)}</div><div class="rm-name">${escapeHtml(paper.name)}</div></div>
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
  const paper = findExamPaper(paperId);
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
  if (!quizState) quizState = { index: 0, answers: new Array(ch.quiz.length).fill(undefined), questions: shuffle(ch.quiz), done: false, reviewing: false };
  const body = $("#chapterBody");
  if (!body) return;
  const total = quizState.questions.length;

  if (quizState.reviewing) {
    let rh = `<h2>Review Answers</h2>`;
    quizState.questions.forEach((q, i) => {
      const ua = quizState.answers[i], ic = ua === q.answer;
      rh += `<div class="review-item"><div class="q-text">${i+1}. ${escapeHtml(q.q)}</div>
        <div class="a-row ${ic ? 'correct' : 'wrong'}">Your answer: ${String.fromCharCode(65 + ua)}. ${escapeHtml(q.options[ua])} ${ic ? '✓' : '✗'}</div>
        ${!ic ? `<div class="a-row correct">Correct: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}</div>` : ''}
        <div class="quiz-explain"><strong>Why:</strong> ${escapeHtml(q.explain)}</div></div>`;
    });
    body.innerHTML = rh + `<div class="quiz-actions" style="justify-content:center;margin-top:32px"><button class="btn btn-primary" id="retryBtn">Retake Quiz</button><button class="btn" id="backToScoreBtn">Back to Score</button></div>`;
    $("#retryBtn").addEventListener("click", () => { quizState = null; renderQuiz(ch); });
    $("#backToScoreBtn").addEventListener("click", () => { quizState.reviewing = false; renderQuiz(ch); });
    return;
  }
  if (quizState.done) {
    const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
    const pct = Math.round((score / total) * 100);
    const msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good — review wrong answers." : "Re-read notes and try again.";
    body.innerHTML = `<div class="score-card"><div class="score-big">${score}/${total}</div><div class="score-label">${pct}% correct</div><div class="score-msg">${msg}</div><div class="quiz-actions" style="justify-content:center;margin-top:32px"><button class="btn btn-primary" id="reviewBtn">Review Answers</button><button class="btn" id="retryBtn">Retake Quiz</button></div></div>`;
    $("#reviewBtn").addEventListener("click", () => { quizState.reviewing = true; renderQuiz(ch); });
    $("#retryBtn").addEventListener("click", () => { quizState = null; renderQuiz(ch); });
    return;
  }
  const q = quizState.questions[quizState.index];
  const sel = quizState.answers[quizState.index];
  const pct = Math.round((quizState.index / total) * 100);
  const opts = q.options.map((o, i) => `<button class="quiz-option ${sel === i ? 'selected' : ''}" data-idx="${i}"><span class="letter">${String.fromCharCode(65 + i)}</span><span>${escapeHtml(o)}</span></button>`).join("");
  body.innerHTML = `
    <div class="quiz-progress-wrap"><div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div></div>
    <div class="quiz-question"><div class="q-num">Question ${quizState.index + 1} of ${total}</div><div class="q-text">${escapeHtml(q.q)}</div><div class="quiz-options">${opts}</div></div>
    <div class="quiz-actions"><button class="btn btn-primary" id="nextBtn" ${sel === undefined ? 'disabled' : ''}>${quizState.index === total - 1 ? "Finish Quiz" : "Next Question"}</button></div>`;
  $$(".quiz-option").forEach(b => b.addEventListener("click", () => { quizState.answers[quizState.index] = Number(b.dataset.idx); renderQuiz(ch); }));
  $("#nextBtn").addEventListener("click", () => {
    if (quizState.index === total - 1) {
      quizState.done = true;
      const score = quizState.answers.filter((a, i) => a === quizState.questions[i].answer).length;
      const p = getProgress(), prev = p[ch.id] || { best: 0, attempts: 0 };
      p[ch.id] = { best: Math.max(prev.best, score), total, attempts: prev.attempts + 1 };
      saveProgress(p); renderSidebar();
    } else quizState.index++;
    renderQuiz(ch);
  });
}

// ============================================================
//  EXAM CENTRE
// ============================================================
function renderExamCentre() {
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");
  const examsData = getExamsData();
  const modules = [...new Set(EXAM_PAPERS.map(p => p.module))];
  let html = `<div class="dashboard-header"><h1>Exam Centre</h1><p>Each module has <strong>two complete 100-mark exams</strong>. Auto-marked.</p></div>`;
  modules.forEach(mod => {
    const papers = EXAM_PAPERS.filter(p => p.module === mod);
    html += `<div class="exam-module-section"><div class="exam-module-title">${escapeHtml(mod)}</div><div class="exam-grid">${papers.map(p => renderExamCard(p, examsData[p.id])).join("")}</div></div>`;
  });
  $("#main").innerHTML = html;
  $$(".exam-card .exam-action-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.paper, st = examsData[id];
      location.hash = (!st || st.status === "not_started") ? `#exam-instructions/${id}` : `#exam/${id}`;
    });
  });
}

function renderExamCard(paper, state) {
  const st = state?.status || "not_started";
  const score = state?.bestScore ?? state?.score ?? null;
  let badge, label;
  if (st === "not_started") { badge = `<span class="status-pill status-not-started">Not started</span>`; label = "Start exam"; }
  else if (st === "in_progress") { badge = `<span class="status-pill status-progress">In progress</span>`; label = "Continue"; }
  else { badge = `<span class="status-pill status-done">${Math.round(score)}/100</span>`; label = "Review / Retake"; }
  return `<div class="exam-card">
    <div class="exam-card-head"><div class="exam-card-name">${escapeHtml(paper.name)}</div>${badge}</div>
    <div class="exam-card-meta">${paper.questions.length} questions · ${paper.duration} min · 100 marks</div>
    <div class="exam-card-actions"><button class="btn btn-primary exam-action-btn" data-paper="${paper.id}">${label}</button></div>
  </div>`;
}

// ============================================================
//  EXAM INSTRUCTIONS
// ============================================================
function renderExamInstructions(paperId) {
  const paper = findExamPaper(paperId);
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
  const resume = existing && existing.status === "in_progress" ? `<div class="notice">You have an in-progress attempt. Starting fresh will replace saved answers.</div>` : "";

  $("#main").innerHTML = `<div class="exam-instructions">
    <div class="exam-back"><a href="#exams">← Exam Centre</a></div>
    <h1>${escapeHtml(paper.module)}</h1>
    <h2 class="exam-instructions-name">${escapeHtml(paper.name)}</h2>
    <div class="exam-instructions-stats">
      <div><span class="label">Duration</span><span class="value">${paper.duration} min (optional)</span></div>
      <div><span class="label">Marks</span><span class="value">100</span></div>
      <div><span class="label">Questions</span><span class="value">${paper.questions.length}</span></div>
    </div>
    <div class="section-summary"><h3>Sections</h3>
      ${Object.entries(sections).map(([k, s]) => `<div class="section-summary-row"><span><strong>Section ${k}</strong> — ${escapeHtml(s.title)}</span><span>${s.count} Q · ${s.marks} marks</span></div>`).join("")}
    </div>
    <div class="exam-rules"><h3>Instructions</h3>
      <ul>
        <li>Questions are shown <strong>one at a time</strong>. You can go back and change answers.</li>
        <li>You can <strong>skip</strong> questions and return to them.</li>
        <li>Answers <strong>auto-save</strong> — safe to close and resume.</li>
        <li>Model answers shown <strong>after submit</strong> (first attempt only).</li>
        <li>Mark saved to <strong>Mark Tracker</strong> automatically.</li>
        ${existing && existing.attempts > 0 ? `<li>This paper has been attempted ${existing.attempts} time(s). Model answers hidden on retakes.</li>` : ""}
      </ul>
    </div>
    ${resume}
    <div class="exam-start-buttons">
      <button class="btn btn-primary btn-lg" id="startTimed">Start with timer (${paper.duration} min)</button>
      <button class="btn btn-lg" id="startUntimed">Start without timer</button>
    </div>
  </div>`;
  $("#startTimed").addEventListener("click", () => startExam(paperId, true));
  $("#startUntimed").addEventListener("click", () => startExam(paperId, false));
}

function startExam(paperId, timed) {
  const paper = findExamPaper(paperId);
  if (!paper) return;
  const existing = getExamState(paperId);
  const attempts = existing?.attempts || 0;
  const state = {
    paperId, status: "in_progress", answers: existing?.answers || {},
    currentIndex: 0, timed, timeLeft: timed ? paper.duration * 60 : null,
    startedAt: Date.now(), attempts, showingModel: attempts === 0
  };
  saveExamState(paperId, state);
  location.hash = `#exam/${paperId}`;
}

// ============================================================
//  EXAM TAKING
// ============================================================
function renderExam(paperId) {
  const paper = findExamPaper(paperId);
  const state = getExamState(paperId);
  if (!paper || !state) { location.hash = "#exams"; return; }
  if (state.status === "submitted") { renderExamResults(paperId); return; }
  currentChapter = null;
  currentExam = paper;
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
    if (state.timeLeft <= 0) { clearInterval(examTimerHandle); showToast("Time up — submitting."); submitExam(paperId); }
  }, 1000);
}
function pauseExamTimer() { if (examTimerHandle) { clearInterval(examTimerHandle); examTimerHandle = null; } }

function renderExamView(paperId) {
  const paper = findExamPaper(paperId);
  const state = getExamState(paperId);
  if (!paper || !state) return;
  const q = paper.questions[state.currentIndex];
  const total = paper.questions.length;
  const dots = paper.questions.map((qq, i) => {
    const a = state.answers[i];
    const ans = a != null && !isEmptyAnswer(a);
    const cls = i === state.currentIndex ? "dot active" : ans ? "dot answered" : "dot";
    return `<button class="${cls}" data-jump="${i}" title="Q${i+1}"></button>`;
  }).join("");
  const qBody = renderQuestionBody(q, state.answers[state.currentIndex]);

  $("#main").innerHTML = `
    <div class="exam-top-bar">
      <a href="#exams" class="exam-exit" id="exitExam">✕ Exit</a>
      <div class="exam-title">${escapeHtml(paper.module)} · ${escapeHtml(paper.name)}</div>
      <div class="exam-timer" ${state.timed ? "" : "hidden"}><span class="timer-icon">⏱</span><span id="examTimerText">${formatTime(state.timeLeft)}</span></div>
    </div>
    <div class="exam-dot-nav">${dots}</div>
    <div class="exam-progress-bar"><div class="exam-progress-fill" style="width:${((state.currentIndex+1)/total)*100}%"></div></div>
    <div class="exam-question-card">
      <div class="exam-q-head">
        <span class="exam-q-section">Section ${q.section} · ${escapeHtml(q.sectionTitle)}</span>
        <span class="exam-q-marks">${q.marks} marks</span>
      </div>
      <div class="exam-q-prompt">${escapeHtml(q.prompt).replace(/\n/g, '<br>')}</div>
      <div class="exam-q-body">${qBody}</div>
    </div>
    <div class="exam-nav">
      <button class="btn" id="prevQ" ${state.currentIndex === 0 ? "disabled" : ""}>← Previous</button>
      <button class="btn" id="skipQ">Skip</button>
      ${state.currentIndex === total - 1
        ? `<button class="btn btn-primary" id="submitQ">Finish & Submit</button>`
        : `<button class="btn btn-primary" id="nextQ">Next →</button>`}
    </div>`;

  $("#prevQ")?.addEventListener("click", () => { state.currentIndex = Math.max(0, state.currentIndex - 1); saveExamState(paperId, state); renderExamView(paperId); });
  $("#nextQ")?.addEventListener("click", () => { state.currentIndex = Math.min(total - 1, state.currentIndex + 1); saveExamState(paperId, state); renderExamView(paperId); });
  $("#skipQ")?.addEventListener("click", () => { state.currentIndex = Math.min(total - 1, state.currentIndex + 1); saveExamState(paperId, state); renderExamView(paperId); });
  $("#submitQ")?.addEventListener("click", () => confirmAndSubmit(paperId));
  $("#exitExam")?.addEventListener("click", (e) => { e.preventDefault(); if (confirm("Exit? Answers are saved.")) { pauseExamTimer(); location.hash = "#exams"; } });
  $$(".dot").forEach(b => b.addEventListener("click", () => { state.currentIndex = Number(b.dataset.jump); saveExamState(paperId, state); renderExamView(paperId); }));
  wireQuestionInputs(paperId, q, state);
}

function renderQuestionBody(q, answer) {
  if (q.type === "mcq") {
    return q.options.map((o, i) => `<button class="exam-mcq-option ${answer === i ? "selected" : ""}" data-mcq="${i}"><span class="mcq-letter">${String.fromCharCode(65 + i)}</span><span>${escapeHtml(o)}</span></button>`).join("");
  }
  if (q.type === "short" || q.type === "essay") {
    const val = typeof answer === "string" ? answer : "";
    return `<textarea class="exam-textarea" rows="${q.type === "essay" ? 14 : 6}" placeholder="Type your answer here…">${escapeHtml(val)}</textarea><div class="exam-wordcount"><span id="wordCount">${val ? val.trim().split(/\s+/).length : 0}</span> words</div>`;
  }
  if (q.type === "table") {
    const ans = typeof answer === "object" && answer ? answer : {};
    return `<div class="exam-table-desc">${escapeHtml(q.description || "")}</div>
      <div class="exam-table-wrap"><table class="exam-table">
        <thead><tr>${q.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("")}</tr></thead>
        <tbody>${q.rows.map((row, ri) => `<tr>${row.cells.map((cell, ci) => {
          const key = `${ri}_${ci}`;
          if (cell.locked) return `<td class="locked">${cell.value}</td>`;
          if (cell.options) {
            const v = ans[key] || "";
            return `<td><select data-table="${key}"><option value="">—</option>${cell.options.map(o => `<option value="${o}" ${v === o ? "selected" : ""}>${o}</option>`).join("")}</select></td>`;
          }
          return `<td><input type="number" step="any" data-table="${key}" value="${ans[key] || ""}" placeholder="?"></td>`;
        }).join("")}</tr>`).join("")}</tbody>
      </table></div>`;
  }
  return "";
}

function wireQuestionInputs(paperId, q, state) {
  if (q.type === "mcq") {
    $$(".exam-mcq-option").forEach(b => b.addEventListener("click", () => { state.answers[state.currentIndex] = Number(b.dataset.mcq); saveExamState(paperId, state); renderExamView(paperId); }));
  } else if (q.type === "short" || q.type === "essay") {
    const ta = $(".exam-textarea");
    if (ta) ta.addEventListener("input", () => {
      state.answers[state.currentIndex] = ta.value;
      saveExamState(paperId, state);
      const wc = $("#wordCount");
      if (wc) wc.textContent = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    });
  } else if (q.type === "table") {
    $$("[data-table]").forEach(inp => inp.addEventListener("change", () => {
      const k = inp.dataset.table;
      if (!state.answers[state.currentIndex]) state.answers[state.currentIndex] = {};
      state.answers[state.currentIndex][k] = inp.value;
      saveExamState(paperId, state);
    }));
  }
}

function confirmAndSubmit(paperId) {
  const paper = findExamPaper(paperId);
  const state = getExamState(paperId);
  if (!paper || !state) return;
  const un = paper.questions.filter((q, i) => isEmptyAnswer(state.answers[i])).length;
  const msg = un > 0 ? `${un} unanswered question(s). Submit anyway?` : "Submit exam?";
  if (confirm(msg)) submitExam(paperId);
}

// ============================================================
//  SUBMIT & GRADE
// ============================================================
function submitExam(paperId) {
  pauseExamTimer();
  const paper = findExamPaper(paperId);
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
    const c = answer === q.answer;
    return { score: c ? q.marks : 0, maxMarks: q.marks, criteria: [{ label: "Correct option", hit: c, marks: q.marks, awarded: c ? q.marks : 0 }] };
  }
  if (q.type === "short" || q.type === "essay") {
    const text = typeof answer === "string" ? answer : "";
    let score = 0;
    const criteria = (q.rubric || []).map(c => {
      const groupsHit = c.groups.filter(g => g.some(concept => textContainsConcept(text, concept))).length;
      const ratio = c.groups.length ? groupsHit / c.groups.length : 0;
      const aw = Math.round(c.marks * ratio * 2) / 2;
      score += aw;
      return { label: c.label, hit: groupsHit > 0, groupsHit, totalGroups: c.groups.length, marks: c.marks, awarded: aw };
    });
    return { score: Math.round(score * 2) / 2, maxMarks: q.marks, criteria };
  }
  if (q.type === "table") {
    const ans = typeof answer === "object" && answer ? answer : {};
    let score = 0;
    const criteria = [];
    q.rows.forEach((row, ri) => row.cells.forEach((cell, ci) => {
      if (cell.locked) return;
      const k = `${ri}_${ci}`;
      const sv = ans[k];
      const ok = checkTableCell(cell, sv);
      const aw = ok ? (cell.marks || 0) : 0;
      score += aw;
      criteria.push({ label: `Row ${ri+1}`, hit: ok, marks: cell.marks || 0, awarded: aw });
    }));
    return { score: Math.round(score * 2) / 2, maxMarks: q.marks, criteria };
  }
  return { score: 0, maxMarks: q.marks || 0, criteria: [] };
}

function checkTableCell(cell, sv) {
  if (sv == null || sv === "") return false;
  if (cell.options) return String(sv).toLowerCase() === String(cell.expected).toLowerCase();
  const num = parseFloat(sv);
  if (isNaN(num)) return false;
  return Math.abs(num - cell.expected) <= (cell.tolerance || 0);
}

// ============================================================
//  TEXT MATCHING
// ============================================================
const STOP_MATCH = new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","it","this","that","be","by","as","at","if","so"]);
const SUFFIXES = [[/ies$/, "y"], [/ing$/, ""], [/ed$/, ""], [/ly$/, ""], [/s$/, ""]];
function stemW(w) { if (w.length < 4) return w; for (const [re, rep] of SUFFIXES) if (re.test(w)) return w.replace(re, rep); return w; }
function normT(t) { return String(t || "").toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim(); }
function textContainsConcept(text, concept) {
  const nt = normT(text), nc = normT(concept);
  if (!nc) return false;
  if (nt.includes(nc)) return true;
  const cw = nc.split(" ").filter(w => w.length > 2);
  if (!cw.length) return nt.includes(nc);
  const ts = nt.split(" ").map(stemW);
  return cw.every(w => { const s = stemW(w); return ts.some(t => t === s || t.includes(s) || s.includes(t)); });
}

// ============================================================
//  RESULTS
// ============================================================
function renderExamResults(paperId) {
  const paper = findExamPaper(paperId);
  const state = getExamState(paperId);
  if (!paper || !state || !state.graded) { location.hash = "#exams"; return; }
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");
  const g = state.graded;
  const pct = Math.round((g.total / 100) * 100);
  const grade = gradeFromScore(g.total);
  const secs = {};
  g.perQuestion.forEach(pq => {
    const s = pq.question.section;
    if (!secs[s]) secs[s] = { name: pq.question.sectionTitle, got: 0, max: 0 };
    secs[s].got += pq.result.score;
    secs[s].max += pq.question.marks;
  });
  $("#main").innerHTML = `
    <div class="exam-back"><a href="#exams">← Exam Centre</a></div>
    <div class="results-hero">
      <div class="results-title">${escapeHtml(paper.module)}</div>
      <div class="results-subtitle">${escapeHtml(paper.name)}</div>
      <div class="results-score">${g.total} <span class="results-score-max">/ 100</span></div>
      <div class="results-percent">${pct}% · ${grade}</div>
    </div>
    <div class="section-breakdown"><h3>Section breakdown</h3>
      ${Object.entries(secs).map(([s, d]) => {
        const p = d.max ? Math.round((d.got / d.max) * 100) : 0;
        return `<div class="section-bar-row"><div class="sbr-label">Section ${s} · ${escapeHtml(d.name)}</div><div class="sbr-bar"><div class="sbr-fill" style="width:${p}%"></div></div><div class="sbr-value">${d.got.toFixed(1)} / ${d.max}</div></div>`;
      }).join("")}
    </div>
    <div class="results-actions">
      <button class="btn btn-primary" id="reviewExamBtn">Review answers</button>
      <button class="btn" id="retakeBtn">Retake exam</button>
      ${state.attempts > 1 ? `<div class="retake-note">Attempt #${state.attempts}. Model answers hidden on retakes.</div>` : ""}
    </div>
    <div id="reviewPanel"></div>`;
  $("#reviewExamBtn").addEventListener("click", () => renderExamReview(paperId));
  $("#retakeBtn").addEventListener("click", () => {
    if (confirm("Retake? Best score is kept.")) {
      const ns = { ...getExamState(paperId), status: "not_started", answers: {}, currentIndex: 0, timeLeft: null, graded: null };
      saveExamState(paperId, ns);
      location.hash = `#exam-instructions/${paperId}`;
    }
  });
}

function gradeFromScore(s) {
  if (s >= 75) return "Distinction";
  if (s >= 70) return "Good pass";
  if (s >= 60) return "Credit";
  if (s >= 50) return "Pass";
  return "Fail";
}

function renderExamReview(paperId) {
  const state = getExamState(paperId);
  if (!state || !state.graded) return;
  const showModel = state.showingModel;
  const panel = $("#reviewPanel");
  if (!panel) return;
  let html = `<h3 style="margin-top:40px">Question-by-question review</h3>`;
  state.graded.perQuestion.forEach((pq, i) => {
    const q = pq.question, r = pq.result;
    const st = r.score >= r.maxMarks ? "ok" : r.score > 0 ? "partial" : "fail";
    html += `<div class="review-q review-${st}">
      <div class="review-q-head"><span class="review-q-num">Q${i+1}</span><span class="review-q-section">${escapeHtml(q.sectionTitle)}</span><span class="review-q-marks">${r.score}/${r.maxMarks}</span></div>
      <div class="review-q-prompt">${escapeHtml(q.prompt).replace(/\n/g, '<br>')}</div>
      ${q.type === "mcq" ? `<div class="review-mcq ${pq.answer === q.answer ? "correct" : "wrong"}">Your answer: ${pq.answer != null ? String.fromCharCode(65 + pq.answer) + ". " + escapeHtml(q.options[pq.answer]) : "(none)"}${pq.answer !== q.answer ? `<br>Correct: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}<br><em>${escapeHtml(q.explanation || "")}</em>` : ""}</div>` : ""}
      ${q.type !== "mcq" && pq.answer && !isEmptyAnswer(pq.answer) ? `<details><summary>Your answer</summary><div class="review-your-answer">${escapeHtml(typeof pq.answer === "string" ? pq.answer : JSON.stringify(pq.answer))}</div></details>` : ""}
      ${showModel && q.modelAnswer ? `<details><summary>Model answer</summary><div class="review-model">${escapeHtml(q.modelAnswer)}</div></details>` : ""}
      <div class="review-criteria">${r.criteria.map(c => `<div class="criterion ${c.hit ? "hit" : "miss"}"><span class="crit-mark">${c.awarded}/${c.marks}</span><span class="crit-label">${escapeHtml(c.label)}</span></div>`).join("")}</div>
    </div>`;
  });
  panel.innerHTML = html;
}

// ============================================================
//  TRACKER
// ============================================================
function syncExamToTracker(paperId, score) {
  const paper = findExamPaper(paperId);
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
  let c = 0, r = 0, p = 0;
  if (!mod.assessments) return { current: 0, remaining: 0, projected: 0 };
  mod.assessments.forEach(a => {
    const m = parseFloat(a.mark) || 0, w = parseFloat(a.weight) || 0;
    if (a.status === 'released') c += (m * w) / 100;
    else if (a.status === 'pending') {
      r += w;
      if (a.mark !== "" && a.mark !== null && !isNaN(m)) p += (m * w) / 100;
    }
  });
  return { current: c, remaining: r, projected: c + p };
}

function renderTrackerDashboard() {
  activeModuleId = null;
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="tracker"]')?.classList.add("active");
  trackerData = getTrackerData();
  const avail = CPUT_MODULES.filter(c => !trackerData.some(t => t.name === c.name));
  const availHtml = avail.map(m => `<button class="module-pill" onclick="window.addModuleFromList('${escapeHtml(m.name)}', '${escapeHtml(m.code)}')"><span class="plus">+</span> ${escapeHtml(m.name)}</button>`).join("");
  const cards = trackerData.map(mod => {
    const s = calculateModuleStats(mod);
    return `<div class="module-card">
      <div><h3>${escapeHtml(mod.name)}</h3><div class="code">${escapeHtml(mod.code)}</div></div>
      <div class="module-card-stats">
        <div><span>Current:</span><strong>${s.current.toFixed(2)}%</strong></div>
        <div><span>Projected:</span><strong>${s.projected.toFixed(2)}%</strong></div>
        <div><span>Remaining:</span><strong>${s.remaining.toFixed(2)}%</strong></div>
      </div>
      <div class="module-card-actions">
        <button class="btn btn-primary" onclick="window.openModule('${mod.id}')" style="flex:1">View marks</button>
        <button class="btn btn-text" onclick="window.deleteTrackerModule('${mod.id}')">Remove</button>
      </div></div>`;
  }).join("");
  $("#main").innerHTML = `
    <div class="dashboard-header"><h1>Mark Tracker</h1><p>Exam scores sync automatically.</p></div>
    ${availHtml ? `<div class="available-modules">${availHtml}</div>` : ""}
    <div class="tracker-grid">${cards || `<div class="empty" style="grid-column:1/-1"><h2>No modules tracked yet</h2><p>Add a module above or sit an exam.</p></div>`}</div>`;
}

window.addModuleFromList = function(n, c) { trackerData.push({ id: "mod_" + Date.now(), name: n, code: c, assessments: [] }); saveTrackerData(trackerData); renderTrackerDashboard(); showToast(`${n} added.`); };
window.openModule = function(id) { activeModuleId = id; renderTrackerModule(id); };
window.deleteTrackerModule = function(id) { if (!confirm("Remove?")) return; trackerData = trackerData.filter(m => m.id !== id); saveTrackerData(trackerData); renderTrackerDashboard(); };
window.deleteTrackerAssessment = function(mid, aid) {
  if (!confirm("Delete?")) return;
  const m = trackerData.find(x => x.id === mid);
  if (m) { m.assessments = m.assessments.filter(a => a.id !== aid); saveTrackerData(trackerData); renderTrackerModule(mid); }
};
window.backToTracker = function() { activeModuleId = null; renderTrackerDashboard(); };
window.updateAss = function(el) {
  const m = trackerData.find(x => x.id === el.dataset.mod);
  if (!m) return;
  const a = m.assessments.find(x => x.id === el.dataset.ass);
  if (!a) return;
  a[el.dataset.field] = el.value;
  saveTrackerData(trackerData);
  const sb = $(".tracker-summary-box");
  if (sb) sb.innerHTML = summaryHtml(calculateModuleStats(m));
};
window.addNewAssessment = function(mid) {
  const m = trackerData.find(x => x.id === mid);
  if (!m) return;
  m.assessments.push({ id: "ass_" + Date.now(), type: "Test", status: "pending", mark: "", weight: "" });
  saveTrackerData(trackerData);
  renderTrackerModule(mid);
};

function summaryHtml(s) {
  return `<h4>Module summary</h4>
    <div class="tracker-summary-row"><span>Current (Released)</span><strong>${s.current.toFixed(2)}%</strong></div>
    <div class="tracker-summary-row"><span>Remaining (Pending)</span><strong>${s.remaining.toFixed(2)}%</strong></div>
    <div class="tracker-summary-row total"><span>Projected Final</span><strong>${s.projected.toFixed(2)}%</strong></div>`;
}

function renderTrackerModule(mid) {
  const mod = trackerData.find(m => m.id === mid);
  if (!mod) { activeModuleId = null; renderTrackerDashboard(); return; }
  currentChapter = null;
  $$(".nav-item").forEach(n => n.classList.remove("active"));
  $('[data-nav="tracker"]')?.classList.add("active");
  const stats = calculateModuleStats(mod);
  const rows = (mod.assessments || []).map(a => `<tr>
    <td><select data-mod="${mid}" data-ass="${a.id}" data-field="type" onchange="window.updateAss(this)">
      <option value="Test" ${a.type === 'Test' ? 'selected' : ''}>Test</option>
      <option value="TUT" ${a.type === 'TUT' ? 'selected' : ''}>TUT</option>
      <option value="Assignment" ${a.type === 'Assignment' ? 'selected' : ''}>Assignment</option>
      <option value="Project" ${a.type === 'Project' ? 'selected' : ''}>Project</option>
      ${a.examRef ? `<option value="${escapeHtml(a.type)}" selected>${escapeHtml(a.type)} (exam)</option>` : ""}
    </select></td>
    <td><select data-mod="${mid}" data-ass="${a.id}" data-field="status" onchange="window.updateAss(this)">
      <option value="released" ${a.status === 'released' ? 'selected' : ''}>Released</option>
      <option value="pending" ${a.status === 'pending' ? 'selected' : ''}>Pending</option>
    </select></td>
    <td><input type="number" value="${a.mark}" placeholder="0–100" data-mod="${mid}" data-ass="${a.id}" data-field="mark" onchange="window.updateAss(this)" min="0" max="100" ${a.examRef ? "readonly" : ""}></td>
    <td><input type="number" value="${a.weight}" placeholder="0" data-mod="${mid}" data-ass="${a.id}" data-field="weight" onchange="window.updateAss(this)" min="0" max="100"></td>
    <td>${a.examRef ? `<a href="#exam/${a.examRef}" class="btn-text">View</a>` : `<button class="btn-text" onclick="window.deleteTrackerAssessment('${mid}','${a.id}')" style="color:var(--danger)">✕</button>`}</td>
  </tr>`).join("");
  $("#main").innerHTML = `
    <div style="margin-bottom:24px">
      <button class="btn" onclick="window.backToTracker()" style="margin-bottom:16px">← Back</button>
      <div class="dashboard-header" style="margin:0"><h1>${escapeHtml(mod.name)} <span style="font-size:18px;color:var(--text-muted)">(${escapeHtml(mod.code)})</span></h1></div>
    </div>
    <div class="tracker-table-wrap"><table class="tracker-table">
      <thead><tr><th>Type</th><th>Status</th><th>Mark (/100)</th><th>Weight (%)</th><th></th></tr></thead>
      <tbody>${rows || `<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--text-muted)">No assessments yet.</td></tr>`}</tbody>
    </table></div>
    <div style="display:flex;gap:16px;margin-bottom:32px"><button class="btn btn-primary" onclick="window.addNewAssessment('${mid}')" style="flex:1">+ Add assessment</button></div>
    <div class="tracker-summary-box">${summaryHtml(stats)}</div>`;
}

// ============================================================
//  AI DRAWER
// ============================================================
function openChatDrawer() {
  const d = $("#chatDrawer"), o = $("#chatOverlay");
  if (!d || !o) return;
  d.classList.add("open"); o.hidden = false;
  renderChatIntoDrawer(currentChapter);
}
function closeChatDrawer() {
  $("#chatDrawer")?.classList.remove("open");
  const o = $("#chatOverlay"); if (o) o.hidden = true;
}

function renderChatIntoDrawer(scope) {
  chatHistory = [];
  const m = $("#chatDrawerBody");
  if (!m) return;
  const ph = scope ? `Ask about ${scope.title}…` : "Ask anything about your course…";
  m.innerHTML = `
    <div class="chat-container chat-drawer-container">
      <div class="chat-thread" id="chatThread"></div>
      <div class="chat-input-wrap">
        <textarea id="askInput" placeholder="${escapeHtml(ph)}"></textarea>
        <button class="btn btn-primary" id="askBtn">Ask</button>
      </div>
    </div>`;
  $("#askBtn").addEventListener("click", () => handleAsk(scope));
  $("#askInput").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAsk(scope); } });
  renderChatThread(scope);
  $("#askInput").focus();
}

// ============================================================
//  AI ENGINE
// ============================================================
const STOPW = new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","what","how","why","when","which","who","does","do","can","i","my","with","that","this","it","be","by","from","as","at","if","so","am","me","we","us","our","you","your","they","them","their","he","she","his","her","its","but","not","no","nor","than","then","too","very","just","only","also","such","some","any","all","each","every","both","few","more","most","other","into","over","under","about","after","before","between","during","through","up","down","out","off","again","further","once","here","there","where","will","would","should","could","may","might","must","shall","have","has","had","being","been","get","got","make","made"]);

const SYNS = {
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
const AI_SUF = [[/ies$/,"y"],[/ing$/,""],[/ed$/,""],[/ly$/,""],[/s$/,""]];
function stemAI(w) { if (w.length < 4) return w; for (const [re, rep] of AI_SUF) if (re.test(w)) return w.replace(re, rep); return w; }
function tokAI(t) { return String(t||"").toLowerCase().replace(/[^a-z0-9\s&'-]/g," ").split(/\s+/).filter(w => w.length > 1 && !STOPW.has(w)); }
function expandAI(terms) {
  const out = new Set();
  for (const t of terms) {
    out.add(t); out.add(stemAI(t));
    const s = SYNS[t] || SYNS[stemAI(t)];
    if (s) for (const x of s) { out.add(x); for (const w of tokAI(x)) { out.add(w); out.add(stemAI(w)); } }
  }
  return out;
}

let TUTOR_INDEX = null;
function buildIndex() {
  if (TUTOR_INDEX) return TUTOR_INDEX;
  const secs = [], df = {};
  for (const ch of CHAPTERS) {
    const parts = ch.notes.split(/^##\s+/m);
    parts.forEach((part, i) => {
      if (!part.trim()) return;
      const lines = part.split("\n");
      const heading = (i === 0 ? "Overview" : lines[0]).trim();
      const body = (i === 0 ? part : lines.slice(1).join("\n")).trim();
      const text = heading + "\n" + body;
      const toks = tokAI(text);
      const stems = new Set(toks.map(stemAI));
      for (const s of stems) df[s] = (df[s] || 0) + 1;
      secs.push({ chapterId: ch.id, chapterNumber: ch.number, chapterTitle: ch.title, module: ch.module, heading, body, text, toks, stems, lower: text.toLowerCase(), isFaq: false });
    });
    (ch.faq || []).forEach(f => {
      const text = f.q + " " + f.a;
      const toks = tokAI(text);
      const stems = new Set(toks.map(stemAI));
      for (const s of stems) df[s] = (df[s] || 0) + 1;
      secs.push({ chapterId: ch.id, chapterNumber: ch.number, chapterTitle: ch.title, module: ch.module, heading: "Q: " + f.q, body: f.a, text, toks, stems, lower: text.toLowerCase(), isFaq: true });
    });
  }
  TUTOR_INDEX = { sections: secs, docFreq: df, N: secs.length };
  return TUTOR_INDEX;
}

function scoreSec(sec, qs, qt, pid) {
  let sc = 0;
  for (const s of qs) if (sec.stems.has(s)) { const df = TUTOR_INDEX.docFreq[s] || 1; sc += Math.log(1 + TUTOR_INDEX.N / df); }
  for (const t of qt) if (sec.lower.includes(t)) sc += 0.3;
  const hl = sec.heading.toLowerCase(), cl = sec.chapterTitle.toLowerCase();
  for (const t of qt) { if (hl.includes(t)) sc += 1; if (cl.includes(t)) sc += 0.5; }
  if (sec.isFaq) sc *= 1.3;
  if (pid && sec.chapterId === pid) sc *= 1.4;
  return sc;
}

function aiAnswer(q, pid) {
  const rt = tokAI(q);
  if (!rt.length) return { text: "Please type a question about the course.", suggestions: defaultSug(pid) };
  buildIndex();
  const qt = rt, qs = expandAI(rt);
  const sc = TUTOR_INDEX.sections.map(s => ({ s, score: scoreSec(s, qs, qt, pid) })).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
  if (!sc.length || sc[0].score < 0.8) return { text: "I couldn't find a strong match in the course notes. Try rephrasing.", suggestions: defaultSug(pid) };
  const top = sc.slice(0, 3);
  const best = top[0].s;
  const bc = CHAPTERS.find(c => c.id === best.chapterId);
  const body = best.isFaq ? best.body : extractSent(best.body, qt, 4);
  const heading = best.isFaq ? best.heading.replace(/^Q:\s*/, "") : best.heading;
  const text = `**${heading}**\n\n${body}`;
  const rel = top.slice(1).map(x => x.s).filter(s => s.heading !== best.heading);
  const sug = [];
  rel.forEach(s => { if (s.isFaq) sug.push(s.heading.replace(/^Q:\s*/, "")); else sug.push(`${s.chapterTitle}: ${s.heading}`); });
  if (!sug.length) (bc.faq || []).slice(0, 3).forEach(f => sug.push(f.q));
  return { text, suggestions: [...new Set(sug)].slice(0, 4), source: `${best.chapterNumber}. ${best.chapterTitle} · ${best.module}` };
}

function extractSent(body, qt, mx = 4) {
  const lines = body.split(/\n+/).map(l => l.trim()).filter(Boolean);
  const sc = lines.map((l, i) => {
    const lower = l.toLowerCase();
    let h = 0;
    for (const t of qt) if (lower.includes(t)) h++;
    return { line: l.length > 400 ? l.slice(0, 400) + "…" : l, hits: h, index: i };
  });
  const top = sc.filter(s => s.hits > 0).sort((a, b) => b.hits - a.hits).slice(0, mx);
  top.sort((a, b) => a.index - b.index);
  if (!top.length) return body.slice(0, 600);
  return top.map(s => s.line).join("\n\n");
}

function defaultSug(pid) {
  if (pid) { const ch = CHAPTERS.find(c => c.id === pid); if (ch && ch.faq && ch.faq.length) return ch.faq.slice(0, 4).map(f => f.q); }
  return QUICK_START_QUESTIONS.slice(0, 4);
}

function emptyChat(scope) {
  const sug = scope ? (scope.faq || []).slice(0, 4).map(f => f.q) : QUICK_START_QUESTIONS;
  const txt = scope ? `about <strong>${escapeHtml(scope.title)}</strong>` : `about your course`;
  return `<div class="chat-empty"><div class="chat-empty-icon">✨</div><h3>Hi, I'm Stack AI</h3><p>Grounded in your notes. Ask anything ${txt}.</p><div class="chat-suggestions">${sug.map(s => `<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div></div>`;
}

function renderChatMsg(m) {
  if (m.role === "user") return `<div class="chat-msg user"><div class="chat-bubble">${escapeHtml(m.text)}</div></div>`;
  if (m.pending) return `<div class="chat-msg assistant"><div class="chat-bubble chat-typing"><span></span><span></span><span></span></div></div>`;
  return `<div class="chat-msg assistant"><div class="chat-bubble">${mdToHtml(m.text)}${m.source ? `<div class="chat-source">Source: ${escapeHtml(m.source)}</div>` : ""}${m.suggestions && m.suggestions.length ? `<div class="chat-suggestions chat-suggestions-inline">${m.suggestions.map(s => `<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>` : ""}</div></div>`;
}

function renderChatThread(scope) {
  const th = $("#chatThread");
  if (!th) return;
  th.innerHTML = chatHistory.length ? chatHistory.map(renderChatMsg).join("") : emptyChat(scope);
  if (chatHistory.length) th.scrollTop = th.scrollHeight;
  $$(".chat-chip").forEach(b => b.addEventListener("click", () => { const q = b.dataset.q; const inp = $("#askInput"); if (inp) inp.value = q; handleAsk(scope); }));
}

async function handleAsk(scope, override) {
  const inp = $("#askInput");
  const q = (override || inp?.value || "").trim();
  if (!q) return;
  if (inp) inp.value = "";
  chatHistory.push({ role: "user", text: q });
  chatHistory.push({ role: "assistant", pending: true });
  renderChatThread(scope);
  await new Promise(r => setTimeout(r, 250));
  const res = aiAnswer(q, scope?.id);
  chatHistory.pop();
  chatHistory.push({ role: "assistant", text: res.text, suggestions: res.suggestions, source: res.source });
  renderChatThread(scope);
}

// ============================================================
//  ROUTER
// ============================================================
function route() {
  try {
    pauseExamTimer();
    const h = location.hash || "#home";
    if (h.startsWith("#chapter/")) renderChapter(h.replace("#chapter/", ""));
    else if (h === "#exams") renderExamCentre();
    else if (h.startsWith("#exam-instructions/")) renderExamInstructions(h.replace("#exam-instructions/", ""));
    else if (h.startsWith("#exam/")) renderExam(h.replace("#exam/", ""));
    else if (h === "#tracker") renderTrackerDashboard();
    else renderHome();
    if (window.innerWidth <= 800) $("#sidebar")?.classList.remove("open");
  } catch (err) {
    console.error("[Stack] Route error:", err);
    const m = $("#main");
    if (m) m.innerHTML = `<div class="empty"><h2>⚠️ Error</h2><p>${escapeHtml(err.message || String(err))}</p><p style="margin-top:16px"><a href="#home" class="btn btn-primary">Dashboard</a></p></div>`;
  }
}

// Search
const si = $("#searchInput");
if (si) si.addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) { renderHome(); return; }
  const rs = CHAPTERS.filter(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.notes.toLowerCase().includes(q));
  $("#main").innerHTML = `<div class="dashboard-header"><h1>Search results</h1><p>${rs.length} match "${escapeHtml(q)}"</p></div>
    <div class="card-grid">${rs.map(c => `<div class="card" data-chapter="${c.id}"><div class="card-top"><span class="chapter-num">${escapeHtml(c.number)}</span></div><h3>${escapeHtml(c.title)}</h3><p>${escapeHtml(c.summary)}</p></div>`).join("") || `<div class="empty"><h2>No matches</h2></div>`}</div>`;
  $$(".card").forEach(c => c.addEventListener("click", () => { location.hash = `#chapter/${c.dataset.chapter}`; }));
});

// NAV DELEGATION — first thing that attaches
document.addEventListener("click", e => {
  const link = e.target.closest('a[data-nav]');
  if (!link) return;
  e.preventDefault();
  const nav = link.getAttribute("data-nav");
  const target = `#${nav}`;
  if (location.hash === target) route();
  else location.hash = target;
});

// BOOT
window.addEventListener("hashchange", route);
$("#menuBtn")?.addEventListener("click", () => $("#sidebar")?.classList.toggle("open"));
$("#themeBtn")?.addEventListener("click", () => {
  const d = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, d ? "dark" : "light");
});
$("#resetBtn")?.addEventListener("click", () => {
  if (!confirm("Reset all progress? Cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TRACKER_KEY);
  localStorage.removeItem(EXAMS_KEY);
  renderSidebar();
  location.hash = "#home";
  route();
  showToast("Progress reset");
});
$("#aiFab")?.addEventListener("click", openChatDrawer);
$("#closeDrawer")?.addEventListener("click", closeChatDrawer);
$("#chatOverlay")?.addEventListener("click", closeChatDrawer);

function updateOffline() { const p = $("#offlinePill"); if (p) p.hidden = navigator.onLine; }
window.addEventListener("online", updateOffline);
window.addEventListener("offline", updateOffline);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(r => {
      r.onupdatefound = () => {
        const w = r.installing;
        w.onstatechange = () => {
          if (w.state === 'installed') showToast(navigator.serviceWorker.controller ? "Update available — refresh." : "Ready for offline.");
        };
      };
    }).catch(() => {});
  });
}

try {
  migrateStorage();
  applyTheme();
  renderSidebar();
  updateOffline();
  route();
  console.log("%c✅ Stack ready — click Exam Centre", "background:#2563eb;color:#fff;padding:6px 12px;border-radius:4px;font-weight:800");
} catch (err) {
  console.error("[Stack] Boot error:", err);
  const m = $("#main");
  if (m) m.innerHTML = `<div class="empty"><h2>⚠️ Startup error</h2><p>${escapeHtml(err.message || String(err))}</p><button class="btn btn-primary" onclick="location.reload()">Reload</button></div>`;
}
