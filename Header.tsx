
import React from 'react';
import { Theme } from '../types';
import ThemeToggleButton from './ThemeToggleButton';
import { LinkedInIcon, SearchIcon, HomeIcon, UsersIcon, BriefcaseIcon, ChatBubbleLeftEllipsisIcon, BellIcon, ChevronDownIcon } from '../icons';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  profilePictureUrl: string;
}

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center cursor-pointer px-3 py-1 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-black dark:hover:text-white ${active ? 'border-b-2 border-black dark:border-white text-black dark:text-white' : ''}`}>
    {icon}
    <span className="text-xs hidden md:block">{label}</span>
  </div>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, profilePictureUrl }) => {
  return (
    <header className="bg-white dark:bg-linkedin-dark-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LinkedInIcon className="h-8 w-8 text-linkedin-blue" />
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-linkedin-gray-background dark:bg-gray-700 text-sm rounded-md pl-10 pr-4 py-1.5 focus:ring-1 focus:ring-linkedin-blue focus:outline-none dark:text-white"
            />
          </div>
        </div>

        <nav className="flex items-center space-x-1 sm:space-x-4">
          <NavItem icon={<HomeIcon className="w-5 h-5" />} label="Home" active />
          <NavItem icon={<UsersIcon className="w-5 h-5" />} label="My Network" />
          <NavItem icon={<BriefcaseIcon className="w-5 h-5" />} label="Jobs" />
          <NavItem icon={<ChatBubbleLeftEllipsisIcon className="w-5 h-5" />} label="Messaging" />
          <NavItem icon={<BellIcon className="w-5 h-5" />} label="Notifications" />
          
          <div className="hidden md:flex items-center cursor-pointer group flex-col text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text hover:text-black dark:hover:text-white px-2 py-1 relative">
            <img src={profilePictureUrl} alt="Profile" className="w-6 h-6 rounded-full" />
            <span className="text-xs flex items-center">
              Me <ChevronDownIcon className="w-3 h-3 ml-0.5" />
            </span>
          </div>
          <div className="border-l border-gray-300 dark:border-gray-600 h-8 mx-2 hidden md:block"></div>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
    