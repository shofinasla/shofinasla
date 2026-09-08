import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';
import { initialProfile, initialProjects, initialSkillCategories, initialExperience } from './data/defaultProfile';
import { ProfileData } from './types';

export function App() {
  const [profile] = useState<ProfileData>(initialProfile);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      
      {/* Navbar Header */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero
          profile={profile}
          onNavigate={scrollToSection}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <ProjectShowcase projects={initialProjects} />

        <SkillsSection categories={initialSkillCategories} />

        <ExperienceSection experience={initialExperience} />

        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Terminal Drawer/Widget */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        profile={profile}
        projects={initialProjects}
        skills={initialSkillCategories}
      />

      {/* Developer Resume & Bio Modal (Read-Only) */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        projects={initialProjects}
        skills={initialSkillCategories}
        experience={initialExperience}
      />

    </div>
  );
}

export default App;
