import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { portfolio } from "../../data/portfolioData";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-slate-900/50">
      <SectionTitle
        eyebrow="Selected Work"
        title="Key QA Projects"
        description="Projects from telecom, product catalog, ticketing, SaaS, API, and CMS audit domains."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
