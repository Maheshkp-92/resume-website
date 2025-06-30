import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "The Oxford College Of Engineering, Bangalore",
    duration: "2013 - 2016",
    score: "75%"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The National Degree College Jayanagar, Bangalore",
    duration: "2009 - 2012",
    score: "54%"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-base section-primary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-accent-blue/30" />

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index !== educationData.length - 1 ? 'mb-12' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-4 h-4 rounded-full bg-accent-yellow" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              }`}>
                <div className="bg-black bg-opacity-50 rounded-lg p-6 border border-gray-800 hover:border-accent-blue transition-all">
                  <div className="flex items-center gap-3 mb-3 justify-start md:justify-end">
                    <FaGraduationCap className={`text-2xl text-accent-yellow ${
                      index % 2 === 0 ? 'md:order-2' : ''
                    }`} />
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-300">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm justify-start md:justify-end">
                      <span className="text-accent-yellow">{edu.duration}</span>
                      <span className="text-accent-blue">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 