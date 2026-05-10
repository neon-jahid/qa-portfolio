import { ClipboardCheck, ExternalLink } from "lucide-react";
import Pill from "./Pill";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <ClipboardCheck className="text-cyan-300" size={30} />
        <ExternalLink className="text-slate-500 transition group-hover:text-cyan-300" size={20} />
      </div>
      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-300">{project.type}</p>
      <p className="mt-3 text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-500">{project.period}</p>
    </article>
  );
}
