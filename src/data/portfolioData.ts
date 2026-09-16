import { projects, Project } from "./projects";
import { skillsProgress, techGrid, SkillProgress, TechItem } from "./skills";
import { personal, services, stats, testimonials, Service, StatItem, Testimonial } from "./services";

export * from "./projects";
export * from "./skills";
export * from "./services";

export interface ApproachStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  points: string[];
}

export const portfolioData = {
  personal,
  stats,
  services,
  skillsProgress,
  techGrid,
  projects,
  testimonials,
  approach: [] as ApproachStep[],
};
