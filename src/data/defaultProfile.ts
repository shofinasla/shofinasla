import { ProfileData, Project, SkillCategory, ExperienceItem } from '../types';

export const initialProfile: ProfileData = {
  username: 'shofinasla',
  name: 'Shofi Nasla',
  title: 'Full-Stack Developer & Software Engineer',
  bio: 'Passionate developer crafting modern, responsive web and mobile applications with clean architecture and delightful user experiences.',
  email: 'Shofinasla@gmail.com',
  location: 'Indonesia / Remote',
  status: 'Open to exciting opportunities & open-source collaboration',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  githubUrl: 'https://github.com/shofinasla',
  linkedinUrl: 'https://linkedin.com/in/shofinasla',
  websiteUrl: 'https://github.com/shofinasla/shofinasla',
  interests: [
    'Full-Stack Web Development',
    'Modern React & TypeScript Ecosystems',
    'Cloud-Native Architectures & Microservices',
    'UI/UX Design Systems & Motion Design',
    'Open Source Tooling & Developer Experience'
  ],
  learning: [
    'Advanced Next.js App Router & Server Actions',
    'Distributed Systems & Realtime WebSockets',
    'AI-Assisted Development & Gemini API integrations',
    'Rust for high-performance backend utilities'
  ],
  collaboratingOn: [
    'Open Source Web Applications',
    'Developer Tooling & Productivity Suites',
    'Community-driven educational software'
  ],
  reachOutFor: [
    'Full-time & Contract Engineering Roles',
    'Technical Consultations & Code Reviews',
    'Collaborative Open-Source Initiatives'
  ]
};

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'PulseStack - Cloud Workspace & Tasks',
    description: 'A modern real-time task management and team workspace platform with Kanban boards, Markdown notes, and analytics.',
    fullDescription: 'PulseStack is a comprehensive workspace application built for agile software teams. Features include real-time board synchronization, drag-and-drop workflow automation, markdown documentation hubs, and responsive theme support.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    stars: 42,
    forks: 14,
    featured: true,
    demoUrl: 'https://github.com/shofinasla',
    githubUrl: 'https://github.com/shofinasla',
    highlights: [
      'Sub-50ms real-time board state updates',
      'End-to-end type safety across client and server',
      'Accessible keyboard-first navigation with zero layout shift'
    ],
    date: '2026'
  },
  {
    id: 'proj-2',
    title: 'NovaUI Design System',
    description: 'An accessible, themeable React component library and icon set designed for high-density dashboard workflows.',
    fullDescription: 'NovaUI is a design system providing over 40+ atomic components adhering strictly to WAI-ARIA standards. Comes with dark/light mode tokens, seamless Tailwind CSS integration, and zero runtime overhead.',
    category: 'Frontend',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Vite'],
    stars: 89,
    forks: 23,
    featured: true,
    demoUrl: 'https://github.com/shofinasla',
    githubUrl: 'https://github.com/shofinasla',
    highlights: [
      '100% WCAG AA compliant contrast and screen-reader testing',
      'Tree-shakeable bundle footprint under 12kb minified',
      'Custom theme generator with instant CSS variable export'
    ],
    date: '2025'
  },
  {
    id: 'proj-3',
    title: 'DevScope - GitHub Profile Customizer & Analytics',
    description: 'Dynamic README generator, contribution heatmaps, and customizable stats cards for GitHub profiles.',
    fullDescription: 'DevScope allows software engineers to easily compose Markdown templates, generate shields.io badges, preview repo cards, and render dynamic commit visualizers with instant clipboard synchronization.',
    category: 'AI & Tools',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub API', 'Vite'],
    stars: 128,
    forks: 35,
    featured: true,
    demoUrl: 'https://github.com/shofinasla/shofinasla',
    githubUrl: 'https://github.com/shofinasla/shofinasla',
    highlights: [
      'Interactive visual markdown generator with live syntax preview',
      'Pre-configured tech stacks with over 150+ brand badges',
      'One-click export directly to your profile README.md'
    ],
    date: '2026'
  },
  {
    id: 'proj-4',
    title: 'AeroTrack Mobile Weather & Air Quality',
    description: 'Clean, hyper-local meteorological forecast application featuring animated radar maps and pollutant tracking.',
    fullDescription: 'AeroTrack delivers real-time weather alerts, hourly micro-forecasts, UV index, and air quality index (AQI) with offline-first caching and smooth fluid animations.',
    category: 'Mobile',
    tags: ['React Native', 'Expo', 'TypeScript', 'OpenWeather API'],
    stars: 31,
    forks: 8,
    featured: false,
    demoUrl: 'https://github.com/shofinasla',
    githubUrl: 'https://github.com/shofinasla',
    highlights: [
      'Offline-first synchronization with persistent local cache',
      'Smooth 60 FPS gesture-driven timeline scrubber'
    ],
    date: '2025'
  },
  {
    id: 'proj-5',
    title: 'FastLog - Zero-Config Logging Utility',
    description: 'Lightweight structured JSON logger and terminal prettifier with zero external dependencies.',
    fullDescription: 'A minimalist Node.js and browser logger supporting colorized terminal output, log levels, structured JSON outputs, and child logger scopes.',
    category: 'Open Source',
    tags: ['TypeScript', 'Node.js', 'NPM Package', 'Testing'],
    stars: 56,
    forks: 11,
    featured: false,
    demoUrl: 'https://github.com/shofinasla',
    githubUrl: 'https://github.com/shofinasla',
    highlights: [
      'Zero dependencies, <2KB uncompressed',
      'Full TypeScript declaration support out of the box'
    ],
    date: '2024'
  }
];

export const initialSkillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: 'Layout',
    skills: [
      { name: 'React / Next.js', level: 95, experience: '4+ yrs', featured: true },
      { name: 'TypeScript', level: 92, experience: '3+ yrs', featured: true },
      { name: 'Tailwind CSS', level: 96, experience: '4+ yrs', featured: true },
      { name: 'HTML5 & Modern CSS', level: 98, experience: '5+ yrs', featured: true },
      { name: 'State Management (Zustand/Redux)', level: 88, experience: '3+ yrs' },
      { name: 'Responsive & Accessible UI/UX', level: 92, experience: '4+ yrs' }
    ]
  },
  {
    name: 'Backend & Systems',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 90, experience: '3+ yrs', featured: true },
      { name: 'REST & GraphQL APIs', level: 88, experience: '3+ yrs', featured: true },
      { name: 'PostgreSQL & MySQL', level: 84, experience: '2+ yrs' },
      { name: 'MongoDB / Prisma ORM', level: 86, experience: '3+ yrs' },
      { name: 'Authentication & JWT/OAuth', level: 88, experience: '3+ yrs' }
    ]
  },
  {
    name: 'DevOps, Cloud & Tools',
    icon: 'Cloud',
    skills: [
      { name: 'Git & GitHub Workflows', level: 94, experience: '5+ yrs', featured: true },
      { name: 'Docker & Containerization', level: 80, experience: '2+ yrs' },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 82, experience: '2+ yrs' },
      { name: 'Vite / Webpack / Tooling', level: 90, experience: '3+ yrs' },
      { name: 'Cloud Deployments (Cloud Run/Vercel)', level: 86, experience: '3+ yrs' }
    ]
  }
];

export const initialExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Developer',
    company: 'Tech Solutions & Engineering',
    period: '2024 - Present',
    location: 'Remote',
    type: 'Work',
    description: 'Leading the development of client-facing modern web platforms and high-throughput dashboard microservices.',
    achievements: [
      'Architected end-to-end full-stack applications with sub-100ms response times',
      'Mentored junior engineers on clean TypeScript patterns, testing, and modern React best practices',
      'Automated deployment pipelines cutting build-to-release cycles by 40%'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Frontend Software Engineer',
    company: 'Digital Innovation Lab',
    period: '2022 - 2024',
    location: 'Hybrid',
    type: 'Work',
    description: 'Created responsive, accessible single-page web applications and internal design systems.',
    achievements: [
      'Built reusable component library utilized across 6 core product repositories',
      'Increased mobile Lighthouse performance scores from 64 to 98',
      'Engineered interactive visualization dashboards handling large tabular datasets'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'REST APIs']
  },
  {
    id: 'exp-3',
    role: 'Bachelor of Computer Science / Informatics',
    company: 'University Program',
    period: '2019 - 2023',
    location: 'Academic Campus',
    type: 'Education',
    description: 'Specialized in Software Engineering, Algorithms, Database Systems, and Web Technologies.',
    achievements: [
      'Graduated with honors and distinction in software engineering capstone project',
      'President of Developer Student Club, hosting hackathons and technical workshops'
    ],
    technologies: ['Algorithms', 'Data Structures', 'Database Design', 'Software Architecture']
  }
];
