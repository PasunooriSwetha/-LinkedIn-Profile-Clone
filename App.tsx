
import React, { useState, useEffect, useCallback } from 'react';
import { Theme, ProfileData, Experience, Education, Skill, Activity } from './types';
import { DEFAULT_PROFILE_DATA, SAMPLE_EXPERIENCES, SAMPLE_EDUCATIONS, SAMPLE_SKILLS, SAMPLE_ACTIVITIES } from './constants';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ActivitySection from './components/ActivitySection';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [profileData, setProfileData] = useState<ProfileData>(DEFAULT_PROFILE_DATA);
  const [experiences, setExperiences] = useState<Experience[]>(SAMPLE_EXPERIENCES);
  const [educations, setEducations] = useState<Education[]>(SAMPLE_EDUCATIONS);
  const [skills, setSkills] = useState<Skill[]>(SAMPLE_SKILLS);
  const [activities, setActivities] = useState<Activity[]>(SAMPLE_ACTIVITIES);

  useEffect(() => {
    const storedTheme = localStorage.getItem('linkedin-clone-theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(Theme.DARK);
      }
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('linkedin-clone-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }, []);

  const handleUpdateProfile = useCallback((field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleUpdateExperience = useCallback((updatedExperience: Experience) => {
    setExperiences(prev => prev.map(exp => exp.id === updatedExperience.id ? updatedExperience : exp));
  }, []);
  
  const handleAddExperience = useCallback(() => {
    // Placeholder: In a real app, this would open a form/modal
    console.log("Add new experience clicked");
    const newExp: Experience = {
        id: `exp${Date.now()}`,
        title: "New Role",
        companyName: "New Company",
        location: "City, State",
        startDate: "Month Year",
        endDate: null,
        description: "Responsibilities and achievements."
    };
    // setExperiences(prev => [newExp, ...prev]); // Example of adding (commented out)
    alert("Add experience functionality not fully implemented.");
  }, []);


  const handleUpdateEducation = useCallback((updatedEducation: Education) => {
    setEducations(prev => prev.map(edu => edu.id === updatedEducation.id ? updatedEducation : edu));
  }, []);

  const handleAddEducation = useCallback(() => {
    console.log("Add new education clicked");
    alert("Add education functionality not fully implemented.");
  }, []);
  
  const handleAddSkill = useCallback(() => {
    console.log("Add new skill clicked");
    alert("Add skill functionality not fully implemented.");
  }, []);


  return (
    <div className={`min-h-screen font-sans ${theme === Theme.LIGHT ? 'bg-linkedin-gray-background text-gray-900' : 'bg-linkedin-dark-background text-linkedin-dark-text'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} profilePictureUrl={profileData.profilePictureUrl} />
      <main className="container mx-auto px-2 sm:px-4 py-6">
        <div className="lg:flex lg:space-x-4">
          {/* Main Content Column */}
          <div className="lg:flex-grow space-y-4 mb-4 lg:mb-0">
            <ProfileHeader profileData={profileData} onUpdateProfile={handleUpdateProfile} />
            <AboutSection aboutText={profileData.about} onUpdateAbout={(newAbout) => handleUpdateProfile('about', newAbout)} />
            <ActivitySection activities={activities} />
            <ExperienceSection 
                experiences={experiences} 
                onUpdateExperience={handleUpdateExperience}
                onAddExperience={handleAddExperience}
            />
            <EducationSection 
                educations={educations} 
                onUpdateEducation={handleUpdateEducation}
                onAddEducation={handleAddEducation}
            />
            <SkillsSection skills={skills} onAddSkill={handleAddSkill} />
          </div>
          {/* Sidebar Column */}
          <div className="lg:w-1/3 lg:max-w-xs xl:max-w-sm">
             <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
    