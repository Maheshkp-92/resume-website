import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaDocker, 
  FaGithub, 
} from 'react-icons/fa';
import { 
  SiJquery, 
  SiVisualstudiocode, 
  SiAsana, 
  SiPhabricator 
} from 'react-icons/si';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "HTML 5", icon: FaHtml5, color: "#E44D26" },
      { name: "CSS / SCSS", icon: FaCss3Alt, color: "#264DE4" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "ReactJs", icon: FaReact, color: "#61DAFB" }
    ]
  },
  {
    category: "Tools/Editor",
    skills: [
      { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" }
    ]
  },
  {
    category: "Management Tool",
    skills: [
      { name: "Asana", icon: SiAsana, color: "#F06A6A" }
    ]
  },
  {
    category: "Build & Repository Management",
    skills: [
      { name: "Phabricator", icon: SiPhabricator, color: "#4A5F88" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" }
    ]
  }
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="space-y-6">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800">
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