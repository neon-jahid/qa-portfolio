import Reveal from '../../common/Reveal';
import { twoDigit } from '../../../lib/format';

/* ============================================================================
 * QA PROCESS — ONE STEP
 * One markup, two looks:
 *   below sm : a borderless timeline row, its icon sitting on the shared rail
 *   sm and up: a normal bordered card in the grid
 * ==========================================================================*/

export default function ProcessStepCard({ item, index, tone }) {
    const Icon = item.icon;

    return (
        <Reveal
            delay={index * 70}
            className='h-full'>
            <div
                className={`group relative h-full pl-[3.75rem] transition-all duration-300 sm:rounded-3xl sm:border sm:border-line sm:bg-card sm:p-6 sm:pl-6 sm:hover:-translate-y-1 sm:hover:bg-card-hover sm:hover:shadow-lg ${tone.glow} ${tone.hoverBorder}`}>
                {/* Sits on the rail below sm, flows inside the card above it */}
                <span
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 sm:static sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl ${tone.tile}`}>
                    <Icon size={20} />
                </span>

                <h3 className='flex items-baseline gap-2 text-lg font-bold text-heading sm:text-xl'>
                    <span className={`font-mono text-xs font-semibold ${tone.text}`}>{twoDigit(index)}</span>
                    {item.title}
                </h3>

                <p className='mt-2 text-sm leading-6 text-body sm:mt-3'>{item.description}</p>
            </div>
        </Reveal>
    );
}
