import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import IconCard from "../common/IconCard";
import { portfolio } from "../../data/portfolioData";

export default function QAProcessSection() {
  return (
    <Section id="process" className="bg-slate-900/50">
      <SectionTitle
        eyebrow="QA Workflow"
        title="How I Approach Quality"
        description="A clear testing workflow that helps reduce release risk, improve team communication, and keep defects traceable from discovery to closure."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.qaProcess.map((item) => (
          <IconCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
