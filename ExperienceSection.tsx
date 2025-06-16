
import React from 'react';
import { Experience } from '../types';
import ExperienceCard from './ExperienceCard';
import { PlusIcon } from '../icons';

interface ExperienceSectionProps {
  experiences: Experience[];
  onUpdateExperience: (updatedExperience: Experience) => void;
  onAddExperience: () => void; // Placeholder for adding new experience
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, onUpdateExperience, onAddExperience }) => {
  return (
    <div className="p-6 bg-white dark:bg-linkedin-dark-card shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-linkedin-dark-text">Experience</h2>
        <button 
          onClick={onAddExperience} 
          className="p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light"
          aria-label="Add new experience"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            <ExperienceCard experience={exp} onUpdateExperience={onUpdateExperience} />
            {index < experiences.length - 1 && <hr className="border-gray-200 dark:border-linkedin-dark-border my-6" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
    