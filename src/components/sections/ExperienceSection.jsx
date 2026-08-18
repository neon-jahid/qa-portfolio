import { Briefcase } from "lucide-react";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import { portfolio } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionTitle eyebrow="Experience" title="Professional Experience" />

      {portfolio.experience.map((job) => (
        <div key={job.company} className="rounded-3xl border border-line bg-slab p-4 sm:p-6 md:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-heading sm:text-2xl">{job.title}</h3>
              <p className="mt-1 text-accent">
                {job.company} • {job.location}
              </p>
            </div>
            <span className="h-fit rounded-full bg-accent-tint px-4 py-2 text-sm font-semibold text-accent">
              {job.period}
            </span>
          </div>

          <ul className="grid gap-3 text-body md:grid-cols-2">
            {job.points.map((point) => (
              <li key={point} className="flex gap-3">
                <Briefcase className="mt-1 shrink-0 text-accent" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
