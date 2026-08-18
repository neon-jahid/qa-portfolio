import { Bug, ClipboardCheck, Code2, FileSpreadsheet, RefreshCw, Settings, ShieldCheck, TestTube2, Workflow } from 'lucide-react';

export const portfolio = {
    name: 'Jahid Hasan',
    role: 'Software Quality Assurance Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'iubat.jahid@gmail.com',
    phone: '+880 1643-848170',
    resumeUrl: 'https://tinyurl.com/jahids-cv',
    github: 'https://github.com/#',
    linkedin: 'https://www.linkedin.com/in/jahid-hasan-sumon/',

    // --- Hero ---
    availability: 'Available for QA / SQA Opportunities',
    heroQuote: "Quality is not an act, it's a habit.",
    heroTagline:
        'Experienced in designing scalable QA workflows, executing regression and cross-browser testing, and delivering clear, evidence-based quality reports that support confident product releases and improved user experience.',

    summary:
        'Software Quality Assurance Engineer with hands-on experience across manual and automated testing for React, Next.js, SaaS, telecom, e-commerce, ticketing, and CMS-driven web platforms. Strong in test planning, defect lifecycle management, API testing, regression testing, and reusable QA process design.',

    // Hero stat bar. icon keys map to lucide icons inside StatGrid.jsx
    stats: [
        { value: '20+', label: 'Projects Delivered', icon: 'projects' },
        { value: '3+', label: 'Years Experience', icon: 'experience' },
        { value: '10+', label: 'QA Tools & Technologies', icon: 'tools' },
    ],

    // Right-hand dashboard card copy
    heroDashboard: {
        title: 'QA Engineering',
        strengthsTitle: 'Core Strengths',
        toolsTitle: 'Tools & Technologies',
    },

    // Hero dashboard progress rows
    coreStrengths: [
        { name: 'Manual Testing', level: 90, icon: ClipboardCheck },
        { name: 'Automation Testing', level: 80, icon: Settings },
        { name: 'API Testing', level: 85, icon: Code2 },
        { name: 'Regression Testing', level: 90, icon: RefreshCw },
    ],

    // Hero tool chips. Drop the SVGs in /public/logos/ — omit `logo` for a lucide fallback
    testingTools: [
        { name: 'Playwright', logo: '/logos/playwright.svg' },
        { name: 'Postman', logo: '/logos/postman-icon.svg' },
        { name: 'Chrome DevTools', logo: '/logos/chrome-dev.svg' },
        { name: 'Jira', logo: '/logos/Jira.svg' },
    ],

    // Cards along the QA connector. Keep this at 4 — the xl curved path is drawn for four nodes
    heroChecks: [
        { title: 'Test Passed', subtitle: 'All systems' },
        { title: 'API Validated', subtitle: '200 OK' },
        { title: 'Regression Complete', subtitle: 'No critical bugs' },
        { title: 'Automation Ready', subtitle: 'Tests running' },
    ],

    competencies: [
        'Manual & Functional Testing',
        'Test Case Design & Execution',
        'Bug Tracking & Reporting',
        'API Testing with Postman',
        'Cross-Browser Testing',
        'Playwright Automation',
        'Page Object Model Design',
        'Regression & Smoke Testing',
        'QA Documentation',
        'Agile / SDLC / STLC',
    ],
    skills: {
        'Testing Tools': ['Playwright', 'Postman', 'Chrome DevTools'],
        Languages: ['JavaScript', 'HTML5', 'CSS3'],
        Frameworks: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
        Documentation: ['MS Excel', 'MS Word', 'Google Workspace'],
        'Project Tools': ['Trello', 'Git', 'GitHub'],
        CMS: ['WordPress', 'Custom CMS Administration'],
    },
    qaProcess: [
        {
            title: 'Requirement Analysis',
            icon: FileSpreadsheet,
            description: 'Understand business flows, user journeys, acceptance criteria, risk areas, and release scope before test design.',
        },
        {
            title: 'Test Design',
            icon: ClipboardCheck,
            description: 'Create structured test cases with positive, negative, edge-case, smoke, regression, and cross-browser coverage.',
        },
        {
            title: 'Execution & Evidence',
            icon: TestTube2,
            description: 'Execute manual and automated checks with screenshots, videos, logs, and clear reproduction context.',
        },
        {
            title: 'Defect Management',
            icon: Bug,
            description: 'Report bugs with severity, priority, environment, expected result, actual result, and developer-ready steps.',
        },
        {
            title: 'Release Confidence',
            icon: ShieldCheck,
            description: 'Validate fixes, run regression cycles, monitor post-release quality, and summarize risk before delivery.',
        },
        {
            title: 'Process Improvement',
            icon: Workflow,
            description: 'Standardize QA templates, reporting formats, test IDs, and reusable automation patterns for team efficiency.',
        },
    ],
    deliverables: [
        'Test case suites',
        'Bug reports with evidence',
        'Regression reports',
        'Smoke test checklists',
        'API test notes',
        'Playwright test scripts',
        'QA status reports',
        'Defect summary dashboards',
        'Release validation notes',
    ],
    automationFocus: [
        'Playwright automation with JavaScript',
        'Reusable Page Object Model architecture',
        'Login, authentication, and form validation scenarios',
        'Positive, negative, and edge-case automation coverage',
        'Maintainable selectors and test structure',
        'Regression-ready automation suites',
    ],
    experience: [
        {
            company: 'SWT WebGeeks',
            title: 'Software Quality Assurance Engineer',
            period: 'Present',
            location: 'Dhaka, Bangladesh',
            points: [
                'Lead end-to-end QA activities across telecom, e-commerce, ticketing, and SaaS projects.',
                'Build and maintain Playwright test suites using JavaScript and Page Object Model architecture.',
                'Maintain structured defect workflows with priority, severity, evidence, and reproducible steps.',
                'Created a reusable Universal QA Toolkit for bug tracking, test case management, and defect reporting.',
                'Produce client-facing QA reports and process documentation in English and Bangla.',
            ],
        },
    ],
    projects: [
        {
            name: 'Airtel BD',
            type: 'Telecom Customer Portal',
            period: '2023 – 2025',
            stack: ['Web QA', 'Regression', 'Cross-Browser'],
            description: 'Ongoing QA and maintenance testing for login, account management, recharge, billing, and plan browsing flows.',
        },
        {
            name: 'Laxfo Electronics',
            type: 'Product Catalog Website',
            period: '2024 – Present',
            stack: ['Next.js', 'Responsive QA', 'CMS'],
            description: 'QA for product listings, detail pages, CMS-driven updates, navigation, responsive layouts, and lumen calculator.',
        },
        {
            name: 'LetsVibe BD',
            type: 'Ticketing Platform',
            period: 'React / Next.js',
            stack: ['Playwright', 'POM', 'Test Cases'],
            description: 'Designed and executed test cases for authentication, ticket booking, and discovery. Built automated login tests covering 13+ scenarios.',
        },
        {
            name: 'Smart-Lab Global',
            type: 'Web, Mobile & API QA',
            period: 'Multi-Layer QA',
            stack: ['API', 'Mobile', 'Traceability'],
            description: 'Performed coordinated QA across frontend web, mobile, and backend API layers with separate test case ID schemes.',
        },
        {
            name: 'DBL Ceramics',
            type: 'Website Audit',
            period: 'CMS Revamp',
            stack: ['UI/UX', 'Performance', 'CMS'],
            description: 'Conducted structured website analysis covering UI/UX, performance, and CMS gaps for a revamp proposal.',
        },
    ],
};

export const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Automation', href: '#automation' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];
