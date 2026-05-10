import { Mail, Phone, MapPin } from 'lucide-react';
import { portfolio } from '../../data/portfolioData';

function GitHubIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path d='M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.76-.24.76-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.96 2.64 2.95 1.87.1-.73.39-1.23.71-1.51-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.14c0 .3.2.65.77.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5Z' />
        </svg>
    );
}

function LinkedInIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
    );
}

export default function ContactSection() {
    return (
        <section
            id='contact'
            className='px-6 py-20'>
            <div className='mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center md:p-12'>
                <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400'>Contact</p>
                <h2 className='text-3xl font-bold text-white md:text-5xl'>Let’s build reliable products.</h2>
                <p className='mx-auto mt-4 max-w-2xl text-slate-300'>Open to SQA, QA Automation, and QA process improvement opportunities.</p>

                <div className='mt-8 flex flex-wrap justify-center gap-4'>
                    <a
                        href={`mailto:${portfolio.email}`}
                        className='inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300'>
                        <Mail size={18} /> Email
                    </a>
                    <a
                        href={`tel:${portfolio.phone}`}
                        className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10'>
                        <Phone size={18} /> Call
                    </a>
                    <a
                        href={portfolio.github}
                        className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10'>
                        <GitHubIcon size={18} /> GitHub
                    </a>
                    <a
                        href={portfolio.linkedin}
                        className='inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10'>
                        <LinkedInIcon size={18} /> LinkedIn
                    </a>
                </div>

                <p className='mt-8 inline-flex items-center gap-2 text-slate-400'>
                    <MapPin size={18} /> {portfolio.location}
                </p>
            </div>
        </section>
    );
}
