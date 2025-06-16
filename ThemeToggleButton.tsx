
import React from 'react';
import { Theme } from '../types';
import { SunIcon, MoonIcon } from '../icons';

interface ThemeToggleButtonProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-linkedin-gray-icon dark:text-linkedin-dark-secondary-text"
      aria-label={theme === Theme.LIGHT ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === Theme.LIGHT ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggleButton;
    