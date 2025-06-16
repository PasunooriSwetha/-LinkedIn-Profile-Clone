
import React, { useState } from 'react';
import { ProfileData } from '../types';
import { EditIcon, PlusIcon, EyeIcon } from '../icons';
import EditableText from './EditableText';

interface ProfileHeaderProps {
  profileData: ProfileData;
  onUpdateProfile: (field: keyof ProfileData, value: string) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profileData, onUpdateProfile }) => {
  const [isEditingHeadline, setIsEditingHeadline] = useState(false);
  const [headline, setHeadline] = useState(profileData.headline);

  const handleHeadlineSave = (newHeadline: string) => {
    onUpdateProfile('headline', newHeadline);
    setHeadline(newHeadline); // keep local state for EditableText happy if needed, though onUpdateProfile should trigger re-render
  };
  
  return (
    <div className="bg-white dark:bg-linkedin-dark-card shadow rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={profileData.coverPhotoUrl} 
          alt="Cover photo" 
          className="w-full h-32 sm:h-48 object-cover"
        />
        <div className="absolute -bottom-12 sm:-bottom-16 left-6">
          <img 
            src={profileData.profilePictureUrl} 
            alt={profileData.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-linkedin-dark-card object-cover"
          />
        </div>
         <button className="absolute top-4 right-4 bg-white bg-opacity-75 p-1.5 rounded-full text-gray-700 hover:bg-opacity-100">
          <EditIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="pt-16 sm:pt-20 px-6 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <EditableText
              initialValue={profileData.name}
              onSave={(newName) => onUpdateProfile('name', newName)}
              textClassName="text-2xl font-bold text-gray-900 dark:text-linkedin-dark-text"
              inputClassName="text-2xl font-bold"
            />
             <EditableText
              initialValue={profileData.headline}
              onSave={handleHeadlineSave}
              textClassName="text-md text-gray-700 dark:text-linkedin-dark-secondary-text"
            />
            <EditableText
              initialValue={profileData.location}
              onSave={(newLocation) => onUpdateProfile('location', newLocation)}
              textClassName="text-sm text-gray-500 dark:text-gray-400 mt-1"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{profileData.connections}+ connections</p>
          </div>
          <div className="hidden sm:block">
            {/* Placeholder for company logo if current company is part of profileData */}
            {/* <img src="https://picsum.photos/seed/current-company/80/80" alt="Current Company" className="h-10"/> */}
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="flex-1 bg-linkedin-blue text-white font-semibold py-2 px-4 rounded-full hover:bg-linkedin-blue-light transition duration-150">
            Open to
          </button>
          <button className="flex-1 bg-transparent text-linkedin-blue font-semibold py-2 px-4 rounded-full border border-linkedin-blue hover:bg-blue-50 dark:hover:bg-linkedin-blue dark:hover:text-white transition duration-150">
            Add profile section
          </button>
          <button className="flex-1 bg-transparent text-gray-600 dark:text-linkedin-dark-secondary-text font-semibold py-2 px-4 rounded-full border border-gray-600 dark:border-linkedin-dark-secondary-text hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
    