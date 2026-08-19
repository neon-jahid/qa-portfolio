import { ArrowUpRight } from 'lucide-react';
import { toneAt } from '../../lib/tones';
import { twoDigit } from '../../lib/format';

/* ============================================================================
 * PROJECT CARD
 * One project tile, shared by the work section (and anywhere else a project
 * needs rendering). `index` picks the tone and prints the 01/02 number.
 * ==========================================================================*/

export default function ProjectCard({ project, index = 0 }) {
    const tone = toneAt(index);
    const Icon = project.icon;

    return (
        <article
            className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tone.glow} ${tone.hoverBorder}`}>
            {/* Accent bar sweeps across on hover */}
            <span
                aria-hidden='true'
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${tone.bar}`}
            />

            {/* Tone wash, strongest at the top-left corner */}
            <span
                aria-hidden='true'
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${tone.wash}`}
            />

            <div className='relative flex h-full flex-col p-5 sm:p-6'>
                <div className='mb-5 flex items-start justify-between gap-4'>
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${tone.tile}`}>
                        <Icon size={22} />
                    </span>

                    <span className={`font-mono text-xs font-semibold ${tone.text}`}>{twoDigit(index)}</span>
                </div>

                <h3 className='flex items-center gap-1.5 text-xl font-bold text-heading sm:text-2xl'>
                    {project.name}
                    <ArrowUpRight
                        size={18}
                        aria-hidden='true'
                        className={`shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 ${tone.text}`}
                    />
                </h3>

                <p className={`mt-1 text-sm font-semibold ${tone.text}`}>{project.type}</p>

                <p className='mt-3 text-sm leading-6 text-body'>{project.description}</p>

                <div className='mt-5 flex flex-wrap gap-2'>
                    {project.stack.map((tag) => (
                        <span
                            key={tag}
                            className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium ${tone.chip}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <p className='mt-auto pt-5 text-xs font-medium uppercase tracking-wider text-faint'>{project.period}</p>
            </div>
        </article>
    );
}
