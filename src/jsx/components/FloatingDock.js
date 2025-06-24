import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'hero', icon: FaUser, label: 'About' },
  { id: 'experience', icon: FaBriefcase, label: 'Experience' },
  { id: 'education', icon: FaGraduationCap, label: 'Education' },
  { id: 'skills', icon: FaCode, label: 'Skills' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
];

const FloatingDock = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed md:left-4 md:top-1/2 md:transform md:-translate-y-1/2 left-0 bottom-0 w-full md:w-auto z-50">
      <div className="flex md:flex-col flex-row gap-4 bg-black bg-opacity-20 backdrop-blur-lg p-3 md:rounded-full rounded-none justify-around md:justify-start w-full md:w-auto md:border md:border-solid md:[border-color:rgb(252_211_77/1)]">
        {sections.map(({ id, icon: Icon, label }) => (
          <Link
            key={id}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer group relative
              ${activeSection === id 
                ? 'bg-accent-yellow text-primary' 
                : 'text-white hover:bg-accent-yellow hover:bg-opacity-10'}`}
          >
            <Icon className="text-xl transition-transform group-hover:scale-110" />
            <span className="absolute md:left-full md:ml-2 md:right-auto -top-full md:top-auto md:bottom-auto bottom-full mb-2 md:mb-0 px-2 py-1 bg-black bg-opacity-80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FloatingDock; 