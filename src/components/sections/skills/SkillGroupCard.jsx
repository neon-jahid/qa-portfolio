import Pill from '../../common/Pill';
import Reveal from '../../common/Reveal';
import { GROUP_ICONS } from './skillGroupIcons';

/* ============================================================================
 * SKILLS — ONE GROUP CARD
 * Reveal wraps the card so each one fades in as it scrolls into view; `index`
 * both staggers that reveal and picks the card tone.
 * ==========================================================================*/

export default function SkillGroupCard({ group, items, tone, index }) {
    const Icon = GROUP_ICONS[group];

    return (
        <Reveal
            delay={index * 70}
            className={`group rounded-3xl border border-line bg-slab p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-slab-hover hover:shadow-lg sm:p-6 ${tone.glow} ${tone.hoverBorder}`}>
            <div className='mb-4 flex items-center gap-3'>
                <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 ease-out group-hover:rotate-3 group-hover:scale-110 ${tone.tile}`}>
                    <Icon size={20} />
                </span>
                <h3 className='text-xl font-bold text-heading'>{group}</h3>
            </div>

            <div className='flex flex-wrap gap-2'>
                {items.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                ))}
            </div>
        </Reveal>
    );
}
