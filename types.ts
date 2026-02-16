
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
  level: number; // 1-100
}

export interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
