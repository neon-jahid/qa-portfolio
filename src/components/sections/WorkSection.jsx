import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './work/ExperienceCard';
import ProjectGrid from './work/ProjectGrid';
import { toneAt } from '../../lib/tones';
import { portfolio } from '../../data/portfolioData';

/* ============================================================================
 * SECTION: WORK (#work) — "Where I Have Proven It"
 *
 * Two blocks, top to bottom:
 *   work/ExperienceCard — one card per role (header + achievement bullets)
 *   work/ProjectGrid    — the selected-projects card grid
 * ==========================================================================*/

export default function WorkSection() {
    return (
        <Section id='work'>
            <SectionTitle
                eyebrow='Experience & Projects'
                title='Where I Have Proven It'
                description='QA ownership across telecom, e-commerce, ticketing, SaaS, and CMS platforms — from test design through to release sign-off.'
            />

            {/* ---- Roles ---- */}
            {portfolio.experience.map((job, i) => (
                <ExperienceCard
                    key={job.company}
                    job={job}
                    tone={toneAt(i)}
                />
            ))}

            {/* ---- Projects ---- */}
            <h3 className='mb-6 mt-14 text-xl font-bold text-heading sm:text-2xl'>Selected Projects</h3>

            <ProjectGrid projects={portfolio.projects} />
        </Section>
    );
}
