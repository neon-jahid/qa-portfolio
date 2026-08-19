/* ============================================================================
 * PILL
 * Small neutral tag chip (skills list). Tone-coloured chips use tone.chip.
 * ==========================================================================*/

export default function Pill({ children }) {
    return <span className='rounded-full border border-line bg-card px-3 py-1 text-sm text-body'>{children}</span>;
}
