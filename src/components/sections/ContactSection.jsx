import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Section from '../common/Section';
import { TONES } from '../../lib/tones';
import { portfolio } from '../../data/portfolioData';

function GitHubIcon({ size = 20 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='currentColor'
            aria-hidden='true'>
            <path d='M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.76-.24.76-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.96 2.64 2.95 1.87.1-.73.39-1.23.71-1.51-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.14c0 .3.2.65.77.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5Z' />
        </svg>
    );
}

function LinkedInIcon({ size = 20 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='currentColor'
            aria-hidden='true'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
    );
}

export default function ContactSection() {
    // Email is the primary CTA and lives in its own card; these are the fallbacks.
    const secondary = [
        { label: 'GitHub', icon: GitHubIcon, href: portfolio.github, tone: TONES.violet, external: true },
        { label: 'LinkedIn', icon: LinkedInIcon, href: portfolio.linkedin, tone: TONES.blue, external: true },
        { label: 'Call', icon: Phone, href: `tel:${portfolio.phone}`, tone: TONES.cyan },
    ];

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
                    {/* ---------------- Left: the pitch ---------------- */}
                    <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-accent-strong'>Contact</p>

                        <h2 className='mt-2 text-2xl font-bold leading-tight tracking-tight text-heading sm:text-3xl lg:text-4xl'>Let’s build reliable products together.</h2>

                        <p className='mt-3 max-w-lg text-sm leading-6 text-body'>Open to SQA, QA Automation, and QA process improvement opportunities.</p>

                        {/* Availability + location */}
                        <div className='mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm'>
                            <span className='inline-flex items-center gap-2 font-semibold text-heading'>
                                <span className='relative flex h-2.5 w-2.5'>
                                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-tone-emerald opacity-70' />
                                    <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-tone-emerald' />
                                </span>
                                Available for opportunities
                            </span>

                            <span className='inline-flex items-center gap-1.5 text-muted'>
                                <MapPin size={15} /> {portfolio.location}
                            </span>
                        </div>

                        {/* Secondary channels */}
                        <p className='mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted'>Connect elsewhere</p>

                        <div className='mt-2.5 flex flex-wrap gap-3'>
                            {secondary.map(({ label, icon: Icon, href, tone, external }) => (
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
                    </div>

                    {/* ---------------- Right: primary email card ---------------- */}
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

                        <p className='mt-4 break-all text-sm text-body'>{portfolio.email}</p>

                        <a
                            href={`mailto:${portfolio.email}`}
                            className='group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-2.5 font-semibold sm:py-3 text-on-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong sm:w-auto'>
                            Send an email
                            <ArrowRight
                                size={18}
                                className='transition-transform duration-300 group-hover:translate-x-1'
                            />
                        </a>
                    </div>
                </div>

                <p className='relative mt-6 hidden text-right text-xs text-muted sm:block'>Response-friendly contact options</p>
            </div>
        </Section>
    );
}
