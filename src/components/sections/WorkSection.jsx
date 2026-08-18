import { Briefcase } from 'lucide-react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import Reveal from '../common/Reveal';
import { portfolio } from '../../data/portfolioData';

export default function WorkSection() {
    return (
        <Section id='work'>
            <SectionTitle
                eyebrow='Experience & Projects'
                title='Where I Have Proven It'
                description='QA ownership across telecom, e-commerce, ticketing, SaaS, and CMS platforms — from test design through to release sign-off.'
            />

            {portfolio.experience.map((job) => (
                <div
                    key={job.company}
                    className='rounded-3xl border border-line bg-slab p-4 sm:p-6 md:p-8'>
                    <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row'>
                        <div>
                            <h3 className='text-xl font-bold text-heading sm:text-2xl'>{job.title}</h3>
                            <p className='mt-1 text-accent'>
                                {job.company} • {job.location}
                            </p>
                        </div>
                        <span className='h-fit rounded-full bg-accent-tint px-4 py-2 text-sm font-semibold text-accent'>{job.period}</span>
                    </div>

                    <ul className='grid gap-3 text-body md:grid-cols-2'>
                        {job.points.map((point) => (
                            <li
                                key={point}
                                className='flex gap-3'>
                                <Briefcase
                                    className='mt-1 shrink-0 text-accent'
                                    size={18}
                                />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <h3 className='mb-6 mt-14 text-xl font-bold text-heading sm:text-2xl'>Selected Projects</h3>

            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
                {portfolio.projects.map((project, i) => (
                    <Reveal
                        key={project.name}
                        delay={i * 70}
                        className='h-full'>
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
