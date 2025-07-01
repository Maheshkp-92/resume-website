import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaDocker, 
  FaGithub,
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaBitbucket,
  FaJira,
  FaSyncAlt
} from 'react-icons/fa';
import { 
  SiJquery, 
  SiMysql,
  SiJest,
  SiNetlify
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { GoGitBranch } from 'react-icons/go';

const skillsData = [
  {
    category: "Programming Languages & Core Technologies",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E44D26" },
      { name: "CSS/SCSS", icon: FaCss3Alt, color: "#264DE4" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "OOP", icon: VscCode, color: "#4CAF50" },
      { name: "DS & Algorithms", icon: FaCode, color: "#FF9800" }
    ]
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "ReactJs", icon: FaReact, color: "#61DAFB" }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" }
    ]
  },
  {
    category: "Version Control & Deployment",
    skills: [
      { name: "Git", icon: GoGitBranch, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "Bitbucket", icon: FaBitbucket, color: "#0052CC" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" }
    ]
  },
  {
    category: "Project Management & Methodologies",
    skills: [
      { name: "Jira", icon: FaJira, color: "#0052CC" },
      { name: "Agile", icon: FaSyncAlt, color: "#0052CC" }
    ]
  }
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="section-base section-alternate">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="space-y-6">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800 hover:border-accent-blue transition-all">
              <h3 className="text-lg font-semibold text-accent-yellow mb-4 px-2">
                {category.category}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center p-2 rounded-lg bg-gray-900 bg-opacity-50 hover:bg-opacity-70 transition-all border border-transparent hover:border-accent-blue"
                  >
                    <div 
                      className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-gray-300 text-xs text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills; 