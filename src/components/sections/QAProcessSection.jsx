import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import IconCard from "../common/IconCard";
import { portfolio } from "../../data/portfolioData";

export default function QAProcessSection() {
  return (
    <Section id="process" className="bg-panel">
      <SectionTitle
        eyebrow="QA Workflow"
        title="How I Approach Quality"
        description="A clear testing workflow that helps reduce release risk, improve team communication, and keep defects traceable from discovery to closure."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {portfolio.qaProcess.map((item) => (
          <IconCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
