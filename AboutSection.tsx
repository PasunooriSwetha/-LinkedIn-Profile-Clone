
import React from 'react';
import { ProfileData } from '../types';
import EditableText from './EditableText';

interface AboutSectionProps {
  aboutText: string;
  onUpdateAbout: (newAboutText: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutText, onUpdateAbout }) => {
  return (
    <div className="p-6 bg-white dark:bg-linkedin-dark-card shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-linkedin-dark-text">About</h2>
      </div>
      <EditableText
        initialValue={aboutText}
        onSave={onUpdateAbout}
        multiline
        textClassName="text-sm text-gray-700 dark:text-linkedin-dark-secondary-text leading-relaxed"
        containerClassName=""
      />
    </div>
  );
};

export default AboutSection;
    