import {
  FileSpreadsheet,
  ClipboardCheck,
  TestTube2,
  Bug,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const portfolio = {
  name: "Jahid Hasan",
  role: "Software Quality Assurance Engineer",
  location: "Dhaka, Bangladesh",
  email: "iubat.jahid@gmail.com",
  phone: "+880 1643-848170",
  resumeUrl: "/Jahid_Hasan_CV.pdf",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  availability: "Available for SQA / QA Automation roles",
  heroTagline:
    "I help teams ship reliable web products through structured manual testing, Playwright automation, API validation, and clear QA reporting.",
  summary:
    "Software Quality Assurance Engineer with hands-on experience across manual and automated testing for React, Next.js, SaaS, telecom, e-commerce, ticketing, and CMS-driven web platforms. Strong in test planning, defect lifecycle management, API testing, regression testing, and reusable QA process design.",
  stats: [
    { label: "Primary Focus", value: "Web QA" },
    { label: "Automation", value: "Playwright" },
    { label: "Project Types", value: "5+" },
    { label: "Career Path", value: "QA Lead" },
  ],
  competencies: [
    "Manual & Functional Testing",
    "Test Case Design & Execution",
    "Bug Tracking & Reporting",
    "API Testing with Postman",
    "Cross-Browser Testing",
    "Playwright Automation",
    "Page Object Model Design",
    "Regression & Smoke Testing",
    "QA Documentation",
    "Agile / SDLC / STLC",
  ],
  skills: {
    "Testing Tools": ["Playwright", "Postman", "Chrome DevTools", "Hotjar"],
    Languages: ["JavaScript", "HTML5", "CSS3"],
    Frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    Documentation: ["MS Excel", "MS Word", "Google Workspace"],
    "Project Tools": ["Trello", "Jira", "Git", "GitHub"],
    CMS: ["WordPress", "Custom CMS Administration"],
  },
  qaProcess: [
    {
      title: "Requirement Analysis",
      icon: FileSpreadsheet,
      description:
        "Understand business flows, user journeys, acceptance criteria, risk areas, and release scope before test design.",
    },
    {
      title: "Test Design",
      icon: ClipboardCheck,
      description:
        "Create structured test cases with positive, negative, edge-case, smoke, regression, and cross-browser coverage.",
    },
    {
      title: "Execution & Evidence",
      icon: TestTube2,
      description:
        "Execute manual and automated checks with screenshots, videos, logs, and clear reproduction context.",
    },
    {
      title: "Defect Management",
      icon: Bug,
      description:
        "Report bugs with severity, priority, environment, expected result, actual result, and developer-ready steps.",
    },
    {
      title: "Release Confidence",
      icon: ShieldCheck,
      description:
        "Validate fixes, run regression cycles, monitor post-release quality, and summarize risk before delivery.",
    },
    {
      title: "Process Improvement",
      icon: Workflow,
      description:
        "Standardize QA templates, reporting formats, test IDs, and reusable automation patterns for team efficiency.",
    },
  ],
  deliverables: [
    "Test case suites",
    "Bug reports with evidence",
    "Regression reports",
    "Smoke test checklists",
    "API test notes",
    "Playwright test scripts",
    "QA status reports",
    "Defect summary dashboards",
    "Release validation notes",
  ],
  automationFocus: [
    "Playwright automation with JavaScript",
    "Reusable Page Object Model architecture",
    "Login, authentication, and form validation scenarios",
    "Positive, negative, and edge-case automation coverage",
    "Maintainable selectors and test structure",
    "Regression-ready automation suites",
  ],
  experience: [
    {
      company: "SWT WebGeeks",
      title: "Software Quality Assurance Engineer",
      period: "Present",
      location: "Dhaka, Bangladesh",
      points: [
        "Lead end-to-end QA activities across telecom, e-commerce, ticketing, and SaaS projects.",
        "Build and maintain Playwright test suites using JavaScript and Page Object Model architecture.",
        "Maintain structured defect workflows with priority, severity, evidence, and reproducible steps.",
        "Created a reusable Universal QA Toolkit for bug tracking, test case management, and defect reporting.",
        "Produce client-facing QA reports and process documentation in English and Bangla.",
      ],
    },
  ],
  projects: [
    {
      name: "Airtel BD",
      type: "Telecom Customer Portal",
      period: "2023 – 2025",
      stack: ["Web QA", "Regression", "Cross-Browser"],
      description:
        "Ongoing QA and maintenance testing for login, account management, recharge, billing, and plan browsing flows.",
    },
    {
      name: "Laxfo Electronics",
      type: "Product Catalog Website",
      period: "2024 – Present",
      stack: ["Next.js", "Responsive QA", "CMS"],
      description:
        "QA for product listings, detail pages, CMS-driven updates, navigation, responsive layouts, and lumen calculator.",
    },
    {
      name: "LetsVibe BD",
      type: "Ticketing Platform",
      period: "React / Next.js",
      stack: ["Playwright", "POM", "Test Cases"],
      description:
        "Designed and executed test cases for authentication, ticket booking, and discovery. Built automated login tests covering 13+ scenarios.",
    },
    {
      name: "Smart-Lab Global",
      type: "Web, Mobile & API QA",
      period: "Multi-Layer QA",
      stack: ["API", "Mobile", "Traceability"],
      description:
        "Performed coordinated QA across frontend web, mobile, and backend API layers with separate test case ID schemes.",
    },
    {
      name: "DBL Ceramics",
      type: "Website Audit",
      period: "CMS Revamp Proposal",
      stack: ["UI/UX", "Performance", "CMS"],
      description:
        "Conducted structured website analysis covering UI/UX, performance, and CMS gaps for a revamp proposal.",
    },
  ],
};

export const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Automation", href: "#automation" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
