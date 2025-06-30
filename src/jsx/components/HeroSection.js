import React from 'react';
import ProfileCard from './ProfileCard';
import { FaComments, FaDownload } from 'react-icons/fa';

const HeroSection = () => {
  const handleContactClick = () => {
    window.open('https://www.linkedin.com/in/maheshkumar1992/', '_blank', 'noopener,noreferrer');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary px-4 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Profile Card - Now order-1 on mobile to appear at top */}
        <div className="order-1 md:order-1">
          <div className="max-w-[400px] w-full mx-auto">
            <ProfileCard
              name="Mahesh Kumar K P"
              title="FrontEnd Developer"
              handle="maheshkumarkp"
              status="Available for opportunities"
              avatarUrl="/assets/mahesh_PP.png"
              miniAvatarUrl="/assets/mahesh_PP.png"
              iconUrl="/assets/iconpattern.png"
              grainUrl="/assets/grain.webp"
              showBehindGradient={true}
              enableTilt={true}
              contactText="Get in Touch"
              showUserInfo={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>

        {/* Hero Content - Now order-2 on mobile to appear below profile card */}
        <div className="order-2 md:order-2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent">
            Hello, I'm Mahesh
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Passionate frontend developer focused on building impactful solutions with modern tech. Always learning, solving problems, and delivering successful projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 bg-accent-blue hover:bg-opacity-80 rounded-lg font-semibold transition-all text-white flex items-center gap-2"
            >
              <FaComments className="text-xl" />
              Let's Talk
            </button>
            <a 
              href="/assets/Mahesh_Kumar_Frontend_Resume.pdf" 
              download
              className="px-6 py-3 bg-accent-yellow hover:bg-opacity-80 text-black rounded-lg font-semibold transition-all flex items-center gap-2"
            >
              <FaDownload className="text-xl" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 