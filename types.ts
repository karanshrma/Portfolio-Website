
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}
