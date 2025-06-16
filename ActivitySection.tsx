
import React from 'react';
import { Activity } from '../types';
import { DEFAULT_PROFILE_DATA } from '../constants'; // For followers count

interface ActivitySectionProps {
  activities: Activity[];
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ activities }) => {
  const followersCount = DEFAULT_PROFILE_DATA.connections * 2; // Example calculation

  return (
    <div className="p-6 bg-white dark:bg-linkedin-dark-card shadow rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-linkedin-dark-text">Activity</h2>
        <button className="text-sm text-linkedin-blue dark:text-linkedin-blue-light font-semibold hover:underline">
          Start a post
        </button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{followersCount} followers</p>
      
      {activities.length > 0 ? (
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className="pb-4 border-b border-gray-100 dark:border-linkedin-dark-border last:border-b-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {DEFAULT_PROFILE_DATA.name} {activity.type === 'post' ? 'posted this' : 'shared this'} &middot; {activity.timestamp}
              </p>
              <p className="text-sm text-gray-800 dark:text-linkedin-dark-secondary-text mb-2">{activity.content}</p>
              {activity.imageUrl && (
                <img src={activity.imageUrl} alt="Activity content" className="rounded-md max-h-64 w-full object-cover mb-2" />
              )}
              <div className="flex space-x-4 text-xs text-gray-500 dark:text-gray-400">
                <span>{activity.likes} Likes</span>
                <span>{activity.comments} Comments</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">No recent activity to display.</p>
      )}
      {activities.length > 0 && (
         <button className="mt-4 w-full text-center py-2 text-linkedin-blue dark:text-linkedin-blue-light font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">
            Show all activity
        </button>
      )}
    </div>
  );
};

export default ActivitySection;
    