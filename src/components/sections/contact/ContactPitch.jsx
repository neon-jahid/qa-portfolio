import { MapPin } from 'lucide-react';
import ContactChannels from './ContactChannels';

/* ============================================================================
 * CONTACT — LEFT COLUMN (the pitch)
 * Eyebrow → headline → one-liner → availability + location → other channels.
 * ==========================================================================*/

export default function ContactPitch({ location }) {
    return (
        <div>
            <p className='text-xs font-semibold uppercase tracking-[0.25em] text-accent-strong'>Contact</p>

            <h2 className='mt-2 text-2xl font-bold leading-tight tracking-tight text-heading sm:text-3xl lg:text-4xl'>Let’s build reliable products together.</h2>

            <p className='mt-3 max-w-lg text-sm leading-6 text-body'>Open to SQA, QA Automation, and QA process improvement opportunities.</p>

            {/* ---- Availability + location ---- */}
            <div className='mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm'>
                <span className='inline-flex items-center gap-2 font-semibold text-heading'>
                    <span className='relative flex h-2.5 w-2.5'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-tone-emerald opacity-70' />
                        <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-tone-emerald' />
                    </span>
                    Available for opportunities
                </span>

                <span className='inline-flex items-center gap-1.5 text-muted'>
                    <MapPin size={15} /> {location}
                </span>
            </div>

            <ContactChannels />
        </div>
    );
}
