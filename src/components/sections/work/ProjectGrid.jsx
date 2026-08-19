import ProjectCard from '../../common/ProjectCard';
import Reveal from '../../common/Reveal';

/* ============================================================================
 * WORK — SELECTED PROJECTS
 * The card itself is shared (common/ProjectCard); this only lays them out and
 * staggers the reveal.
 * ==========================================================================*/

export default function ProjectGrid({ projects }) {
    return (
        <div className='grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
            {projects.map((project, i) => (
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
    );
}
