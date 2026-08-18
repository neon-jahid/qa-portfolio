import { TestTube2, Braces, Layers3, FileText, Wrench, LayoutDashboard } from 'lucide-react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Pill from '../common/Pill';
import Reveal from '../common/Reveal';
import { portfolio } from '../../data/portfolioData';

const GROUP_ICONS = {
    'Testing Tools': TestTube2,
    Languages: Braces,
    Frameworks: Layers3,
    Documentation: FileText,
    'Project Tools': Wrench,
    CMS: LayoutDashboard,
};

export default function SkillsSection() {
    return (
        <Section id='skills'>
            <SectionTitle
                eyebrow='Toolkit'
                title='Tools & Tech Stack'
                description='The tools I test with and the stack I test against — from Playwright and Postman through to the React, Next.js, and CMS-driven platforms under test.'
            />

            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {Object.entries(portfolio.skills).map(([group, items], i) => {
                    const Icon = GROUP_ICONS[group];

                    return (
                        <Reveal
                            key={group}
                            delay={i * 70}
                            className='group rounded-3xl border border-line bg-slab p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-line hover:bg-slab-hover hover:shadow-lg hover:shadow-accent-tint sm:p-6'>
                            <div className='mb-4 flex items-center gap-3'>
                                <Icon className='text-accent transition-all duration-300 ease-out group-hover:rotate-3 group-hover:scale-110' />
                                <h3 className='text-xl font-bold text-heading'>{group}</h3>
                            </div>

                            <div className='flex flex-wrap gap-2'>
                                {items.map((skill) => (
                                    <Pill key={skill}>{skill}</Pill>
                                ))}
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
