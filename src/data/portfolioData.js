/* ============================================================================
 * DATA INDEX — one module per section of the page.
 *
 *   profile.js          — name, role, contact details, links, summary
 *   navigation.js       — navbar items (order === section order on the page)
 *   hero.js             — hero copy, stats, strengths, tool chips, check cards
 *   toolTicker.js       — the scrolling strip of tools under the hero
 *   expertise.js        — "What I Do Best" master/detail entries
 *   skills.js           — toolkit groups
 *   qaProcess.js        — the six workflow steps
 *   automationSuite.js  — file tree, code snippets, and terminal run
 *   work.js             — experience + projects
 *
 * Sections import their own module directly (e.g. HeroSection -> data/hero).
 * This file is the barrel for anything that needs more than one of them.
 * ==========================================================================*/

export { profile } from './profile';
export { navItems } from './navigation';
export { hero } from './hero';
export { toolTicker } from './toolTicker';
export { expertise } from './expertise';
export { skills } from './skills';
export { qaProcess } from './qaProcess';
export { automationSuite } from './automationSuite';
export { experience, projects } from './work';
