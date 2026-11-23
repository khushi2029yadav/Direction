import { Course } from "@/types";

export const COURSES_DATA: Course[] = [
  // SCHOOL EDUCATION
  {
    id: "class-10",
    slug: "class-10-board-prep",
    name: "Class 10 Board Excellence",
    category: "school",
    categoryLabel: "School Education",
    targetAudience: "Class 10 (State Board / CBSE / ICSE)",
    duration: "1 Year Academic Program",
    badge: "Flagship Batch",
    shortDescription:
      "Comprehensive board exam mastery with conceptual clarity, intensive test series, and past-year paper decoders.",
    fullDescription:
      "Class 10 is the foundational bridge for future academic streams. At Disha Classes, our curriculum is engineered to give students a structured weekly schedule, deep subject mastery, and continuous board-simulated examinations so they face their final exams with unshakeable confidence.",
    subjectsCovered: [
      "Mathematics (Algebra & Geometry)",
      "Science & Technology (Physics, Chemistry, Biology)",
      "Social Sciences (History, Civics, Geography)",
      "Languages (English, Hindi, Marathi)",
    ],
    keyHighlights: [
      "Chapter-wise diagnostic tests every week",
      "Special board answer-writing presentation sessions",
      "Rigorous pre-board examination series with individual evaluations",
      "Dedicated doubt-clearing faculty hours",
    ],
    isVerified: true,
  },
  {
    id: "class-9",
    slug: "class-9-foundation",
    name: "Class 9 Conceptual Foundation",
    category: "school",
    categoryLabel: "School Education",
    targetAudience: "Class 9 Students",
    duration: "1 Year Program",
    shortDescription:
      "Laying strong conceptual grounding in Mathematics and Science to guarantee seamless progression into Class 10.",
    fullDescription:
      "Class 9 introduces complex analytical topics in Physics, Chemistry, and Geometry that directly shape higher secondary readiness. Our teaching breaks down difficult theorems into practical, intuitive concepts.",
    subjectsCovered: [
      "Mathematics & Higher Arithmetic",
      "General Science & Laboratory Concepts",
      "English Grammar & Composition",
      "Social Sciences",
    ],
    keyHighlights: [
      "Focus on concept visualization rather than memorization",
      "Gradual ramp-up of problem-solving difficulty",
      "Parent-teacher academic review every month",
    ],
    isVerified: true,
  },
  {
    id: "class-7-8",
    slug: "class-7-8-middle-school",
    name: "Class 7 & 8 Middle School Stepping Stone",
    category: "school",
    categoryLabel: "School Education",
    targetAudience: "Class 7 & 8 Students",
    duration: "Annual Foundation",
    shortDescription:
      "Nurturing curiosity, disciplined study habits, and rock-solid arithmetic and scientific reasoning from early years.",
    fullDescription:
      "Early middle school is where students form either a love or a fear of Math and Science. Our educators foster an encouraging environment that cultivates analytical thinking, clear handwriting, and disciplined homework routines.",
    subjectsCovered: [
      "Mathematics & Logic",
      "Integrated Science",
      "English Communication",
      "Regional Language Support",
    ],
    keyHighlights: [
      "Interactive problem-solving workshops",
      "Regular speed & mental math drills",
      "Warm, supportive mentorship to build student self-esteem",
    ],
    isVerified: true,
  },

  // JUNIOR COLLEGE SCIENCE
  {
    id: "class-11-12-science",
    slug: "class-11-12-science-hsc",
    name: "Class 11 & 12 Science (HSC / Board)",
    category: "junior-college-science",
    categoryLabel: "Junior College Science",
    targetAudience: "Class 11 & 12 Science Stream",
    duration: "2-Year Integrated / Comprehensive",
    badge: "High Demand",
    shortDescription:
      "Mastery of HSC Maharashtra State Board syllabus with deep focus on Physics, Chemistry, Mathematics, and Biology.",
    fullDescription:
      "Transitioning from school to junior college Science is one of the steepest learning curves in Indian education. Disha Classes provides exhaustive theoretical lectures, numerical workshops, and practical exam guidance to achieve high percentiles.",
    subjectsCovered: [
      "Physics (Theory & Numericals)",
      "Chemistry (Physical, Organic & Inorganic)",
      "Mathematics & Statistics",
      "Biology (Botany & Zoology)",
      "Information Technology (Selected Batches)",
    ],
    keyHighlights: [
      "Specialized faculty for each individual science discipline",
      "In-depth derivation sheets and formula flashcards",
      "Complete guidance for college practicals and internal marks",
      "Full-length HSC board pattern prelim series",
    ],
    isVerified: true,
  },

  // JUNIOR COLLEGE COMMERCE
  {
    id: "class-11-12-commerce",
    slug: "class-11-12-commerce-hsc",
    name: "Class 11 & 12 Commerce (HSC Board)",
    category: "junior-college-commerce",
    categoryLabel: "Junior College Commerce",
    targetAudience: "Class 11 & 12 Commerce Students",
    duration: "2-Year Comprehensive Program",
    badge: "Top Merit Results",
    shortDescription:
      "Expert training in Book-Keeping & Accountancy, Economics, OCM, and Secretarial Practice for aspiring commerce leaders.",
    fullDescription:
      "Commerce requires both mathematical precision in Accountancy and articulate presentation in theory subjects. At Disha Classes, students learn ledger posting, financial statement preparation, and micro/macroeconomic principles from seasoned professionals.",
    subjectsCovered: [
      "Book-Keeping & Accountancy (BK)",
      "Economics (Micro & Macro)",
      "Organization of Commerce & Management (OCM)",
      "Secretarial Practice (SP) / Mathematics",
      "English Communication",
    ],
    keyHighlights: [
      "Daily ledger balance & accountancy drill sets",
      "Special scoring techniques for theoretical answers",
      "Case studies and real-world business context",
      "Comprehensive prelims replicating board conditions",
    ],
    isVerified: true,
  },

  // DEGREE EDUCATION
  {
    id: "bcom-degree",
    slug: "bcom-undergraduate",
    name: "B.Com (Bachelor of Commerce)",
    category: "degree",
    categoryLabel: "Degree Education",
    targetAudience: "FY, SY, TY B.Com (Mumbai University)",
    duration: "Semester-wise Modules",
    shortDescription:
      "Semester-wise coaching for Mumbai University syllabus covering Financial Accounting, Costing, Direct Tax, and Auditing.",
    fullDescription:
      "Ensure distinction in Mumbai University degree exams. We cover core practical accounting subjects with thorough exam paper analysis and concept-oriented problem solving.",
    subjectsCovered: [
      "Financial Accounting (FA)",
      "Cost Accounting (CA)",
      "Direct & Indirect Taxation (GST)",
      "Management Accounting",
      "Commerce & Business Law",
    ],
    keyHighlights: [
      "Mumbai University past 10-year question paper reviews",
      "Flexible college-friendly morning & evening batches",
      "Step-by-step guidance for distinction grades",
    ],
    isVerified: true,
  },
  {
    id: "baf-degree",
    slug: "baf-undergraduate",
    name: "BAF (Accounting & Finance)",
    category: "degree",
    categoryLabel: "Degree Education",
    targetAudience: "FY, SY, TY BAF (Mumbai University)",
    duration: "Semester-wise Modules",
    badge: "Professional Prep",
    shortDescription:
      "Advanced accounting, taxation, financial markets, and auditing for BAF undergraduates aiming for corporate or CA careers.",
    fullDescription:
      "A specialized curriculum for students targeting high-level financial careers. Focused on in-depth analytical skills, financial reporting frameworks, and corporate taxation.",
    subjectsCovered: [
      "Financial Accounting & Reporting",
      "Cost & Management Accounting",
      "Auditing & Corporate Governance",
      "Taxation (Income Tax & GST)",
      "Financial Management",
    ],
    keyHighlights: [
      "Practical case-study discussions",
      "Emphasis on concepts crucial for CA/CFA aspirations",
      "Small focused batches for working students",
    ],
    isVerified: true,
  },

  // COMPETITIVE EXAMS
  {
    id: "jee-main-adv",
    slug: "jee-main-advanced-prep",
    name: "JEE (Main + Advanced) Mentorship",
    category: "competitive",
    categoryLabel: "Competitive Examinations",
    targetAudience: "Aspirants targeting IITs, NITs & Top Engineering Colleges",
    duration: "1 & 2 Year Structured Programs",
    badge: "Intensive",
    shortDescription:
      "Rigorous problem-solving, speed-accuracy optimization, and conceptual depth across Physics, Chemistry, and Mathematics.",
    fullDescription:
      "JEE requires extraordinary analytical endurance and deep problem-solving skills. Our mentors guide aspirants through multi-concept questions, timed computer-based mock tests, and error analysis logs.",
    subjectsCovered: [
      "Physics (Mechanics, Electrodynamics, Optics, Modern Physics)",
      "Chemistry (Organic Reactions, Inorganic Periodic, Physical Thermodynamics)",
      "Mathematics (Calculus, Coordinate Geometry, Vectors, Algebra)",
    ],
    keyHighlights: [
      "All-India test simulator with percentile rank analysis",
      "Micro-topic error logs to eliminate recurring calculation mistakes",
      "Experienced mentors dedicated to student psychological resilience",
    ],
    isVerified: true,
  },
  {
    id: "neet-ug",
    slug: "neet-ug-medical-prep",
    name: "NEET-UG Medical Entrance Guidance",
    category: "competitive",
    categoryLabel: "Competitive Examinations",
    targetAudience: "Medical Aspirants targeting MBBS & BDS",
    duration: "1 & 2 Year Structured Programs",
    badge: "Medical Wing",
    shortDescription:
      "High-yield NCERT line-by-line Biology breakdown, physical chemistry calculations, and physics concept clarity.",
    fullDescription:
      "With high competition in NEET, 100% NCERT command is non-negotiable. Our program ensures students master every biological diagram, chemical reaction mechanism, and physical formula with maximum recall speed.",
    subjectsCovered: [
      "Biology (Botany, Zoology & Genetics)",
      "Physics (Mechanics, Waves, Modern Physics & Circuit Theory)",
      "Chemistry (Organic Mechanisms, Equilibrium, Chemical Bonding)",
    ],
    keyHighlights: [
      "NCERT line-by-line objective test series",
      "Weekly 3-hour speed & OMR answer-marking drills",
      "Personalized rank booster sessions for difficult chapters",
    ],
    isVerified: true,
  },
];
