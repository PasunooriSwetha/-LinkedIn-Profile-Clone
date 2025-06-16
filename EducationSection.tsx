
import React from 'react';
import { Education } from '../types';
import EducationCard from './EducationCard';
import { PlusIcon } from '../icons';

interface EducationSectionProps {
  educations: Education[];
  onUpdateEducation: (updatedEducation: Education) => void;
  onAddEducation: () => void; // Placeholder for adding new education
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations, onUpdateEducation, onAddEducation }) => {
  return (
    <div className="p-6 bg-white dark:bg-linkedin-dark-card shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-linkedin-dark-text">Education</h2>
        <button 
          onClick={onAddEducation}
          className="p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light"
          aria-label="Add new education"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <React.Fragment key={edu.id}>
            <EducationCard education={edu} onUpdateEducation={onUpdateEducation} />
            {index < educations.length - 1 && <hr className="border-gray-200 dark:border-linkedin-dark-border my-6" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
    