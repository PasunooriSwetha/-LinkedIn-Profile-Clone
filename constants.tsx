
import { ProfileData, Experience, Education, Skill, Activity, Person } from './types';

export const DEFAULT_PROFILE_DATA: ProfileData = {
  id: 'user1',
  name: 'Alex Johnson',
  headline: 'Senior Frontend Engineer | React, TypeScript, Tailwind CSS Expert | UI/UX Enthusiast',
  location: 'San Francisco Bay Area, California, United States',
  about: "Highly skilled and motivated Senior Frontend Engineer with 8+ years of experience in designing, developing, and deploying cutting-edge web applications. Proficient in React, TypeScript, and modern JavaScript frameworks. Passionate about creating intuitive user experiences and pixel-perfect UIs. Always eager to learn new technologies and contribute to innovative projects. Currently exploring the potential of AI in enhancing user interactions.",
  profilePictureUrl: 'https://picsum.photos/seed/user1/200/200',
  coverPhotoUrl: 'https://picsum.photos/seed/cover1/800/200',
  connections: 500,
  email: 'alex.johnson@example.com',
  phone: '+1-555-0100'
};

export const SAMPLE_EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Frontend Engineer',
    companyName: 'Innovatech Solutions Inc.',
    companyLogoUrl: 'https://picsum.photos/seed/company1/50/50',
    location: 'San Francisco, CA',
    startDate: 'Jan 2020',
    endDate: null, // Current job
    description: 'Led the development of a new flagship product using React, Redux, and TypeScript. Collaborated with UX/UI designers to implement responsive and accessible interfaces. Mentored junior developers and conducted code reviews.'
  },
  {
    id: 'exp2',
    title: 'Frontend Developer',
    companyName: 'WebCrafters LLC',
    companyLogoUrl: 'https://picsum.photos/seed/company2/50/50',
    location: 'Austin, TX',
    startDate: 'Jun 2017',
    endDate: 'Dec 2019',
    description: 'Developed and maintained client websites using HTML, CSS, JavaScript, and jQuery. Contributed to the migration of legacy projects to modern React-based architecture.'
  },
];

export const SAMPLE_EDUCATIONS: Education[] = [
  {
    id: 'edu1',
    schoolName: 'Stanford University',
    schoolLogoUrl: 'https://picsum.photos/seed/school1/50/50',
    degree: 'Master of Science (M.S.)',
    fieldOfStudy: 'Computer Science',
    startDate: '2015',
    endDate: '2017',
    description: 'Focused on Human-Computer Interaction and Web Technologies.'
  },
  {
    id: 'edu2',
    schoolName: 'University of California, Berkeley',
    schoolLogoUrl: 'https://picsum.photos/seed/school2/50/50',
    degree: 'Bachelor of Science (B.S.)',
    fieldOfStudy: 'Electrical Engineering & Computer Sciences (EECS)',
    startDate: '2011',
    endDate: '2015',
  },
];

export const SAMPLE_SKILLS: Skill[] = [
  { id: 'skill1', name: 'React', endorsements: 99 },
  { id: 'skill2', name: 'TypeScript', endorsements: 90 },
  { id: 'skill3', name: 'JavaScript (ES6+)', endorsements: 85 },
  { id: 'skill4', name: 'Tailwind CSS', endorsements: 70 },
  { id: 'skill5', name: 'Node.js', endorsements: 60 },
  { id: 'skill6', name: 'UI/UX Design', endorsements: 75 },
  { id: 'skill7', name: 'Agile Methodologies', endorsements: 80 },
];

export const SAMPLE_ACTIVITIES: Activity[] = [
  {
    id: 'act1',
    type: 'post',
    content: 'Excited to share my latest article on "The Future of Frontend Development with AI"! Check it out on my blog. #Frontend #AI #WebDev',
    timestamp: '2d ago',
    likes: 125,
    comments: 15
  },
  {
    id: 'act2',
    type: 'shared',
    content: 'Interesting insights from @TechLead on scaling React applications. Worth a read!',
    timestamp: '5d ago',
    imageUrl: 'https://picsum.photos/seed/activity2/400/200',
    likes: 88,
    comments: 7
  }
];

export const SAMPLE_PEOPLE_ALSO_VIEWED: Person[] = [
  { id: 'person1', name: 'Jane Doe', headline: 'Product Manager at Google', profilePictureUrl: 'https://picsum.photos/seed/person1/40/40' },
  { id: 'person2', name: 'John Smith', headline: 'Lead UX Designer at Microsoft', profilePictureUrl: 'https://picsum.photos/seed/person2/40/40' },
  { id: 'person3', name: 'Emily White', headline: 'Software Engineer at Facebook', profilePictureUrl: 'https://picsum.photos/seed/person3/40/40' },
];

export const SAMPLE_PEOPLE_YOU_MAY_KNOW: Person[] = [
  { id: 'person4', name: 'Michael Brown', headline: 'Data Scientist at Amazon', profilePictureUrl: 'https://picsum.photos/seed/person4/40/40', mutualConnections: 12 },
  { id: 'person5', name: 'Sarah Green', headline: 'Marketing Specialist at Shopify', profilePictureUrl: 'https://picsum.photos/seed/person5/40/40', mutualConnections: 5 },
];

    