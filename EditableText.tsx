
import React, { useState, useEffect } from 'react';
import { EditIcon, CheckIcon, XMarkIcon } from '../icons';

interface EditableTextProps {
  initialValue: string;
  onSave: (newValue: string) => void;
  label?: string;
  multiline?: boolean;
  inputClassName?: string;
  textClassName?: string;
  containerClassName?: string;
  canEdit?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({
  initialValue,
  onSave,
  label,
  multiline = false,
  inputClassName = "border-gray-300 dark:border-gray-600 dark:bg-linkedin-dark-card dark:text-linkedin-dark-text focus:ring-linkedin-blue focus:border-linkedin-blue",
  textClassName = "text-gray-700 dark:text-linkedin-dark-secondary-text",
  containerClassName = "mb-2",
  canEdit = true,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSave = () => {
    onSave(value);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  if (!canEdit) {
    return (
      <div className={containerClassName}>
        {label && <label className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text mb-1">{label}</label>}
        {multiline ? (
          <p className={`whitespace-pre-wrap ${textClassName}`}>{initialValue}</p>
        ) : (
          <p className={textClassName}>{initialValue}</p>
        )}
      </div>
    );
  }


  if (isEditing) {
    return (
      <div className={containerClassName}>
        {label && <label className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text mb-1">{label}</label>}
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`w-full p-2 border rounded-md shadow-sm ${inputClassName}`}
            rows={4}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`w-full p-2 border rounded-md shadow-sm ${inputClassName}`}
          />
        )}
        <div className="mt-2 space-x-2">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-linkedin-blue text-white rounded-md hover:bg-linkedin-blue-light text-sm"
          >
            <CheckIcon className="w-4 h-4 inline mr-1" /> Save
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-linkedin-dark-text rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 text-sm"
          >
            <XMarkIcon className="w-4 h-4 inline mr-1" /> Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerClassName} group relative`}>
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-linkedin-dark-secondary-text mb-1">{label}</label>}
      <div className="flex justify-between items-start">
        {multiline ? (
          <p className={`whitespace-pre-wrap ${textClassName} flex-grow`}>{value || 'Not specified'}</p>
        ) : (
          <p className={`${textClassName} flex-grow`}>{value || 'Not specified'}</p>
        )}
        <button
          onClick={() => setIsEditing(true)}
          className="ml-2 p-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-linkedin-blue dark:hover:text-linkedin-blue-light opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Edit ${label || 'field'}`}
        >
          <EditIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EditableText;
    