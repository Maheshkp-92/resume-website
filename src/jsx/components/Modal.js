import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-gray-900 rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white mb-6">{project.name}</h3>

          {/* Summary Section */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-accent-yellow mb-3">Summary</h4>
            <p className="text-gray-300">{project.shortDescription}</p>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-accent-yellow mb-3">Description</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.fullDescription.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Key Attributes */}
          <div>
            <h4 className="text-lg font-semibold text-accent-yellow mb-3">Key Attributes</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent-blue bg-opacity-10 rounded-full text-sm text-accent-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 