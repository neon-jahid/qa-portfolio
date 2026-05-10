import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import SkillsSection from "../components/sections/SkillsSection";
import QAProcessSection from "../components/sections/QAProcessSection";
import AutomationSection from "../components/sections/AutomationSection";
import DeliverablesSection from "../components/sections/DeliverablesSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SkillsSection />
      <QAProcessSection />
      <AutomationSection />
      <DeliverablesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}
