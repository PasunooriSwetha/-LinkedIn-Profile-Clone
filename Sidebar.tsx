
import React from 'react';
import { Person } from '../types';
import PeopleAlsoViewedWidget from './PeopleAlsoViewedWidget';
import PeopleYouMayKnowWidget from './PeopleYouMayKnowWidget';
import { SAMPLE_PEOPLE_ALSO_VIEWED, SAMPLE_PEOPLE_YOU_MAY_KNOW } from '../constants'; // Using sample data directly

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 space-y-4">
      <PeopleAlsoViewedWidget people={SAMPLE_PEOPLE_ALSO_VIEWED} />
      <PeopleYouMayKnowWidget people={SAMPLE_PEOPLE_YOU_MAY_KNOW} />
      {/* You can add more widgets here, e.g., Ads, Learning */}
      <div className="p-4 bg-white dark:bg-linkedin-dark-card shadow rounded-lg text-center">
        <img src="https://picsum.photos/seed/ad1/250/250" alt="Advertisement" className="mx-auto rounded"/>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Sponsored Content</p>
      </div>
    </aside>
  );
};

export default Sidebar;
    