export interface SkillProgress {
  name: string;
  percentage: number;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud & DevOps" | "Tools & Architecture";
  color: string;
  iconType: string;
}

export const skillsProgress: SkillProgress[] = [
  { name: "JavaScript / TypeScript (ES6+, TS 5)", percentage: 96 },
  { name: "React.js / Next.js (App Router, SSR/SSG)", percentage: 95 },
  { name: "Node.js / Express / RESTful APIs", percentage: 92 },
  { name: "Custom POS & Inventory Billing Engines", percentage: 94 },
  { name: "MongoDB / PostgreSQL / SQL Databases", percentage: 88 },
  { name: "HTML5 / Semantic Web / Tailwind CSS", percentage: 98 },
  { name: "UI/UX Design Systems & Interactive Motion", percentage: 90 },
  { name: "SEO & Core Web Vitals Optimization", percentage: 95 },
];

export const techGrid: TechItem[] = [
  // Row 1: Core Web & Frameworks
  { name: "React", category: "Frontend", color: "#61DAFB", iconType: "react" },
  { name: "Next.js", category: "Frontend", color: "#FFFFFF", iconType: "nextjs" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", iconType: "typescript" },
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E", iconType: "javascript" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", iconType: "tailwind" },

  // Row 2: Backend & Systems
  { name: "Node.js", category: "Backend", color: "#68A063", iconType: "nodejs" },
  { name: "Express.js", category: "Backend", color: "#FFFFFF", iconType: "express" },
  { name: "POS Engines", category: "Backend", color: "#F97316", iconType: "pos" },
  { name: "REST APIs", category: "Backend", color: "#10B981", iconType: "rest" },
  { name: "GraphQL", category: "Backend", color: "#E10098", iconType: "graphql" },

  // Row 3: Databases & State
  { name: "MongoDB", category: "Database", color: "#47A248", iconType: "mongodb" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1", iconType: "postgresql" },
  { name: "Firebase", category: "Database", color: "#FFCA28", iconType: "firebase" },
  { name: "Redis", category: "Database", color: "#DC382D", iconType: "redis" },
  { name: "Redux", category: "Frontend", color: "#764ABC", iconType: "redux" },

  // Row 4: Cloud, DevOps & Tools
  { name: "AWS", category: "Cloud & DevOps", color: "#FF9900", iconType: "aws" },
  { name: "Docker", category: "Cloud & DevOps", color: "#2496ED", iconType: "docker" },
  { name: "Git / GitHub", category: "Cloud & DevOps", color: "#F05032", iconType: "git" },
  { name: "Vercel", category: "Cloud & DevOps", color: "#FFFFFF", iconType: "vercel" },
  { name: "Figma", category: "Tools & Architecture", color: "#F24E1E", iconType: "figma" },
];
