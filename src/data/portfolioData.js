import {
    Bot,
    Bug,
    Check,
    CheckCircle2,
    ClipboardCheck,
    ClipboardList,
    Code2,
    Database,
    FileSpreadsheet,
    FileText,
    MonitorSmartphone,
    RefreshCw,
    SearchCheck,
    Settings,
    ShieldCheck,
    TestTube2,
    Webhook,
    Workflow,
    Wrench,
} from 'lucide-react';

export const portfolio = {
    name: 'Jahid Hasan',
    role: 'Software Quality Assurance Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'jahid.softwindtech@gmail.com',
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
        { name: 'Jira', logo: '/logos/Jira.svg' },
        { name: 'MySQL', logo: '/logos/png.png' },
        { name: 'Git / GitHub', logo: '/logos/git-icon-logo.svg' },
        { name: 'DevTools', logo: '/logos/chrome-dev.svg' },
    ],

    // Cards along the QA connector. Keep this at 4 — the xl curved path is drawn for four nodes.
    // `tone` maps to a colour set in HeroSection.jsx (pass | api | regression | automation)
    heroChecks: [
        { title: 'Test Passed', subtitle: 'All systems', icon: CheckCircle2, tone: 'pass' },
        { title: 'API Validated', subtitle: '200 OK', icon: Webhook, tone: 'api' },
        { title: 'Regression Complete', subtitle: 'No critical bugs', icon: RefreshCw, tone: 'regression' },
        { title: 'Automation Ready', subtitle: 'Tests running', icon: Bot, tone: 'automation' },
    ],

    // "What I Do Best" master/detail list. Numbering (01, 02, …) comes from array order.
    // Every entry is backed by something concrete in experience / projects / deliverables
    // below — keep it that way when editing.
    expertise: [
        {
            title: 'Requirement Analysis',
            icon: ClipboardList,
            description: 'Reading business flows, user journeys, and acceptance criteria up front, so risk areas and release scope are agreed before any test is written.',
            tags: ['Acceptance Criteria', 'User Journeys', 'Risk Areas', 'Release Scope', 'Agile / SDLC / STLC', 'Client Requirements'],
        },
        {
            title: 'Test Case Design',
            icon: ClipboardCheck,
            description: 'Structured test cases and checklists with positive, negative, and edge-case coverage — written so any team member can execute them and get the same result.',
            tags: ['Test Case Suites', 'Positive & Negative', 'Edge Cases', 'Smoke Checklists', 'Traceability', 'MS Excel'],
        },
        {
            title: 'Manual Testing',
            icon: SearchCheck,
            description: 'Hands-on functional testing of login, account, billing, booking, and catalog flows across telecom, e-commerce, ticketing, and CMS-driven platforms.',
            tags: ['Functional Testing', 'UI / Web Testing', 'Navigation Flows', 'CMS Testing', 'Test Execution', 'Evidence Capture'],
        },
        {
            title: 'Regression Testing',
            icon: RefreshCw,
            description: 'Re-running impacted suites every release cycle to confirm fixes actually hold and that nothing which already worked has quietly broken.',
            tags: ['Regression Cycles', 'Smoke Testing', 'Defect Verification', 'Post-Release Checks', 'Release Validation', 'Regression Reports'],
        },
        {
            title: 'Cross-Browser QA',
            icon: MonitorSmartphone,
            description: 'Checking layout, behaviour, and responsiveness across Chrome, Firefox, and Edge at desktop, tablet, and mobile widths before sign-off.',
            tags: ['Chrome', 'Firefox', 'Edge', 'Responsive QA', 'Mobile Web', 'Chrome DevTools'],
        },
        {
            title: 'API Testing',
            icon: Webhook,
            description: 'Validating status codes, payloads, authentication, and error handling in Postman, then confirming with SQL that the data actually persisted.',
            tags: ['Postman', 'REST APIs', 'Status Codes', 'Auth Flows', 'Negative Cases', 'MySQL'],
        },
        {
            title: 'Playwright Automation',
            icon: Bot,
            description: 'Playwright suites in JavaScript built on a Page Object Model, covering login, authentication, and form-validation scenarios so regression stays repeatable.',
            tags: ['Playwright', 'JavaScript', 'Page Object Model', 'Stable Selectors', 'Test Data', 'Git / GitHub'],
        },
        {
            title: 'Bug Reporting',
            icon: Bug,
            description: 'Defect reports a developer can act on immediately — severity, priority, environment, expected vs actual, and steps that reproduce every time.',
            tags: ['Jira', 'Trello', 'Severity & Priority', 'Repro Steps', 'Screenshots & Logs', 'Defect Lifecycle'],
        },
        {
            title: 'QA Documentation',
            icon: FileText,
            description: 'Status reports, defect summaries, and release validation notes that make quality legible to product, development, and client teams — in English and Bangla.',
            tags: ['QA Status Reports', 'Defect Summaries', 'Release Notes', 'Test Plans', 'Client Reporting', 'QA Toolkit'],
        },
    ],

    // Tools I test with + the stack under test. Group keys map to icons in SkillsSection.jsx
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
    // Interactive "Automation in Practice" panel.
    // tree: `depth` drives the ├─ / └─ guides; `file` links a node to files[].id
    // files: `code` is highlighted by the tokenizer in CodeBlock.jsx — plain JS/JSON in, colours out
    automationSuite: {
        intro: 'A Playwright suite built on the Page Object Model: locators live in page classes, data lives in fixtures, and specs stay short enough to read as documentation.',
        structureLabel: 'Project Structure',
        focusLabel: 'Testing Focus',

        tree: [
            { name: 'tests', depth: 0, kind: 'folder' },
            { name: 'e2e', depth: 1, kind: 'folder' },
            { name: 'login.spec.js', depth: 2, kind: 'spec', file: 'spec' },
            { name: 'pages', depth: 2, kind: 'folder' },
            { name: 'login.page.js', depth: 3, kind: 'file', file: 'page' },
            { name: 'fixtures', depth: 1, kind: 'folder' },
            { name: 'test-data.json', depth: 2, kind: 'data', file: 'data' },
            { name: 'utils', depth: 1, kind: 'folder' },
        ],

        focus: [
            { label: 'Reusable POM Locators', icon: Wrench },
            { label: 'Clear & Assertive Tests', icon: Check },
            { label: 'Stable & Parameterized Data', icon: Database },
            { label: 'Regression & CI/CD Ready', icon: RefreshCw },
        ],

        files: [
            {
                id: 'spec',
                name: 'login.spec.js',
                path: 'tests/e2e/login.spec.js',
                lang: 'js',
                code: `import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import users from '../fixtures/test-data.json';

test.describe('Login', () => {
  test('valid credentials reach the dashboard', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.signIn(users.valid);

    await expect(page).toHaveURL(/dashboard/);
  });

  test('invalid password shows an error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.signIn(users.invalid);

    await expect(login.error).toBeVisible();
  });
});`,
            },
            {
                id: 'page',
                name: 'login.page.js',
                path: 'tests/e2e/pages/login.page.js',
                lang: 'js',
                code: `export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.submit = page.getByRole('button', { name: 'Sign in' });
    this.error = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async signIn({ email, password }) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}`,
            },
            {
                id: 'data',
                name: 'test-data.json',
                path: 'tests/fixtures/test-data.json',
                lang: 'json',
                code: `{
  "valid": {
    "email": "qa@example.com",
    "password": "Pa55w0rd!"
  },
  "invalid": {
    "email": "qa@example.com",
    "password": "wrong-password"
  }
}`,
            },
        ],

        // Simulated run shown in the terminal. `ok: false` renders in the fail colour.
        command: 'npx playwright test',
        run: [
            { text: 'valid credentials reach the dashboard', time: '1.4s', ok: true },
            { text: 'invalid password shows an error', time: '1.1s', ok: true },
            { text: 'empty fields block submission', time: '0.9s', ok: true },
            { text: 'session persists after reload', time: '1.5s', ok: true },
        ],
        summary: { passed: 4, failed: 0, time: '4.9s' },
    },

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
            period: '2025-2026',
            stack: ['Playwright', 'POM', 'Test Cases'],
            description: 'Designed and executed test cases for authentication, ticket booking, and discovery. Built automated login tests covering 13+ scenarios.',
        },
        {
            name: 'Smart-Lab Global',
            type: 'Web, Mobile & API QA',
            period: '2024-2025',
            stack: ['API', 'Mobile', 'Traceability'],
            description: 'Performed coordinated QA across frontend web, mobile, and backend API layers with separate test case ID schemes.',
        },
        {
            name: 'DBL Ceramics',
            type: 'Website Audit',
            period: '2023-Present',
            stack: ['UI/UX', 'Performance', 'CMS'],
            description: 'Conducted structured website analysis covering UI/UX, performance, and CMS gaps for a revamp proposal.',
        },
    ],
};

export const navItems = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Toolkit', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Automation', href: '#automation' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
];
