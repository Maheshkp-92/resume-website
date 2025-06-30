import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactData = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91-7348820501",
    link: "tel:+917348820501",
    color: "#4CAF50"
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mkp92official@gmail.com",
    link: "mailto:mkp92official@gmail.com",
    color: "#D44638"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Mahesh Kumar K P",
    link: "https://www.linkedin.com/in/maheshkumar1992/",
    color: "#0A66C2"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Mahesh Kumar K P",
    link: "https://github.com/Maheshkp-92/",
    color: "#ffffff"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-base section-primary flex items-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent-yellow to-accent-blue bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-gray-800 hover:border-accent-blue transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactData.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.icon !== FaPhone ? "_blank" : undefined}
                rel={contact.icon !== FaPhone ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-lg bg-gray-900 bg-opacity-50 hover:bg-opacity-70 transition-all border border-transparent hover:border-accent-blue"
              >
                <div 
                  className="text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: contact.color }}
                >
                  <contact.icon />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{contact.label}</div>
                  <div className="text-white group-hover:text-accent-yellow transition-colors">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            Feel free to reach out! I'm always open to discussing new opportunities and ideas.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 