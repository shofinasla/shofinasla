export interface ClientCaseStudy {
  id: string;
  clientName: string;
  category: string;
  industry: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  features: string[];
  techStack: string[];
  liveStatus: string;
  testimonial?: {
    quote: string;
    person: string;
    title: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  text: string;
  rating: number;
  projectType: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: 'Client Project' | 'Full Stack' | 'Frontend' | 'Mobile' | 'AI & Tools' | 'Open Source';
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
  headline: string;
  bio: string;
  email: string;
  whatsappNumber: string;
  whatsappUrl: string;
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

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Website' | 'SEO' | 'Digital Marketing' | 'E-Commerce' | 'AI';
  readTime: string;
  publishDate: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  relatedServiceId?: string;
  relatedServiceUrl?: string;
  relatedServiceName?: string;
  relatedProjectId?: string;
  relatedProjectUrl?: string;
  relatedProjectName?: string;
}

