import { Download, Gauge } from 'lucide-react';
import Container from '../common/Container';
import StatGrid from '../common/StatGrid';
import { portfolio } from '../../data/portfolioData';

export default function HeroSection() {

    return (
        <section
            id='home'
            className='relative overflow-hidden py-24 md:py-32'>
            <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]' />
            <Container className='grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]'>
                <div>
                    <p className='mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200'>{portfolio.availability}</p>
                    <h1 className='text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl'>
                        {portfolio.name}
                        <span className='block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent'>{portfolio.role}</span>
                    </h1>
                    <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>{portfolio.heroTagline}</p>
                    <div className='mt-8 flex flex-wrap gap-4'>
                        <a
                            href='#contact'
                            className='rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300'>
                            Contact Me
                        </a>
                        <a
                            href={portfolio.resumeUrl}
                            className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/10'>
                            <Download size={18} /> Download CV
                        </a>
                    </div>
                </div>

                <div className='rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/40'>
                    <div className='rounded-[1.5rem] bg-slate-900 p-6'>
                        <div className='mb-6 flex h-28 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600'>
                            <Gauge
                                size={48}
                                className='text-white'
                            />
                        </div>
                        <h3 className='text-2xl font-bold text-white'>QA Profile</h3>
                        <p className='mt-3 text-slate-300'>{portfolio.summary}</p>
                        <div className='mt-6'>
                            <StatGrid stats={portfolio.stats} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
