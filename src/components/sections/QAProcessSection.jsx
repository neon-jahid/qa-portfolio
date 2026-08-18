import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import IconCard from '../common/IconCard';
import Reveal from '../common/Reveal';
import { portfolio } from '../../data/portfolioData';

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

            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
                {portfolio.qaProcess.map((item, i) => (
                    <Reveal
                        key={item.title}
                        delay={i * 70}
                        className='h-full'>
                        <IconCard {...item} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
