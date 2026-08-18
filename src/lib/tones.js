/**
 * Shared accent tones, cycled across repeating card sets so the site reads as
 * one colour system rather than six unrelated palettes.
 *
 * Class strings are written out in full on purpose: Tailwind scans source as
 * text, so a computed `bg-tone-${name}` would never be generated.
 * Values live in index.css as --color-tone-* (700-weight in light, 400 in dark).
 */
export const TONE_ORDER = ['cyan', 'emerald', 'blue', 'violet', 'amber', 'rose'];

export const TONES = {
    cyan: {
        text: 'text-tone-cyan',
        tile: 'border-tone-cyan/25 bg-tone-cyan/10 text-tone-cyan',
        // solid fill so a chip on a washed card never stacks two tints
        chip: 'border-tone-cyan/35 bg-card text-tone-cyan',
        node: 'bg-tone-cyan ring-tone-cyan/20',
        bar: 'bg-tone-cyan',
        wash: 'from-tone-cyan/10',
        hoverBorder: 'hover:border-tone-cyan/40',
        glow: 'shadow-tone-cyan/20',
        cssVar: '--color-tone-cyan',
    },
    emerald: {
        text: 'text-tone-emerald',
        tile: 'border-tone-emerald/25 bg-tone-emerald/10 text-tone-emerald',
        // solid fill so a chip on a washed card never stacks two tints
        chip: 'border-tone-emerald/35 bg-card text-tone-emerald',
        node: 'bg-tone-emerald ring-tone-emerald/20',
        bar: 'bg-tone-emerald',
        wash: 'from-tone-emerald/10',
        hoverBorder: 'hover:border-tone-emerald/40',
        glow: 'shadow-tone-emerald/20',
        cssVar: '--color-tone-emerald',
    },
    blue: {
        text: 'text-tone-blue',
        tile: 'border-tone-blue/25 bg-tone-blue/10 text-tone-blue',
        // solid fill so a chip on a washed card never stacks two tints
        chip: 'border-tone-blue/35 bg-card text-tone-blue',
        node: 'bg-tone-blue ring-tone-blue/20',
        bar: 'bg-tone-blue',
        wash: 'from-tone-blue/10',
        hoverBorder: 'hover:border-tone-blue/40',
        glow: 'shadow-tone-blue/20',
        cssVar: '--color-tone-blue',
    },
    violet: {
        text: 'text-tone-violet',
        tile: 'border-tone-violet/25 bg-tone-violet/10 text-tone-violet',
        // solid fill so a chip on a washed card never stacks two tints
        chip: 'border-tone-violet/35 bg-card text-tone-violet',
        node: 'bg-tone-violet ring-tone-violet/20',
        bar: 'bg-tone-violet',
        wash: 'from-tone-violet/10',
        hoverBorder: 'hover:border-tone-violet/40',
        glow: 'shadow-tone-violet/20',
        cssVar: '--color-tone-violet',
    },
    amber: {
        text: 'text-tone-amber',
        tile: 'border-tone-amber/25 bg-tone-amber/10 text-tone-amber',
        // solid fill so a chip on a washed card never stacks two tints
        chip: 'border-tone-amber/35 bg-card text-tone-amber',
        node: 'bg-tone-amber ring-tone-amber/20',
        bar: 'bg-tone-amber',
        wash: 'from-tone-amber/10',
        hoverBorder: 'hover:border-tone-amber/40',
        glow: 'shadow-tone-amber/20',
        cssVar: '--color-tone-amber',
    },
    rose: {
        text: 'text-tone-rose',
        tile: 'border-tone-rose/25 bg-tone-rose/10 text-tone-rose',
        // solid fill so a chip on a washed card never stacks two tints
        chip: 'border-tone-rose/35 bg-card text-tone-rose',
        node: 'bg-tone-rose ring-tone-rose/20',
        bar: 'bg-tone-rose',
        wash: 'from-tone-rose/10',
        hoverBorder: 'hover:border-tone-rose/40',
        glow: 'shadow-tone-rose/20',
        cssVar: '--color-tone-rose',
    },
};

/** Tone for the nth item in a repeating set, cycling through TONE_ORDER. */
export const toneAt = (index) => TONES[TONE_ORDER[index % TONE_ORDER.length]];
