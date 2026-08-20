import Section from '../common/Section';
import ContactPitch from './contact/ContactPitch';
import EmailCard from './contact/EmailCard';
import { profile } from '../../data/profile';

/* ============================================================================
 * SECTION: CONTACT (#contact)
 *
 * One gradient card holding two columns:
 *   contact/ContactPitch — copy, availability, secondary channels
 *   contact/EmailCard    — the primary "send an email" call to action
 * ==========================================================================*/

export default function ContactSection() {
    return (
        <Section id='contact'>
            {/* Section supplies the shared padding, Container width and Reveal —
                this card just fills it, so contact matches every other section. */}
            <div className='relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-cta-from to-cta-to p-6 sm:p-7 md:p-8'>
                {/* Multi-tone ambient wash — kept faint so the copy stays crisp */}
                <span
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-0 opacity-[0.09] bg-[radial-gradient(circle_at_12%_20%,var(--color-tone-emerald),transparent_45%),radial-gradient(circle_at_70%_10%,var(--color-tone-cyan),transparent_45%),radial-gradient(circle_at_95%_90%,var(--color-tone-violet),transparent_45%)] dark:opacity-[0.13]'
                />

                <div className='relative grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 lg:gap-12'>
                    <ContactPitch location={profile.location} />
                    <EmailCard email={profile.email} />
                </div>
            </div>
        </Section>
    );
}
