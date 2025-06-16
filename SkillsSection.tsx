
import React from 'react';
import { Skill } from '../types';
import { PlusIcon, EditIcon } from '../icons'; // Assuming EditIcon for potential future use

interface SkillsSectionProps {
  skills: Skill[];
  onAddSkill: () => void; // Placeholder
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onAddSkill }) => {
  return (
    <div className="p-6 bg-white dark:bg-linkedin-dark-card shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-linkedin-dark-text">Skills</h2>
        <div className="space-x-2">
            <button 
              onClick={onAddSkill}
              className="p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light"
              aria-label="Add new skill"
            >
              <PlusIcon className="w-5 h-5" />
            </button>
            {/* <button className="p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light">
                <EditIcon className="w-5 h-5" />
            </button> */}
        </div>
      </div>
      <div className="space-y-3">
        {skills.map(skill => (
          <div key={skill.id} className="pb-3 border-b border-gray-100 dark:border-linkedin-dark-border last:border-b-0">
            <div className="flex justify-between items-center">
                <h3 className="text-md font-medium text-gray-800 dark:text-linkedin-dark-secondary-text">{skill.name}</h3>
                {/* <span className="text-xs text-linkedin-blue font-semibold">{skill.endorsements} endorsements</span> */}
            </div>
            {/* Placeholder for endorsement details */}
            {/* <p className="text-xs text-gray-500">Endorsed by John Doe and 2 others</p> */}
          </div>
        ))}
      </div>
      <button className="mt-4 w-full text-center py-2 text-linkedin-blue dark:text-linkedin-blue-light font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">
        Show all {skills.length} skills
      </button>
    </div>
  );
};

export default SkillsSection;
    