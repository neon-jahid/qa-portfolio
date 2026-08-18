import { CheckCircle2, TestTube2, Braces, Layers3, FileText, Wrench, LayoutDashboard } from 'lucide-react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Pill from '../common/Pill';
import { portfolio } from '../../data/portfolioData';

export default function SkillsSection() {
    const skillIcons = {
        'Testing Tools': TestTube2,
        Languages: Braces,
        Frameworks: Layers3,
        Documentation: FileText,
        'Project Tools': Wrench,
        CMS: LayoutDashboard,
    };

    return (
        <Section id='skills'>
            <SectionTitle
                eyebrow='Capabilities'
                title='Core QA Competencies'
                description='A practical quality engineering skill set covering manual testing, automation, documentation, defect lifecycle, and cross-functional delivery.'
            />

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {portfolio.competencies.map((item) => (
                    <div
                        key={item}
                        className='flex items-center gap-3 rounded-2xl border border-line bg-card p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-accent-line hover:bg-card-hover hover:shadow-lg hover:shadow-accent-tint'>
                        <CheckCircle2
                            className='shrink-0 text-accent transition-transform duration-300 group-hover:scale-110'
                            size={20}
                        />
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            <div className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {Object.entries(portfolio.skills).map(([group, items]) => {
                    const Icon = skillIcons[group];

                    return (
                        <div
                            key={group}
                            className='group rounded-3xl border border-line bg-slab p-4 sm:p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-accent-line
                hover:bg-slab-hover
                hover:shadow-lg
                hover:shadow-accent-tint'>
                            <div className='mb-4 flex items-center gap-3'>
                                <Icon
                                    className='text-accent transition-all duration-300 ease-out
                        group-hover:scale-110
                        group-hover:rotate-3'
                                />
                                <h3 className='text-xl font-bold text-heading'>{group}</h3>
                            </div>

                            <div className='flex flex-wrap gap-2'>
                                {items.map((skill) => (
                                    <Pill key={skill}>{skill}</Pill>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
