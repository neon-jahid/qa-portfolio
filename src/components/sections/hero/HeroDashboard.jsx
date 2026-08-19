import { ShieldCheck } from 'lucide-react';
import CoreStrengths from './CoreStrengths';
import ToolChips from './ToolChips';

/* ============================================================================
 * HERO — RIGHT COLUMN (QA dashboard)
 * A glass card: header (shield + title + quote) over an inset panel holding
 * the core-strength bars and the tool chips.
 * ==========================================================================*/

export default function HeroDashboard({ dashboard, quote, strengths, tools }) {
    return (
        <div className='rounded-[1.75rem] border border-accent-line bg-glass p-3 shadow-2xl shadow-accent-tint backdrop-blur-sm sm:p-4 md:p-6 xl:flex xl:flex-col xl:justify-center'>
            {/* ---- Header ---- */}
            {/* group so hovering anywhere in the header animates the shield */}
            <div className='group flex items-center gap-4'>
                <span className='relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-line bg-accent-tint transition-transform duration-500 ease-out group-hover:scale-105'>
                    {/* halo breathing behind the glyph — see shield-halo in index.css */}
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 animate-[shield-halo_3.2s_ease-in-out_infinite] rounded-2xl bg-accent-tint blur-[10px] motion-reduce:animate-none'
                    />
                    <ShieldCheck
                        size={26}
                        className='relative text-accent transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110'
                    />
                </span>

                <div>
                    <h2 className='text-lg font-bold uppercase tracking-[0.06em] text-heading sm:text-xl md:text-2xl'>{dashboard.title}</h2>
                    <p className='mt-1 text-sm text-muted'>{quote}</p>
                </div>
            </div>

            {/* ---- Panel: strengths + tools ---- */}
            <div className='mt-6 rounded-2xl border border-hairline bg-inset p-4 md:p-6'>
                <CoreStrengths
                    title={dashboard.strengthsTitle}
                    strengths={strengths}
                />

                <ToolChips
                    title={dashboard.toolsTitle}
                    tools={tools}
                />
            </div>
        </div>
    );
}
