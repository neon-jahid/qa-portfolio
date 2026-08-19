import { SECONDARY_CHANNELS } from './channels';

/* ============================================================================
 * CONTACT — "CONNECT ELSEWHERE"
 * The GitHub / LinkedIn / Call chips under the pitch.
 * ==========================================================================*/

export default function ContactChannels() {
    return (
        <>
            <p className='mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted'>Connect elsewhere</p>

            <div className='mt-2.5 flex flex-wrap gap-3'>
                {SECONDARY_CHANNELS.map(({ label, icon: Icon, href, tone, external }) => (
                    <a
                        key={label}
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`group inline-flex items-center gap-2.5 rounded-2xl border border-line bg-card px-3 py-2.5 text-sm font-semibold text-heading transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong ${tone.glow} ${tone.hoverBorder}`}>
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110 ${tone.tile}`}>
                            <Icon size={14} />
                        </span>
                        {label}
                    </a>
                ))}
            </div>
        </>
    );
}
