import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { portfolio } from "../../data/portfolioData";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-panel">
      <SectionTitle
        eyebrow="Selected Work"
        title="Key QA Projects"
        description="Projects from telecom, product catalog, ticketing, SaaS, API, and CMS audit domains."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
