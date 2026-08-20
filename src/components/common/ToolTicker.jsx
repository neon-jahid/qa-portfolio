import Marquee from './Marquee';

/* ============================================================================
 * TOOL TICKER
 * The full-bleed strip of tools and QA disciplines that runs under the hero.
 * Presentation only — the words come from data/toolTicker.js and are passed in,
 * the scrolling itself comes from the generic Marquee.
 *
 * `secondsPerItem` (not a fixed duration) keeps the speed constant no matter
 * how long the list grows.
 * ==========================================================================*/

export default function ToolTicker({ items, secondsPerItem = 3.4, direction = 'left', className = '' }) {
    if (!items?.length) return null;

    return (
        <div className={`relative border-y border-line bg-glass py-4 backdrop-blur-sm sm:py-5 ${className}`}>
            <Marquee
                duration={items.length * secondsPerItem}
                direction={direction}>
                {items.map((item) => (
                    <span
                        key={item}
                        className='flex items-center gap-10 sm:gap-14'>
                        <span className='whitespace-nowrap font-mono text-xs uppercase tracking-[0.28em] text-muted transition-colors duration-300 hover:text-accent sm:text-sm'>
                            {item}
                        </span>

                        {/* Rotated square — the separator diamond between entries */}
                        <span
                            aria-hidden='true'
                            className='h-1.5 w-1.5 shrink-0 rotate-45 bg-accent-strong/70'
                        />
                    </span>
                ))}
            </Marquee>
        </div>
    );
}
