import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/sections/HeroSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import SkillsSection from '../components/sections/SkillsSection';
import QAProcessSection from '../components/sections/QAProcessSection';
import AutomationSection from '../components/sections/AutomationSection';
import WorkSection from '../components/sections/WorkSection';
import ContactSection from '../components/sections/ContactSection';

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
