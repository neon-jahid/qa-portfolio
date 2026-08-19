import { Code2 } from 'lucide-react';

/* ============================================================================
 * HERO — TOOLS & TECHNOLOGIES
 * Logo chips under the strength bars. Drop the SVGs in /public/logos/ —
 * a tool without a `logo` falls back to the lucide code glyph.
 * ==========================================================================*/

export default function ToolChips({ title, tools }) {
    return (
        <>
            <h3 className='mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-accent'>{title}</h3>

            <div className='mt-4 flex flex-wrap gap-3'>
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className='group flex items-center gap-2.5 rounded-xl border border-line bg-slab px-4 py-3 text-sm text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:text-accent'>
                        {tool.logo ? (
                            <img
                                src={tool.logo}
                                alt=''
                                className='h-5 w-5 shrink-0 object-contain transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110'
                            />
                        ) : (
                            <Code2
                                size={18}
                                className='shrink-0 text-accent transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110'
                            />
                        )}
                        {tool.name}
                    </div>
                ))}
            </div>
        </>
    );
}
