import { TONES } from '../../../lib/tones';

/* ============================================================================
 * HERO — ONE QA CHECK CARD
 * Sits on the flow line in the middle column. `index` only decides the stagger
 * of the node pulse and which cards get nudged right on xl (zig-zag).
 * ==========================================================================*/

export default function HeroCheckCard({ check, index }) {
    const Icon = check.icon;
    const tone = TONES[check.tone] ?? TONES.cyan;

    return (
        <div
            className={`group relative rounded-2xl border border-accent-line bg-raised px-4 py-3 shadow-lg shadow-accent-tint backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-strong/40 xl:w-fit ${
                index % 2 === 0 ? 'xl:translate-x-6' : ''
            }`}>
            {/* রেলের উপরের নোড — কার্ডের রঙ ধরে রাখে */}
            <span className={`absolute -left-[30px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ring-4 sm:-left-[34px] xl:hidden ${tone.node}`}>
                <span
                    style={{
                        animationDelay: `${index * 400}ms`,
                        '--color-pulse-from': `color-mix(in srgb, var(${tone.cssVar}) 50%, transparent)`,
                        '--color-pulse-to': `color-mix(in srgb, var(${tone.cssVar}) 0%, transparent)`,
                    }}
                    className='absolute inset-0 animate-[node-pulse_2.4s_ease-in-out_infinite] rounded-full'
                />
            </span>

            <div className='flex items-center gap-3'>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${tone.tile}`}>
                    <Icon
                        size={18}
                        className='transition-transform duration-300 ease-out group-hover:-rotate-6'
                    />
                </span>

                <div className='leading-tight'>
                    <p className='text-sm font-semibold text-heading'>{check.title}</p>
                    <p className='mt-0.5 text-xs text-muted'>{check.subtitle}</p>
                </div>
            </div>
        </div>
    );
}
