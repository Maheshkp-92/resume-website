import React, { useState } from 'react';
import { FaBriefcase, FaFilter, FaExchangeAlt, FaBolt, FaMobile, FaUserCog } from 'react-icons/fa';
import Modal from './Modal';

const experiences = [
  {
    title: "Freelance Developer",
    company: "KNS Logistics",
    companyUrl: "https://knslogistic.in/",
    duration: "Nov 2024 - Present",
    projects: [
      {
        name: "KNS Logistics – Static Website",
        shortDescription: "Developed and deployed a fully responsive static website to showcase logistics services, branches, and contact details.",
        fullDescription: [
          "Developed and deployed a fully responsive static website to showcase logistics services, branches, and contact details",
          "Focused on clean UI, mobile responsiveness, and professional branding using CSS and Bootstrap",
          "Implemented SEO best practices and optimized loading performance",
          "Created an intuitive navigation structure for easy access to service information"
        ],
        technologies: ["HTML5", "CSS3", "Bootstrap", "Responsive Design", "SEO Optimization"]
      },
      {
        name: "KNS Logistics - Consignment Booking",
        shortDescription: "Built an interactive frontend for booking consignments between Consignor and Consignee with PDF reporting feature.",
        fullDescription: [
          "Built an interactive frontend for booking consignments between Consignor and Consignee",
          "Developed a PDF reporting feature based on Lorry Receipts (LRs), summarizing transported goods and destinations",
          "Utilized modular SCSS for styling and Docker containers to streamline development and deployment workflows",
          "Implemented real-time validation and error handling for booking forms"
        ],
        technologies: ["React", "SCSS", "PDF Generation", "Form Validation"]
      }
    ]
  },
  {
    title: "Software Engineer",
    company: "Ubix Systems Marketing Pvt. Ltd. (Liveimpact)",
    companyUrl: "https://www.liveimpact.org/Home",
    duration: "July 2018 - August 2024",
    challenges: [
      {
        icon: <FaFilter className="text-accent-yellow" />,
        title: "Dynamic Data Filtering",
        description: "Implemented advanced filtering mechanisms for multi-data grids, enhancing data accessibility and user experience."
      },
      {
        icon: <FaExchangeAlt className="text-accent-yellow" />,
        title: "Content Migration",
        description: "Seamlessly transitioned existing CKEditor values to Summernote, ensuring data integrity and a smooth user experience."
      },
      {
        icon: <FaBolt className="text-accent-yellow" />,
        title: "Complex Data Handling",
        description: "Optimized grid performance for large datasets, reducing load times and improving responsiveness."
      },
      {
        icon: <FaMobile className="text-accent-yellow" />,
        title: "Device Compatibility",
        description: "Ensured seamless application functionality across various screen sizes and resolutions, improving accessibility."
      },
      {
        icon: <FaUserCog className="text-accent-yellow" />,
        title: "User Experience Enhancement",
        description: "Resolved UI Inconsistencies, Improved Customization flexibility, and fixed critical bugs to enhance usability."
      }
    ],
    projects: [
      {
        name: "Dashboard & Profile View",
        shortDescription: "Developed comprehensive user profiles and analytics dashboard with advanced filtering capabilities",
        fullDescription: [
          "Developed user profiles with detailed information and payment data display",
          "Implemented smart grid filters to enhance data exploration and analysis",
          "Addressed UI bugs to ensure a seamless user experience"
        ],
        technologies: ["Data Visualization", "Grid Systems", "Analytics"]
      },
      {
        name: "Events & Fundraiser",
        shortDescription: "Created dynamic event management and fundraising platform with customizable forms",
        fullDescription: [
          "Designed and implemented custom form fields for Events and Fundraiser modules",
          "Provided previews for Events Ticketing Forms and Fundraiser Donation Forms, enhancing end-user engagement",
          "Improved the UI dashboard for Participant Pages, creating a more user-friendly interface"
        ],
        technologies: ["Form Builder", "Event Management", "Payment Integration"]
      },
      {
        name: "Forms & Form Data",
        shortDescription: "Implemented advanced form features including digital signatures and rich text editing",
        fullDescription: [
          "Demonstrated expertise in integrating new Custom Fields like Draw Signature and Big Data using WYSIWYG Editor",
          "Implemented custom view grids in Form Data, improving data capture and organization",
          "Notably created a Draw Signature feature using Canvas, enhancing form interactivity",
          "Successfully integrated WYSIWYG Editors (CkEditor and Summernote) to manage large datasets"
        ],
        technologies: ["Canvas API", "CkEditor", "Summernote", "Custom Fields"]
      },
      {
        name: "Timecard & Reservation",
        shortDescription: "Developed comprehensive employee scheduling and reservation management system",
        fullDescription: [
          "Enhanced the Shift View by incorporating list and card views for employees' schedules",
          "Implemented a print and download feature for Shift View details, improving data accessibility",
          "Made significant UI enhancements and optimizations for a more visually appealing and intuitive experience",
          "Designed and implemented statistics for Reservations, allowing data-driven decision-making"
        ],
        technologies: ["Scheduling System", "Data Export", "Statistics Dashboard"]
      }
    ]
  }
];

// Array of professional colors for card borders
const cardColors = [
  '#4D6694', // Blue
  '#f9d423', // Yellow
  '#E44D26', // Orange-Red
  '#61DAFB', // React Blue
  '#38B2AC', // Teal
  '#9B59B6', // Purple
  '#3498DB', // Light Blue
  '#2ECC71'  // Green
];

const ExperienceSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="experience" className="min-h-screen bg-primary py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent">
          Professional Experience
        </h2>

        {experiences.map((exp, companyIndex) => (
          <div key={companyIndex} className="mb-12">
            {/* Company Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaBriefcase className="text-accent-yellow text-3xl" />
                <h3 className="text-2xl font-semibold text-white">
                  {exp.companyUrl ? (
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-accent-yellow transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
              </div>
              <div className="text-xl text-gray-400 mb-2">{exp.title}</div>
              <div className="text-lg text-accent-yellow">{exp.duration}</div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {exp.projects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="bg-black bg-opacity-50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-accent-blue transition-all"
                  style={{
                    borderTop: `5px solid ${cardColors[projectIndex % cardColors.length]}`
                  }}
                >
                  {/* Project info */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{project.name}</h4>
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.shortDescription}</p>

                    <button
                      onClick={() => handleOpenModal(project)}
                      className="px-4 py-2 bg-accent-blue hover:bg-accent-blue/80 text-white rounded-lg transition-colors w-full text-center"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Challenges Section */}
            {exp.challenges && (
              <div>
                <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-gray-800 hover:border-accent-blue transition-all">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <span className="text-accent-yellow">Key Challenges</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exp.challenges.map((challenge, index) => (
                      <div 
                        key={index} 
                        className="flex gap-4 items-start p-4 rounded-lg bg-gray-900 bg-opacity-50 hover:bg-opacity-70 transition-all"
                      >
                        <div className="text-2xl mt-1">{challenge.icon}</div>
                        <div>
                          <h4 className="text-white font-medium mb-2">{challenge.title}</h4>
                          <p className="text-gray-300 text-sm">{challenge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default ExperienceSection; 