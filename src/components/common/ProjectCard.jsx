import { ClipboardCheck, ExternalLink } from "lucide-react";
import Pill from "./Pill";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-3xl border border-line bg-card p-4 transition hover:-translate-y-1 hover:bg-card-hover sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <ClipboardCheck className="text-accent" size={30} />
        <ExternalLink className="text-faint transition group-hover:text-accent" size={20} />
      </div>
      <h3 className="text-xl font-bold text-heading sm:text-2xl">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{project.type}</p>
      <p className="mt-3 text-body">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
      <p className="mt-5 text-sm text-faint">{project.period}</p>
    </article>
  );
}
