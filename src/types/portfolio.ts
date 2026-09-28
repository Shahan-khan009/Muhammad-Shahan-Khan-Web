export interface SkillItem {
  name: string;
  level: 'Basic / Learning' | 'Learning' | 'Familiar' | 'Skilled';
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tech: string[];
  url: string;
  type: string;
}

export interface CertificateItem {
  title: string;
  status: 'Completed' | 'In Progress';
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: 'LinkedIn' | 'Facebook' | 'Instagram' | 'GitHub' | 'X' | 'Medium';
  url: string;
  username: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
