import ExperienceHeader from './ExperienceHeader';
import AchievementList from './AchievementList';

/* ============================================================================
 * WORK — ONE EXPERIENCE CARD
 * A tone rail down the left edge plus a matching corner wash, then the header
 * and the achievement bullets on top of them.
 * ==========================================================================*/

export default function ExperienceCard({ job, tone }) {
    return (
        <div className='relative overflow-hidden rounded-3xl border border-line bg-slab p-5 sm:p-6 md:p-8'>
            {/* Full-height tone rail down the left edge */}
            <span
                aria-hidden='true'
                className={`absolute inset-y-0 left-0 w-1 ${tone.bar}`}
            />
            <span
                aria-hidden='true'
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-70 ${tone.wash}`}
            />

            <div className='relative'>
                <ExperienceHeader
                    job={job}
                    tone={tone}
                />
                <AchievementList points={job.points} />
            </div>
        </div>
    );
}
