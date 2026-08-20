/* ============================================================================
 * BACKDROP — SCAN BEAM
 * A hairline of accent light that crawls down the grid, borrowed from the
 * scanner/progress idiom of a suite working through its cases. Several can run
 * at once with different `delay` values to avoid a metronome feel.
 *
 * The keyframes live in src/index.css (@keyframes qa-scan); only the timing is
 * set here. Hidden outright under prefers-reduced-motion — nothing is lost.
 * ==========================================================================*/

export default function ScanBeam({ duration = 18, delay = 0, className = '' }) {
    return (
        <div
            aria-hidden='true'
            className={`pointer-events-none absolute inset-x-0 top-0 h-px motion-reduce:hidden ${className}`}
            style={{
                animation: `qa-scan ${duration}s linear ${delay}s infinite`,
                backgroundImage: 'linear-gradient(to right, transparent, var(--color-scan) 22%, var(--color-scan) 78%, transparent)',
                boxShadow: '0 0 12px 1px var(--color-scan)',
            }}
        />
    );
}
