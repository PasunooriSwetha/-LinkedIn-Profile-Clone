
import React, { useState } from 'react';
import { Education } from '../types';
import { EditIcon, AcademicCapIcon } from '../icons';

interface EducationCardProps {
  education: Education;
  onUpdateEducation: (updatedEducation: Education) => void;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, onUpdateEducation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEducation, setEditedEducation] = useState<Education>(education);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateEducation(editedEducation);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedEducation(education);
    setIsEditing(false);
  };
  
  const commonInputClass = "mt-1 block w-full px-3 py-2 bg-white dark:bg-linkedin-dark-card border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-linkedin-blue focus:ring-1 focus:ring-linkedin-blue dark:text-linkedin-dark-text";


  if (isEditing) {
     return (
      <div className="p-4 border border-linkedin-blue-light dark:border-linkedin-blue rounded-md">
        <div className="mb-2">
          <label htmlFor={`schoolName-${education.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">School Name</label>
          <input type="text" name="schoolName" id={`schoolName-${education.id}`} value={editedEducation.schoolName} onChange={handleChange} className={commonInputClass} />
        </div>
        <div className="mb-2">
          <label htmlFor={`degree-${education.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Degree</label>
          <input type="text" name="degree" id={`degree-${education.id}`} value={editedEducation.degree} onChange={handleChange} className={commonInputClass} />
        </div>
        <div className="mb-2">
          <label htmlFor={`fieldOfStudy-${education.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Field of Study</label>
          <input type="text" name="fieldOfStudy" id={`fieldOfStudy-${education.id}`} value={editedEducation.fieldOfStudy} onChange={handleChange} className={commonInputClass} />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div>
            <label htmlFor={`startDate-${education.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Start Date</label>
            <input type="text" name="startDate" id={`startDate-${education.id}`} value={editedEducation.startDate} onChange={handleChange} className={commonInputClass} />
          </div>
          <div>
            <label htmlFor={`endDate-${education.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">End Date</label>
            <input type="text" name="endDate" id={`endDate-${education.id}`} value={editedEducation.endDate} onChange={handleChange} className={commonInputClass} />
          </div>
        </div>
        {editedEducation.description !== undefined && (
          <div className="mb-4">
            <label htmlFor={`description-${education.id}`} className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text">Description (Optional)</label>
            <textarea name="description" id={`description-${education.id}`} value={editedEducation.description} onChange={handleChange} rows={3} className={commonInputClass}></textarea>
          </div>
        )}
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
        {education.schoolLogoUrl ? (
          <img src={education.schoolLogoUrl} alt={`${education.schoolName} logo`} className="w-12 h-12 object-contain rounded"/>
        ) : (
          <AcademicCapIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-md font-semibold text-gray-900 dark:text-linkedin-dark-text">{education.schoolName}</h3>
                <p className="text-sm text-gray-700 dark:text-linkedin-dark-secondary-text">{education.degree}, {education.fieldOfStudy}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                {education.startDate} - {education.endDate}
                </p>
                {education.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 whitespace-pre-line">{education.description}</p>
                )}
            </div>
            <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Edit ${education.schoolName}`}
                >
                <EditIcon className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
    