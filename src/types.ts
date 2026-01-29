export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  isProject?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  location: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  imageUrl: string;
  verificationUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}