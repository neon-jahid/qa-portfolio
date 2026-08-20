import { Gauge, Layers3, Package, Signal, Ticket } from 'lucide-react';

/** Roles, newest first. `points` are the bullet achievements under each role. */
export const experience = [
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
];

/** Project cards under the experience timeline. `stack` renders as pills. */
export const projects = [
    {
        name: 'Airtel BD',
        icon: Signal,
        type: 'Telecom Customer Portal',
        period: '2023 – 2025',
        stack: ['Web QA', 'Regression', 'Cross-Browser'],
        description: 'Ongoing QA and maintenance testing for login, account management, recharge, billing, and plan browsing flows.',
    },
    {
        name: 'Laxfo Electronics',
        icon: Package,
        type: 'Product Catalog Website',
        period: '2024 – Present',
        stack: ['Next.js', 'Responsive QA', 'CMS'],
        description: 'QA for product listings, detail pages, CMS-driven updates, navigation, responsive layouts, and lumen calculator.',
    },
    {
        name: 'LetsVibe BD',
        icon: Ticket,
        type: 'Ticketing Platform',
        period: '2025-2026',
        stack: ['Playwright', 'POM', 'Test Cases'],
        description: 'Designed and executed test cases for authentication, ticket booking, and discovery. Built automated login tests covering 13+ scenarios.',
    },
    {
        name: 'Smart-Lab Global',
        icon: Layers3,
        type: 'Web, Mobile & API QA',
        period: '2024-2025',
        stack: ['API', 'Mobile', 'Traceability'],
        description: 'Performed coordinated QA across frontend web, mobile, and backend API layers with separate test case ID schemes.',
    },
    {
        name: 'DBL Ceramics',
        icon: Gauge,
        type: 'Website Audit',
        period: '2023-Present',
        stack: ['UI/UX', 'Performance', 'CMS'],
        description: 'Conducted structured website analysis covering UI/UX, performance, and CMS gaps for a revamp proposal.',
    },
];
