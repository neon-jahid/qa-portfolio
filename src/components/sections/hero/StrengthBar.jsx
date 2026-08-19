/* ============================================================================
 * HERO — ONE CORE-STRENGTH ROW
 * Icon tile + label + percentage + the animated fill bar.
 *
 * `filled` comes from the parent (useBarFill): false parks the bar at 0%,
 * true runs it out to `level`. `index` staggers the fills 140ms apart.
 * ==========================================================================*/

export default function StrengthBar({ name, level, icon: Icon, filled, index }) {
    return (
        <div className='group flex items-center gap-4'>
            <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline bg-tile text-accent transition-colors duration-300 group-hover:border-accent-line'>
                <Icon size={18} />
            </span>

            <div className='min-w-0 flex-1'>
                <div className='mb-2 flex items-baseline justify-between gap-3'>
                    <span className='truncate text-sm font-medium text-heading'>{name}</span>
                    <span className='shrink-0 text-sm font-semibold text-body'>{level}%</span>
                </div>

                {/* track */}
                <div className='h-1.5 overflow-hidden rounded-full bg-line'>
                    {/* fill */}
                    <div
                        style={{
                            width: filled ? `${level}%` : '0%',
                            // reset টা সাথে সাথে, শুধু ভরার সময় stagger + ease
                            transitionDuration: filled ? undefined : '0ms',
                            transitionDelay: filled ? `${index * 140}ms` : '0ms',
                        }}
                        className='relative h-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 shadow-[0_0_10px_var(--color-accent-line)] transition-[width] duration-[1100ms] ease-out dark:from-cyan-400 dark:to-blue-500'>
                        <span className='absolute inset-0 animate-[bar-shimmer_2.4s_ease-in-out_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]' />
                    </div>
                </div>
            </div>
        </div>
    );
}
