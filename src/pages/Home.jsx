import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/sections/HeroSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import SkillsSection from '../components/sections/SkillsSection';
import QAProcessSection from '../components/sections/QAProcessSection';
import AutomationSection from '../components/sections/AutomationSection';
import WorkSection from '../components/sections/WorkSection';
import ContactSection from '../components/sections/ContactSection';

/* ============================================================================
 * HOME — the single page, in scroll order.
 *
 * Every section below is a thin composer: it pulls its copy from its own data
 * module and hands it to the small parts that live in its own folder
 * (e.g. HeroSection -> data/hero.js + components/sections/hero/*). So:
 *   change wording or data  -> the matching file in src/data/ (see data/portfolioData.js)
 *   change a section layout -> that section's file
 *   change one piece of UI  -> the matching file in the section's folder
 *
 * The nav order in src/data/navigation.js must match the ids used here.
 * ==========================================================================*/

export default function Home() {
    return (
        <MainLayout>
            <HeroSection />
            <ExpertiseSection />
            <SkillsSection />
            <QAProcessSection />
            <AutomationSection />
            <WorkSection />
            <ContactSection />
        </MainLayout>
    );
}
