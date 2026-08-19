import { ArrowRight, Mail } from 'lucide-react';
import { TONES } from '../../../lib/tones';

/* ============================================================================
 * CONTACT — RIGHT COLUMN (primary email card)
 * The main call to action. Kept in its own card so it stays the loudest thing
 * in the section on every breakpoint.
 * ==========================================================================*/

export default function EmailCard({ email }) {
    return (
        <div className='rounded-3xl border border-line bg-card p-4 shadow-xl shadow-tone-emerald/20 sm:p-6 lg:p-7'>
            <div className='flex items-center gap-4'>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${TONES.emerald.tile}`}>
                    <Mail size={22} />
                </span>

                <div className='min-w-0'>
                    <p className='text-xs font-semibold uppercase tracking-[0.2em] text-tone-emerald'>Email</p>
                    <p className='mt-0.5 text-lg font-bold text-heading sm:text-xl'>Start a conversation</p>
                </div>
            </div>

            <p className='mt-4 break-all text-sm text-body'>{email}</p>

            <a
                href={`mailto:${email}`}
                className='group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-2.5 font-semibold sm:py-3 text-on-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong sm:w-auto'>
                Send an email
                <ArrowRight
                    size={18}
                    className='transition-transform duration-300 group-hover:translate-x-1'
                />
            </a>
        </div>
    );
}
