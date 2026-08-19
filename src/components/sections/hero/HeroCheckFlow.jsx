import HeroFlowPath from './HeroFlowPath';
import HeroCheckCard from './HeroCheckCard';

/* ============================================================================
 * HERO — MIDDLE COLUMN (QA checks)
 * মোবাইল/ট্যাবলেট : বাঁ পাশে খাড়া রেল, কার্ড উপর-নিচে
 * xl এবং তার উপরে : বাঁকা পথ ধরে কলাম
 *
 * Keep `checks` at 4 — the xl curved path is drawn for four nodes.
 * ==========================================================================*/

export default function HeroCheckFlow({ checks }) {
    return (
        <div className='relative xl:self-stretch'>
            <HeroFlowPath />

            <div className='relative flex flex-col gap-4 pl-10 sm:pl-12 xl:h-full xl:justify-between xl:gap-0 xl:py-2 xl:pl-0'>
                {checks.map((check, i) => (
                    <HeroCheckCard
                        key={check.title}
                        check={check}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}
