/* ============================================================================
 * HERO — BACKDROP
 * Purely decorative layers behind the hero content: an ambient colour glow and
 * a circuit-style grid. Both are pointer-events-none and sit on -z-10.
 * ==========================================================================*/

export default function HeroBackdrop() {
    return (
        <>
            {/* Ambient glow — dialled back in light mode, where a strong wash muddies the text */}
            <div className='pointer-events-none absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_10%_85%,rgba(59,130,246,0.12),transparent_45%)] dark:opacity-100' />

            {/* Circuit-style grid fading in from the bottom */}
            <div className='pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-80 bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:linear-gradient(to_top,black,transparent_85%)]' />
        </>
    );
}
