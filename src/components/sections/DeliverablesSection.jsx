import { FileSpreadsheet } from "lucide-react";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import { portfolio } from "../../data/portfolioData";

export default function DeliverablesSection() {
  return (
    <Section id="deliverables" className="bg-panel">
      <SectionTitle
        eyebrow="Deliverables"
        title="QA Outputs I Can Prepare"
        description="Useful documentation and testing assets that help product, development, and client teams understand quality status clearly."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.deliverables.map((item) => (
          <div key={item} className="flex min-w-0 items-center gap-3 rounded-2xl border border-line bg-well p-4">
            <FileSpreadsheet className="shrink-0 text-accent" size={20} />
            <span className="min-w-0 break-words">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
