
import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Alex Rivera',
  title: 'Senior Frontend Engineer & AI Specialist',
  bio: 'I build high-performance web applications and integrate cutting-edge AI solutions. With over 8 years of experience in the React ecosystem, I focus on delivering seamless user experiences.',
  location: 'San Francisco, CA',
  email: 'hello@alexrivera.dev',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
};

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 92 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'Python', category: 'Backend', level: 80 },
  { name: 'Gemini API', category: 'AI', level: 88 },
  { name: 'LLM Prompting', category: 'AI', level: 92 },
  { name: 'Docker', category: 'Tools', level: 75 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Nexus AI Dashboard',
    description: 'A comprehensive analytics dashboard for monitoring LLM performance across different providers.',
    tags: ['React', 'D3.js', 'Gemini API', 'Tailwind'],
    link: '#',
    image: 'https://picsum.photos/seed/nexus/800/450',
  },
  {
    title: 'E-Commerce Engine',
    description: 'A high-performance storefront builder with headless CMS integration.',
    tags: ['Next.js', 'Shopify SDK', 'TypeScript'],
    link: '#',
    image: 'https://picsum.photos/seed/shop/800/450',
  },
  {
    title: 'StreamLine UI',
    description: 'An open-source design system focused on accessibility and performance.',
    tags: ['Storybook', 'Figma', 'React'],
    link: '#',
    image: 'https://picsum.photos/seed/design/800/450',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechFlow Systems',
    role: 'Senior Frontend Engineer',
    period: '2021 - Present',
    description: [
      'Led the migration of a legacy monolithic application to a micro-frontend architecture.',
      'Reduced initial bundle sizes by 40% using advanced code-splitting techniques.',
      'Mentored a team of 5 junior and mid-level engineers.',
    ],
  },
  {
    company: 'Innovate Digital',
    role: 'Software Engineer',
    period: '2018 - 2021',
    description: [
      'Developed responsive web applications for Fortune 500 clients.',
      'Implemented automated testing suites that increased code coverage to 90%.',
      'Collaborated closely with designers to build a custom React component library.',
    ],
  },
];
