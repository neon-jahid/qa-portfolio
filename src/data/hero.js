import { Bot, CheckCircle2, ClipboardCheck, Code2, RefreshCw, Settings, Webhook } from 'lucide-react';

/**
 * Everything the hero renders: the intro copy on the left and the QA dashboard
 * card on the right.
 *
 * Consumed by src/components/sections/HeroSection.jsx, which splits these
 * across HeroIntro, HeroDashboard, and HeroCheckFlow.
 */
export const hero = {
    availability: 'Available for QA / SQA Opportunities',
    quote: "Quality is not an act, it's a habit.",
    tagline:
        'Experienced in designing scalable QA workflows, executing regression and cross-browser testing, and delivering clear, evidence-based quality reports that support confident product releases and improved user experience.',

    // Stat bar under the tagline. icon keys map to lucide icons inside StatGrid.jsx
    stats: [
        { value: '20+', label: 'Projects Delivered', icon: 'projects' },
        { value: '3+', label: 'Years Experience', icon: 'experience' },
        { value: '10+', label: 'QA Tools & Technologies', icon: 'tools' },
    ],

    // Right-hand dashboard card copy
    dashboard: {
        title: 'QA Engineering',
        strengthsTitle: 'Core Strengths',
        toolsTitle: 'Tools & Technologies',
    },

    // Dashboard progress rows
    coreStrengths: [
        { name: 'Manual Testing', level: 90, icon: ClipboardCheck },
        { name: 'Automation Testing', level: 80, icon: Settings },
        { name: 'API Testing', level: 85, icon: Code2 },
        { name: 'Regression Testing', level: 90, icon: RefreshCw },
    ],

    // Tool chips. Drop the SVGs in /public/logos/ — omit `logo` for a lucide fallback
    testingTools: [
        { name: 'Playwright', logo: '/logos/playwright.svg' },
        { name: 'Postman', logo: '/logos/postman-icon.svg' },
        { name: 'Jira', logo: '/logos/Jira.svg' },
        { name: 'MySQL', logo: '/logos/png.png' },
        { name: 'Git / GitHub', logo: '/logos/git-icon-logo.svg' },
        { name: 'DevTools', logo: '/logos/chrome-dev.svg' },
    ],

    // Cards along the QA connector. Keep this at 4 — the xl curved path is drawn for four nodes.
    // `tone` keys into the shared palette in src/lib/tones.js
    checks: [
        { title: 'Test Passed', subtitle: 'All systems', icon: CheckCircle2, tone: 'emerald' },
        { title: 'API Validated', subtitle: '200 OK', icon: Webhook, tone: 'blue' },
        { title: 'Regression Complete', subtitle: 'No critical bugs', icon: RefreshCw, tone: 'violet' },
        { title: 'Automation Ready', subtitle: 'Tests running', icon: Bot, tone: 'amber' },
    ],
};
