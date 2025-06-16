
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ProfileData {
  id: string;
  name: string;
  headline: string;
  location: string;
  about: string;
  profilePictureUrl: string;
  coverPhotoUrl: string;
  connections: number;
  email: string; // For contact info, simplistic
  phone: string; // For contact info, simplistic
}

export interface Experience {
  id: string;
  title: string;
  companyName: string;
  companyLogoUrl?: string;
  location: string;
  startDate: string;
  endDate: string | null; // null for current job
  description: string;
}

export interface Education {
  id: string;
  schoolName: string;
  schoolLogoUrl?: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  endorsements: number;
}

export interface Activity {
  id: string;
  type: 'post' | 'shared';
  content: string;
  timestamp: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}

export interface Person {
  id: string;
  name: string;
  headline: string;
  profilePictureUrl: string;
  mutualConnections?: number;
}
    