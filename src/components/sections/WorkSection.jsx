import { Building2, MapPin } from 'lucide-react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import Reveal from '../common/Reveal';
import { toneAt } from '../../lib/tones';
import { portfolio } from '../../data/portfolioData';

export default function WorkSection() {
    return (
        <Section id='work'>
            <SectionTitle
                eyebrow='Experience & Projects'
                title='Where I Have Proven It'
                description='QA ownership across telecom, e-commerce, ticketing, SaaS, and CMS platforms — from test design through to release sign-off.'
            />

            {portfolio.experience.map((job, j) => {
                const tone = toneAt(j);

                return (
                    <div
                        key={job.company}
                        className='relative overflow-hidden rounded-3xl border border-line bg-slab p-5 sm:p-6 md:p-8'>
                        {/* Full-height tone rail down the left edge */}
                        <span
                            aria-hidden='true'
                            className={`absolute inset-y-0 left-0 w-1 ${tone.bar}`}
                        />
                        <span
                            aria-hidden='true'
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-70 ${tone.wash}`}
                        />

                        <div className='relative'>
                            <div className='mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start'>
                                <div className='flex items-start gap-4'>
                                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${tone.tile}`}>
                                        <Building2 size={22} />
                                    </span>

                                    <div>
                                        <h3 className='text-xl font-bold text-heading sm:text-2xl'>{job.title}</h3>
                                        <p className={`mt-1 font-semibold ${tone.text}`}>{job.company}</p>
                                        <p className='mt-1 inline-flex items-center gap-1.5 text-sm text-muted'>
                                            <MapPin size={14} /> {job.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Live indicator — this role is current */}
                                <span className={`inline-flex h-fit shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${tone.chip}`}>
                                    <span className='relative flex h-2 w-2'>
                                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${tone.bar}`} />
                                        <span className={`relative inline-flex h-2 w-2 rounded-full ${tone.bar}`} />
                                    </span>
                                    {job.period}
                                </span>
                            </div>

                            {/* Each achievement gets its own tone marker */}
                            <ul className='grid gap-3 md:grid-cols-2'>
                                {job.points.map((point, i) => {
                                    const pointTone = toneAt(i);

                                    return (
                                        <li
                                            key={point}
                                            className='flex gap-3 rounded-2xl border border-hairline bg-inset p-3 text-sm leading-6 text-body transition-colors duration-300 hover:bg-card-hover'>
                                            <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ${pointTone.node}`} />
                                            <span>{point}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}

            <h3 className='mb-6 mt-14 text-xl font-bold text-heading sm:text-2xl'>Selected Projects</h3>

            <div className='grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
                {portfolio.projects.map((project, i) => (
                    <Reveal
                        key={project.name}
                        delay={i * 70}
                        className='h-full'>
                        <ProjectCard
                            project={project}
                            index={i}
                        />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
