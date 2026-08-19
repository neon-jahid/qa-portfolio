import ExpertiseTags from './ExpertiseTags';
import { twoDigit } from '../../../lib/format';

/* ============================================================================
 * EXPERTISE — RIGHT COLUMN (detail box, lg+)
 * The wrapper stretches to the list height; the box inside sticks while you
 * move down the list. min-h is sized past the longest entry so the box never
 * resizes between hovers.
 * ==========================================================================*/

export default function ExpertiseDetail({ item, index, tone }) {
    const Icon = item.icon;

    return (
        <div className='hidden lg:block'>
            <div className='sticky top-24 rounded-3xl border border-line bg-card p-8 lg:min-h-[28rem] xl:p-10'>
                {/* key remounts the node so the entrance animation replays on every swap */}
                <div
                    key={index}
                    className='flex animate-[detail-in_0.35s_ease-out] flex-col gap-6 motion-reduce:animate-none'>
                    <div className='flex items-center gap-4'>
                        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${tone.tile}`}>
                            <Icon size={26} />
                        </span>
                        <span className={`font-mono text-sm font-semibold ${tone.text}`}>{twoDigit(index)}</span>
                    </div>

                    <h3 className='text-3xl font-bold tracking-tight text-heading'>{item.title}</h3>

                    <p className='text-lg leading-8 text-body'>{item.description}</p>

                    <ExpertiseTags
                        tags={item.tags}
                        tone={tone}
                    />
                </div>
            </div>
        </div>
    );
}
