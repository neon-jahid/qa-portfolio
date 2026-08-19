import ProcessStepCard from './ProcessStepCard';
import { toneAt } from '../../../lib/tones';

/* ============================================================================
 * QA PROCESS — LAYOUT
 * The phone-only timeline rail sits behind the grid; from sm up the rail is
 * hidden and the steps read as cards (six stacked boxes would be a wall).
 * ==========================================================================*/

export default function ProcessGrid({ steps }) {
    return (
        <div className='relative'>
            <span
                aria-hidden='true'
                className='absolute bottom-8 left-5 top-8 w-px bg-line sm:hidden'
            />

            <div className='grid gap-7 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
                {steps.map((item, i) => (
                    <ProcessStepCard
                        key={item.title}
                        item={item}
                        index={i}
                        tone={toneAt(i)}
                    />
                ))}
            </div>
        </div>
    );
}
