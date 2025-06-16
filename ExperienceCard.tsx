
import React, { useState } from 'react';
import { Experience } from '../types';
import { EditIcon, BriefcaseIcon, CheckIcon, XMarkIcon } from '../icons';

interface ExperienceCardProps {
  experience: Experience;
  onUpdateExperience: (updatedExperience: Experience) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onUpdateExperience }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExperience, setEditedExperience] = useState<Experience>(experience);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedExperience(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateExperience(editedExperience);
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setEditedExperience(experience);
    setIsEditing(false);
  };

  const commonInputClass = "mt-1 block w-full px-3 py-2 bg-white dark:bg-linkedin-dark-card border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-linkedin-blue focus:ring-1 focus:ring-linkedin-blue dark:text-linkedin-dark-text";

  if (isEditing) {
    return (
      <div className="p-4 border border-linkedin-blue-light dark:border-linkedin-blue rounded-md">
        <div className="mb-2">
          <label htmlFor={`title-${experience.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Title</label>
          <input type="text" name="title" id={`title-${experience.id}`} value={editedExperience.title} onChange={handleChange} className={commonInputClass} />
        </div>
        <div className="mb-2">
          <label htmlFor={`companyName-${experience.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Company Name</label>
          <input type="text" name="companyName" id={`companyName-${experience.id}`} value={editedExperience.companyName} onChange={handleChange} className={commonInputClass} />
        </div>
        <div className="mb-2">
          <label htmlFor={`location-${experience.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Location</label>
          <input type="text" name="location" id={`location-${experience.id}`} value={editedExperience.location} onChange={handleChange} className={commonInputClass} />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div>
            <label htmlFor={`startDate-${experience.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Start Date</label>
            <input type="text" name="startDate" id={`startDate-${experience.id}`} value={editedExperience.startDate} onChange={handleChange} className={commonInputClass} />
          </div>
          <div>
            <label htmlFor={`endDate-${experience.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">End Date (or Present)</label>
            <input type="text" name="endDate" id={`endDate-${experience.id}`} value={editedExperience.endDate || ''} onChange={handleChange} placeholder="Present" className={commonInputClass} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor={`description-${experience.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Description</label>
          <textarea name="description" id={`description-${experience.id}`} value={editedExperience.description} onChange={handleChange} rows={4} className={commonInputClass}></textarea>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={handleCancel} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-linkedin-dark-text bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-linkedin-blue rounded-md hover:bg-linkedin-blue-light">Save</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex group">
      <div className="mr-4 pt-1">
        {experience.companyLogoUrl ? (
          <img src={experience.companyLogoUrl} alt={`${experience.companyName} logo`} className="w-12 h-12 object-contain rounded"/>
        ) : (
          <BriefcaseIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-md font-semibold text-gray-900 dark:text-linkedin-dark-text">{experience.title}</h3>
                <p className="text-sm text-gray-700 dark:text-linkedin-dark-secondary-text">{experience.companyName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                {experience.startDate} - {experience.endDate || 'Present'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{experience.location}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{experience.description}</p>
            </div>
            <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Edit ${experience.title}`}
                >
                <EditIcon className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
    