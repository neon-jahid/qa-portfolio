import { ArrowRight, Code2, Download, ShieldCheck, Users } from 'lucide-react';
import Container from '../common/Container';
import StatGrid from '../common/StatGrid';
import { portfolio } from '../../data/portfolioData';
import { useEffect, useRef, useState } from 'react';

/**
 * One colour per QA check card. Class strings are written out in full — Tailwind
 * scans source text, so `bg-check-${tone}` would never be generated.
 * `cssVar` re-tints the node-pulse halo to match its card.
 */
const CHECK_TONES = {
    pass: {
        tile: 'border-check-pass/25 bg-check-pass/10 text-check-pass',
        node: 'bg-check-pass ring-check-pass/20',
        cssVar: '--color-check-pass',
    },
    api: {
        tile: 'border-check-api/25 bg-check-api/10 text-check-api',
        node: 'bg-check-api ring-check-api/20',
        cssVar: '--color-check-api',
    },
    regression: {
        tile: 'border-check-regression/25 bg-check-regression/10 text-check-regression',
        node: 'bg-check-regression ring-check-regression/20',
        cssVar: '--color-check-regression',
    },
    automation: {
        tile: 'border-check-automation/25 bg-check-automation/10 text-check-automation',
        node: 'bg-check-automation ring-check-automation/20',
        cssVar: '--color-check-automation',
    },
};

export default function HeroSection() {
    const { availability, name, role, heroTagline, resumeUrl, stats, heroQuote, heroDashboard, coreStrengths, testingTools, heroChecks } = portfolio;

    const strengthsRef = useRef(null);
    // IntersectionObserver না থাকলে (পুরনো ব্রাউজার) বারগুলো সরাসরি ভরা দেখাবে
    const [barsVisible, setBarsVisible] = useState(() => typeof IntersectionObserver === 'undefined');

    useEffect(() => {
        const node = strengthsRef.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;

        // threshold রাখা হয়েছে কম + নিচ থেকে rootMargin — ছোট মোবাইল ভিউপোর্টে
        // প্যানেলটা স্ক্রিনের চেয়ে লম্বা হলেও যেন observer ফায়ার করে
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setBarsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin: '0px 0px -15% 0px' },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id='home'
            className='relative overflow-hidden bg-page py-12 sm:py-16 md:py-20 lg:py-24'>
            {/* Ambient glow — dialled back in light mode, where a strong wash muddies the text */}
            <div className='pointer-events-none absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_10%_85%,rgba(59,130,246,0.12),transparent_45%)] dark:opacity-100' />

            {/* Circuit-style grid fading in from the bottom */}
            <div className='pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-80 bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:linear-gradient(to_top,black,transparent_85%)]' />

            {/* xl:items-stretch — with items-center each column sized to its own
                content, so the intro and dashboard ended up different heights */}
            <Container className='grid grid-cols-1 gap-10 md:gap-12 xl:grid-cols-[1fr_190px_1.05fr] xl:items-stretch xl:gap-8'>
                {/* ---------------- Left: intro ---------------- */}
                <div className='xl:flex xl:flex-col xl:justify-center'>
                    <p className='mb-6 inline-flex items-center gap-2.5 rounded-xl border border-accent-line bg-accent-tint px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent'>
                        <span className='relative flex h-2 w-2'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 dark:bg-emerald-400' />
                            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400' />
                        </span>
                        {availability}
                    </p>

                    <h1 className='text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-[3rem]'>
                        <span className='block text-heading'>{name}</span>

                        {/* pb-2 keeps descenders (g, y, q) inside the padding box — bg-clip-text
                            paints the gradient there, so a tight leading clips them otherwise */}
                        <span className='mt-3 block bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-700 bg-clip-text pb-2 text-transparent dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-500'>
                            {role}
                        </span>
                    </h1>

                    <p className='mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8'>{heroTagline}</p>

                    {/* CTAs */}
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

                    {/* Stats bar */}
                    <StatGrid
                        stats={stats}
                        className='mt-10'
                    />
                </div>

                {/* ---------------- Middle: QA checks ----------------
    মোবাইল/ট্যাবলেট : বাঁ পাশে খাড়া রেল, কার্ড উপর-নিচে
    xl এবং তার উপরে : বাঁকা পথ ধরে কলাম  */}
                <div className='relative xl:self-stretch'>
                    {/* মোবাইলের খাড়া রেল */}
                    <span className='pointer-events-none absolute bottom-3 left-[15px] top-3 w-px animate-[qa-flow_1.2s_linear_infinite] bg-[repeating-linear-gradient(to_bottom,var(--color-rail)_0_5px,transparent_5px_14px)] bg-[length:1px_14px] sm:left-[19px] xl:hidden'>
                        {/* রেল বেয়ে নেমে আসা পালস — xl এ SVG এর dot এটার কাজ করে */}
                        <span className='absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-[qa-dot_5s_linear_infinite] rounded-full bg-accent-strong shadow-[0_0_12px_4px_var(--color-rail)]' />
                    </span>

                    {/* xl এর বাঁকা পথ */}
                    <svg
                        className='absolute inset-0 hidden h-full w-full text-accent-strong xl:block'
                        viewBox='0 0 190 620'
                        preserveAspectRatio='none'
                        aria-hidden='true'>
                        <path
                            id='qaFlowPath'
                            d='M118 40 C 30 130, 190 190, 96 300 C 10 400, 165 470, 92 600'
                            fill='none'
                            stroke='currentColor'
                            strokeOpacity='0.4'
                            strokeWidth='2'
                            strokeDasharray='5 9'
                            strokeLinecap='round'>
                            <animate
                                attributeName='stroke-dashoffset'
                                from='14'
                                to='0'
                                dur='1.2s'
                                repeatCount='indefinite'
                            />
                        </path>

                        <circle
                            r='4'
                            fill='currentColor'>
                            <animateMotion
                                dur='5s'
                                repeatCount='indefinite'>
                                <mpath href='#qaFlowPath' />
                            </animateMotion>
                            <animate
                                attributeName='opacity'
                                values='0;1;1;0'
                                keyTimes='0;0.08;0.92;1'
                                dur='5s'
                                repeatCount='indefinite'
                            />
                        </circle>
                    </svg>

                    <div className='relative flex flex-col gap-4 pl-10 sm:pl-12 xl:h-full xl:justify-between xl:gap-0 xl:py-2 xl:pl-0'>
                        {heroChecks.map((check, i) => {
                            const Icon = check.icon;
                            const tone = CHECK_TONES[check.tone] ?? CHECK_TONES.pass;

                            return (
                                <div
                                    key={check.title}
                                    className={`group relative rounded-2xl border border-accent-line bg-raised px-4 py-3 shadow-lg shadow-accent-tint backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-strong/40 xl:w-fit ${
                                        i % 2 === 0 ? 'xl:translate-x-6' : ''
                                    }`}>
                                    {/* রেলের উপরের নোড — কার্ডের রঙ ধরে রাখে */}
                                    <span className={`absolute -left-[30px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ring-4 sm:-left-[34px] xl:hidden ${tone.node}`}>
                                        <span
                                            style={{
                                                animationDelay: `${i * 400}ms`,
                                                '--color-pulse-from': `color-mix(in srgb, var(${tone.cssVar}) 50%, transparent)`,
                                                '--color-pulse-to': `color-mix(in srgb, var(${tone.cssVar}) 0%, transparent)`,
                                            }}
                                            className='absolute inset-0 animate-[node-pulse_2.4s_ease-in-out_infinite] rounded-full'
                                        />
                                    </span>

                                    <div className='flex items-center gap-3'>
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${tone.tile}`}>
                                            <Icon size={18} />
                                        </span>

                                        <div className='leading-tight'>
                                            <p className='text-sm font-semibold text-heading'>{check.title}</p>
                                            <p className='mt-0.5 text-xs text-muted'>{check.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* ---------------- Right: QA dashboard ---------------- */}
                <div className='rounded-[1.75rem] border border-accent-line bg-glass p-3 shadow-2xl shadow-accent-tint backdrop-blur-sm sm:p-4 md:p-6 xl:flex xl:flex-col xl:justify-center'>
                    {/* Header */}
                    <div className='flex items-center gap-4'>
                        <span className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-line bg-accent-tint'>
                            <ShieldCheck
                                size={26}
                                className='text-accent'
                            />
                        </span>

                        <div>
                            <h2 className='text-lg font-bold uppercase tracking-[0.06em] text-heading sm:text-xl md:text-2xl'>{heroDashboard.title}</h2>
                            <p className='mt-1 text-sm text-muted'>{heroQuote}</p>
                        </div>
                    </div>

                    {/* Panel: strengths + tools */}
                    <div
                        ref={strengthsRef}
                        className='mt-6 rounded-2xl border border-hairline bg-inset p-4 md:p-6'>
                        <h3 className='text-xs font-semibold uppercase tracking-[0.14em] text-accent'>{heroDashboard.strengthsTitle}</h3>

                        <div className='mt-5 space-y-5'>
                            {coreStrengths.map(({ name: strength, level, icon: Icon }, i) => (
                                <div
                                    key={strength}
                                    className='group flex items-center gap-4'>
                                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline bg-tile text-accent transition-colors duration-300 group-hover:border-accent-line'>
                                        <Icon size={18} />
                                    </span>

                                    <div className='min-w-0 flex-1'>
                                        <div className='mb-2 flex items-baseline justify-between gap-3'>
                                            <span className='truncate text-sm font-medium text-heading'>{strength}</span>
                                            <span className='shrink-0 text-sm font-semibold text-body'>{level}%</span>
                                        </div>

                                        <div className='h-1.5 overflow-hidden rounded-full bg-line'>
                                            <div
                                                style={{
                                                    width: barsVisible ? `${level}%` : '0%',
                                                    transitionDelay: `${i * 140}ms`,
                                                }}
                                                className='relative h-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 shadow-[0_0_10px_var(--color-accent-line)] transition-[width] duration-[1100ms] ease-out dark:from-cyan-400 dark:to-blue-500'>
                                                <span className='absolute inset-0 animate-[bar-shimmer_2.4s_ease-in-out_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tools */}
                        <h3 className='mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-accent'>{heroDashboard.toolsTitle}</h3>

                        <div className='mt-4 flex flex-wrap gap-3'>
                            {testingTools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className='flex items-center gap-2.5 rounded-xl border border-line bg-slab px-4 py-3 text-sm text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:text-accent'>
                                    {tool.logo ? (
                                        <img
                                            src={tool.logo}
                                            alt=''
                                            className='h-5 w-5 shrink-0 object-contain'
                                        />
                                    ) : (
                                        <Code2
                                            size={18}
                                            className='shrink-0 text-accent'
                                        />
                                    )}
                                    {tool.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
