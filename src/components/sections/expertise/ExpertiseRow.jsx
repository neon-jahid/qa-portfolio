import { ArrowRight } from 'lucide-react';
import ExpertiseTags from './ExpertiseTags';
import { twoDigit } from '../../../lib/format';

/* ============================================================================
 * EXPERTISE — ONE LIST ROW
 * The clickable/hoverable row, plus the detail that drops open under it below
 * the lg breakpoint (there is no hover on touch, so the detail comes to the
 * row instead of the sticky box).
 * ==========================================================================*/

export default function ExpertiseRow({ item, index, tone, isActive, onSelect }) {
    const Icon = item.icon;

    return (
        <div className='border-b border-line'>
            <button
                type='button'
                onMouseEnter={onSelect}
                onFocus={onSelect}
                onClick={onSelect}
                aria-current={isActive || undefined}
                aria-controls={`expertise-panel-${index}`}
                aria-expanded={isActive}
                className='group flex w-full cursor-pointer items-center gap-3 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong sm:gap-5'>
                <span className={`font-mono text-sm font-semibold transition-colors duration-300 ${isActive ? tone.text : 'text-faint'}`}>{twoDigit(index)}</span>

                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${isActive ? tone.tile : 'border-hairline bg-tile text-muted'}`}>
                    <Icon size={17} />
                </span>

                <span className={`min-w-0 flex-1 text-base font-bold tracking-tight transition-colors duration-300 sm:text-lg lg:text-xl ${isActive ? tone.text : 'text-heading'}`}>{item.title}</span>

                {/* decorative only — dropped on small screens to buy title width */}
                <ArrowRight
                    size={20}
                    aria-hidden='true'
                    className={`hidden shrink-0 transition-all duration-300 sm:block ${isActive ? `translate-x-0 opacity-100 ${tone.text}` : '-translate-x-2 opacity-0'}`}
                />
            </button>

            {/* Below lg there is no hover, so the detail drops in place instead */}
            <div
                id={`expertise-panel-${index}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className='overflow-hidden'>
                    {/* indented to line up with the row icon tile */}
                    <div className='flex flex-col gap-4 pb-6 pl-10'>
                        <p className='leading-7 text-body'>{item.description}</p>
                        <ExpertiseTags
                            tags={item.tags}
                            tone={tone}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
