import {
    Bot,
    Bug,
    ClipboardCheck,
    ClipboardList,
    FileText,
    MonitorSmartphone,
    RefreshCw,
    SearchCheck,
    Webhook,
} from 'lucide-react';

/**
 * "What I Do Best" master/detail list. Numbering (01, 02, …) comes from array
 * order, so reordering here reorders the rendered list.
 *
 * Every entry is backed by something concrete in experience / projects /
 * deliverables — keep it that way when editing.
 */
export const expertise = [
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
];
