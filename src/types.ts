export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'AI & Tools' | 'Open Source';
  tags: string[];
  stars: number;
  forks: number;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  highlights?: string[];
  date: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Work' | 'Education' | 'Community';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProfileData {
  username: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  status: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
  interests: string[];
  learning: string[];
  collaboratingOn: string[];
  reachOutFor: string[];
}

export interface TerminalCommand {
  command: string;
  description: string;
}
