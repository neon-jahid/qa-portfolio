import { Bug, ClipboardCheck, FileSpreadsheet, ShieldCheck, TestTube2, Workflow } from 'lucide-react';

/**
 * The six workflow steps rendered as cards by QAProcessSection. Array order is
 * the step order shown on the page.
 */
export const qaProcess = [
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
];
