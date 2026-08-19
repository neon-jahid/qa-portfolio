import { toneAt } from '../../../lib/tones';

/* ============================================================================
 * WORK — ACHIEVEMENTS
 * Two columns of bullet cards. Each bullet takes its own tone from its position
 * in the list, so a single job still reads in the full colour system.
 * ==========================================================================*/

export default function AchievementList({ points }) {
    return (
        <ul className='grid gap-3 md:grid-cols-2'>
            {points.map((point, i) => {
                const tone = toneAt(i);

                return (
                    <li
                        key={point}
                        className='flex gap-3 rounded-2xl border border-hairline bg-inset p-3 text-sm leading-6 text-body transition-colors duration-300 hover:bg-card-hover'>
                        <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ${tone.node}`} />
                        <span>{point}</span>
                    </li>
                );
            })}
        </ul>
    );
}
