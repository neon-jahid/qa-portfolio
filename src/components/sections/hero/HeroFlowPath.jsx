/* ============================================================================
 * HERO — MIDDLE COLUMN, THE FLOW LINE
 * Two drawings of the same idea, swapped at the xl breakpoint:
 *   below xl : a straight dashed rail on the left with a pulse running down it
 *   xl and up: a curved dashed SVG path with a dot travelling along it
 * Decorative only — the cards next to it carry the meaning.
 * ==========================================================================*/

export default function HeroFlowPath() {
    return (
        <>
            {/* মোবাইলের খাড়া রেল */}
            <span className='pointer-events-none absolute bottom-3 left-[15px] top-3 w-px animate-[qa-flow_1.2s_linear_infinite] bg-[repeating-linear-gradient(to_bottom,var(--color-rail)_0_5px,transparent_5px_14px)] bg-[length:1px_14px] sm:left-[19px] xl:hidden'>
                {/* রেল বেয়ে নেমে আসা পালস — xl এ SVG এর dot এটার কাজ করে */}
                <span className='absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-[qa-dot_5s_linear_infinite] rounded-full bg-accent-strong shadow-[0_0_12px_4px_var(--color-rail)]' />
            </span>

            {/* xl এর বাঁকা পথ */}
            <svg
                className='absolute inset-0 hidden h-full w-full text-accent-strong xl:block'
                viewBox='0 0 190 620'
                preserveAspectRatio='none'
                aria-hidden='true'>
                <path
                    id='qaFlowPath'
                    d='M118 40 C 30 130, 190 190, 96 300 C 10 400, 165 470, 92 600'
                    fill='none'
                    stroke='currentColor'
                    strokeOpacity='0.4'
                    strokeWidth='2'
                    strokeDasharray='5 9'
                    strokeLinecap='round'>
                    <animate
                        attributeName='stroke-dashoffset'
                        from='14'
                        to='0'
                        dur='1.2s'
                        repeatCount='indefinite'
                    />
                </path>

                {/* the dot that rides the path above */}
                <circle
                    r='4'
                    fill='currentColor'>
                    <animateMotion
                        dur='5s'
                        repeatCount='indefinite'>
                        <mpath href='#qaFlowPath' />
                    </animateMotion>
                    <animate
                        attributeName='opacity'
                        values='0;1;1;0'
                        keyTimes='0;0.08;0.92;1'
                        dur='5s'
                        repeatCount='indefinite'
                    />
                </circle>
            </svg>
        </>
    );
}
