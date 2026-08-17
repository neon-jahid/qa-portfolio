import { ArrowRight, Calendar, CheckCircle2, ClipboardCheck, Code2, Download, FolderCheck, FolderKanban, Monitor, RefreshCw, Settings, ShieldCheck, Users, Wrench } from 'lucide-react';
import Container from '../common/Container';
import StatGrid from '../common/StatGrid';
import { portfolio } from '../../data/portfolioData';

const STRENGTH_ICONS = {
    manual: ClipboardCheck,
    automation: Settings,
    api: Code2,
    regression: RefreshCw,
};

const HIGHLIGHT_ICONS = {
    monitor: Monitor,
    folder: FolderCheck,
    tools: Wrench,
    calendar: Calendar,
    projects: FolderKanban,
};

const FALLBACK_STRENGTHS = [
    { name: 'Manual Testing', level: 90, icon: 'manual' },
    { name: 'Automation Testing', level: 80, icon: 'automation' },
    { name: 'API Testing', level: 85, icon: 'api' },
    { name: 'Regression Testing', level: 90, icon: 'regression' },
];

const FALLBACK_TOOLS = [{ name: 'Playwright' }, { name: 'Postman' }, { name: 'Chrome DevTools' }];

const FALLBACK_CHECKS = [
    { title: 'Test Passed', subtitle: 'All systems' },
    { title: 'API Validated', subtitle: '200 OK' },
    { title: 'Regression Complete', subtitle: 'No critical bugs' },
    { title: 'Automation Ready', subtitle: 'Tests running' },
];

const FALLBACK_HIGHLIGHTS = [
    { title: 'Web QA', subtitle: 'Primary Focus', icon: 'monitor' },
    { title: '5+ Projects', subtitle: 'Completed', icon: 'folder' },
];

export default function HeroSection() {
    const coreStrengths = portfolio.coreStrengths?.length ? portfolio.coreStrengths : FALLBACK_STRENGTHS;
    const testingTools = portfolio.testingTools?.length ? portfolio.testingTools : FALLBACK_TOOLS;
    const heroChecks = portfolio.heroChecks?.length ? portfolio.heroChecks : FALLBACK_CHECKS;
    const heroHighlights = portfolio.heroHighlights?.length ? portfolio.heroHighlights : FALLBACK_HIGHLIGHTS;

    return (
        <section
            id='home'
            className='relative overflow-hidden bg-slate-950 py-14 md:py-20 lg:py-24'>
            {/* Ambient glow */}
            <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_10%_85%,rgba(59,130,246,0.12),transparent_45%)]' />

            {/* Circuit-style grid fading in from the bottom */}
            <div className='pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-80 bg-[linear-gradient(to_right,rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:linear-gradient(to_top,black,transparent_85%)]' />

            <Container className='grid items-center gap-12 xl:grid-cols-[1fr_190px_1.05fr] xl:gap-8'>
                {/* ---------------- Left: intro ---------------- */}
                <div>
                    <p className='mb-6 inline-flex items-center gap-2.5 rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300'>
                        <span className='relative flex h-2 w-2'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70' />
                            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
                        </span>
                        {portfolio.availability}
                    </p>

                    <h1 className='text-4xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-[3rem]'>
                        <span className='block text-white'>{portfolio.name}</span>

                        <span className='mt-3 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>{portfolio.role}</span>
                    </h1>

                    <p className='mt-6 max-w-xl text-base leading-8 text-slate-400'>{portfolio.heroTagline}</p>

                    {/* CTAs */}
                    <div className='mt-8 flex flex-wrap gap-4'>
                        <a
                            href='#contact'
                            className='group inline-flex items-center gap-2.5 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300'>
                            <Users size={18} />
                            Let's Work Together
                            <ArrowRight
                                size={18}
                                className='transition-transform duration-300 group-hover:translate-x-1'
                            />
                        </a>

                        <a
                            href={portfolio.resumeUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300'>
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>

                    {/* Stats bar */}
                    <StatGrid
                        stats={portfolio.stats}
                        variant='bar'
                        className='mt-10'
                    />
                </div>

                {/* ---------------- Middle: QA checks ----------------
                    Mobile / tablet : 2-column grid of compact cards
                    xl and up       : vertical column following a dashed curve  */}
                <div className='relative xl:self-stretch'>
                    {/* Dashed curve is xl-only — it needs the tall narrow column to make sense */}
                    <svg
                        className='absolute inset-0 hidden h-full w-full xl:block'
                        viewBox='0 0 190 620'
                        preserveAspectRatio='none'
                        aria-hidden='true'>
                        <path
                            id='qaFlowPath'
                            d='M118 40 C 30 130, 190 190, 96 300 C 10 400, 165 470, 92 600'
                            fill='none'
                            stroke='rgba(34,211,238,0.35)'
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

                        {/* পথ ধরে ছুটে চলা পালস */}
                        <circle
                            r='4'
                            fill='rgb(34,211,238)'>
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

                        {/* দ্বিতীয় পালস, একটু দেরিতে শুরু */}
                        <circle
                            r='2.5'
                            fill='rgba(34,211,238,0.6)'>
                            <animateMotion
                                dur='5s'
                                begin='2.5s'
                                repeatCount='indefinite'>
                                <mpath href='#qaFlowPath' />
                            </animateMotion>
                            <animate
                                attributeName='opacity'
                                values='0;1;1;0'
                                keyTimes='0;0.08;0.92;1'
                                dur='5s'
                                begin='2.5s'
                                repeatCount='indefinite'
                            />
                        </circle>
                    </svg>

                    <div className='relative grid grid-cols-2 gap-3 sm:grid-cols-4 xl:flex xl:h-full xl:flex-col xl:justify-between xl:gap-0 xl:py-2'>
                        {heroChecks.slice(0, 4).map((check, i) => (
                            <div
                                key={check.title}
                                className={`rounded-2xl border border-cyan-400/15 bg-slate-900/80 px-4 py-3 shadow-lg shadow-cyan-950/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 xl:w-fit ${i % 2 === 0 ? 'xl:translate-x-6' : ''}`}>
                                <div className='flex items-center gap-3'>
                                    <CheckCircle2
                                        size={20}
                                        className='shrink-0 text-cyan-300'
                                    />

                                    <div className='leading-tight'>
                                        <p className='text-sm font-semibold text-white'>{check.title}</p>
                                        <p className='mt-0.5 text-xs text-slate-400'>{check.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------------- Right: QA dashboard ---------------- */}
                <div className='rounded-[1.75rem] border border-cyan-400/15 bg-slate-900/40 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm md:p-6'>
                    {/* Header */}
                    <div className='flex items-start justify-between gap-4'>
                        <div className='flex items-center gap-4'>
                            <span className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10'>
                                <ShieldCheck
                                    size={26}
                                    className='text-cyan-300'
                                />
                            </span>

                            <div>
                                <h2 className='text-xl font-bold uppercase tracking-[0.06em] text-white md:text-2xl'>QA Engineering</h2>
                                <p className='mt-1 text-sm text-slate-400'>{portfolio.heroQuote || "Quality is not an act, it's a habit."}</p>
                            </div>
                        </div>

                        <div className='flex shrink-0 gap-1.5 pt-2'>
                            <span className='h-1.5 w-1.5 rounded-full bg-slate-600' />
                            <span className='h-1.5 w-1.5 rounded-full bg-slate-600' />
                            <span className='h-1.5 w-1.5 rounded-full bg-slate-600' />
                        </div>
                    </div>

                    {/* Panel: strengths + tools */}
                    <div className='mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 md:p-6'>
                        <h3 className='text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300'>Core Strengths</h3>

                        <div className='mt-5 space-y-5'>
                            {coreStrengths.map((item) => {
                                const Icon = STRENGTH_ICONS[item.icon] || ClipboardCheck;

                                return (
                                    <div
                                        key={item.name}
                                        className='group flex items-center gap-4'>
                                        <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-slate-800/60 text-cyan-300'>
                                            <Icon size={18} />
                                        </span>

                                        <div className='min-w-0 flex-1'>
                                            <div className='mb-2 flex items-baseline justify-between gap-3'>
                                                <span className='truncate text-sm font-medium text-slate-100'>{item.name}</span>
                                                <span className='shrink-0 text-sm font-semibold text-slate-300'>{item.level}%</span>
                                            </div>

                                            <div className='h-1.5 overflow-hidden rounded-full bg-white/[0.08]'>
                                                <div
                                                    style={{ width: `${item.level}%` }}
                                                    className='h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-[width] duration-700'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Tools */}
                        <h3 className='mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300'>Tools &amp; Technologies</h3>

                        <div className='mt-4 flex flex-wrap gap-3'>
                            {testingTools.slice(0, 3).map((tool) => (
                                <div
                                    key={tool.name}
                                    className='flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-200'>
                                    {tool.logo ? (
                                        <img
                                            src={tool.logo}
                                            alt=''
                                            className='h-5 w-5 shrink-0 object-contain'
                                        />
                                    ) : (
                                        <Code2
                                            size={18}
                                            className='shrink-0 text-cyan-300'
                                        />
                                    )}
                                    {tool.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlight cards */}
                    <div className='mt-5 grid gap-4 sm:grid-cols-2'>
                        {heroHighlights.slice(0, 2).map((card) => {
                            const Icon = HIGHLIGHT_ICONS[card.icon] || Monitor;

                            return (
                                <div
                                    key={card.title}
                                    className='flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-300/25'>
                                    <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-slate-800/60 text-cyan-300'>
                                        <Icon size={20} />
                                    </span>

                                    <div className='leading-tight'>
                                        <p className='text-base font-bold text-white'>{card.title}</p>
                                        <p className='mt-1 text-xs text-slate-400'>{card.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
