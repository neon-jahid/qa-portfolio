import { CheckCircle2, Code2 } from "lucide-react";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Pill from "../common/Pill";
import { portfolio } from "../../data/portfolioData";

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Capabilities"
        title="Core QA Competencies"
        description="A practical quality engineering skill set covering manual testing, automation, documentation, defect lifecycle, and cross-functional delivery."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.competencies.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <CheckCircle2 className="shrink-0 text-cyan-300" size={20} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(portfolio.skills).map(([group, items]) => (
          <div key={group} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="mb-4 flex items-center gap-3">
              <Code2 className="text-cyan-300" />
              <h3 className="text-xl font-bold text-white">{group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
