/**
 * Navbar links. The order here is the order of the sections on the page, and
 * every `href` must match a section id rendered in src/pages/Home.jsx —
 * `useActiveSection` derives the scroll-spy targets from this list.
 */
export const navItems = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Toolkit', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Automation', href: '#automation' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
];
