import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope } from 'react-icons/fa';
import HeroSection from './jsx/components/HeroSection';
import ExperienceSection from './jsx/components/ExperienceSection';
import EducationSection from './jsx/components/EducationSection';
import TechnicalSkills from './jsx/components/TechnicalSkills';
import ContactSection from './jsx/components/ContactSection';
import FloatingDock from './jsx/components/FloatingDock';

const sections = [
  { id: 'hero', icon: FaUser, label: 'About' },
  { id: 'experience', icon: FaBriefcase, label: 'Experience' },
  { id: 'education', icon: FaGraduationCap, label: 'Education' },
  { id: 'skills', icon: FaCode, label: 'Skills' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
];

function App() {
  return (
    <div className="min-h-screen bg-primary text-white font-sans">
      <FloatingDock sections={sections} />
      <main className="relative">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary to-secondary pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <TechnicalSkills />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App; 