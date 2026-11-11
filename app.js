/* Stack v2.3 — Complete app with all 10 exams embedded */

console.log("%c✅ Stack v2.3 loaded","background:#10b981;color:#fff;padding:6px 12px;border-radius:4px;font-weight:800");

// ============================================================
//  EXAMS DATA — 10 papers
// ============================================================
const EXAM_PAPERS = [

// ============ RETAILING A ============
{ id:"ret_strategy", module:"Retailing 1", name:"Retail Strategy & Customers", duration:120, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What is the primary purpose of market segmentation?", options:["To increase prices","To divide a market into distinct groups sharing similar characteristics","To reduce employees","To eliminate competition"], answer:1, explanation:"Segmentation = dividing market into distinct groups." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which segmentation base groups customers by 'Lifestyle'?", options:["Demographic","Geographic","Psychographic","Behavioural"], answer:2, explanation:"Psychographic = lifestyle, personality." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT a recognised way to measure customer service quality?", options:["Mystery shoppers","Satisfaction surveys","Net Promoter Score","Employee salaries"], answer:3, explanation:"Salaries don't measure service quality." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"In the FAB acronym, what does the 'A' stand for?", options:["Action","Advantages","Approach","Adjustment"], answer:1, explanation:"FAB = Features, Advantages, Benefits." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What is the FIRST step in the 9-step selling process?", options:["Approaching the customer","Preparing for the sale","Overcoming obstacles","Completing paperwork"], answer:1, explanation:"Step 1 = preparing." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A store located inside a shopping mall is which type of retail location?", options:["Central Business District","Shopping Center/Mall","Freestanding Site","Neighborhood Center"], answer:1, explanation:"Mall = Shopping Center." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is a KEY element of retail merchandising?", options:["Only advertising","Product assortment, pricing and visual merchandising","Employee wages","Ownership structure"], answer:1, explanation:"All three are core merchandising elements." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Township consumers typically prefer:", options:["Large bulk purchases","Smaller packs and frequent purchases","Online shopping only","Luxury imported goods"], answer:1, explanation:"Smaller packs suit daily buying." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is a consumer RIGHT under the CPA?", options:["The right to steal","The right to safety and accurate information","The right to ignore price tags","The right to free delivery"], answer:1, explanation:"Right to safety + accurate info." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"In the Eisenhower Matrix, URGENT + IMPORTANT tasks should be:", options:["Delegated","Scheduled","Done first","Not done at all"], answer:2, explanation:"Urgent + important = do first." },
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Name and explain the FOUR main bases of market segmentation. Provide one example for each. (5)", modelAnswer:"Demographic (age, income) · Geographic (region) · Psychographic (lifestyle) · Behavioural (usage, occasion).", rubric:[
    {label:"Demographic", marks:1.25, groups:[["demographic"]]},
    {label:"Geographic", marks:1.25, groups:[["geographic"]]},
    {label:"Psychographic", marks:1.25, groups:[["psychographic"]]},
    {label:"Behavioural", marks:1.25, groups:[["behavioural"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Explain FOUR customer expectations regarding service quality. How can a retailer measure whether these are being met? (5)", modelAnswer:"Fast response, personal attention, product knowledge, respect. Measure via surveys, mystery shoppers, NPS.", rubric:[
    {label:"Fast response", marks:1, groups:[["fast","quick","prompt"]]},
    {label:"Personal attention / knowledge", marks:1, groups:[["personal","attention","knowledge"]]},
    {label:"Respect / friendliness", marks:1, groups:[["respect","friendly","polite"]]},
    {label:"Measurement method", marks:2, groups:[["survey","mystery","nps","feedback"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Name FOUR types of obstacles a salesperson may face during the selling process and suggest how to overcome each. (5)", modelAnswer:"Real, Misinformed, Emotional, Delaying. Overcome by clarifying, providing evidence, alternatives, follow-up.", rubric:[
    {label:"Real obstacle", marks:1, groups:[["real","genuine"]]},
    {label:"Misinformed", marks:1, groups:[["misinformed","wrong info"]]},
    {label:"Emotional", marks:1, groups:[["emotional","feeling","fear"]]},
    {label:"Delaying", marks:1, groups:[["delay","think","later"]]},
    {label:"Overcoming tactics", marks:1, groups:[["clarify","evidence","alternative","follow"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Discuss FOUR major challenges South African township retailers face. (5)", modelAnswer:"Security, infrastructure, informal competition, funding access.", rubric:[
    {label:"Security / crime", marks:1.5, groups:[["security","crime","theft","looting"]]},
    {label:"Infrastructure", marks:1.5, groups:[["infrastructure","road","electricity"]]},
    {label:"Informal competition", marks:1, groups:[["informal","competition","spaza"]]},
    {label:"Funding", marks:1, groups:[["fund","capital","finance"]]}
  ]},
  { section:"C", sectionTitle:"Case Study", type:"essay", marks:30, prompt:`SCENARIO: Mama Nomsa's Spaza Shop
Mama Nomsa runs a spaza shop in Khayelitsha, Cape Town. Her customers are mostly local lower-income families who shop daily. She stocks large items — 5kg rice bags, 2L cold drinks, 1kg sugar. A new Pick n Pay opened 2km away and her monthly sales dropped 30%. She loses R2,000/month to theft, her supplier is unreliable so she runs out of bread and milk, and some customers complain about being ignored. Her son suggests she sell individual sugar sachets and small chip packs.

(a) Identify and describe THREE distinct customer segments Mama Nomsa serves. Explain how each influences her product/pricing decisions. (10)
(b) Analyse TWO major challenges Mama Nomsa faces. Recommend practical strategies for each. (10)
(c) Evaluate whether her son's suggestion (smaller packs) is appropriate. Support with TWO reasons. (10)`, modelAnswer:"(a) Demographic (income), behavioural (daily buyers), geographic (local). (b) Competition + theft. Strategies: differentiate, CCTV, better layout. (c) Yes — affordability, daily income, township relevance.", rubric:[
    {label:"(a) Three segments identified", marks:6, groups:[["demographic","income"],["behavioural","daily","usage"],["geographic","local","township"]]},
    {label:"(a) Explains product/pricing influence", marks:4, groups:[["product","pack","price","affordable"]]},
    {label:"(b) Two challenges analysed", marks:4, groups:[["competition","pick n pay"],["theft","crime","shrinkage"]]},
    {label:"(b) Practical strategies", marks:6, groups:[["differentiate","cctv","layout","promotion","loyalty"]]},
    {label:"(c) Position on smaller packs", marks:2, groups:[["appropriate","yes","suitable"]]},
    {label:"(c) Two reasons supporting", marks:8, groups:[["affordable","afford"],["daily","frequent","small income","township"]]}
  ]},
  { section:"D", sectionTitle:"Case Study", type:"essay", marks:30, prompt:`SCENARIO: Gold Standard Jewellers
Sipho walks into Gold Standard Jewellers to buy an engagement ring. Budget: R8,000. Salesperson Lisa greets with "Hi, how are you?" but doesn't ask what he's looking for. She points to the most expensive display: "Our rings are 18-carat gold with VS1 clarity diamonds — very popular." Sipho looks confused, asks what "VS1 clarity" means. Lisa: "It's just the grading." Then: "This one is R15,000 — best seller." When Sipho asks about payment plans, Lisa says she doesn't know and needs her manager (at lunch). Sipho waits 15 minutes then leaves saying "I'll think about it." Store policy says staff must follow up on "I'll think about it" within 48 hours. Lisa did not.

(a) Analyse the selling process. At which steps did Lisa fail? Give evidence from the case. (10)
(b) Using the FAB technique, explain how Lisa SHOULD have presented the ring. Give at least ONE Feature, ONE Advantage, ONE Benefit. (10)
(c) Recommend how the store could handle the "I'll think about it" obstacle in future. Refer to at least THREE practical tactics. (10)`, modelAnswer:"(a) Approach, getting info, giving info (FAB), dealing with terms. (b) F: 18-carat gold. A: durable, timeless. B: lasts a lifetime, meaningful. (c) Delaying obstacle: follow-up call, provide brochure, invite to revisit.", rubric:[
    {label:"(a) Steps failed identified (3+)", marks:6, groups:[["approach"],["getting info","question"],["fab","giving info"],["terms","payment"]]},
    {label:"(a) Evidence from case", marks:4, groups:[["didn't ask","expensive","15,000","manager at lunch"]]},
    {label:"(b) FAB - Feature", marks:3, groups:[["18 carat","gold","vs1","diamond"]]},
    {label:"(b) FAB - Advantage", marks:3, groups:[["durable","timeless","quality","unique"]]},
    {label:"(b) FAB - Benefit", marks:4, groups:[["lifetime","meaningful","special","forever"]]},
    {label:"(c) Delaying obstacle identified", marks:2, groups:[["delay","think about","not ready"]]},
    {label:"(c) Three practical tactics", marks:8, groups:[["follow-up","follow up"],["brochure","info"],["revisit","invite","return"],["hold","reserve"]]}
  ]}
]},

// ============ RETAILING B ============
{ id:"ret_operations", module:"Retailing 1", name:"Retail Operations & Environment", duration:120, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which best defines a target market?", options:["All consumers","A specific group a firm directs marketing efforts toward","Competitors","Products in warehouse"], answer:1, explanation:"Target = specific group." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A customer finds a broken product after purchase. They most likely feel:", options:["Excited","Disappointed and frustrated","Indifferent","Sympathetic"], answer:1, explanation:"Disappointed." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Bob Phibbs' 'Demonstrate Value' step focuses on:", options:["Product price only","What the product provides to the customer","The store layout","Employee wages"], answer:1, explanation:"Focus on product value." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which factor MOST influences a retailer's location choice?", options:["Owner's favourite colour","Accessibility, foot traffic and zoning laws","Store name","Logo design"], answer:1, explanation:"Accessibility, foot traffic, zoning." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What is the FIRST step in the retail merchandising process?", options:["Buying products","Understanding customer needs","Pricing products","Visual merchandising"], answer:1, explanation:"Step 1 = understand customer needs." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Visual merchandising aims to:", options:["Hide products","Maximize product visibility and appeal","Reduce costs","Slow traffic"], answer:1, explanation:"Maximize visibility and appeal." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which retailer types are common in South African townships?", options:["Spaza shops","Street vendors","Supermarkets","All of the above"], answer:3, explanation:"All are common." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"The Electronic Communications Act (ECA) regulates:", options:["How retailers communicate electronically","Electronic product pricing","TV licences","Return policies"], answer:0, explanation:"Electronic communication." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What does the 'T' in SMART goals stand for?", options:["Tough","Tangible","Time-bound","Target"], answer:2, explanation:"Time-bound." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"In the Eisenhower Matrix, 'Important but NOT Urgent' tasks should be:", options:["Delegated","Done first","Scheduled","Ignored"], answer:2, explanation:"Important but not urgent = schedule." },
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Explain the FIVE-step retail location selection process. (5)", modelAnswer:"Market research → identify sites → feasibility study → financial analysis → final selection.", rubric:[
    {label:"Market research", marks:1, groups:[["market research","data analysis","research"]]},
    {label:"Identify sites", marks:1, groups:[["identify","potential","shortlist"]]},
    {label:"Feasibility", marks:1, groups:[["feasibility","evaluate","assess"]]},
    {label:"Financial analysis", marks:1, groups:[["financial","budget","cost"]]},
    {label:"Final selection", marks:1, groups:[["select","negotiate","final"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Name and briefly describe FIVE key elements of retail merchandising. (5)", modelAnswer:"Product assortment · Pricing strategy · Visual merchandising · Inventory management · Promotion.", rubric:[
    {label:"Product assortment", marks:1, groups:[["assortment","range","variety"]]},
    {label:"Pricing strategy", marks:1, groups:[["pricing","price strategy"]]},
    {label:"Visual merchandising", marks:1, groups:[["visual","display","layout"]]},
    {label:"Inventory management", marks:1, groups:[["inventory","stock management"]]},
    {label:"Promotion", marks:1, groups:[["promotion","advertising","marketing"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"List and explain FOUR customer rights under the Consumer Protection Act. (5)", modelAnswer:"Right to safety, accurate information, to be heard, redress, to choose.", rubric:[
    {label:"Right to safety", marks:1, groups:[["safety"]]},
    {label:"Right to info", marks:1, groups:[["information","accurate","honest"]]},
    {label:"Right to be heard", marks:1, groups:[["heard","listen","voice"]]},
    {label:"Right to redress / choose", marks:2, groups:[["redress","refund","return","choose","choice"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Describe the FOUR steps of a personal Time Management System and name TWO benefits. (5)", modelAnswer:"1. Identify system. 2. Create schedule. 3. Account for commitments. 4. Check balance. Benefits: reduces stress, works optimally.", rubric:[
    {label:"Identify system", marks:1, groups:[["identify"]]},
    {label:"Create schedule", marks:1, groups:[["create","schedule"]]},
    {label:"Account commitments", marks:1, groups:[["account","commitments"]]},
    {label:"Check balance", marks:1, groups:[["check","balance"]]},
    {label:"Benefits", marks:1, groups:[["reduce stress","optimal","less stress"]]}
  ]},
  { section:"C", sectionTitle:"Case Study", type:"essay", marks:30, prompt:`SCENARIO: FreshMart Supermarket
Mr Dlamini must choose a location for a new store.
- Option 1 (Mall): R45,000/month rent, 8,000 shoppers/week, safe, air-conditioned, limited parking.
- Option 2 (Freestanding road): R22,000/month rent, 30,000 cars/day visible, plenty parking, uncertain foot traffic, high crime area.

The current FreshMart has complaints:
- Broken blender return refused after 3 days.
- Advertised promotion never delivered.
- Prices not displayed on several products.
- Staff ignore customers.
- Store layout cluttered, products hard to find.

Mr Dlamini notices staff on phones during shifts and no clear procedures for returns/complaints.

(a) Advise Mr Dlamini on which location to choose. Justify with THREE factors from the retail location selection process. (10)
(b) Identify FIVE merchandising elements FreshMart is currently failing on, and explain how each affects sales. (10)
(c) Discuss how effective visual merchandising can increase FreshMart's sales. Use at least TWO practical examples. (10)`, modelAnswer:"(a) Mall — foot traffic, safety, visibility. (b) Assortment, pricing, visual merch, inventory, promotion — all failing. (c) Layout, signage, lighting, product placement.", rubric:[
    {label:"(a) Clear recommendation", marks:2, groups:[["mall","shopping centre","freestanding"]]},
    {label:"(a) Three location factors", marks:8, groups:[["foot traffic","customers"],["rent","cost","budget"],["safety","security","crime"],["visibility","parking","access"]]},
    {label:"(b) Five merchandising failures", marks:5, groups:[["price","display"],["return","refund"],["promotion"],["staff","service"],["layout","clutter"]]},
    {label:"(b) Impact on sales for each", marks:5, groups:[["lost","lose","impact","affects","consequence"]]},
    {label:"(c) Two visual merchandising techniques", marks:6, groups:[["window","layout","lighting"],["signage","shelf","display"]]},
    {label:"(c) Applied to FreshMart issues", marks:4, groups:[["clutter","find","easy","navigate","customer"]]}
  ]},
  { section:"D", sectionTitle:"Case Study", type:"essay", marks:30, prompt:`SCENARIO: HomeStyle Furniture
Mrs Khumalo bought a R14,500 leather couch. Delivery promised within 5 working days. Three weeks later still no delivery. When she called, she was told "we don't know, the driver will call you" — nobody called. When it arrived, there was a visible tear. Mrs Khumalo demanded a full refund. The manager said "Our policy is no returns after 7 days, and store credit only — not cash." At purchase, she was never told about the 7-day policy — no sign, no verbal explanation, no till slip with terms.

(a) Identify FOUR ways HomeStyle Furniture has violated the Consumer Protection Act. Quote evidence for each. (10)
(b) Explain the complaint process Mrs Khumalo should follow. Use the six stages of the CPA complaint procedure. (10)
(c) Recommend how the manager could improve using Time Management principles. Include at least THREE practical strategies. (10)`, modelAnswer:"(a) Misleading delivery, defective goods, refund refusal, no till slip, no terms disclosure. (b) Contact company → reference → response → conciliation → mediator → tribunal. (c) Eisenhower Matrix, prioritisation, delegation, scheduling.", rubric:[
    {label:"(a) Misleading delivery", marks:2, groups:[["delivery","promised","5 day"]]},
    {label:"(a) Defective goods", marks:2, groups:[["tear","defect","damaged"]]},
    {label:"(a) Refund refusal", marks:2, groups:[["refund","cash","credit"]]},
    {label:"(a) No till slip / terms", marks:2, groups:[["till slip","receipt","terms"]]},
    {label:"(a) Evidence quotes", marks:2, groups:[["14,500","7 day","driver","tear"]]},
    {label:"(b) Six-stage process", marks:8, groups:[["contact"],["reference"],["response"],["conciliation"],["mediator"],["tribunal"]]},
    {label:"(b) Explains each stage", marks:2, groups:[["10 day","independent","final","authority"]]},
    {label:"(c) Three time-mgmt strategies", marks:6, groups:[["eisenhower","priorit"],["delegate"],["schedule","calendar"]]},
    {label:"(c) Applied to HomeStyle", marks:4, groups:[["delivery","tracking"],["complaint","response","service"]]}
  ]}
]},

// ============ ROM1 A ============
{ id:"rom1_foundations", module:"Retail Operations Management 1", name:"Business Foundations", duration:120, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT listed as a challenge for South African entrepreneurs?", options:["Limited funding","Bureaucracy","Too much mentorship","Crime"], answer:2, explanation:"Lack of mentorship is the challenge." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Fixed costs R150,000, price R20, variable R5. Break-even quantity?", options:["7,500","10,000","15,000","30,000"], answer:1, explanation:"150,000 ÷ 15 = 10,000." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"8,000 units sold in 40,000 market. Market share?", options:["8%","15%","20%","32%"], answer:2, explanation:"8,000 ÷ 40,000 × 100 = 20%." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT one of the four feasibility checks?", options:["Technical","Financial","Emotional","Operational"], answer:2, explanation:"Four are technical, financial, legal, operational." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which section comes FIRST in a business plan?", options:["Financial plan","Executive summary","Marketing plan","Appendices"], answer:1, explanation:"Exec summary early." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"How long should the executive summary be?", options:["One paragraph","½ to 1 page","3–5 pages","10 pages"], answer:1, explanation:"Half to one page." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Correct order of the four-step control process?", options:["Measure → Set → Compare → Correct","Set → Measure → Compare → Correct","Compare → Set → Measure → Correct","Set → Compare → Measure → Correct"], answer:1, explanation:"Standards → measure → compare → correct." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A measurement producing the same result every time is:", options:["Valid","Reliable","Subjective","Balanced"], answer:1, explanation:"Reliable = consistent." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A manager deciding alone without consulting staff uses:", options:["Democratic","Laissez-faire","Autocratic","Servant"], answer:2, explanation:"Autocratic." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which power is based on personality and likeability?", options:["Coercive","Legitimate","Referent","Expert"], answer:2, explanation:"Referent." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which theory says 'good leaders are born, not made'?", options:["Behavioural","Trait","Contingency","Transformational"], answer:1, explanation:"Trait theory." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A leader who only steps in when goals are not met uses:", options:["Management by exception","Servant-leadership","LMX","Trait theory"], answer:0, explanation:"MBE (transactional)." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"In Maslow's hierarchy, highest level is:", options:["Physiological","Safety","Esteem","Self-actualisation"], answer:3, explanation:"Self-actualisation." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Shrinkage is best defined as:", options:["Theft by customers only","Reduction of inventory value due to employee or customer theft","Damage from natural disasters","Loss from supplier delays"], answer:1, explanation:"Shrinkage = reduction of inventory value." },
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Name and briefly describe FIVE traits of a successful entrepreneur. (5)", modelAnswer:"Innovative, Risk-taker, Self-confident, Hardworking, Goal-oriented, Persistent, Adaptable, Problem-solver.", rubric:[
    {label:"Innovative/creative", marks:1, groups:[["innovative","creative"]]},
    {label:"Risk-taker", marks:1, groups:[["risk"]]},
    {label:"Self-confident", marks:1, groups:[["confident","confidence"]]},
    {label:"Hardworking", marks:1, groups:[["hardwork","persistent","determined"]]},
    {label:"Goal/leader", marks:1, groups:[["goal","leader","organised","adaptable"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"List FIVE sections of a business plan and briefly explain why each matters. (5)", modelAnswer:"Exec summary, management team, market analysis, marketing plan, financial plan.", rubric:[
    {label:"Executive summary", marks:1, groups:[["executive","summary"]]},
    {label:"Management team", marks:1, groups:[["management","team"]]},
    {label:"Market analysis", marks:1, groups:[["market","analysis"]]},
    {label:"Marketing plan", marks:1, groups:[["marketing","plan"]]},
    {label:"Financial plan", marks:1, groups:[["financial","financials"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Explain the difference between reliability and validity. Give one example of each. (5)", modelAnswer:"Reliable = consistent. Valid = measures what it should. Example: scale consistent but maybe miscalibrated; exam tests course content = valid.", rubric:[
    {label:"Reliable definition", marks:1.5, groups:[["consistent","same result"]]},
    {label:"Valid definition", marks:1.5, groups:[["measures what","accurate","actual"]]},
    {label:"Reliability example", marks:1, groups:[["scale","consistent","same"]]},
    {label:"Validity example", marks:1, groups:[["tests","measures","actual content"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Name and briefly describe the THREE leadership styles. Give one advantage and one disadvantage of each. (5)", modelAnswer:"Autocratic (fast, demoralises). Participative (buy-in, slow). Free-rein (works with experts, risky with novices).", rubric:[
    {label:"Autocratic", marks:1.5, groups:[["autocratic","authoritarian"]]},
    {label:"Participative", marks:1.5, groups:[["participative","democratic"]]},
    {label:"Free-rein", marks:1.5, groups:[["free-rein","laissez","free rein"]]},
    {label:"Advantage/disadvantage", marks:0.5, groups:[["fast","slow","advantage","disadvantage"]]}
  ]},
  { section:"C", sectionTitle:"Case Study", type:"essay", marks:26, prompt:`SCENARIO: Lindiwe's Bakery
Lindiwe has R250,000 savings. No bakery within 5km. She plans to sell bread, muffins and cakes to local households and small tuckshops. Plan: shop rent R8,000/month, industrial oven R45,000, raw materials weekly, two staff. Bank refuses loan: "plan lacks financial projections, market analysis and executive summary." She considers opening anyway with only savings.

(a) Evaluate the feasibility of Lindiwe's idea using the four feasibility checks (technical, financial, legal, operational). Give evidence from the case. (10)
(b) Identify TWO sections missing from Lindiwe's plan and explain why each matters to a bank. (8)
(c) Recommend whether Lindiwe should open now or rebuild her plan. Support with TWO reasons. (8)`, modelAnswer:"(a) Technical: oven, space. Financial: R250k, R8k rent, R45k oven — tight. Legal/operational: permits, staff, suppliers. (b) Financial projections, market analysis. (c) Rebuild plan — bank credibility + investor confidence.", rubric:[
    {label:"Technical feasibility", marks:3, groups:[["oven","equipment","space","bakery"]]},
    {label:"Financial feasibility", marks:3, groups:[["250","8,000","45,000","tight","budget"]]},
    {label:"Legal + operational", marks:4, groups:[["permit","licence"],["staff","supplier","operations"]]},
    {label:"Two missing sections", marks:4, groups:[["financial projections","financials"],["market analysis","market research"]]},
    {label:"Importance to bank", marks:4, groups:[["credibility","confidence","risk","loan"]]},
    {label:"Recommendation", marks:2, groups:[["rebuild","delay","not now","plan first"]]},
    {label:"Two reasons", marks:6, groups:[["credibility","investor"],["better planning","preparation","risk"]]}
  ]},
  { section:"D", sectionTitle:"Case Study", type:"essay", marks:26, prompt:`SCENARIO: TechMart Electronics
Sarah is new store manager at TechMart Electronics (12 staff). First week: made weekend roster decisions alone; issued strict no-leave-floor instructions; used job title to stop a senior staff idea; told team "we hit targets or we don't get paid"; fired a young employee on the spot for 10 minutes lateness. Two senior staff resigned. Sales down 12%. Regional manager: "Change your leadership or we'll replace you."

(a) Identify and analyse THREE leadership styles Sarah is using. Quote case evidence for each. (10)
(b) Using the five types of power, explain which powers Sarah is abusing. (8)
(c) Recommend how Sarah should transition her approach in the next 30 days. Give at least THREE practical actions. (8)`, modelAnswer:"(a) Autocratic, coercive, legitimate abuse. (b) Coercive (fear), legitimate (misuse), reward (threats). (c) Weekly meetings, delegate decisions, formal feedback.", rubric:[
    {label:"(a) Autocratic", marks:4, groups:[["autocratic","authoritarian"]]},
    {label:"(a) Legitimate/power abuse", marks:3, groups:[["legitimate","position","title"]]},
    {label:"(a) Coercive", marks:3, groups:[["coercive","fear","threat","fire"]]},
    {label:"(b) Three powers named", marks:4, groups:[["coercive"],["legitimate"],["reward"]]},
    {label:"(b) Appropriate use explained", marks:4, groups:[["reward","praise","support","respect"]]},
    {label:"(c) Clear transition plan", marks:2, groups:[["participative","democratic","transition","change"]]},
    {label:"(c) Three actions", marks:6, groups:[["weekly meeting","team meeting"],["delegate","involve"],["feedback","one-on-one"]]}
  ]}
]},

// ============ ROM1 B ============
{ id:"rom1_leadership", module:"Retail Operations Management 1", name:"Leadership & Operations", duration:120, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Leadership focuses on ______; management focuses on ______.", options:["process; people","people & vision; process & execution","authority; influence","stability; change"], answer:1, explanation:"Leadership = vision; mgmt = execution." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A manager deciding without consulting staff uses:", options:["Democratic","Laissez-faire","Autocratic","Servant"], answer:2, explanation:"Autocratic." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which theory says leaders can be made through learned behaviours?", options:["Trait","Behavioural","Contingency","Servant"], answer:1, explanation:"Behavioural." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A leader who inspires innovation and change is:", options:["Transactional","Servant","Transformational","Autocratic"], answer:2, explanation:"Transformational." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Maslow's hierarchy above Safety is:", options:["Physiological","Social","Esteem","Self-actualisation"], answer:1, explanation:"Social." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"In Herzberg, which is a hygiene factor?", options:["Recognition","Achievement","Working conditions","Growth"], answer:2, explanation:"Working conditions." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Vroom's theory is also known as:", options:["Equity theory","Carrot-and-stick","ERG","Two-factor"], answer:1, explanation:"Carrot-and-stick." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A female manager earning less than a male for same work violates:", options:["Maslow","Herzberg","Adams equity","McClelland"], answer:2, explanation:"Equity theory." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT one of the six stakeholder categories?", options:["Owners","Competitors","Suppliers","Community"], answer:1, explanation:"Competitors not listed." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A UK chicken shortage closing Nando's is which influence?", options:["Government","Community","Supplier","Customer"], answer:2, explanation:"Supplier influence." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which cannot be prosecuted for shoplifting under SA law?", options:["Under 10","Under 12","Under 14","Under 16"], answer:1, explanation:"Under 12." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A wet floor is best described as:", options:["Risk","Hazard","Control","Standard"], answer:1, explanation:"Hazard." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"In shops and offices, min H&S reps is:", options:["1 per 20","1 per 50","1 per 100","1 per 200"], answer:2, explanation:"1 per 100 in shops/offices." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT an employee duty under OHSA?", options:["Care for safety","Obey rules","Appoint H&S reps","Report unsafe conditions"], answer:2, explanation:"Appointing reps = employer duty." },
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Compare the five types of power. Give one example of each. (5)", modelAnswer:"Coercive (fear), Reward (pay), Legitimate (position), Referent (personality), Expert (knowledge).", rubric:[
    {label:"Coercive", marks:1, groups:[["coercive","fear","threat"]]},
    {label:"Reward", marks:1, groups:[["reward","pay","promotion"]]},
    {label:"Legitimate", marks:1, groups:[["legitimate","position","title"]]},
    {label:"Referent", marks:1, groups:[["referent","personality","respect"]]},
    {label:"Expert", marks:1, groups:[["expert","knowledge","skill"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Explain the difference between transformational and transactional leadership. Give one example of each. (5)", modelAnswer:"Transformational: inspires change. Transactional: rewards/punishments.", rubric:[
    {label:"Transformational definition", marks:2, groups:[["transformational","inspire","change","motivate"]]},
    {label:"Transactional definition", marks:2, groups:[["transactional","reward","punish","routine"]]},
    {label:"Examples", marks:1, groups:[["example","steve jobs","commission"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Name the six stakeholder categories and briefly describe what each expects. (5)", modelAnswer:"Owners (profit), Customers (quality), Employees (fair pay), Community (funding), Suppliers (payment), Government (tax).", rubric:[
    {label:"Owners", marks:0.85, groups:[["owner","profit","roi"]]},
    {label:"Customers", marks:0.85, groups:[["customer","quality","price"]]},
    {label:"Employees", marks:0.85, groups:[["employee","pay","security"]]},
    {label:"Community", marks:0.85, groups:[["community","funding","jobs"]]},
    {label:"Suppliers", marks:0.85, groups:[["supplier","payment"]]},
    {label:"Government", marks:0.75, groups:[["government","tax"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"List FIVE of the ten operational risks a retailer faces. (5)", modelAnswer:"Shoplifting, employee theft, fraud, inventory shortages, cyber, supply chain, competition, safety, disasters, sabotage.", rubric:[
    {label:"Shoplifting", marks:1, groups:[["shoplifting","theft"]]},
    {label:"Employee theft", marks:1, groups:[["employee theft","internal"]]},
    {label:"Fraud", marks:1, groups:[["fraud","scam"]]},
    {label:"Inventory shortages", marks:1, groups:[["inventory","stock","shortage"]]},
    {label:"Cyber/supply chain/other", marks:1, groups:[["cyber","supply chain","competition","safety","disaster","sabotage"]]}
  ]},
  { section:"C", sectionTitle:"Case Study", type:"essay", marks:26, prompt:`SCENARIO: Thandi's Café
Thandi owns a café (14 staff). Six months, 6 employees resigned. Exit interviews:
- "Pay is below going rate."
- "I never get recognition."
- "Kitchen is hot, air con broken for months."
- "Manager shouts constantly, no trust."
- "I don't feel part of a team."
- "Manager's son got promoted despite my longer tenure."
Thandi: "I pay them on time. What more do they want?"

(a) Using Herzberg's two-factor theory, identify the motivators and hygiene factors Thandi is failing to provide. Quote case evidence. (10)
(b) Using Adams' equity theory, analyse how the son's promotion affects motivation. (8)
(c) Recommend TWO practical strategies Thandi could implement, each linked to a specific motivational theory. (8)`, modelAnswer:"(a) Hygiene: pay, working conditions, manager relationship. Motivators: recognition, growth. (b) Perceived inequity demotivates. (c) Recognition program (Herzberg motivator); fair promotion process (Adams equity).", rubric:[
    {label:"(a) Hygiene: pay", marks:2, groups:[["pay","salary","wage"]]},
    {label:"(a) Hygiene: conditions + manager", marks:2, groups:[["air con","heat","manager","shout"]]},
    {label:"(a) Motivators: recognition + growth", marks:2, groups:[["recognition","growth","achieve"]]},
    {label:"(a) Evidence quoted", marks:4, groups:[["below rate","broken","no trust","never get"]]},
    {label:"(b) Equity theory explained", marks:3, groups:[["input","outcome","ratio","compare"]]},
    {label:"(b) Applied to promotion", marks:5, groups:[["son","promotion","unfair","inequity","demotivat"]]},
    {label:"(c) Two strategies", marks:4, groups:[["recognition"],["fair promotion","merit","transparent"]]},
    {label:"(c) Theory links", marks:4, groups:[["herzberg","motivator"],["adams","equity","maslow"]]}
  ]},
  { section:"D", sectionTitle:"Case Study", type:"essay", marks:26, prompt:`SCENARIO: MegaBuy Warehouse
MegaBuy Warehouse (180 employees). Saturday incidents:
- Shelf collapsed in aisle 6, injuring 2 customers and 1 staff. Reported loose 6 weeks ago.
- 3 teenagers (13, 14, 15) caught shoplifting. 13-year-old had a knife.
- Customer's card cloned by employee with payment access.
- Half of CCTV cameras non-functional for 3 months.
- No H&S rep appointed.
- Fire extinguishers expired; emergency exit blocked.
Mr Naidoo returns from leave to a letter from the Department of Labour.

(a) Identify FOUR specific OHSA violations. Refer to case evidence for each. (10)
(b) Explain the legal rules around prosecuting minors for shoplifting. Provide specific age ranges. (8)
(c) Apply the five-step risk management process to ONE of MegaBuy's risks. (8)`, modelAnswer:"(a) Unaddressed shelf, no rep, expired extinguishers, blocked exit, broken CCTV. (b) Under 12 no prosecution. 12-14 only if State proves understanding. 13 with knife special handling. (c) Identify risk → evaluate → select technique → implement → monitor.", rubric:[
    {label:"(a) Shelf/repair", marks:2.5, groups:[["shelf","collapse","loose"]]},
    {label:"(a) No H&S rep", marks:2.5, groups:[["h&s","rep","representative"]]},
    {label:"(a) Fire + exit", marks:2.5, groups:[["fire","extinguisher","exit","blocked"]]},
    {label:"(a) CCTV", marks:2.5, groups:[["cctv","camera","security"]]},
    {label:"(b) Under 12 = no prosecution", marks:2, groups:[["under 12","no prosecution"]]},
    {label:"(b) 12-14 = if understanding", marks:3, groups:[["12","14","understand","state prove"]]},
    {label:"(b) 13 with knife special", marks:3, groups:[["knife","weapon","special"]]},
    {label:"(c) Risk identified", marks:2, groups:[["theft","card","safety","risk"]]},
    {label:"(c) Five-step applied", marks:6, groups:[["identify"],["evaluate"],["select"],["implement"],["monitor"]]}
  ]}
]},

// ============ COMM A ============
{ id:"comm_work", module:"Communication", name:"Communicating at Work", duration:120, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Putting a message into a code is called?", options:["Decoding","Encoding","Feedback","Channel"], answer:1, explanation:"Encoding." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which model has no feedback loop?", options:["Transactional","Interactive","Linear","Convergence"], answer:2, explanation:"Linear = one-way." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What is 'noise' in communication?", options:["Loud talking only","The receiver's response","Any interference that distorts the message","The channel used"], answer:2, explanation:"Any interference." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Communication comes from Latin communicare meaning:", options:["To speak loudly","To make common","To write down","To argue"], answer:1, explanation:"To make common." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A manager sends an email to all staff about a new policy. This is:", options:["Upward","Downward","Horizontal","Diagonal"], answer:1, explanation:"Downward." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which model has both parties as sender and receiver simultaneously?", options:["Linear","Interactive","Transactional","Laswell's"], answer:2, explanation:"Transactional." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which model emphasises shared experiences?", options:["Shannon-Weaver","Laswell","Schramm","Berlo"], answer:2, explanation:"Schramm." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT one of the eight core elements?", options:["Encoding","Channel","Motivation","Feedback"], answer:2, explanation:"Motivation not listed." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A manager's ego dismissing a junior's idea is which barrier?", options:["Perceptual","Frame of reference","Medium","Feedback"], answer:1, explanation:"Frame of reference." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Worrying about a sick child during a conversation is:", options:["Physical noise","Psychological noise","Medium barrier","Frame of reference"], answer:1, explanation:"Psychological noise." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Sending a termination notice via SMS instead of face-to-face is which barrier?", options:["Noise","Medium","Feedback","Perceptual"], answer:1, explanation:"Medium barrier." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A culture relying on implicit non-verbal cues is:", options:["Low-context","High-context","Direct","Formal"], answer:1, explanation:"High-context." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Loss of non-verbal cues and asynchronous friction are challenges of:", options:["Face-to-face teams","Virtual teams","Retail staff","Boardroom"], answer:1, explanation:"Virtual teams." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What is groupthink?", options:["Creative thinking","Desire for harmony overriding critical thinking","Brainstorming","Leader decides"], answer:1, explanation:"Harmony overrides critical thinking." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"TKI win-win approach is:", options:["Competing","Accommodating","Collaborating","Avoiding"], answer:2, explanation:"Collaborating." },
  { section:"B", sectionTitle:"Essay 1", type:"essay", marks:35, prompt:"Communication models have evolved from simple one-way transmission to complex simultaneous exchanges. Critically discuss the three main types of communication models — linear, interactive and transactional — explaining how each works and identifying at least one example model for each. Then evaluate when each is most appropriate in a South African retail environment, supporting your argument with practical examples from daily retail operations. (35)", modelAnswer:"Linear (Laswell, Shannon-Weaver) = one-way, no feedback. Interactive (Schramm) = two-way, turns. Transactional (Barnlund) = simultaneous, context. Retail: PA, WhatsApp, face-to-face complaint.", rubric:[
    {label:"Linear model explained", marks:5, groups:[["linear"],["one-way","no feedback","sender to receiver"]]},
    {label:"Linear example named", marks:3, groups:[["laswell","shannon","weaver"]]},
    {label:"Linear in retail", marks:4, groups:[["pa","announcement","notice","email"]]},
    {label:"Interactive explained", marks:5, groups:[["interactive"],["two-way","turn","respond"]]},
    {label:"Interactive example", marks:3, groups:[["schramm"]]},
    {label:"Interactive in retail", marks:4, groups:[["query","customer service","feedback","inquiry"]]},
    {label:"Transactional explained", marks:5, groups:[["transactional"],["simultaneous","shared context","continuous"]]},
    {label:"Transactional example", marks:3, groups:[["barnlund"]]},
    {label:"Comparison and evaluation", marks:3, groups:[["compare","evaluate","appropriate","context"]]}
  ]},
  { section:"C", sectionTitle:"Essay 2", type:"essay", marks:35, prompt:"'Communication barriers are the most common cause of workplace misunderstanding.' Critically evaluate this statement by analysing the five categories of communication barriers in the communication process. Provide at least one practical workplace example for each barrier category and recommend concrete strategies a retail manager could use to overcome each barrier. (35)", modelAnswer:"Frame of reference, perceptual, noise, medium, feedback. Each with examples + solutions.", rubric:[
    {label:"Frame of reference definition", marks:3, groups:[["frame of reference","attitude","ego"]]},
    {label:"Frame of reference example", marks:2, groups:[["dismiss","ignore","ego","junior"]]},
    {label:"Frame of reference solution", marks:2, groups:[["active listening","empathy"]]},
    {label:"Perceptual definition", marks:3, groups:[["perceptual","perception","worldview"]]},
    {label:"Perceptual example", marks:2, groups:[["hungry","tired","stress","past"]]},
    {label:"Perceptual solution", marks:2, groups:[["context","awareness","check understanding"]]},
    {label:"Noise definition", marks:3, groups:[["noise","physical","psychological"]]},
    {label:"Noise example", marks:2, groups:[["loud","stress","distract"]]},
    {label:"Noise solution", marks:2, groups:[["quiet","supportive","culture"]]},
    {label:"Medium definition", marks:3, groups:[["medium","channel","richness"]]},
    {label:"Medium example", marks:2, groups:[["sms","email","sensitive","wrong channel"]]},
    {label:"Medium solution", marks:2, groups:[["face-to-face","richer","appropriate"]]},
    {label:"Feedback definition", marks:3, groups:[["feedback","confirmation","response"]]},
    {label:"Feedback example", marks:2, groups:[["no confirmation","one-way","ignored"]]},
    {label:"Feedback solution", marks:2, groups:[["acknowledge","follow-up","two-way"]]}
  ]}
]},

// ============ COMM B ============
{ id:"comm_crisis", module:"Communication", name:"Communication in Crisis", duration:120, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Receiver's response to sender's message is called:", options:["Encoding","Decoding","Feedback","Noise"], answer:2, explanation:"Feedback." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A till operator escalating POS error to supervisor is:", options:["Upward","Downward","Diagonal","Informal"], answer:0, explanation:"Upward." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is an informal channel?", options:["Handbook","Policy manual","The grapevine","Performance review"], answer:2, explanation:"Grapevine." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Marketing specialist speaking with finance manager is:", options:["Upward","Diagonal","Horizontal","Downward"], answer:1, explanation:"Diagonal." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Ubuntu in communication emphasises:", options:["Individual achievement","Top-down rules","Participatory community-centric communication","Strict jargon"], answer:2, explanation:"Community-centric." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Low-context cultures emphasise:", options:["Non-verbal cues","Explicit direct task-focused communication","Face-saving","Reading between lines"], answer:1, explanation:"Explicit direct." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Tuckman stage with conflict and power struggles:", options:["Forming","Storming","Norming","Performing"], answer:1, explanation:"Storming." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What are norms in small groups?", options:["A mathematical average","Acceptable behaviour and ground rules","Leader's title","Type of network"], answer:1, explanation:"Ground rules." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which network is best for complex creative tasks?", options:["Centralised","Decentralised","Y-pattern","Wheel"], answer:1, explanation:"Decentralised." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which TKI style gives in to keep peace?", options:["Accommodating","Competing","Collaborating","Compromising"], answer:0, explanation:"Accommodating." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Conflict between Marketing and Logistics is:", options:["Interpersonal","Organisational","Personal","Value"], answer:1, explanation:"Organisational." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Junior employee cut off reporting POS is:", options:["Horizontal","Active silencing and feedback barrier","Successful upward comm","Informal"], answer:1, explanation:"Silencing/feedback barrier." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Why is grapevine dangerous during crisis?", options:["Slows work","Rumours spread creating panic and distrust","Costs money","Only in small teams"], answer:1, explanation:"Rumours cause panic." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which TKI style is lose-lose?", options:["Collaborating","Competing","Compromising","Avoiding"], answer:2, explanation:"Compromising = lose-lose." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is NOT a Tuckman stage?", options:["Forming","Storming","Reforming","Performing"], answer:2, explanation:"Reforming not a stage." },
  { section:"B", sectionTitle:"Essay 1", type:"essay", marks:35, prompt:"Effective team performance depends on how groups navigate the turbulence of formation and conflict. Critically discuss Tuckman's five stages of group development, explaining the dynamics of each stage and why so many teams become stuck in the 'Storming' phase. Evaluate two conflict resolution strategies from the Thomas-Kilmann model and apply your discussion to the VIBE Retail case study, where a group leader failed to intervene during escalating interpersonal conflict. Conclude with recommendations for how a manager should lead a team through Storming towards Performing. (35)", modelAnswer:"Tuckman stages + TKI application to VIBE case.", rubric:[
    {label:"Forming explained", marks:3, groups:[["forming"],["polite","ground rules","uncertain"]]},
    {label:"Storming explained", marks:4, groups:[["storming"],["conflict","power","resist"]]},
    {label:"Norming explained", marks:3, groups:[["norming"],["cohesion","accept","team"]]},
    {label:"Performing explained", marks:3, groups:[["performing"],["synergy","trust","open"]]},
    {label:"Adjourning explained", marks:2, groups:[["adjourning","transition","disband"]]},
    {label:"Why teams stuck in Storming", marks:4, groups:[["poor leadership","unclear","no intervention","avoid"]]},
    {label:"TKI strategy 1 explained", marks:4, groups:[["collaborating","competing","compromising"]]},
    {label:"TKI 1 evaluated", marks:2, groups:[["advantage","disadvantage","pro","con"]]},
    {label:"TKI strategy 2 explained", marks:3, groups:[["accommodating","avoiding","mediat"]]},
    {label:"TKI 2 evaluated", marks:2, groups:[["advantage","disadvantage","pro","con"]]},
    {label:"VIBE case applied", marks:3, groups:[["vibe","chaloe","sakina","mihlali"]]}
  ]},
  { section:"C", sectionTitle:"Essay 2", type:"essay", marks:35, prompt:"In a crisis, the flow of communication inside an organisation often determines whether the situation is contained or escalates. Critically analyse the four directions of organisational communication flow — downward, upward, horizontal and diagonal — and discuss the role of formal versus informal channels during periods of change. Evaluate how communication breakdowns contributed to organisational failure in at least TWO of the following case studies: SHOPPERS Electronics, VALU SA, or Apex Global. Recommend a comprehensive crisis communication framework that South African retail managers could implement to prevent similar failures. (35)", modelAnswer:"Four flows + formal/informal + two case studies + framework.", rubric:[
    {label:"Downward flow", marks:3, groups:[["downward"],["management","top-down","instruction"]]},
    {label:"Upward flow", marks:3, groups:[["upward"],["staff","report","feedback"]]},
    {label:"Horizontal flow", marks:3, groups:[["horizontal","lateral"],["peer","same level","department"]]},
    {label:"Diagonal flow", marks:3, groups:[["diagonal","cross"],["department","level"]]},
    {label:"Formal channels", marks:2, groups:[["formal","official","handbook"]]},
    {label:"Informal / grapevine", marks:2, groups:[["informal","grapevine","rumour"]]},
    {label:"Case study 1 analysed", marks:5, groups:[["shoppers","valu","apex"]]},
    {label:"Case study 2 analysed", marks:5, groups:[["shoppers","valu","apex"]]},
    {label:"Crisis framework recommended", marks:6, groups:[["framework","integration","feedback loop","rich channel"]]},
    {label:"Evaluation and conclusion", marks:3, groups:[["evaluate","conclusion","overall","therefore"]]}
  ]}
]},

// ============ RFM1 A ============
{ id:"rfm_calculations", module:"Retail Financial Management 1", name:"VAT, Inventory & Income Statement", duration:150, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"A product is R575 including 15% VAT. Price excluding VAT?", options:["R488.75","R500.00","R525.00","R490.00"], answer:1, explanation:"575 × 100/115 = 500." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Output VAT R45,000, Input VAT R28,000. VAT payable to SARS?", options:["R73,000","R17,000","R28,000","R45,000"], answer:1, explanation:"45,000 − 28,000 = 17,000." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Annual demand 6,000, order cost R80, carrying cost R6. EOQ?", options:["200","400","500","600"], answer:1, explanation:"√(2×6000×80÷6)=400." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Max usage 300 kg/day, min lead time 3 days. Safety Stock?", options:["300 kg","600 kg","900 kg","1,200 kg"], answer:2, explanation:"300×3=900." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Max usage 200 units/day, max lead 5 days. Reorder Point?", options:["600","800","1,000","1,200"], answer:2, explanation:"200×5=1,000." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Under FIFO, closing stock is valued at:", options:["Oldest prices","Average price","Most recent purchase prices","Selling price"], answer:2, explanation:"FIFO = newest prices." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Under WAVCO, when is new average calculated?", options:["After every sale","After every purchase","At year-end","Never"], answer:1, explanation:"After every purchase." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"COS R480,000, Average Stock R60,000. Stock Turnover?", options:["4","6","8","12"], answer:2, explanation:"480,000÷60,000=8." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"GP R400,000, Sales R1,000,000. GPM?", options:["25%","40%","60%","80%"], answer:1, explanation:"40%." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"NP R100,000, Sales R1,000,000. NPM?", options:["5%","8%","10%","15%"], answer:2, explanation:"10%." },
  { section:"B", sectionTitle:"VAT Table", type:"table", marks:12, prompt:"Complete the VAT table. VAT rate = 15%. Round to 2 decimals. (12)", columns:["#","Item","Price (excl VAT)","VAT @ 15%","Price (incl VAT)"], rows:[
    {cells:[{value:"1",locked:true},{value:"Dress",locked:true},{value:800,locked:true},{expected:120,tolerance:0.5,marks:1},{expected:920,tolerance:0.5,marks:1}]},
    {cells:[{value:"2",locked:true},{value:"Handbag",locked:true},{expected:1000,tolerance:0.5,marks:1},{value:150,locked:true},{expected:1150,tolerance:0.5,marks:1}]},
    {cells:[{value:"3",locked:true},{value:"Jeans",locked:true},{expected:1000,tolerance:0.5,marks:1},{expected:150,tolerance:0.5,marks:1},{value:1150,locked:true}]},
    {cells:[{value:"4",locked:true},{value:"Jacket",locked:true},{value:2000,locked:true},{expected:300,tolerance:0.5,marks:1},{expected:2300,tolerance:0.5,marks:1}]},
    {cells:[{value:"5",locked:true},{value:"Shoes",locked:true},{expected:1600,tolerance:0.5,marks:1},{value:240,locked:true},{expected:1840,tolerance:0.5,marks:1}]},
    {cells:[{value:"6",locked:true},{value:"Belt",locked:true},{value:400,locked:true},{expected:60,tolerance:0.5,marks:1},{expected:460,tolerance:0.5,marks:1}]}
  ]},
  { section:"C", sectionTitle:"Inventory Control", type:"table", marks:10, prompt:"Calculate EOQ, Safety Stock, Reorder Point, Number of Orders, Average Stock. (10)", description:"Annual demand: 12,000 units · Order cost: R100 · Carrying cost: R6/unit/year · Max usage: 50 units/day · Min lead: 3 days · Max lead: 6 days", columns:["#","Item","Formula","Result"], rows:[
    {cells:[{value:"1",locked:true},{value:"EOQ",locked:true},{value:"√(2×D×S÷H)",locked:true},{expected:632,tolerance:2,marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Safety Stock",locked:true},{value:"Max Usage × Min Lead",locked:true},{expected:150,tolerance:1,marks:2}]},
    {cells:[{value:"3",locked:true},{value:"Reorder Point",locked:true},{value:"Max Usage × Max Lead",locked:true},{expected:300,tolerance:1,marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Orders/year",locked:true},{value:"D ÷ EOQ",locked:true},{expected:19,tolerance:1,marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Average Stock",locked:true},{value:"(EOQ÷2) + Safety",locked:true},{expected:466,tolerance:2,marks:2}]}
  ]},
  { section:"D", sectionTitle:"FIFO Ledger", type:"table", marks:12, prompt:"Complete the FIFO ledger. Opening: 200 @ R10. 5 Oct: purchase 300 @ R12. 12 Oct: issue 400. 20 Oct: purchase 150 @ R15. 28 Oct: issue 200. (12)", description:"Fill every cell marked ?", columns:["Date","Recv Units","Recv Price","Recv Amount","Issued Units","Issued Price","Issued Amount","Bal Units","Bal Price","Bal Amount"], rows:[
    {cells:[{value:"1 Oct",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:200,locked:true},{value:"10.00",locked:true},{value:2000,locked:true}]},
    {cells:[{value:"5 Oct",locked:true},{value:300,locked:true},{value:"12.00",locked:true},{expected:3600,tolerance:1,marks:1},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{expected:500,tolerance:0,marks:1},{value:"10&12",locked:true},{expected:5600,tolerance:1,marks:1}]},
    {cells:[{value:"12 Oct a",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:200,locked:true},{expected:10,tolerance:0.01,marks:1},{expected:2000,tolerance:1,marks:1},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true}]},
    {cells:[{value:"12 Oct b",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:200,locked:true},{expected:12,tolerance:0.01,marks:1},{expected:2400,tolerance:1,marks:1},{expected:100,tolerance:0,marks:1},{expected:12,tolerance:0.01,marks:1},{expected:1200,tolerance:1,marks:1}]},
    {cells:[{value:"20 Oct",locked:true},{value:150,locked:true},{value:"15.00",locked:true},{expected:2250,tolerance:1,marks:1},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{expected:250,tolerance:0,marks:1},{value:"12&15",locked:true},{expected:3450,tolerance:1,marks:1}]},
    {cells:[{value:"28 Oct a",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:100,locked:true},{expected:12,tolerance:0.01,marks:1},{expected:1200,tolerance:1,marks:0.5},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true}]},
    {cells:[{value:"28 Oct b",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:100,locked:true},{expected:15,tolerance:0.01,marks:0.5},{expected:1500,tolerance:1,marks:0.5},{expected:50,tolerance:0,marks:0.5},{expected:15,tolerance:0.01,marks:0.5},{expected:750,tolerance:1,marks:0.5}]}
  ]},
  { section:"E", sectionTitle:"WAVCO Ledger", type:"table", marks:12, prompt:"Same transactions. Complete WAVCO ledger. Recalculate average after every purchase. Round to 2 decimals. (12)", columns:["Date","Recv Units","Recv Price","Recv Amount","Issued Units","Issued Price","Issued Amount","Bal Units","Bal Price","Bal Amount"], rows:[
    {cells:[{value:"1 Oct",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:200,locked:true},{value:"10.00",locked:true},{value:2000,locked:true}]},
    {cells:[{value:"5 Oct",locked:true},{value:300,locked:true},{value:"12.00",locked:true},{value:3600,locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{expected:500,tolerance:0,marks:1},{expected:11.20,tolerance:0.05,marks:1},{expected:5600,tolerance:1,marks:1}]},
    {cells:[{value:"12 Oct",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:400,locked:true},{expected:11.20,tolerance:0.05,marks:1},{expected:4480,tolerance:2,marks:1},{expected:100,tolerance:0,marks:1},{expected:11.20,tolerance:0.05,marks:1},{expected:1120,tolerance:2,marks:1}]},
    {cells:[{value:"20 Oct",locked:true},{value:150,locked:true},{value:"15.00",locked:true},{value:2250,locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{expected:250,tolerance:0,marks:0.5},{expected:13.48,tolerance:0.05,marks:0.5},{expected:3370,tolerance:2,marks:0.5}]},
    {cells:[{value:"28 Oct",locked:true},{value:"",locked:true},{value:"",locked:true},{value:"",locked:true},{value:200,locked:true},{expected:13.48,tolerance:0.05,marks:0.5},{expected:2696,tolerance:2,marks:0.5},{expected:50,tolerance:0,marks:0.5},{expected:13.48,tolerance:0.05,marks:0.5},{expected:674,tolerance:2,marks:0.5}]}
  ]},
  { section:"F", sectionTitle:"Income Statement", type:"table", marks:20, prompt:"Prepare the Income Statement for Khumalo Traders. Fill every ?. (20)", description:"DATA: Sales 2,000,000 · Opening Stock 150,000 · Purchases 1,200,000 · Closing Stock 200,000 · Operating Expenses 400,000 · Interest 50,000 · Tax 27%", columns:["Item","Amount (R)"], rows:[
    {cells:[{value:"Sales",locked:true},{value:2000000,locked:true}]},
    {cells:[{value:"Less: Cost of Sales",locked:true},{value:"",locked:true}]},
    {cells:[{value:"Opening Stock",locked:true},{value:150000,locked:true}]},
    {cells:[{value:"Add: Purchases",locked:true},{value:1200000,locked:true}]},
    {cells:[{value:"Less: Closing Stock",locked:true},{expected:-200000,tolerance:1,marks:2}]},
    {cells:[{value:"Cost of Sales",locked:true},{expected:1150000,tolerance:1,marks:2}]},
    {cells:[{value:"Gross Profit",locked:true},{expected:850000,tolerance:1,marks:2}]},
    {cells:[{value:"Less: Operating Expenses",locked:true},{value:400000,locked:true}]},
    {cells:[{value:"Operating Profit",locked:true},{expected:450000,tolerance:1,marks:2}]},
    {cells:[{value:"Less: Interest Expense",locked:true},{value:50000,locked:true}]},
    {cells:[{value:"Net Profit Before Tax",locked:true},{expected:400000,tolerance:1,marks:2}]},
    {cells:[{value:"Less: Tax @ 27%",locked:true},{expected:108000,tolerance:1,marks:2}]},
    {cells:[{value:"Net Profit After Tax",locked:true},{expected:292000,tolerance:1,marks:2}]},
    {cells:[{value:"Gross Profit Margin %",locked:true},{expected:42.5,tolerance:0.1,marks:2}]},
    {cells:[{value:"Net Profit Margin %",locked:true},{expected:14.6,tolerance:0.1,marks:2}]}
  ]},
  { section:"G", sectionTitle:"Liquidity + Efficiency Ratios", type:"table", marks:14, prompt:"Calculate the required ratios. Formula and result. (14)", description:"Current Assets: 700,000 · Inventory: 200,000 · Current Liabilities: 300,000 · Average Stock: 175,000 · Credit Sales: 1,600,000 · Avg Debtors: 160,000 · Credit Purchases: 1,000,000 · Avg Creditors: 100,000 · COS: 1,150,000", columns:["#","Ratio","Formula","Result"], rows:[
    {cells:[{value:"1",locked:true},{value:"Current Ratio",locked:true},{value:"CA ÷ CL",locked:true},{expected:2.33,tolerance:0.05,marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Quick Ratio",locked:true},{value:"(CA − Inv) ÷ CL",locked:true},{expected:1.67,tolerance:0.05,marks:2}]},
    {cells:[{value:"3",locked:true},{value:"Stock Turnover",locked:true},{value:"COS ÷ Avg Stock",locked:true},{expected:6.57,tolerance:0.1,marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Debtors Turnover",locked:true},{value:"Credits ÷ Avg Debtors",locked:true},{expected:10,tolerance:0.1,marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Avg Collection Period",locked:true},{value:"(Debtors ÷ Credit Sales) × 365",locked:true},{expected:36.5,tolerance:0.5,marks:2}]},
    {cells:[{value:"6",locked:true},{value:"Creditors Turnover",locked:true},{value:"Purchases ÷ Avg Creditors",locked:true},{expected:10,tolerance:0.1,marks:2}]},
    {cells:[{value:"7",locked:true},{value:"Avg Payment Period",locked:true},{value:"(Creditors ÷ Purchases) × 365",locked:true},{expected:36.5,tolerance:0.5,marks:2}]}
  ]}
]},

// ============ RFM1 B ============
{ id:"rfm_analysis", module:"Retail Financial Management 1", name:"Costing, CVP & Financial Statements", duration:150, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Prime Cost = Direct Materials + ?", options:["Overhead","Direct Labour","Fixed","Depreciation"], answer:1, explanation:"DM + DL = Prime Cost." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which is a variable cost?", options:["Factory rent","Raw materials","Insurance","Depreciation"], answer:1, explanation:"Raw materials." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Conversion Cost = Direct Labour + ?", options:["Direct Materials","Manufacturing Overhead","Fixed costs","Period costs"], answer:1, explanation:"DL + MOH." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"As production increases, fixed cost per unit:", options:["Increases","Decreases","Same","Doubles"], answer:1, explanation:"Fixed per unit decreases." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Selling R120, Variable R70, Fixed R15,000. BEP units?", options:["200","300","400","500"], answer:1, explanation:"15,000 ÷ 50 = 300." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Using Q5's data, CM Ratio?", options:["30%","41.67%","50%","58.33%"], answer:1, explanation:"50 ÷ 120 = 41.67%." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Current Assets R400,000, Current Liabilities R200,000. Current Ratio?", options:["0.5:1","1:1","2:1","4:1"], answer:2, explanation:"400,000 ÷ 200,000 = 2:1." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Net Profit R120,000, Total Assets R800,000. ROA?", options:["10%","15%","20%","25%"], answer:1, explanation:"15%." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"NPAT R126,000, Equity R900,000. ROE?", options:["10%","12%","14%","15%"], answer:2, explanation:"14%." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which ratio measures solvency?", options:["Current Ratio","Quick Ratio","Debt : Equity","Stock Turnover"], answer:2, explanation:"Debt:Equity = solvency." },
  { section:"B", sectionTitle:"Cost Classification", type:"table", marks:10, prompt:"Classify each cost as DM, DL, MOH, or PC. (10)", columns:["#","Cost Item","Classification"], rows:[
    {cells:[{value:"1",locked:true},{value:"Cotton fabric for shirts",locked:true},{expected:"DM",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"2",locked:true},{value:"Wages of sewing operators",locked:true},{expected:"DL",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"3",locked:true},{value:"Factory rent",locked:true},{expected:"MOH",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"4",locked:true},{value:"Depreciation on factory machines",locked:true},{expected:"MOH",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"5",locked:true},{value:"Buttons for shirts",locked:true},{expected:"DM",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"6",locked:true},{value:"Advertising of shirts",locked:true},{expected:"PC",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"7",locked:true},{value:"Factory supervisor's salary",locked:true},{expected:"MOH",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"8",locked:true},{value:"Thread used in stitching",locked:true},{expected:"DM",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"9",locked:true},{value:"Delivery cost to customers",locked:true},{expected:"PC",options:["DM","DL","MOH","PC"],marks:1}]},
    {cells:[{value:"10",locked:true},{value:"Sales commission",locked:true},{expected:"PC",options:["DM","DL","MOH","PC"],marks:1}]}
  ]},
  { section:"C", sectionTitle:"CVP Analysis", type:"table", marks:15, prompt:"Selling R200, Variable R120, Fixed R80,000. Complete the CVP table. (15)", columns:["#","Metric","Formula","Value"], rows:[
    {cells:[{value:"1",locked:true},{value:"CM per unit",locked:true},{value:"Price − Variable",locked:true},{expected:80,tolerance:0,marks:2}]},
    {cells:[{value:"2",locked:true},{value:"CM Ratio",locked:true},{value:"CM ÷ Price × 100",locked:true},{expected:40,tolerance:0.5,marks:2}]},
    {cells:[{value:"3",locked:true},{value:"BEP units",locked:true},{value:"Fixed ÷ CM",locked:true},{expected:1000,tolerance:0,marks:2}]},
    {cells:[{value:"4",locked:true},{value:"BEP Rand",locked:true},{value:"BEP × Price",locked:true},{expected:200000,tolerance:2,marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Target units (R40k)",locked:true},{value:"(Fixed + Target) ÷ CM",locked:true},{expected:1500,tolerance:0,marks:2}]},
    {cells:[{value:"6",locked:true},{value:"Profit at 1,800 units",locked:true},{value:"(U × CM) − Fixed",locked:true},{expected:64000,tolerance:2,marks:2}]},
    {cells:[{value:"7",locked:true},{value:"Margin of Safety (1,800)",locked:true},{value:"Actual − BEP",locked:true},{expected:800,tolerance:0,marks:2}]}
  ]},
  { section:"D", sectionTitle:"Extended CVP", type:"table", marks:10, prompt:"Extended CVP analysis. (10)", description:"Fixed Costs: R240,000 · Total Sales: R1,200,000 · Total Variable Costs: R720,000", columns:["#","Item","Formula","Value"], rows:[
    {cells:[{value:"1",locked:true},{value:"Total CM",locked:true},{value:"Sales − Variable",locked:true},{expected:480000,tolerance:1,marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Overall CM Ratio",locked:true},{value:"(CM ÷ Sales) × 100",locked:true},{expected:40,tolerance:0.5,marks:2}]},
    {cells:[{value:"3",locked:true},{value:"BEP Sales",locked:true},{value:"Fixed ÷ CM Ratio",locked:true},{expected:600000,tolerance:2,marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Margin of Safety",locked:true},{value:"Actual − BEP",locked:true},{expected:600000,tolerance:2,marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Profit at current sales",locked:true},{value:"CM − Fixed",locked:true},{expected:240000,tolerance:1,marks:2}]}
  ]},
  { section:"E", sectionTitle:"Income Statement", type:"table", marks:20, prompt:"Prepare the Income Statement for Dlamini Stores. Fill every ?. (20)", description:"DATA: Sales 1,500,000 · Opening Stock 100,000 · Purchases 850,000 · Closing Stock 150,000 · Operating Expenses 400,000 · Interest 0 · Tax 30%", columns:["Item","Amount (R)"], rows:[
    {cells:[{value:"Sales",locked:true},{value:1500000,locked:true}]},
    {cells:[{value:"Less: Cost of Sales",locked:true},{value:"",locked:true}]},
    {cells:[{value:"Opening Stock",locked:true},{value:100000,locked:true}]},
    {cells:[{value:"Add: Purchases",locked:true},{value:850000,locked:true}]},
    {cells:[{value:"Less: Closing Stock",locked:true},{expected:-150000,tolerance:1,marks:2}]},
    {cells:[{value:"Cost of Sales",locked:true},{expected:800000,tolerance:1,marks:2}]},
    {cells:[{value:"Gross Profit",locked:true},{expected:700000,tolerance:1,marks:2}]},
    {cells:[{value:"Less: Operating Expenses",locked:true},{value:400000,locked:true}]},
    {cells:[{value:"Operating Profit",locked:true},{expected:300000,tolerance:1,marks:2}]},
    {cells:[{value:"Net Profit Before Tax",locked:true},{expected:300000,tolerance:1,marks:2}]},
    {cells:[{value:"Less: Tax @ 30%",locked:true},{expected:90000,tolerance:1,marks:2}]},
    {cells:[{value:"Net Profit After Tax",locked:true},{expected:210000,tolerance:1,marks:2}]},
    {cells:[{value:"Gross Profit Margin %",locked:true},{expected:46.67,tolerance:0.1,marks:2}]},
    {cells:[{value:"Net Profit Margin %",locked:true},{expected:14.00,tolerance:0.1,marks:2}]}
  ]},
  { section:"F", sectionTitle:"Balance Sheet", type:"table", marks:10, prompt:"Prepare the Balance Sheet for Dlamini Stores. Fill every ?. (10)", description:"Equipment 500,000 · Acc Dep 200,000 · Vehicles 300,000 · Acc Dep 100,000 · Inventory 150,000 · Debtors 250,000 · Bank 80,000 · Cash 20,000 · Capital 400,000 · Retained 100,000 · Drawings 50,000 · Loan 200,000 · Creditors 140,000 · NPAT (from Q14) 210,000", columns:["Section","Amount (R)"], rows:[
    {cells:[{value:"Equipment (NBV)",locked:true},{expected:300000,tolerance:1,marks:1}]},
    {cells:[{value:"Vehicles (NBV)",locked:true},{expected:200000,tolerance:1,marks:1}]},
    {cells:[{value:"Total Non-Current Assets",locked:true},{expected:500000,tolerance:1,marks:1}]},
    {cells:[{value:"Total Current Assets",locked:true},{expected:500000,tolerance:1,marks:1}]},
    {cells:[{value:"TOTAL ASSETS",locked:true},{expected:1000000,tolerance:1,marks:2}]},
    {cells:[{value:"Total Equity",locked:true},{expected:660000,tolerance:1,marks:1.5}]},
    {cells:[{value:"Total Liabilities",locked:true},{expected:340000,tolerance:1,marks:1.5}]},
    {cells:[{value:"TOTAL EQUITY + LIABILITIES",locked:true},{expected:1000000,tolerance:1,marks:1}]}
  ]},
  { section:"G", sectionTitle:"Full Ratio Analysis", type:"table", marks:15, prompt:"Calculate all 10 ratios. Formula and result. (15)", description:"From Q15 & Q14: CA 500,000 · Inv 150,000 · CL 140,000 · TA 1,000,000 · Equity 660,000 · Sales 1,500,000 · GP 700,000 · NPAT 210,000 · COS 800,000 · Avg Stock 125,000 · Credit Sales 1,200,000 · Avg Debtors 200,000 · Credit Purch 700,000 · Avg Cred 100,000", columns:["#","Ratio","Formula","Result"], rows:[
    {cells:[{value:"1",locked:true},{value:"Current Ratio",locked:true},{value:"CA ÷ CL",locked:true},{expected:3.57,tolerance:0.05,marks:1.5}]},
    {cells:[{value:"2",locked:true},{value:"Quick Ratio",locked:true},{value:"(CA − Inv) ÷ CL",locked:true},{expected:2.50,tolerance:0.05,marks:1.5}]},
    {cells:[{value:"3",locked:true},{value:"Stock Turnover",locked:true},{value:"COS ÷ Avg Stock",locked:true},{expected:6.40,tolerance:0.1,marks:1.5}]},
    {cells:[{value:"4",locked:true},{value:"Debtors Turnover",locked:true},{value:"Credit Sales ÷ Debtors",locked:true},{expected:6,tolerance:0.1,marks:1.5}]},
    {cells:[{value:"5",locked:true},{value:"Avg Collection Period",locked:true},{value:"(Debtors ÷ Sales) × 365",locked:true},{expected:60.83,tolerance:0.5,marks:1.5}]},
    {cells:[{value:"6",locked:true},{value:"Creditors Turnover",locked:true},{value:"Purchases ÷ Creditors",locked:true},{expected:7,tolerance:0.1,marks:1.5}]},
    {cells:[{value:"7",locked:true},{value:"Avg Payment Period",locked:true},{value:"(Creditors ÷ Purch) × 365",locked:true},{expected:52.14,tolerance:0.5,marks:1.5}]},
    {cells:[{value:"8",locked:true},{value:"Gross Profit Margin",locked:true},{value:"(GP ÷ Sales) × 100",locked:true},{expected:46.67,tolerance:0.1,marks:1.5}]},
    {cells:[{value:"9",locked:true},{value:"Net Profit Margin",locked:true},{value:"(NPAT ÷ Sales) × 100",locked:true},{expected:14,tolerance:0.1,marks:1.5}]},
    {cells:[{value:"10",locked:true},{value:"Return on Equity",locked:true},{value:"(NPAT ÷ Equity) × 100",locked:true},{expected:31.82,tolerance:0.1,marks:1.5}]}
  ]}
]},

// ============ BCA A ============
{ id:"bca_documents", module:"Business Computer Applications", name:"Documents & Files", duration:90, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Where should you save the original downloaded ZIP file?", options:["Solutions","Backup Files","Data Files","Image Files"], answer:1, explanation:"Backup Files." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which tab inserts Header and Footer?", options:["Home","Insert","Layout","Design"], answer:1, explanation:"Insert tab." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Ctrl+A does what?", options:["Copy","Paste","Select all","Print"], answer:2, explanation:"Select all." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Feature making first letter large and dropped into text:", options:["WordArt","Drop Cap","Watermark","Header"], answer:1, explanation:"Drop Cap." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Wrap Text option for image inline:", options:["In Line","Square","Tight","Behind"], answer:2, explanation:"Tight." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Where to add text watermark?", options:["Insert","Design","Layout","Home"], answer:1, explanation:"Design → Watermark." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"To see how many files in folder:", options:["Open every file","Right-click → Properties","Rename","Move to Recycle Bin"], answer:1, explanation:"Properties." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Difference between Transition and Animation?", options:["Same","Transition = slide entry; Animation = objects move","Transition = text; Animation = slides","Animation = videos"], answer:1, explanation:"Slide vs object." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Apply same transition to all slides:", options:["Redo each","Click Apply to All","Copy-paste","Save and reopen"], answer:1, explanation:"Apply to All." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Where to add presenter notes?", options:["Slide","Notes pane at bottom","Header","Footer"], answer:1, explanation:"Notes pane." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What does $ do in $K$3?", options:["Bold","Lock cell (absolute)","Currency","Percent"], answer:1, explanation:"Absolute reference." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Shortcut for Find & Replace?", options:["Ctrl+F","Ctrl+G","Ctrl+H","Ctrl+R"], answer:2, explanation:"Ctrl+H." },
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Describe a folder structure for a retail business. List at least FIVE sub-folders and their purpose. (5)", modelAnswer:"Main + Solutions (Ms Word, Ms PPT), Backup Files, Data Files (Images, Other).", rubric:[
    {label:"Main folder", marks:1, groups:[["main","root"]]},
    {label:"Solutions + subs", marks:1, groups:[["solution","word","powerpoint"]]},
    {label:"Backup", marks:1, groups:[["backup"]]},
    {label:"Data + subs", marks:1, groups:[["data","image","other"]]},
    {label:"Purpose explained", marks:1, groups:[["purpose","organise","type"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Explain how to insert an auto-updating date in a Word footer. (5)", modelAnswer:"Insert → Footer → Blank. Insert → Date & Time. Choose format. Tick Update automatically.", rubric:[
    {label:"Insert Footer", marks:1, groups:[["footer","insert"]]},
    {label:"Date & Time feature", marks:1, groups:[["date","time","date & time"]]},
    {label:"Choose format", marks:1, groups:[["format","style"]]},
    {label:"Tick Update automatically", marks:1.5, groups:[["update automatically","auto-update"]]},
    {label:"Menu path correct", marks:0.5, groups:[["insert","menu","tab"]]}
  ]},
  { section:"C", sectionTitle:"File Management Classification", type:"table", marks:15, prompt:"Classify each file or task into the correct folder or action. (15)", description:"Folders: Solutions (Ms Word, Ms PowerPoint) · Backup Files · Data Files (Image Files, Other Files)", columns:["#","File/Task","Correct Folder/Action"], rows:[
    {cells:[{value:"1",locked:true},{value:"Download the zip file",locked:true},{expected:"Backup Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"2",locked:true},{value:"Extracted data files",locked:true},{expected:"Data Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"3",locked:true},{value:"retail_report.docx",locked:true},{expected:"Data Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"4",locked:true},{value:"store_photo.jpg",locked:true},{expected:"Image Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"5",locked:true},{value:"presentation.pptx",locked:true},{expected:"Solutions",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"6",locked:true},{value:"covid_stats.xlsx",locked:true},{expected:"Data Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"7",locked:true},{value:"customer_list.pdf",locked:true},{expected:"Data Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"8",locked:true},{value:"logo.png",locked:true},{expected:"Image Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"9",locked:true},{value:"backup_of_data.zip",locked:true},{expected:"Backup Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"10",locked:true},{value:"counselling_flyer.docx",locked:true},{expected:"Solutions",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"11",locked:true},{value:"student_info.txt",locked:true},{expected:"Data Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"12",locked:true},{value:"business_plan.docx",locked:true},{expected:"Solutions",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"13",locked:true},{value:"photo_album.jpg",locked:true},{expected:"Image Files",options:["Solutions","Backup Files","Data Files","Image Files"],marks:1}]},
    {cells:[{value:"14",locked:true},{value:"Edit file inside ZIP",locked:true},{expected:"Extract first, then edit",options:["Edit directly","Extract first, then edit","Delete file","Copy"],marks:1}]},
    {cells:[{value:"15",locked:true},{value:"Find folder size",locked:true},{expected:"Right-click → Properties",options:["Open every file","Right-click → Properties","Rename","Delete"],marks:1}]}
  ]},
  { section:"D", sectionTitle:"Word Menu Paths", type:"table", marks:20, prompt:"For each Word task, write the exact menu path. (20)", columns:["#","Task","Menu Path"], rows:[
    {cells:[{value:"1",locked:true},{value:"Insert a Header",locked:true},{expected:"Insert → Header",options:["Insert → Header","Design → Header","Home → Header","Layout → Header"],marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Insert a Footer",locked:true},{expected:"Insert → Footer",options:["Insert → Footer","Design → Footer","Home → Footer","Layout → Footer"],marks:2}]},
    {cells:[{value:"3",locked:true},{value:"Add text watermark",locked:true},{expected:"Design → Watermark",options:["Insert → Watermark","Design → Watermark","Layout → Watermark","Home → Watermark"],marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Change page orientation",locked:true},{expected:"Layout → Orientation",options:["Insert → Orientation","Layout → Orientation","Design → Orientation","View → Orientation"],marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Two columns with line",locked:true},{expected:"Layout → Columns → More Columns",options:["Layout → Columns → More Columns","Insert → Columns","Home → Columns","Design → Columns"],marks:2}]},
    {cells:[{value:"6",locked:true},{value:"Insert a Drop Cap",locked:true},{expected:"Insert → Drop Cap",options:["Insert → Drop Cap","Design → Drop Cap","Home → Drop Cap","Layout → Drop Cap"],marks:2}]},
    {cells:[{value:"7",locked:true},{value:"Insert a Table",locked:true},{expected:"Insert → Table",options:["Insert → Table","Home → Table","Layout → Table","Design → Table"],marks:2}]},
    {cells:[{value:"8",locked:true},{value:"Change line spacing",locked:true},{expected:"Home → Line and Paragraph Spacing",options:["Home → Line and Paragraph Spacing","Insert → Spacing","Layout → Spacing","Design → Spacing"],marks:2}]},
    {cells:[{value:"9",locked:true},{value:"Insert WordArt",locked:true},{expected:"Insert → WordArt",options:["Insert → WordArt","Home → WordArt","Design → WordArt","Layout → WordArt"],marks:2}]},
    {cells:[{value:"10",locked:true},{value:"Find & Replace",locked:true},{expected:"Home → Find & Replace",options:["Home → Find & Replace","Insert → Replace","Design → Replace","Layout → Replace"],marks:2}]}
  ]},
  { section:"E", sectionTitle:"PowerPoint Features", type:"table", marks:15, prompt:"Match each feature to its correct purpose. (15)", columns:["#","Feature","Purpose"], rows:[
    {cells:[{value:"1",locked:true},{value:"Transition",locked:true},{expected:"How slide enters",options:["How slide enters","How objects move","Colour scheme","Hidden notes","Slide structure"],marks:3}]},
    {cells:[{value:"2",locked:true},{value:"Animation",locked:true},{expected:"How objects move",options:["How slide enters","How objects move","Colour scheme","Hidden notes","Slide structure"],marks:3}]},
    {cells:[{value:"3",locked:true},{value:"Design Theme",locked:true},{expected:"Colour scheme",options:["How slide enters","How objects move","Colour scheme","Hidden notes","Slide structure"],marks:3}]},
    {cells:[{value:"4",locked:true},{value:"Speaker Notes",locked:true},{expected:"Hidden notes",options:["How slide enters","How objects move","Colour scheme","Hidden notes","Slide structure"],marks:3}]},
    {cells:[{value:"5",locked:true},{value:"Slide Layout",locked:true},{expected:"Slide structure",options:["How slide enters","How objects move","Colour scheme","Hidden notes","Slide structure"],marks:3}]}
  ]},
  { section:"F", sectionTitle:"Cross-App Comparison", type:"table", marks:16, prompt:"Identify the best application for each task. Choose Word, Excel, PowerPoint, or Access. (16)", columns:["#","Task","Best Application"], rows:[
    {cells:[{value:"1",locked:true},{value:"Sales report with formulas",locked:true},{expected:"Excel",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Formal letter to customer",locked:true},{expected:"Word",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"3",locked:true},{value:"Board meeting presentation",locked:true},{expected:"PowerPoint",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Store customer records + queries",locked:true},{expected:"Access",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Calculate VAT on products",locked:true},{expected:"Excel",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"6",locked:true},{value:"Format report with headers/footers",locked:true},{expected:"Word",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"7",locked:true},{value:"Import spreadsheet to database",locked:true},{expected:"Access",options:["Word","Excel","PowerPoint","Access"],marks:2}]},
    {cells:[{value:"8",locked:true},{value:"Slideshow with animations",locked:true},{expected:"PowerPoint",options:["Word","Excel","PowerPoint","Access"],marks:2}]}
  ]}
]},

// ============ BCA B ============
{ id:"bca_data", module:"Business Computer Applications", name:"Data & Presentation", duration:90, questions:[
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which Excel function adds a range?", options:["=ADD()","=SUM()","=TOTAL()","=AVERAGE()"], answer:1, explanation:"SUM." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Formula for Revenue if Price=D2, Units=E2?", options:["=D2+E2","=D2-E2","=D2*E2","=D2/E2"], answer:2, explanation:"Multiply." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"COUNTIF does what?", options:["Counts all cells","Counts cells matching condition","Adds matching cells","Removes duplicates"], answer:1, explanation:"Conditional count." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Correct VLOOKUP syntax?", options:["=VLOOKUP(column,table,row)","=VLOOKUP(lookup_value,table_array,col_index_num,FALSE)","=VLOOKUP(search,range,2,TRUE)","=VLOOKUP(table,value,col)"], answer:1, explanation:"Standard syntax." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What does $ do in $K$3?", options:["Bold","Lock cell","Currency","Percent"], answer:1, explanation:"Absolute." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Where to import Excel in Access?", options:["Home","External Data","Create","Database Tools"], answer:1, explanation:"External Data." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Difference between Query and Report?", options:["Same","Query extracts data; Report formats for printing","Query=printing; Report=calc","Reports more secure"], answer:1, explanation:"Query vs Report." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"What to tick for headers in import?", options:["First Row Contains Column Headings","AutoNumber","Data Type","Primary Key"], answer:0, explanation:"Headers option." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Formula combining surname(C2) + name(B2), starting with surname?", options:["=C2+B2","=C2&B2","=C2&\" \"&B2","=CONCAT(C2)"], answer:2, explanation:"Space separator." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Conditional Formatting does what?", options:["Changes font","Auto-highlights cells matching rules","Sorts data","Prints reports"], answer:1, explanation:"Auto-highlight." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Where is Freeze Panes?", options:["Insert","View → Freeze Panes","Data","Home"], answer:1, explanation:"View tab." },
  { section:"A", sectionTitle:"Multiple Choice", type:"mcq", marks:2, prompt:"Which counts non-empty cells?", options:["COUNT","COUNTA","COUNTIF","SUM"], answer:1, explanation:"COUNTA." },
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Explain how to use VLOOKUP to find a customer's phone number given their name. Include a sample formula. (5)", modelAnswer:"=VLOOKUP(lookup_value, table_array, col_index, FALSE). Lookup = name cell; table = range with names + phones; column index = phone position.", rubric:[
    {label:"VLOOKUP function named", marks:1, groups:[["vlookup"]]},
    {label:"Lookup value = name", marks:1, groups:[["name","lookup value","a2"]]},
    {label:"Table array", marks:1, groups:[["table","range","columns"]]},
    {label:"Column index number", marks:1, groups:[["column index","column number","col"]]},
    {label:"FALSE for exact match", marks:1, groups:[["false","exact"]]}
  ]},
  { section:"B", sectionTitle:"Short Answer", type:"short", marks:5, prompt:"Describe the steps to import an Excel spreadsheet into Access and create a Query from it. (5)", modelAnswer:"External Data → New Data Source → From File → Excel. Tick First Row Headers. New Table. Create → Query Design → add table → Run.", rubric:[
    {label:"External Data path", marks:1, groups:[["external data","from file","excel"]]},
    {label:"First Row Headers", marks:1, groups:[["first row","headers","column headings"]]},
    {label:"New Table option", marks:1, groups:[["new table","in a new"]]},
    {label:"Query Design", marks:1, groups:[["query design","create query"]]},
    {label:"Run query", marks:1, groups:[["run","execute","exclamation"]]}
  ]},
  { section:"C", sectionTitle:"Excel Formulas", type:"table", marks:20, prompt:"Write the correct Excel formula for each scenario. Include equals sign. (20)", columns:["#","Scenario","Formula"], rows:[
    {cells:[{value:"1",locked:true},{value:"Total of column D (D2:D10)",locked:true},{expected:"=SUM(D2:D10)",options:["=SUM(D2:D10)","=ADD(D2:D10)","=TOTAL(D2:D10)","=PLUS(D2:D10)"],marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Average of E2:E50",locked:true},{expected:"=AVERAGE(E2:E50)",options:["=AVERAGE(E2:E50)","=MEAN(E2:E50)","=AVG(E2:E50)","=AV(E2:E50)"],marks:2}]},
    {cells:[{value:"3",locked:true},{value:"PASS if F2>=50 else FAIL",locked:true},{expected:"=IF(F2>=50,\"PASS\",\"FAIL\")",options:["=IF(F2>=50,\"PASS\",\"FAIL\")","=IF(F2<50,\"PASS\",\"FAIL\")","=IF(F2=\"PASS\",50)","=WHEN(F2>=50)"],marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Price(D2) × Units(E2)",locked:true},{expected:"=D2*E2",options:["=D2*E2","=D2+E2","=D2/E2","=PRODUCT(D2:E2)"],marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Count surnames in B2:B50",locked:true},{expected:"=COUNTA(B2:B50)",options:["=COUNTA(B2:B50)","=COUNT(B2:B50)","=COUNTIF(B2:B50)","=SUM(B2:B50)"],marks:2}]},
    {cells:[{value:"6",locked:true},{value:"VLOOKUP CEO for country in A2",locked:true},{expected:"=VLOOKUP(A2,$A$2:$C$10,2,FALSE)",options:["=VLOOKUP(A2,$A$2:$C$10,2,FALSE)","=VLOOKUP(A2,A2:C10,2,TRUE)","=VLOOKUP(A2,A2:C10,3)","=LOOKUP(A2)"],marks:2}]},
    {cells:[{value:"7",locked:true},{value:"Absolute reference to K3",locked:true},{expected:"=$K$3",options:["=$K$3","=K3","=K$3","=$K3"],marks:2}]},
    {cells:[{value:"8",locked:true},{value:"Combine surname(C2)+name(B2)",locked:true},{expected:"=C2&\" \"&B2",options:["=C2&\" \"&B2","=C2+B2","=CONCAT(C2)","=B2&C2"],marks:2}]},
    {cells:[{value:"9",locked:true},{value:"Highest in F2:F50",locked:true},{expected:"=MAX(F2:F50)",options:["=MAX(F2:F50)","=HIGH(F2:F50)","=TOP(F2:F50)","=LARGE(F2:F50)"],marks:2}]},
    {cells:[{value:"10",locked:true},{value:"'Not found' if VLOOKUP fails",locked:true},{expected:"=IFERROR(VLOOKUP(A2,B2:C5,2,FALSE),\"Not found\")",options:["=IFERROR(VLOOKUP(A2,B2:C5,2,FALSE),\"Not found\")","=IF(VLOOKUP(A2,B2:C5,2,FALSE),\"Not found\")","=ERROR(A2)","=TRY(A2)"],marks:2}]}
  ]},
  { section:"D", sectionTitle:"Excel Functions", type:"table", marks:15, prompt:"Match each function/tool to its purpose. (15)", columns:["#","Function/Tool","Purpose"], rows:[
    {cells:[{value:"1",locked:true},{value:"=SUM()",locked:true},{expected:"Adds up range",options:["Adds up range","Average","Highest","Lowest","Counts non-empty"],marks:1}]},
    {cells:[{value:"2",locked:true},{value:"=AVERAGE()",locked:true},{expected:"Average",options:["Adds up range","Average","Highest","Lowest","Counts non-empty"],marks:1}]},
    {cells:[{value:"3",locked:true},{value:"=MAX()",locked:true},{expected:"Highest",options:["Adds up range","Average","Highest","Lowest","Counts non-empty"],marks:1}]},
    {cells:[{value:"4",locked:true},{value:"=MIN()",locked:true},{expected:"Lowest",options:["Adds up range","Average","Highest","Lowest","Counts non-empty"],marks:1}]},
    {cells:[{value:"5",locked:true},{value:"=COUNTA()",locked:true},{expected:"Counts non-empty",options:["Adds up range","Average","Highest","Lowest","Counts non-empty"],marks:1}]},
    {cells:[{value:"6",locked:true},{value:"=COUNTIF()",locked:true},{expected:"Counts matching",options:["Adds up range","Counts matching","Returns one of two","Fallback on error","Looks up value"],marks:1}]},
    {cells:[{value:"7",locked:true},{value:"=IF()",locked:true},{expected:"Returns one of two",options:["Adds up range","Counts matching","Returns one of two","Fallback on error","Looks up value"],marks:1}]},
    {cells:[{value:"8",locked:true},{value:"=IFERROR()",locked:true},{expected:"Fallback on error",options:["Adds up range","Counts matching","Returns one of two","Fallback on error","Looks up value"],marks:1}]},
    {cells:[{value:"9",locked:true},{value:"=VLOOKUP()",locked:true},{expected:"Looks up value",options:["Adds up range","Counts matching","Returns one of two","Fallback on error","Looks up value"],marks:1}]},
    {cells:[{value:"10",locked:true},{value:"=CONCATENATE/&",locked:true},{expected:"Combines text",options:["Combines text","Locks reference","Highlights rules","Freezes row","Sorts data"],marks:1}]},
    {cells:[{value:"11",locked:true},{value:"$ (absolute)",locked:true},{expected:"Locks reference",options:["Combines text","Locks reference","Highlights rules","Freezes row","Sorts data"],marks:1}]},
    {cells:[{value:"12",locked:true},{value:"Conditional Formatting",locked:true},{expected:"Highlights rules",options:["Combines text","Locks reference","Highlights rules","Freezes row","Sorts data"],marks:1}]},
    {cells:[{value:"13",locked:true},{value:"Freeze Panes",locked:true},{expected:"Freezes row",options:["Combines text","Locks reference","Highlights rules","Freezes row","Sorts data"],marks:1}]},
    {cells:[{value:"14",locked:true},{value:"Sort",locked:true},{expected:"Sorts data",options:["Combines text","Locks reference","Highlights rules","Freezes row","Sorts data"],marks:1}]},
    {cells:[{value:"15",locked:true},{value:"Format Cells",locked:true},{expected:"Changes number format",options:["Combines text","Changes number format","Highlights rules","Freezes row","Sorts data"],marks:1}]}
  ]},
  { section:"E", sectionTitle:"Access Workflow", type:"table", marks:15, prompt:"Complete the Access workflow table. Write what you do at each step. (15)", columns:["#","Step","What you do"], rows:[
    {cells:[{value:"1",locked:true},{value:"Open Access",locked:true},{expected:"Blank Database → Name → Create",options:["Blank Database → Name → Create","Open existing file","Import from File","Create Table"],marks:3}]},
    {cells:[{value:"2",locked:true},{value:"Import Excel file",locked:true},{expected:"External Data → From File → Excel",options:["External Data → From File → Excel","Home → Open","Create → Import","File → Load"],marks:3}]},
    {cells:[{value:"3",locked:true},{value:"Ensure headers",locked:true},{expected:"Tick First Row Contains Headings",options:["Tick First Row Contains Headings","AutoNumber","Primary Key","Data Type"],marks:3}]},
    {cells:[{value:"4",locked:true},{value:"Create Query",locked:true},{expected:"Create → Query Design → add table",options:["Create → Query Design → add table","Insert → Query","Home → Query","Design → Query"],marks:3}]},
    {cells:[{value:"5",locked:true},{value:"Run Query",locked:true},{expected:"Click Run (!) on ribbon",options:["Click Run (!) on ribbon","Save and close","Print query","Delete query"],marks:3}]}
  ]},
  { section:"F", sectionTitle:"Cross-App Integration", type:"table", marks:16, prompt:"For each scenario, identify the app + feature. (16)", columns:["#","Scenario","App + Feature"], rows:[
    {cells:[{value:"1",locked:true},{value:"Calculate Q4 profit",locked:true},{expected:"Excel - formula",options:["Excel - formula","Word - letter","PowerPoint - slides","Access - query"],marks:2}]},
    {cells:[{value:"2",locked:true},{value:"Formal letter to customer",locked:true},{expected:"Word - letter template",options:["Excel - formula","Word - letter template","PowerPoint - slides","Access - query"],marks:2}]},
    {cells:[{value:"3",locked:true},{value:"Pitch to investors",locked:true},{expected:"PowerPoint - slides",options:["Excel - formula","Word - letter template","PowerPoint - slides","Access - query"],marks:2}]},
    {cells:[{value:"4",locked:true},{value:"Look up customer by ID",locked:true},{expected:"Access - query",options:["Excel - formula","Word - letter template","PowerPoint - slides","Access - query"],marks:2}]},
    {cells:[{value:"5",locked:true},{value:"Show sales trend chart",locked:true},{expected:"Excel - chart",options:["Excel - chart","Word - chart","PowerPoint - chart","Access - chart"],marks:2}]},
    {cells:[{value:"6",locked:true},{value:"Print invoice",locked:true},{expected:"Word - invoice template",options:["Word - invoice template","Excel - invoice","PowerPoint - invoice","Access - invoice"],marks:2}]},
    {cells:[{value:"7",locked:true},{value:"Track 100 employees",locked:true},{expected:"Access - table + query",options:["Access - table + query","Excel - rows","Word - list","PowerPoint - grid"],marks:2}]},
    {cells:[{value:"8",locked:true},{value:"Highlight below-target products",locked:true},{expected:"Excel - Conditional Formatting",options:["Excel - Conditional Formatting","Word - Highlight","PowerPoint - Emphasis","Access - Rule"],marks:2}]}
  ]}
]}

];

function findExamPaper(id){ return EXAM_PAPERS.find(p=>p.id===id)||null; }

// ============================================================
//  CONSTANTS
// ============================================================
const STORAGE_KEY="stack:progress";
const THEME_KEY="stack:theme";
const TRACKER_KEY="stack:tracker_v5";
const EXAMS_KEY="stack:exams_v1";
const EXPANDED_KEY="stack:expanded";

const CPUT_MODULES=[
  {name:"Communication",code:"CMM157S"},
  {name:"Retailing 1",code:"RET150S"},
  {name:"Retail Operations Management 1",code:"ROM150S"},
  {name:"Retail Financial Management 1",code:"RFM150S"},
  {name:"Business Computer Applications",code:"BCA157S"}
];

const QUICK_START_QUESTIONS=[
  "What is the difference between feasibility and viability?",
  "How do I calculate break-even?",
  "What are the 4 Ps of marketing?",
  "Difference between leadership and management",
  "Explain Maslow's hierarchy of needs",
  "How do I calculate VAT inclusive/exclusive?"
];

let currentChapter=null;
let currentTab="notes";
let quizState=null;
let trackerData=[];
let activeModuleId=null;
let chatHistory=[];
let examTimerHandle=null;

let expandedModules=new Set();
try{const s=JSON.parse(localStorage.getItem(EXPANDED_KEY)||"[]");if(Array.isArray(s))expandedModules=new Set(s);}catch{}

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

// ============================================================
//  STORAGE
// ============================================================
function migrateStorage(){
  [["brainstack:progress",STORAGE_KEY],["brainstack:theme",THEME_KEY],["brainstack:tracker_v5",TRACKER_KEY]].forEach(([o,n])=>{
    if(!localStorage.getItem(n)){const v=localStorage.getItem(o);if(v!==null)localStorage.setItem(n,v);}
  });
}
function getProgress(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{};}catch{return{}}}
function saveProgress(p){localStorage.setItem(STORAGE_KEY,JSON.stringify(p));}
function getTrackerData(){try{return JSON.parse(localStorage.getItem(TRACKER_KEY))||[];}catch{return[]}}
function saveTrackerData(d){localStorage.setItem(TRACKER_KEY,JSON.stringify(d));}
function getExamsData(){try{return JSON.parse(localStorage.getItem(EXAMS_KEY))||{};}catch{return{}}}
function saveExamsData(d){localStorage.setItem(EXAMS_KEY,JSON.stringify(d));}
function getExamState(id){return getExamsData()[id]||null;}
function saveExamState(id,s){const a=getExamsData();a[id]=s;saveExamsData(a);}

// ============================================================
//  HELPERS
// ============================================================
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function showToast(msg,ms=3000){const t=$("#toast");if(!t)return;t.textContent=msg;t.hidden=false;clearTimeout(showToast._t);showToast._t=setTimeout(()=>{t.hidden=true;},ms);}
function formatTime(s){if(s==null)return"--:--";const m=Math.floor(s/60),sec=s%60;return String(m).padStart(2,'0')+":"+String(sec).padStart(2,'0');}
function isEmptyAnswer(a){if(a==null)return true;if(typeof a==="string")return!a.trim();if(typeof a==="object")return Object.values(a).every(v=>v==null||v==="");return false;}
function saveExpanded(){localStorage.setItem(EXPANDED_KEY,JSON.stringify([...expandedModules]));}

// ============================================================
//  THEME
// ============================================================
function applyTheme(){const t=localStorage.getItem(THEME_KEY)||"light";document.documentElement.classList.toggle("dark",t==="dark");}

// ============================================================
//  MARKDOWN
// ============================================================
function mdToHtml(md){
  const lines=md.trim().split("\n");const out=[];let inList=false,listType=null,inTable=false,tableRows=[];
  function inline(t){return escapeHtml(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,"<code>$1</code>");}
  function closeList(){if(inList){out.push("</"+listType+">");inList=false;listType=null;}}
  function flushTable(){if(!inTable)return;const cells=r=>r.split("|").slice(1,-1).map(c=>c.trim());const[header,...rows]=tableRows;const ths=cells(header).map(c=>"<th>"+inline(c)+"</th>").join("");const trs=rows.filter(r=>!/^\|[\s\-|:]+\|$/.test(r)).map(r=>"<tr>"+cells(r).map(c=>"<td>"+inline(c)+"</td>").join("")+"</tr>").join("");out.push("<table><thead><tr>"+ths+"</tr></thead><tbody>"+trs+"</tbody></table>");inTable=false;tableRows=[];}
  for(const line of lines){const t=line.trim();
    if(!t){closeList();flushTable();continue;}
    if(t.startsWith("|")){tableRows.push(t);inTable=true;continue;}
    flushTable();
    if(t.startsWith("### ")){closeList();out.push("<h3>"+inline(t.slice(4))+"</h3>");}
    else if(t.startsWith("## ")){closeList();out.push("<h2>"+inline(t.slice(3))+"</h2>");}
    else if(t.startsWith("# ")){closeList();out.push("<h1>"+inline(t.slice(2))+"</h1>");}
    else if(t.startsWith("> ")){closeList();out.push("<blockquote>"+inline(t.slice(2))+"</blockquote>");}
    else if(/^- /.test(t)){if(!inList||listType!=="ul"){closeList();out.push("<ul>");inList=true;listType="ul";}out.push("<li>"+inline(t.slice(2))+"</li>");}
    else if(/^\d+\. /.test(t)){if(!inList||listType!=="ol"){closeList();out.push("<ol>");inList=true;listType="ol";}out.push("<li>"+inline(t.replace(/^\d+\.\s+/,""))+"</li>");}
    else{closeList();out.push("<p>"+inline(t)+"</p>");}
  }
  closeList();flushTable();
  return out.join("\n");
}

// ============================================================
//  SIDEBAR — collapsible modules
// ============================================================
function renderSidebar(){
  const list=$("#chapterList");if(!list)return;
  const progress=getProgress();
  const modules=[...new Set(CHAPTERS.map(c=>c.module))];
  if(currentChapter&&currentChapter.module){expandedModules.add(currentChapter.module);saveExpanded();}
  let html="";
  modules.forEach(mod=>{
    const modChapters=CHAPTERS.filter(c=>c.module===mod);
    const isExp=expandedModules.has(mod);
    const isActive=currentChapter&&currentChapter.module===mod;
    const doneCount=modChapters.reduce((acc,ch)=>{const p=progress[ch.id];if(p&&p.best>=Math.ceil(p.total*0.8))return acc+1;return acc;},0);
    html+=`<div class="module-group ${isExp?'expanded':''} ${isActive?'active':''}">`;
    html+=`<button class="module-header" data-module-toggle="${escapeHtml(mod)}" aria-expanded="${isExp}"><span class="module-chevron">▶</span><span class="module-name">${escapeHtml(mod)}</span><span class="module-progress">${doneCount}/${modChapters.length}</span></button>`;
    html+=`<div class="module-chapters">`;
    html+=modChapters.map(ch=>{
      const p=progress[ch.id];const done=p&&p.best>=Math.ceil(p.total*0.8);const label=p?`${p.best}/${p.total}`:"—";
      return`<a href="#chapter/${ch.id}" class="nav-item chapter-link" data-chapter="${ch.id}"><span>${escapeHtml(ch.number)}. ${escapeHtml(ch.title)}</span><span class="chapter-badge ${done?'done':''}">${label}</span></a>`;
    }).join("");
    html+=`</div></div>`;
  });
  list.innerHTML=html;
  $$("[data-module-toggle]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const mod=btn.getAttribute("data-module-toggle");
      const group=btn.closest(".module-group");
      if(!group)return;
      const isNow=group.classList.toggle("expanded");
      btn.setAttribute("aria-expanded",String(isNow));
      if(isNow)expandedModules.add(mod);else expandedModules.delete(mod);
      saveExpanded();
    });
  });
}

// ============================================================
//  HOME
// ============================================================
function renderHome(){
  currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="home"]')?.classList.add("active");
  const modules=[...new Set(CHAPTERS.map(c=>c.module))];
  const examsData=getExamsData();
  const inProg=Object.entries(examsData).find(([id,st])=>st.status==="in_progress");
  const recent=Object.entries(examsData).filter(([id,st])=>st.status==="submitted").sort((a,b)=>(b[1].submittedAt||0)-(a[1].submittedAt||0)).slice(0,3);
  let html=`<div class="dashboard-header"><h1>Your Study Dashboard</h1><p>Read the notes. Sit full exams. Ask Stack AI.</p></div>`;
  if(inProg)html+=renderContinueExamCard(inProg);
  html+=`<div class="features-grid">
    <div class="feature-card"><div class="feature-icon">📚</div><h4>All-in-One Notes</h4><p>5 complete modules.</p></div>
    <div class="feature-card"><div class="feature-icon">⚡</div><h4>Offline Ready</h4><p>Works without data.</p></div>
    <div class="feature-card"><div class="feature-icon">✍️</div><h4>Full Exams</h4><p>Two 100-mark papers per module.</p></div>
    <div class="feature-card"><div class="feature-icon">🎯</div><h4>Auto-Marked</h4><p>Rubric-level feedback.</p></div>
    <div class="feature-card"><div class="feature-icon">📊</div><h4>Mark Tracker</h4><p>Exam scores sync automatically.</p></div>
  </div>`;
  if(recent.length){
    html+=`<div class="recent-marks"><h3>Recent exam results</h3>`;
    recent.forEach(([id,st])=>{
      const paper=findExamPaper(id);if(!paper)return;
      html+=`<div class="recent-mark-row"><div><div class="rm-module">${escapeHtml(paper.module)}</div><div class="rm-name">${escapeHtml(paper.name)}</div></div><div class="rm-score">${Math.round(st.bestScore||st.score||0)} / 100</div><a href="#exam/${id}" class="btn btn-text">Review</a></div>`;
    });
    html+=`</div>`;
  }
  modules.forEach(mod=>{
    const modChapters=CHAPTERS.filter(c=>c.module===mod);
    html+=`<div class="module-section"><div class="module-title">${escapeHtml(mod)}</div><div class="card-grid">`;
    html+=modChapters.map(ch=>{
      const p=getProgress()[ch.id];const pct=p?Math.round((p.best/p.total)*100):0;
      return`<div class="card" data-chapter="${ch.id}"><div class="card-top"><span class="chapter-num">${escapeHtml(ch.number)}</span></div><h3>${escapeHtml(ch.title)}</h3><p>${escapeHtml(ch.summary)}</p><div class="card-progress-wrap"><div class="card-progress-label"><span>Quiz progress</span><span>${pct}%</span></div><div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div></div></div>`;
    }).join("");
    html+=`</div></div>`;
  });
  $("#main").innerHTML=html;
  $$(".card").forEach(c=>c.addEventListener("click",()=>{location.hash=`#chapter/${c.dataset.chapter}`;}));
}

function renderContinueExamCard([paperId,state]){
  const paper=findExamPaper(paperId);if(!paper)return"";
  const answered=Object.values(state.answers||{}).filter(a=>a&&!isEmptyAnswer(a)).length;
  return`<div class="continue-exam-card"><div><div class="continue-eyebrow">Resume exam</div><div class="continue-title">${escapeHtml(paper.module)} · ${escapeHtml(paper.name)}</div><div class="continue-sub">In progress · ${answered} of ${paper.questions.length} answered</div></div><a href="#exam/${paperId}" class="btn btn-primary">Continue →</a></div>`;
}

// ============================================================
//  CHAPTER
// ============================================================
function renderChapter(id){
  const ch=CHAPTERS.find(c=>c.id===id);
  if(!ch){location.hash="#home";return;}
  currentChapter=ch;currentTab="notes";quizState=null;chatHistory=[];
  expandedModules.add(ch.module);saveExpanded();
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $(`.nav-item[data-chapter="${id}"]`)?.classList.add("active");
  $("#main").innerHTML=`<div class="chapter-header"><div class="eyebrow">${escapeHtml(ch.module)}</div><h1>${escapeHtml(ch.number)}. ${escapeHtml(ch.title)}</h1><p>${escapeHtml(ch.summary)}</p></div><div class="tabs"><button class="tab active" data-tab="notes">Notes</button><button class="tab" data-tab="quiz">Quiz</button></div><div id="chapterBody"></div>`;
  $$(".tab").forEach(t=>t.addEventListener("click",()=>{
    currentTab=t.dataset.tab;
    $$(".tab").forEach(x=>x.classList.toggle("active",x===t));
    renderTab();
  }));
  renderTab();
}

function renderTab(){
  const ch=currentChapter;if(!ch)return;
  const body=$("#chapterBody");if(!body)return;
  if(currentTab==="notes")body.innerHTML=`<div class="content">${mdToHtml(ch.notes)}</div>`;
  else if(currentTab==="quiz")renderQuiz(ch);
}

// ============================================================
//  QUIZ
// ============================================================
function renderQuiz(ch){
  if(!quizState)quizState={index:0,answers:new Array(ch.quiz.length).fill(undefined),questions:shuffle(ch.quiz),done:false,reviewing:false};
  const body=$("#chapterBody");if(!body)return;
  const total=quizState.questions.length;
  if(quizState.reviewing){
    let rh=`<h2>Review Answers</h2>`;
    quizState.questions.forEach((q,i)=>{
      const ua=quizState.answers[i],ic=ua===q.answer;
      rh+=`<div class="review-item"><div class="q-text">${i+1}. ${escapeHtml(q.q)}</div><div class="a-row ${ic?'correct':'wrong'}">Your answer: ${String.fromCharCode(65+ua)}. ${escapeHtml(q.options[ua])} ${ic?'✓':'✗'}</div>${!ic?`<div class="a-row correct">Correct: ${String.fromCharCode(65+q.answer)}. ${escapeHtml(q.options[q.answer])}</div>`:''}<div class="quiz-explain"><strong>Why:</strong> ${escapeHtml(q.explain)}</div></div>`;
    });
    body.innerHTML=rh+`<div class="quiz-actions" style="justify-content:center;margin-top:32px"><button class="btn btn-primary" id="retryBtn">Retake Quiz</button><button class="btn" id="backToScoreBtn">Back to Score</button></div>`;
    $("#retryBtn").addEventListener("click",()=>{quizState=null;renderQuiz(ch);});
    $("#backToScoreBtn").addEventListener("click",()=>{quizState.reviewing=false;renderQuiz(ch);});
    return;
  }
  if(quizState.done){
    const score=quizState.answers.filter((a,i)=>a===quizState.questions[i].answer).length;
    const pct=Math.round((score/total)*100);
    const msg=pct>=80?"Excellent work!":pct>=50?"Good — review the wrong answers.":"Re-read the notes and try again.";
    body.innerHTML=`<div class="score-card"><div class="score-big">${score}/${total}</div><div class="score-label">${pct}% correct</div><div class="score-msg">${msg}</div><div class="quiz-actions" style="justify-content:center;margin-top:32px"><button class="btn btn-primary" id="reviewBtn">Review Answers</button><button class="btn" id="retryBtn">Retake Quiz</button></div></div>`;
    $("#reviewBtn").addEventListener("click",()=>{quizState.reviewing=true;renderQuiz(ch);});
    $("#retryBtn").addEventListener("click",()=>{quizState=null;renderQuiz(ch);});
    return;
  }
  const q=quizState.questions[quizState.index];
  const sel=quizState.answers[quizState.index];
  const pct=Math.round((quizState.index/total)*100);
  const opts=q.options.map((o,i)=>`<button class="quiz-option ${sel===i?'selected':''}" data-idx="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(o)}</span></button>`).join("");
  body.innerHTML=`<div class="quiz-progress-wrap"><div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div></div><div class="quiz-question"><div class="q-num">Question ${quizState.index+1} of ${total}</div><div class="q-text">${escapeHtml(q.q)}</div><div class="quiz-options">${opts}</div></div><div class="quiz-actions"><button class="btn btn-primary" id="nextBtn" ${sel===undefined?'disabled':''}>${quizState.index===total-1?"Finish Quiz":"Next Question"}</button></div>`;
  $$(".quiz-option").forEach(b=>b.addEventListener("click",()=>{quizState.answers[quizState.index]=Number(b.dataset.idx);renderQuiz(ch);}));
  $("#nextBtn").addEventListener("click",()=>{
    if(quizState.index===total-1){
      quizState.done=true;
      const score=quizState.answers.filter((a,i)=>a===quizState.questions[i].answer).length;
      const p=getProgress();const prev=p[ch.id]||{best:0,attempts:0};
      p[ch.id]={best:Math.max(prev.best,score),total,attempts:prev.attempts+1};
      saveProgress(p);renderSidebar();
    }else quizState.index++;
    renderQuiz(ch);
  });
}

// ============================================================
//  EXAM CENTRE
// ============================================================
function renderExamCentre(){
  currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");
  const examsData=getExamsData();
  const modules=[...new Set(EXAM_PAPERS.map(p=>p.module))];
  let html=`<div class="dashboard-header"><h1>Exam Centre</h1><p>Each module has <strong>two complete 100-mark exams</strong>. Auto-marked.</p></div>`;
  modules.forEach(mod=>{
    const papers=EXAM_PAPERS.filter(p=>p.module===mod);
    html+=`<div class="exam-module-section"><div class="exam-module-title">${escapeHtml(mod)}</div><div class="exam-grid">${papers.map(p=>renderExamCard(p,examsData[p.id])).join("")}</div></div>`;
  });
  $("#main").innerHTML=html;
  $$(".exam-card .exam-action-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id=btn.dataset.paper,st=examsData[id];
      location.hash=(!st||st.status==="not_started")?`#exam-instructions/${id}`:`#exam/${id}`;
    });
  });
}

function renderExamCard(paper,state){
  const st=state?.status||"not_started";
  const score=state?.bestScore??state?.score??null;
  let badge,label;
  if(st==="not_started"){badge=`<span class="status-pill status-not-started">Not started</span>`;label="Start exam";}
  else if(st==="in_progress"){badge=`<span class="status-pill status-progress">In progress</span>`;label="Continue";}
  else{badge=`<span class="status-pill status-done">${Math.round(score)}/100</span>`;label="Review / Retake";}
  return`<div class="exam-card"><div class="exam-card-head"><div class="exam-card-name">${escapeHtml(paper.name)}</div>${badge}</div><div class="exam-card-meta">${paper.questions.length} questions · ${paper.duration} min · 100 marks</div><div class="exam-card-actions"><button class="btn btn-primary exam-action-btn" data-paper="${paper.id}">${label}</button></div></div>`;
}

// ============================================================
//  EXAM INSTRUCTIONS
// ============================================================
function renderExamInstructions(paperId){
  const paper=findExamPaper(paperId);if(!paper){location.hash="#exams";return;}
  currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");
  const sections={};
  paper.questions.forEach(q=>{if(!sections[q.section])sections[q.section]={title:q.sectionTitle,count:0,marks:0};sections[q.section].count++;sections[q.section].marks+=q.marks||0;});
  const existing=getExamState(paperId);
  const resumeNote=existing&&existing.status==="in_progress"?`<div class="notice">You have an in-progress attempt. Starting fresh will replace saved answers.</div>`:"";
  $("#main").innerHTML=`<div class="exam-instructions">
    <div class="exam-back"><a href="#exams">← Exam Centre</a></div>
    <h1>${escapeHtml(paper.module)}</h1>
    <h2 class="exam-instructions-name">${escapeHtml(paper.name)}</h2>
    <div class="exam-instructions-stats">
      <div><span class="label">Duration</span><span class="value">${paper.duration} min (optional)</span></div>
      <div><span class="label">Marks</span><span class="value">100</span></div>
      <div><span class="label">Questions</span><span class="value">${paper.questions.length}</span></div>
    </div>
    <div class="section-summary"><h3>Sections</h3>
      ${Object.entries(sections).map(([k,s])=>`<div class="section-summary-row"><span><strong>Section ${k}</strong> — ${escapeHtml(s.title)}</span><span>${s.count} Q · ${s.marks} marks</span></div>`).join("")}
    </div>
    <div class="exam-rules"><h3>Instructions</h3>
      <ul>
        <li>Questions are shown <strong>one at a time</strong>. You can go back and change answers.</li>
        <li>You can <strong>skip</strong> questions and return to them.</li>
        <li>Answers <strong>auto-save</strong> — safe to close and resume.</li>
        <li>Model answers shown <strong>after submit</strong> (first attempt only).</li>
        <li>Mark saved to <strong>Mark Tracker</strong> automatically.</li>
        ${existing&&existing.attempts>0?`<li>This paper has been attempted ${existing.attempts} time(s). Model answers hidden on retakes.</li>`:""}
      </ul>
    </div>
    ${resumeNote}
    <div class="exam-start-buttons">
      <button class="btn btn-primary btn-lg" id="startTimed">Start with timer (${paper.duration} min)</button>
      <button class="btn btn-lg" id="startUntimed">Start without timer</button>
    </div>
  </div>`;
  $("#startTimed").addEventListener("click",()=>startExam(paperId,true));
  $("#startUntimed").addEventListener("click",()=>startExam(paperId,false));
}

function startExam(paperId,timed){
  const paper=findExamPaper(paperId);if(!paper)return;
  const existing=getExamState(paperId);
  const attempts=existing?.attempts||0;
  const state={paperId,status:"in_progress",answers:existing?.answers||{},currentIndex:0,timed,timeLeft:timed?paper.duration*60:null,startedAt:Date.now(),attempts,showingModel:attempts===0};
  saveExamState(paperId,state);
  location.hash=`#exam/${paperId}`;
}

// ============================================================
//  EXAM TAKING
// ============================================================
function renderExam(paperId){
  const paper=findExamPaper(paperId);const state=getExamState(paperId);
  if(!paper||!state){location.hash="#exams";return;}
  if(state.status==="submitted"){renderExamResults(paperId);return;}
  currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");
  renderExamView(paperId);
  if(state.timed&&state.timeLeft>0)startExamTimer(paperId);
}

function startExamTimer(paperId){
  if(examTimerHandle)clearInterval(examTimerHandle);
  examTimerHandle=setInterval(()=>{
    const state=getExamState(paperId);
    if(!state||state.status!=="in_progress"){clearInterval(examTimerHandle);return;}
    state.timeLeft=Math.max(0,(state.timeLeft||0)-1);
    saveExamState(paperId,state);
    const el=$("#examTimerText");if(el)el.textContent=formatTime(state.timeLeft);
    if(state.timeLeft<=0){clearInterval(examTimerHandle);showToast("Time up — submitting.");submitExam(paperId);}
  },1000);
}
function pauseExamTimer(){if(examTimerHandle){clearInterval(examTimerHandle);examTimerHandle=null;}}

function renderExamView(paperId){
  const paper=findExamPaper(paperId);const state=getExamState(paperId);
  if(!paper||!state)return;
  const q=paper.questions[state.currentIndex];
  const total=paper.questions.length;
  const dots=paper.questions.map((qq,i)=>{
    const a=state.answers[i];const ans=a!=null&&!isEmptyAnswer(a);
    const cls=i===state.currentIndex?"dot active":ans?"dot answered":"dot";
    return`<button class="${cls}" data-jump="${i}" title="Q${i+1}"></button>`;
  }).join("");
  const qBody=renderQuestionBody(q,state.answers[state.currentIndex]);
  $("#main").innerHTML=`<div class="exam-top-bar"><a href="#exams" class="exam-exit" id="exitExam">✕ Exit</a><div class="exam-title">${escapeHtml(paper.module)} · ${escapeHtml(paper.name)}</div><div class="exam-timer" ${state.timed?"":"hidden"}><span class="timer-icon">⏱</span><span id="examTimerText">${formatTime(state.timeLeft)}</span></div></div><div class="exam-dot-nav">${dots}</div><div class="exam-progress-bar"><div class="exam-progress-fill" style="width:${((state.currentIndex+1)/total)*100}%"></div></div><div class="exam-question-card"><div class="exam-q-head"><span class="exam-q-section">Section ${q.section} · ${escapeHtml(q.sectionTitle)}</span><span class="exam-q-marks">${q.marks} marks</span></div><div class="exam-q-prompt">${escapeHtml(q.prompt).replace(/\n/g,'<br>')}</div><div class="exam-q-body">${qBody}</div></div><div class="exam-nav"><button class="btn" id="prevQ" ${state.currentIndex===0?"disabled":""}>← Previous</button><button class="btn" id="skipQ">Skip</button>${state.currentIndex===total-1?`<button class="btn btn-primary" id="submitQ">Finish & Submit</button>`:`<button class="btn btn-primary" id="nextQ">Next →</button>`}</div>`;
  $("#prevQ")?.addEventListener("click",()=>{state.currentIndex=Math.max(0,state.currentIndex-1);saveExamState(paperId,state);renderExamView(paperId);});
  $("#nextQ")?.addEventListener("click",()=>{state.currentIndex=Math.min(total-1,state.currentIndex+1);saveExamState(paperId,state);renderExamView(paperId);});
  $("#skipQ")?.addEventListener("click",()=>{state.currentIndex=Math.min(total-1,state.currentIndex+1);saveExamState(paperId,state);renderExamView(paperId);});
  $("#submitQ")?.addEventListener("click",()=>confirmAndSubmit(paperId));
  $("#exitExam")?.addEventListener("click",e=>{e.preventDefault();if(confirm("Exit? Answers are saved.")){pauseExamTimer();location.hash="#exams";}});
  $$(".dot").forEach(b=>b.addEventListener("click",()=>{state.currentIndex=Number(b.dataset.jump);saveExamState(paperId,state);renderExamView(paperId);}));
  wireQuestionInputs(paperId,q,state);
}

function renderQuestionBody(q,answer){
  if(q.type==="mcq"){
    return q.options.map((o,i)=>`<button class="exam-mcq-option ${answer===i?"selected":""}" data-mcq="${i}"><span class="mcq-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(o)}</span></button>`).join("");
  }
  if(q.type==="short"||q.type==="essay"){
    const val=typeof answer==="string"?answer:"";
    return`<textarea class="exam-textarea" rows="${q.type==="essay"?14:6}" placeholder="Type your answer here…">${escapeHtml(val)}</textarea><div class="exam-wordcount"><span id="wordCount">${val?val.trim().split(/\s+/).length:0}</span> words</div>`;
  }
  if(q.type==="table"){
    const ans=typeof answer==="object"&&answer?answer:{};
    const desc=q.description?`<div class="exam-table-desc">${escapeHtml(q.description).replace(/\n/g,'<br>')}</div>`:"";
    const header=q.columns.map(c=>`<th>${escapeHtml(c)}</th>`).join("");
    const rows=q.rows.map((row,ri)=>{
      if(row.cells.length===1){
        return`<tr class="table-header-row"><td colspan="${q.columns.length}">${escapeHtml(row.cells[0].value||"")}</td></tr>`;
      }
      return`<tr>${row.cells.map((cell,ci)=>{
        if(cell.locked){
          const val=cell.value!=null?cell.value:"";
          const formatted=typeof val==="number"&&val<0?"("+Math.abs(val).toLocaleString()+")":val;
          return`<td class="locked">${escapeHtml(String(formatted))}</td>`;
        }
        const key=`${ri}_${ci}`;
        if(cell.options){
          const v=ans[key]||"";
          return`<td><select data-table="${key}"><option value="">—</option>${cell.options.map(o=>`<option value="${escapeHtml(o)}" ${v===o?"selected":""}>${escapeHtml(o)}</option>`).join("")}</select></td>`;
        }
        return`<td><input type="number" step="any" data-table="${key}" value="${ans[key]!=null?ans[key]:""}" placeholder="?"></td>`;
      }).join("")}</tr>`;
    }).join("");
    return`${desc}<div class="exam-table-wrap"><table class="exam-table"><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  return"";
}

function wireQuestionInputs(paperId,q,state){
  if(q.type==="mcq"){
    $$(".exam-mcq-option").forEach(b=>b.addEventListener("click",()=>{state.answers[state.currentIndex]=Number(b.dataset.mcq);saveExamState(paperId,state);renderExamView(paperId);}));
  } else if(q.type==="short"||q.type==="essay"){
    const ta=$(".exam-textarea");
    if(ta)ta.addEventListener("input",()=>{
      state.answers[state.currentIndex]=ta.value;
      saveExamState(paperId,state);
      const wc=$("#wordCount");if(wc)wc.textContent=ta.value.trim()?ta.value.trim().split(/\s+/).length:0;
    });
  } else if(q.type==="table"){
    $$("[data-table]").forEach(inp=>inp.addEventListener("change",()=>{
      const k=inp.dataset.table;
      if(!state.answers[state.currentIndex]||typeof state.answers[state.currentIndex]!=="object")state.answers[state.currentIndex]={};
      state.answers[state.currentIndex][k]=inp.value;
      saveExamState(paperId,state);
    }));
  }
}

function confirmAndSubmit(paperId){
  const paper=findExamPaper(paperId);const state=getExamState(paperId);
  if(!paper||!state)return;
  const un=paper.questions.filter((q,i)=>isEmptyAnswer(state.answers[i])).length;
  const msg=un>0?`${un} unanswered question(s). Submit anyway?`:"Submit exam?";
  if(confirm(msg))submitExam(paperId);
}

// ============================================================
//  SUBMIT & GRADE
// ============================================================
function submitExam(paperId){
  pauseExamTimer();
  const paper=findExamPaper(paperId);const state=getExamState(paperId);
  if(!paper||!state)return;
  const graded=gradeExam(paper,state.answers);
  state.status="submitted";
  state.score=graded.total;
  state.bestScore=Math.max(state.bestScore||0,graded.total);
  state.submittedAt=Date.now();
  state.graded=graded;
  state.attempts=(state.attempts||0)+1;
  state.showingModel=state.attempts===1;
  saveExamState(paperId,state);
  syncExamToTracker(paperId,graded.total);
  location.hash=`#exam/${paperId}`;
}

function gradeExam(paper,answers){
  let total=0;
  const perQuestion=paper.questions.map((q,i)=>{
    const ans=answers[i];const result=gradeQuestion(q,ans);total+=result.score;
    return{question:q,answer:ans,result};
  });
  return{total:Math.round(total*2)/2,perQuestion};
}

function gradeQuestion(q,answer){
  if(q.type==="mcq"){
    const c=answer===q.answer;
    return{score:c?q.marks:0,maxMarks:q.marks,criteria:[{label:"Correct option",hit:c,marks:q.marks,awarded:c?q.marks:0}]};
  }
  if(q.type==="short"||q.type==="essay"){
    const text=typeof answer==="string"?answer:"";
    let score=0;
    const criteria=(q.rubric||[]).map(c=>{
      const groupsHit=c.groups.filter(g=>g.some(concept=>textContainsConcept(text,concept))).length;
      const ratio=c.groups.length?groupsHit/c.groups.length:0;
      const aw=Math.round(c.marks*ratio*2)/2;score+=aw;
      return{label:c.label,hit:groupsHit>0,groupsHit,totalGroups:c.groups.length,marks:c.marks,awarded:aw};
    });
    return{score:Math.round(score*2)/2,maxMarks:q.marks,criteria};
  }
  if(q.type==="table"){
    const ans=typeof answer==="object"&&answer?answer:{};
    let score=0;const criteria=[];
    q.rows.forEach((row,ri)=>{
      if(row.cells.length===1)return;
      row.cells.forEach((cell,ci)=>{
        if(cell.locked)return;
        const k=`${ri}_${ci}`;const sv=ans[k];const ok=checkTableCell(cell,sv);
        const aw=ok?(cell.marks||0):0;score+=aw;
        criteria.push({label:`Row ${ri+1}`,hit:ok,marks:cell.marks||0,awarded:aw});
      });
    });
    return{score:Math.round(score*2)/2,maxMarks:q.marks,criteria};
  }
  return{score:0,maxMarks:q.marks||0,criteria:[]};
}

function checkTableCell(cell,sv){
  if(sv==null||sv==="")return false;
  if(cell.options)return String(sv).toLowerCase()===String(cell.expected).toLowerCase();
  const num=parseFloat(sv);
  if(isNaN(num))return false;
  return Math.abs(num-cell.expected)<=(cell.tolerance||0);
}

// ============================================================
//  TEXT MATCHING
// ============================================================
const STOP_MATCH=new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","it","this","that","be","by","as","at","if","so"]);
const SUFFIXES=[[/ies$/,"y"],[/ing$/,""],[/ed$/,""],[/ly$/,""],[/s$/,""]];
function stemW(w){if(w.length<4)return w;for(const[re,rep]of SUFFIXES)if(re.test(w))return w.replace(re,rep);return w;}
function normT(t){return String(t||"").toLowerCase().replace(/[^\w\s]/g," ").replace(/\s+/g," ").trim();}
function textContainsConcept(text,concept){
  const nt=normT(text),nc=normT(concept);
  if(!nc)return false;
  if(nt.includes(nc))return true;
  const cw=nc.split(" ").filter(w=>w.length>2);
  if(!cw.length)return nt.includes(nc);
  const ts=nt.split(" ").map(stemW);
  return cw.every(w=>{const s=stemW(w);return ts.some(t=>t===s||t.includes(s)||s.includes(t));});
}

// ============================================================
//  RESULTS
// ============================================================
function renderExamResults(paperId){
  const paper=findExamPaper(paperId);const state=getExamState(paperId);
  if(!paper||!state||!state.graded){location.hash="#exams";return;}
  currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="exams"]')?.classList.add("active");
  const g=state.graded;const pct=Math.round((g.total/100)*100);const grade=gradeFromScore(g.total);
  const secs={};
  g.perQuestion.forEach(pq=>{
    const s=pq.question.section;
    if(!secs[s])secs[s]={name:pq.question.sectionTitle,got:0,max:0};
    secs[s].got+=pq.result.score;secs[s].max+=pq.question.marks;
  });
  $("#main").innerHTML=`<div class="exam-back"><a href="#exams">← Exam Centre</a></div><div class="results-hero"><div class="results-title">${escapeHtml(paper.module)}</div><div class="results-subtitle">${escapeHtml(paper.name)}</div><div class="results-score">${g.total} <span class="results-score-max">/ 100</span></div><div class="results-percent">${pct}% · ${grade}</div></div><div class="section-breakdown"><h3>Section breakdown</h3>${Object.entries(secs).map(([s,d])=>{const p=d.max?Math.round((d.got/d.max)*100):0;return`<div class="section-bar-row"><div class="sbr-label">Section ${s} · ${escapeHtml(d.name)}</div><div class="sbr-bar"><div class="sbr-fill" style="width:${p}%"></div></div><div class="sbr-value">${d.got.toFixed(1)} / ${d.max}</div></div>`;}).join("")}</div><div class="results-actions"><button class="btn btn-primary" id="reviewExamBtn">Review answers</button><button class="btn" id="retakeBtn">Retake exam</button>${state.attempts>1?`<div class="retake-note">Attempt #${state.attempts}. Model answers hidden on retakes.</div>`:""}</div><div id="reviewPanel"></div>`;
  $("#reviewExamBtn").addEventListener("click",()=>renderExamReview(paperId));
  $("#retakeBtn").addEventListener("click",()=>{
    if(confirm("Retake? Best score is kept.")){
      const ns={...getExamState(paperId),status:"not_started",answers:{},currentIndex:0,timeLeft:null,graded:null};
      saveExamState(paperId,ns);
      location.hash=`#exam-instructions/${paperId}`;
    }
  });
}

function gradeFromScore(s){
  if(s>=75)return"Distinction";
  if(s>=70)return"Good pass";
  if(s>=60)return"Credit";
  if(s>=50)return"Pass";
  return"Fail";
}

function renderExamReview(paperId){
  const state=getExamState(paperId);
  if(!state||!state.graded)return;
  const showModel=state.showingModel;
  const panel=$("#reviewPanel");if(!panel)return;
  let html=`<h3 style="margin-top:40px">Question-by-question review</h3>`;
  state.graded.perQuestion.forEach((pq,i)=>{
    const q=pq.question,r=pq.result;
    const st=r.score>=r.maxMarks?"ok":r.score>0?"partial":"fail";
    html+=`<div class="review-q review-${st}"><div class="review-q-head"><span class="review-q-num">Q${i+1}</span><span class="review-q-section">${escapeHtml(q.sectionTitle)}</span><span class="review-q-marks">${r.score}/${r.maxMarks}</span></div><div class="review-q-prompt">${escapeHtml(q.prompt).replace(/\n/g,'<br>')}</div>`;
    if(q.type==="mcq"){
      const correct=pq.answer===q.answer;
      html+=`<div class="review-mcq ${correct?'correct':'wrong'}">Your answer: ${pq.answer!=null?String.fromCharCode(65+pq.answer)+". "+escapeHtml(q.options[pq.answer]):"(none)"}${!correct?`<br>Correct: ${String.fromCharCode(65+q.answer)}. ${escapeHtml(q.options[q.answer])}<br><em>${escapeHtml(q.explanation||"")}</em>`:""}</div>`;
    } else if(pq.answer&&!isEmptyAnswer(pq.answer)){
      html+=`<details><summary>Your answer</summary><div class="review-your-answer">${escapeHtml(typeof pq.answer==="string"?pq.answer:JSON.stringify(pq.answer))}</div></details>`;
    }
    if(showModel&&q.modelAnswer)html+=`<details><summary>Model answer</summary><div class="review-model">${escapeHtml(q.modelAnswer)}</div></details>`;
    html+=`<div class="review-criteria">${r.criteria.map(c=>`<div class="criterion ${c.hit?'hit':'miss'}"><span class="crit-mark">${c.awarded}/${c.marks}</span><span class="crit-label">${escapeHtml(c.label)}</span></div>`).join("")}</div></div>`;
  });
  panel.innerHTML=html;
}

// ============================================================
//  TRACKER
// ============================================================
function syncExamToTracker(paperId,score){
  const paper=findExamPaper(paperId);if(!paper)return;
  const data=getTrackerData();
  let mod=data.find(m=>m.name===paper.module);
  if(!mod){mod={id:"mod_"+Date.now(),name:paper.module,code:CPUT_MODULES.find(c=>c.name===paper.module)?.code||"",assessments:[]};data.push(mod);}
  let ass=mod.assessments.find(a=>a.examRef===paperId);
  if(!ass){ass={id:"ass_"+paperId,type:paper.name,status:"released",mark:"",weight:50,examRef:paperId};mod.assessments.push(ass);}
  ass.mark=Math.round(score);ass.status="released";
  saveTrackerData(data);
  showToast(`Mark saved: ${paper.module} · ${paper.name} = ${Math.round(score)}/100`);
}

function calculateModuleStats(mod){
  let c=0,r=0,p=0;
  if(!mod.assessments)return{current:0,remaining:0,projected:0};
  mod.assessments.forEach(a=>{
    const m=parseFloat(a.mark)||0,w=parseFloat(a.weight)||0;
    if(a.status==='released')c+=(m*w)/100;
    else if(a.status==='pending'){r+=w;if(a.mark!==""&&a.mark!==null&&!isNaN(m))p+=(m*w)/100;}
  });
  return{current:c,remaining:r,projected:c+p};
}

function renderTrackerDashboard(){
  activeModuleId=null;currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="tracker"]')?.classList.add("active");
  trackerData=getTrackerData();
  const avail=CPUT_MODULES.filter(c=>!trackerData.some(t=>t.name===c.name));
  const availHtml=avail.map(m=>`<button class="module-pill" onclick="window.addModuleFromList('${escapeHtml(m.name)}','${escapeHtml(m.code)}')"><span class="plus">+</span> ${escapeHtml(m.name)}</button>`).join("");
  const cards=trackerData.map(mod=>{
    const s=calculateModuleStats(mod);
    return`<div class="module-card"><div><h3>${escapeHtml(mod.name)}</h3><div class="code">${escapeHtml(mod.code)}</div></div><div class="module-card-stats"><div><span>Current:</span><strong>${s.current.toFixed(2)}%</strong></div><div><span>Projected:</span><strong>${s.projected.toFixed(2)}%</strong></div><div><span>Remaining:</span><strong>${s.remaining.toFixed(2)}%</strong></div></div><div class="module-card-actions"><button class="btn btn-primary" onclick="window.openModule('${mod.id}')" style="flex:1">View marks</button><button class="btn btn-text" onclick="window.deleteTrackerModule('${mod.id}')">Remove</button></div></div>`;
  }).join("");
  $("#main").innerHTML=`<div class="dashboard-header"><h1>Mark Tracker</h1><p>Exam scores sync automatically.</p></div>${availHtml?`<div class="available-modules">${availHtml}</div>`:""}<div class="tracker-grid">${cards||`<div class="empty" style="grid-column:1/-1"><h2>No modules tracked yet</h2><p>Add a module or sit an exam.</p></div>`}</div>`;
}

window.addModuleFromList=function(n,c){trackerData.push({id:"mod_"+Date.now(),name:n,code:c,assessments:[]});saveTrackerData(trackerData);renderTrackerDashboard();showToast(n+" added.");};
window.openModule=function(id){activeModuleId=id;renderTrackerModule(id);};
window.deleteTrackerModule=function(id){if(!confirm("Remove?"))return;trackerData=trackerData.filter(m=>m.id!==id);saveTrackerData(trackerData);renderTrackerDashboard();};
window.deleteTrackerAssessment=function(mid,aid){if(!confirm("Delete?"))return;const m=trackerData.find(x=>x.id===mid);if(m){m.assessments=m.assessments.filter(a=>a.id!==aid);saveTrackerData(trackerData);renderTrackerModule(mid);}};
window.backToTracker=function(){activeModuleId=null;renderTrackerDashboard();};
window.updateAss=function(el){const m=trackerData.find(x=>x.id===el.dataset.mod);if(!m)return;const a=m.assessments.find(x=>x.id===el.dataset.ass);if(!a)return;a[el.dataset.field]=el.value;saveTrackerData(trackerData);const sb=$(".tracker-summary-box");if(sb)sb.innerHTML=summaryHtml(calculateModuleStats(m));};
window.addNewAssessment=function(mid){const m=trackerData.find(x=>x.id===mid);if(!m)return;m.assessments.push({id:"ass_"+Date.now(),type:"Test",status:"pending",mark:"",weight:""});saveTrackerData(trackerData);renderTrackerModule(mid);};

function summaryHtml(s){
  return`<h4>Module summary</h4><div class="tracker-summary-row"><span>Current (Released)</span><strong>${s.current.toFixed(2)}%</strong></div><div class="tracker-summary-row"><span>Remaining (Pending)</span><strong>${s.remaining.toFixed(2)}%</strong></div><div class="tracker-summary-row total"><span>Projected Final</span><strong>${s.projected.toFixed(2)}%</strong></div>`;
}

function renderTrackerModule(mid){
  const mod=trackerData.find(m=>m.id===mid);if(!mod){activeModuleId=null;renderTrackerDashboard();return;}
  currentChapter=null;
  $$(".nav-item").forEach(n=>n.classList.remove("active"));
  $('[data-nav="tracker"]')?.classList.add("active");
  const stats=calculateModuleStats(mod);
  const rows=(mod.assessments||[]).map(a=>`<tr><td><select data-mod="${mid}" data-ass="${a.id}" data-field="type" onchange="window.updateAss(this)"><option value="Test" ${a.type==='Test'?'selected':''}>Test</option><option value="TUT" ${a.type==='TUT'?'selected':''}>TUT</option><option value="Assignment" ${a.type==='Assignment'?'selected':''}>Assignment</option><option value="Project" ${a.type==='Project'?'selected':''}>Project</option>${a.examRef?`<option value="${escapeHtml(a.type)}" selected>${escapeHtml(a.type)} (exam)</option>`:""}</select></td><td><select data-mod="${mid}" data-ass="${a.id}" data-field="status" onchange="window.updateAss(this)"><option value="released" ${a.status==='released'?'selected':''}>Released</option><option value="pending" ${a.status==='pending'?'selected':''}>Pending</option></select></td><td><input type="number" value="${a.mark}" placeholder="0–100" data-mod="${mid}" data-ass="${a.id}" data-field="mark" onchange="window.updateAss(this)" min="0" max="100" ${a.examRef?"readonly":""}></td><td><input type="number" value="${a.weight}" placeholder="0" data-mod="${mid}" data-ass="${a.id}" data-field="weight" onchange="window.updateAss(this)" min="0" max="100"></td><td>${a.examRef?`<a href="#exam/${a.examRef}" class="btn-text">View</a>`:`<button class="btn-text" onclick="window.deleteTrackerAssessment('${mid}','${a.id}')" style="color:var(--danger)">✕</button>`}</td></tr>`).join("");
  $("#main").innerHTML=`<div style="margin-bottom:24px"><button class="btn" onclick="window.backToTracker()" style="margin-bottom:16px">← Back</button><div class="dashboard-header" style="margin:0"><h1>${escapeHtml(mod.name)} <span style="font-size:18px;color:var(--text-muted)">(${escapeHtml(mod.code)})</span></h1></div></div><div class="tracker-table-wrap"><table class="tracker-table"><thead><tr><th>Type</th><th>Status</th><th>Mark (/100)</th><th>Weight (%)</th><th></th></tr></thead><tbody>${rows||`<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--text-muted)">No assessments yet.</td></tr>`}</tbody></table></div><div style="display:flex;gap:16px;margin-bottom:32px"><button class="btn btn-primary" onclick="window.addNewAssessment('${mid}')" style="flex:1">+ Add assessment</button></div><div class="tracker-summary-box">${summaryHtml(stats)}</div>`;
}

// ============================================================
//  AI DRAWER
// ============================================================
function openChatDrawer(){
  const d=$("#chatDrawer"),o=$("#chatOverlay");
  if(!d||!o)return;
  d.classList.add("open");o.hidden=false;
  renderChatIntoDrawer(currentChapter);
}
function closeChatDrawer(){
  $("#chatDrawer")?.classList.remove("open");
  const o=$("#chatOverlay");if(o)o.hidden=true;
}

function renderChatIntoDrawer(scope){
  chatHistory=[];
  const m=$("#chatDrawerBody");if(!m)return;
  const ph=scope?`Ask about ${scope.title}…`:"Ask anything about your course…";
  m.innerHTML=`<div class="chat-container chat-drawer-container"><div class="chat-thread" id="chatThread"></div><div class="chat-input-wrap"><textarea id="askInput" placeholder="${escapeHtml(ph)}"></textarea><button class="btn btn-primary" id="askBtn">Ask</button></div></div>`;
  $("#askBtn").addEventListener("click",()=>handleAsk(scope));
  $("#askInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();handleAsk(scope);}});
  renderChatThread(scope);
  $("#askInput").focus();
}

// ============================================================
//  AI ENGINE
// ============================================================
const STOPW=new Set(["the","a","an","is","are","was","were","of","to","in","on","for","and","or","what","how","why","when","which","who","does","do","can","i","my","with","that","this","it","be","by","from","as","at","if","so","am","me","we","us","our","you","your","they","them","their","he","she","his","her","its","but","not","no","nor","than","then","too","very","just","only","also","such","some","any","all","each","every","both","few","more","most","other","into","over","under","about","after","before","between","during","through","up","down","out","off","again","further","once","here","there","where","will","would","should","could","may","might","must","shall","have","has","had","being","been","get","got","make","made"]);

const SYNS={
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

const AI_SUF=[[/ies$/,"y"],[/ing$/,""],[/ed$/,""],[/ly$/,""],[/s$/,""]];
function stemAI(w){if(w.length<4)return w;for(const[re,rep]of AI_SUF)if(re.test(w))return w.replace(re,rep);return w;}
function tokAI(t){return String(t||"").toLowerCase().replace(/[^a-z0-9\s&'-]/g," ").split(/\s+/).filter(w=>w.length>1&&!STOPW.has(w));}
function expandAI(terms){
  const out=new Set();
  for(const t of terms){
    out.add(t);out.add(stemAI(t));
    const s=SYNS[t]||SYNS[stemAI(t)];
    if(s)for(const x of s){out.add(x);for(const w of tokAI(x)){out.add(w);out.add(stemAI(w));}}
  }
  return out;
}

let TUTOR_INDEX=null;
function buildIndex(){
  if(TUTOR_INDEX)return TUTOR_INDEX;
  const secs=[],df={};
  for(const ch of CHAPTERS){
    const parts=ch.notes.split(/^##\s+/m);
    parts.forEach((part,i)=>{
      if(!part.trim())return;
      const lines=part.split("\n");
      const heading=(i===0?"Overview":lines[0]).trim();
      const body=(i===0?part:lines.slice(1).join("\n")).trim();
      const text=heading+"\n"+body;
      const toks=tokAI(text);
      const stems=new Set(toks.map(stemAI));
      for(const s of stems)df[s]=(df[s]||0)+1;
      secs.push({chapterId:ch.id,chapterNumber:ch.number,chapterTitle:ch.title,module:ch.module,heading,body,text,toks,stems,lower:text.toLowerCase(),isFaq:false});
    });
    (ch.faq||[]).forEach(f=>{
      const text=f.q+" "+f.a;
      const toks=tokAI(text);
      const stems=new Set(toks.map(stemAI));
      for(const s of stems)df[s]=(df[s]||0)+1;
      secs.push({chapterId:ch.id,chapterNumber:ch.number,chapterTitle:ch.title,module:ch.module,heading:"Q: "+f.q,body:f.a,text,toks,stems,lower:text.toLowerCase(),isFaq:true});
    });
  }
  TUTOR_INDEX={sections:secs,docFreq:df,N:secs.length};
  return TUTOR_INDEX;
}

function scoreSec(sec,qs,qt,pid){
  let sc=0;
  for(const s of qs)if(sec.stems.has(s)){const df=TUTOR_INDEX.docFreq[s]||1;sc+=Math.log(1+TUTOR_INDEX.N/df);}
  for(const t of qt)if(sec.lower.includes(t))sc+=0.3;
  const hl=sec.heading.toLowerCase(),cl=sec.chapterTitle.toLowerCase();
  for(const t of qt){if(hl.includes(t))sc+=1;if(cl.includes(t))sc+=0.5;}
  if(sec.isFaq)sc*=1.3;
  if(pid&&sec.chapterId===pid)sc*=1.4;
  return sc;
}

function aiAnswer(q,pid){
  const rt=tokAI(q);
  if(!rt.length)return{text:"Please type a question about the course.",suggestions:defaultSug(pid)};
  buildIndex();
  const qt=rt,qs=expandAI(rt);
  const sc=TUTOR_INDEX.sections.map(s=>({s,score:scoreSec(s,qs,qt,pid)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  if(!sc.length||sc[0].score<0.8)return{text:"I couldn't find a strong match in the course notes. Try rephrasing.",suggestions:defaultSug(pid)};
  const top=sc.slice(0,3);const best=top[0].s;
  const bc=CHAPTERS.find(c=>c.id===best.chapterId);
  const body=best.isFaq?best.body:extractSent(best.body,qt,4);
  const heading=best.isFaq?best.heading.replace(/^Q:\s*/,""):best.heading;
  const text=`**${heading}**\n\n${body}`;
  const rel=top.slice(1).map(x=>x.s).filter(s=>s.heading!==best.heading);
  const sug=[];
  rel.forEach(s=>{if(s.isFaq)sug.push(s.heading.replace(/^Q:\s*/,""));else sug.push(`${s.chapterTitle}: ${s.heading}`);});
  if(!sug.length)(bc.faq||[]).slice(0,3).forEach(f=>sug.push(f.q));
  return{text,suggestions:[...new Set(sug)].slice(0,4),source:`${best.chapterNumber}. ${best.chapterTitle} · ${best.module}`};
}

function extractSent(body,qt,mx=4){
  const lines=body.split(/\n+/).map(l=>l.trim()).filter(Boolean);
  const sc=lines.map((l,i)=>{const lower=l.toLowerCase();let h=0;for(const t of qt)if(lower.includes(t))h++;return{line:l.length>400?l.slice(0,400)+"…":l,hits:h,index:i};});
  const top=sc.filter(s=>s.hits>0).sort((a,b)=>b.hits-a.hits).slice(0,mx);
  top.sort((a,b)=>a.index-b.index);
  if(!top.length)return body.slice(0,600);
  return top.map(s=>s.line).join("\n\n");
}

function defaultSug(pid){
  if(pid){const ch=CHAPTERS.find(c=>c.id===pid);if(ch&&ch.faq&&ch.faq.length)return ch.faq.slice(0,4).map(f=>f.q);}
  return QUICK_START_QUESTIONS.slice(0,4);
}

function emptyChat(scope){
  const sug=scope?(scope.faq||[]).slice(0,4).map(f=>f.q):QUICK_START_QUESTIONS;
  const txt=scope?`about <strong>${escapeHtml(scope.title)}</strong>`:`about your course`;
  return`<div class="chat-empty"><div class="chat-empty-icon">✨</div><h3>Hi, I'm Stack AI</h3><p>Grounded in your notes. Ask anything ${txt}.</p><div class="chat-suggestions">${sug.map(s=>`<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div></div>`;
}

function renderChatMsg(m){
  if(m.role==="user")return`<div class="chat-msg user"><div class="chat-bubble">${escapeHtml(m.text)}</div></div>`;
  if(m.pending)return`<div class="chat-msg assistant"><div class="chat-bubble chat-typing"><span></span><span></span><span></span></div></div>`;
  return`<div class="chat-msg assistant"><div class="chat-bubble">${mdToHtml(m.text)}${m.source?`<div class="chat-source">Source: ${escapeHtml(m.source)}</div>`:""}${m.suggestions&&m.suggestions.length?`<div class="chat-suggestions chat-suggestions-inline">${m.suggestions.map(s=>`<button class="chat-chip" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>`:""}</div></div>`;
}

function renderChatThread(scope){
  const th=$("#chatThread");if(!th)return;
  th.innerHTML=chatHistory.length?chatHistory.map(renderChatMsg).join(""):emptyChat(scope);
  if(chatHistory.length)th.scrollTop=th.scrollHeight;
  $$(".chat-chip").forEach(b=>b.addEventListener("click",()=>{const q=b.dataset.q;const inp=$("#askInput");if(inp)inp.value=q;handleAsk(scope);}));
}

async function handleAsk(scope,override){
  const inp=$("#askInput");
  const q=(override||inp?.value||"").trim();
  if(!q)return;
  if(inp)inp.value="";
  chatHistory.push({role:"user",text:q});
  chatHistory.push({role:"assistant",pending:true});
  renderChatThread(scope);
  await new Promise(r=>setTimeout(r,250));
  const res=aiAnswer(q,scope?.id);
  chatHistory.pop();
  chatHistory.push({role:"assistant",text:res.text,suggestions:res.suggestions,source:res.source});
  renderChatThread(scope);
}

// ============================================================
//  ROUTER
// ============================================================
function route(){
  try{
    pauseExamTimer();
    const h=location.hash||"#home";
    if(h.startsWith("#chapter/"))renderChapter(h.replace("#chapter/",""));
    else if(h==="#exams")renderExamCentre();
    else if(h.startsWith("#exam-instructions/"))renderExamInstructions(h.replace("#exam-instructions/",""));
    else if(h.startsWith("#exam/"))renderExam(h.replace("#exam/",""));
    else if(h==="#tracker")renderTrackerDashboard();
    else renderHome();
    if(window.innerWidth<=800)$("#sidebar")?.classList.remove("open");
  }catch(err){
    console.error("[Stack] Route error:",err);
    const m=$("#main");
    if(m)m.innerHTML=`<div class="empty"><h2>⚠️ Error</h2><p>${escapeHtml(err.message||String(err))}</p><p style="margin-top:16px"><a href="#home" class="btn btn-primary">Dashboard</a></p></div>`;
  }
}

// ============================================================
//  SEARCH
// ============================================================
const si=$("#searchInput");
if(si)si.addEventListener("input",e=>{
  const q=e.target.value.trim().toLowerCase();
  if(!q){renderHome();return;}
  const rs=CHAPTERS.filter(c=>c.title.toLowerCase().includes(q)||c.summary.toLowerCase().includes(q)||c.notes.toLowerCase().includes(q));
  $("#main").innerHTML=`<div class="dashboard-header"><h1>Search results</h1><p>${rs.length} match "${escapeHtml(q)}"</p></div><div class="card-grid">${rs.map(c=>`<div class="card" data-chapter="${c.id}"><div class="card-top"><span class="chapter-num">${escapeHtml(c.number)}</span></div><h3>${escapeHtml(c.title)}</h3><p>${escapeHtml(c.summary)}</p></div>`).join("")||`<div class="empty"><h2>No matches</h2></div>`}</div>`;
  $$(".card").forEach(c=>c.addEventListener("click",()=>{location.hash=`#chapter/${c.dataset.chapter}`;}));
});

// ============================================================
//  NAV DELEGATION — attached first
// ============================================================
document.addEventListener("click",e=>{
  const link=e.target.closest('a[data-nav]');
  if(!link)return;
  e.preventDefault();
  const nav=link.getAttribute("data-nav");
  const target=`#${nav}`;
  if(location.hash===target)route();
  else location.hash=target;
});

// ============================================================
//  BOOT
// ============================================================
window.addEventListener("hashchange",route);
$("#menuBtn")?.addEventListener("click",()=>$("#sidebar")?.classList.toggle("open"));
$("#themeBtn")?.addEventListener("click",()=>{
  const d=document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY,d?"dark":"light");
});
$("#resetBtn")?.addEventListener("click",()=>{
  if(!confirm("Reset all progress? Cannot be undone."))return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TRACKER_KEY);
  localStorage.removeItem(EXAMS_KEY);
  renderSidebar();
  location.hash="#home";
  route();
  showToast("Progress reset");
});
$("#aiFab")?.addEventListener("click",openChatDrawer);
$("#closeDrawer")?.addEventListener("click",closeChatDrawer);
$("#chatOverlay")?.addEventListener("click",closeChatDrawer);

function updateOffline(){const p=$("#offlinePill");if(p)p.hidden=navigator.onLine;}
window.addEventListener("online",updateOffline);
window.addEventListener("offline",updateOffline);

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("./sw.js").then(r=>{
      r.onupdatefound=()=>{const w=r.installing;w.onstatechange=()=>{if(w.state==='installed')showToast(navigator.serviceWorker.controller?"Update available — refresh.":"Ready for offline.");};};
    }).catch(()=>{});
  });
}

try{
  migrateStorage();
  applyTheme();
  renderSidebar();
  updateOffline();
  route();
  console.log("%c✅ Stack ready — click Exam Centre","background:#2563eb;color:#fff;padding:6px 12px;border-radius:4px;font-weight:800");
  console.log("[Stack] Exams:",EXAM_PAPERS.length,"papers · Chapters:",typeof CHAPTERS!=="undefined"?CHAPTERS.length:"MISSING");
}catch(err){
  console.error("[Stack] Boot error:",err);
  const m=$("#main");
  if(m)m.innerHTML=`<div class="empty"><h2>⚠️ Startup error</h2><p>${escapeHtml(err.message||String(err))}</p><button class="btn btn-primary" onclick="location.reload()">Reload</button></div>`;
}
