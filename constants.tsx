import React from 'react';
import { 
  BarChart3, 
  Search, 
  Smartphone, 
  Code2, 
  Layout, 
  Users, 
  Brain, 
  Zap, 
  Clock, 
  Mail, 
  Linkedin, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { ExperienceItem, EducationItem, CertificationItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Harshini R",
  role: "Digital Marketing Associate",
  tagline: "A tech-driven marketer turning data insights into high-impact brand growth. Passionate about performance, creativity, and the digital edge.",
  email: "harshini3.r@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshini-r-0ab63a390/",
  location: "Gurugram, Haryana",
  about: "A techie, aspiring Digital Marketing Associate with a deep passion for the digital landscape ready to delve into real-world campaigns while learning from industry experts, bringing a unique blend of engineering logic and marketing creativity to every project.",
  quote: "Digital marketing isn't just about selling; it's about telling stories that resonate. I blend creativity with a growing understanding of data-driven insights to build meaningful connections between brands and people."
};

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Advertising & Analytics",
    skills: ["Meta Ads", "Google Ads", "GA4", "Search Engine Optimisation"]
  },
  {
    title: "Development & Tools",
    skills: ["Python", "HTML", "CSS", "Javascript", "Github", "VS Code"]
  },
  {
    title: "Productivity & Design",
    skills: ["Figma", "Claude", "Notion", "Trello"]
  }
];

export const SOFT_SKILLS: string[] = [
  "Effective Communication & Stakeholder Collaboration",
  "Adaptability",
  "Learning Agility & Openness to Feedback",
  "Data-Driven & Analytical Thinking",
  "Problem Solving",
  "Time Management",
  "Task Ownership & Accountability"
];

export const LANGUAGES: string[] = ["English", "Hindi", "Tamil"];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "foozy",
    title: "Marketing & Growth Strategy (University Project)",
    company: "Foozy – University Food Ordering App",
    period: "2023 - 2024",
    isProject: true,
    description: [
      "Collaborated with a cross-functional team to manage growth for a campus food ordering app connecting 10+ shops with ~3,000 students.",
      "Identified student target segments and implemented tailored offers, contributing to a 30–40% increase in sales across vendors.",
      "Optimized website flow and analyzed ordering behavior to improve repeat usage and overall student engagement."
    ]
  },
  {
    id: "fuzemee",
    title: "Marketing Intern",
    company: "Fuzemee",
    period: "May 2023 - June 2023",
    description: [
      "Developed student-focused registration strategies that contributed to 475 user registrations within the target audience.",
      "Supported registration growth by aligning strategies with student behavior and engagement patterns."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech Computer Science Engineering Honours",
    institution: "Lovely Professional University",
    location: "Punjab",
    period: "2020 - 2024",
    score: "8.25 CGPA"
  },
  {
    id: "twelfth",
    degree: "12th Class (PCM&B)",
    institution: "Suguna PIP School",
    location: "Tamil Nadu",
    period: "Completed 2020",
    score: "Completed"
  },
  {
    id: "tenth",
    degree: "10th Class",
    institution: "Spring Mount Public School",
    location: "Tamil Nadu",
    period: "Completed 2018",
    score: "86.2%"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "google-ads-ai-powered",
    name: "AI-Powered Performance Ads Certification",
    imageUrl: "https://api.accredible.com/v1/frontend/credential_opengraph_seo_image/172886794",
    verificationUrl: "https://skillshop.credential.net/bdbd1101-4dbb-40ac-8108-e663be88ff01#acc.IEcWi3A8"
  },
  {
    id: "google-ads-search",
    name: "Google Ads Search Certification",
    imageUrl: "https://api.accredible.com/v1/frontend/credential_opengraph_seo_image/172872374",
    verificationUrl: "https://skillshop.credential.net/fd047d17-5707-4323-bfdb-af25fa53a132#acc.lzy9htoq"
  }
];