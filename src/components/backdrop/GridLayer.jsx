/* ============================================================================
 * BACKDROP — GRID LAYER
 * The blueprint grid: a fine cell with a bolder line every `boldEvery` cells,
 * the way a test matrix or a wireframe sheet is ruled.
 *
 * Sizes are inline styles on purpose — Tailwind only compiles arbitrary values
 * it can read as literal strings, so a `bg-[size:${cell}px]` would never ship.
 * Colours stay as tokens (--color-grid-fine / --color-grid-bold) so both
 * themes are handled in src/index.css.
 * ==========================================================================*/

export default function GridLayer({ cell = 28, boldEvery = 4, className = '', style }) {
    const bold = cell * boldEvery;

    return (
        <div
            aria-hidden='true'
            className={`pointer-events-none absolute inset-0 ${className}`}
            style={{
                backgroundImage: [
                    'linear-gradient(to right, var(--color-grid-bold) 1px, transparent 1px)',
                    'linear-gradient(to bottom, var(--color-grid-bold) 1px, transparent 1px)',
                    'linear-gradient(to right, var(--color-grid-fine) 1px, transparent 1px)',
                    'linear-gradient(to bottom, var(--color-grid-fine) 1px, transparent 1px)',
                ].join(','),
                backgroundSize: `${bold}px ${bold}px, ${bold}px ${bold}px, ${cell}px ${cell}px, ${cell}px ${cell}px`,
                ...style,
            }}
        />
    );
}
