import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import { toneAt } from '../../lib/tones';
import { portfolio } from '../../data/portfolioData';

const step = (i) => String(i + 1).padStart(2, '0');

export default function QAProcessSection() {
    return (
        <Section
            id='process'
            className='bg-panel'>
            <SectionTitle
                eyebrow='QA Workflow'
                title='How I Approach Quality'
                description='A clear testing workflow that helps reduce release risk, improve team communication, and keep defects traceable from discovery to closure.'
            />

            {/* One markup, two layouts: a numbered timeline on phones (rail +
                borderless rows, so six stacked cards do not read as a wall of
                boxes) and a card grid from sm up. */}
            <div className='relative'>
                <span
                    aria-hidden='true'
                    className='absolute bottom-8 left-5 top-8 w-px bg-line sm:hidden'
                />

                <div className='grid gap-7 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
                    {portfolio.qaProcess.map((item, i) => {
                        const tone = toneAt(i);
                        const Icon = item.icon;

                        return (
                            <Reveal
                                key={item.title}
                                delay={i * 70}
                                className='h-full'>
                                <div
                                    className={`group relative h-full pl-[3.75rem] transition-all duration-300 sm:rounded-3xl sm:border sm:border-line sm:bg-card sm:p-6 sm:pl-6 sm:hover:-translate-y-1 sm:hover:bg-card-hover sm:hover:shadow-lg ${tone.glow} ${tone.hoverBorder}`}>
                                    {/* Sits on the rail below sm, flows inside the card above it */}
                                    <span
                                        className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 sm:static sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl ${tone.tile}`}>
                                        <Icon size={20} />
                                    </span>

                                    <h3 className='flex items-baseline gap-2 text-lg font-bold text-heading sm:text-xl'>
                                        <span className={`font-mono text-xs font-semibold ${tone.text}`}>{step(i)}</span>
                                        {item.title}
                                    </h3>

                                    <p className='mt-2 text-sm leading-6 text-body sm:mt-3'>{item.description}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
