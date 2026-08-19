import { ArrowRight, Download, Users } from 'lucide-react';
import StatGrid from '../../common/StatGrid';

/* ============================================================================
 * HERO — LEFT COLUMN (intro)
 * Availability badge → name + role headline → tagline → CTAs → stat bar.
 * ==========================================================================*/

export default function HeroIntro({ availability, name, role, tagline, resumeUrl, stats }) {
    return (
        <div className='xl:flex xl:flex-col xl:justify-center'>
            {/* ---- Availability badge (pinging dot) ---- */}
            <p className='mb-6 inline-flex items-center gap-2.5 rounded-xl border border-accent-line bg-accent-tint px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent'>
                <span className='relative flex h-2 w-2'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 dark:bg-emerald-400' />
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400' />
                </span>
                {availability}
            </p>

            {/* ---- Headline ---- */}
            <h1 className='text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-[3rem]'>
                <span className='block text-heading'>{name}</span>

                {/* pb-2 keeps descenders (g, y, q) inside the padding box — bg-clip-text
                    paints the gradient there, so a tight leading clips them otherwise */}
                <span className='mt-3 block bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-700 bg-clip-text pb-2 text-transparent dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-500'>
                    {role}
                </span>
            </h1>

            <p className='mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8'>{tagline}</p>

            {/* ---- CTAs ---- */}
            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4'>
                <a
                    href='#contact'
                    className='group inline-flex items-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 font-semibold text-on-brand shadow-lg shadow-accent-tint transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong'>
                    <Users size={18} />
                    Let's Work Together
                    <ArrowRight
                        size={18}
                        className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                </a>

                <a
                    href={resumeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2.5 rounded-xl border border-line px-6 py-3.5 font-semibold text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:bg-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong'>
                    <Download size={18} />
                    Download CV
                </a>
            </div>

            {/* ---- Stats bar (counts up when it scrolls in) ---- */}
            <StatGrid
                stats={stats}
                className='mt-10'
            />
        </div>
    );
}
