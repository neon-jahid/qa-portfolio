import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Pill from "../common/Pill";
import { portfolio } from "../../data/portfolioData";

export default function AutomationSection() {
  return (
    <Section id="automation">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="Automation"
            title="Playwright Automation Focus"
            description="I use automation to support repeatable regression checks, high-risk flows, authentication scenarios, and faster release validation."
          />
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 sm:p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Automation Areas</h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.automationFocus.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 sm:p-6">
          <div className="rounded-3xl bg-slate-950 p-4 font-mono text-xs text-slate-300 sm:p-6 sm:text-sm">
            <p className="text-cyan-300">// Sample automation structure</p>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words">{`tests/
  auth/
    login.spec.js
  pages/
    LoginPage.js
  fixtures/
    users.js
  utils/
    testData.js

Focus:
- reusable selectors
- clear assertions
- stable test data
- regression-ready scenarios`}</pre>
          </div>
        </div>
      </div>
    </Section>
  );
}
