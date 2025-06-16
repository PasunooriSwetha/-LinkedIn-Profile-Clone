
import React from 'react';
import { Person } from '../types';

interface PeopleYouMayKnowWidgetProps {
  people: Person[];
}

const PeopleYouMayKnowWidget: React.FC<PeopleYouMayKnowWidgetProps> = ({ people }) => {
  return (
    <div className="p-4 bg-white dark:bg-linkedin-dark-card shadow rounded-lg">
      <h3 className="text-md font-semibold text-gray-900 dark:text-linkedin-dark-text mb-3">People you may know</h3>
      <div className="space-y-3">
        {people.map(person => (
          <div key={person.id} className="flex items-start space-x-3 pb-3 border-b border-gray-100 dark:border-linkedin-dark-border last:border-b-0">
            <img src={person.profilePictureUrl} alt={person.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-linkedin-dark-secondary-text">{person.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{person.headline}</p>
              {person.mutualConnections && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{person.mutualConnections} mutual connections</p>
              )}
              <button className="mt-1 text-xs font-semibold text-gray-600 dark:text-linkedin-dark-secondary-text border border-gray-400 dark:border-gray-500 rounded-full px-3 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-600 dark:hover:border-gray-400">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
       <button className="mt-3 w-full text-center py-1 text-sm text-gray-600 dark:text-linkedin-dark-secondary-text font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        Show more
      </button>
    </div>
  );
};

export default PeopleYouMayKnowWidget;
    