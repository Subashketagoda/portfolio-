export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  badge: "Live Production" | "Featured Client" | "Concept Architecture";
  isLive?: boolean;
}

export const projects: Project[] = [
  {
    id: "cargo-pizzeria",
    title: "Cargo Pizzeria",
    category: "Hospitality & E-Commerce",
    subtitle: "Woodfired Artisan Pizza Online Ordering Platform",
    description:
      "High-performance restaurant platform engineered for Nawala & Colombo. Features an appetizing interactive digital menu, WhatsApp takeaway ordering funnel, and local SEO dominance.",
    image: "/images/projects/cargo-pizzeria-real.png",
    techStack: ["Next.js", "Tailwind CSS", "Interactive Menu", "WhatsApp Ordering", "Local SEO"],
    liveUrl: "https://cargopizzeria.online/",
    badge: "Live Production",
    isLive: true,
  },
  {
    id: "69-studio",
    title: "69 Studio",
    category: "Software Engineering & Digital Studio",
    subtitle: "Bespoke Web Platforms & Custom POS Systems",
    description:
      "The creative engineering powerhouse founded by Subhash Ketagoda. Ships bespoke web applications, custom Point of Sale (POS) and inventory billing software for retail & hospitality.",
    image: "/images/projects/69-studio-real.png",
    techStack: ["React & Next.js", "Custom POS Engines", "Tailwind CSS", "Motion Design", "TypeScript"],
    liveUrl: "https://69studiobysubash.online/",
    badge: "Live Production",
    isLive: true,
  },
  {
    id: "dinepro-advisors",
    title: "DinePro Advisers",
    category: "Corporate Consulting & Hospitality",
    subtitle: "Elite Restaurant Consulting Platform",
    description:
      "An authoritative, sophisticated digital presence engineered for Sri Lanka's elite restaurant consulting firm. Highlights menu engineering, culinary concept development, and client inquiry funnels.",
    image: "/images/projects/dinepro-advisors-real.png",
    techStack: ["Next.js", "Editorial UI/UX", "Consultation Booking", "Corporate SEO", "TypeScript"],
    liveUrl: "https://dineproadvisors.online/",
    badge: "Live Production",
    isLive: true,
  },
  {
    id: "velora",
    title: "VELORA Sanctuary",
    category: "Luxury Wellness & Spa",
    subtitle: "Haute Aesthetic Sanctuary & Concierge Booking",
    description:
      "A cinematic digital experience designed for high-end wellness and aesthetics. Crafted with warm monochromatic luxury tones, editorial typography, and a frictionless 3-tap mobile appointment booking engine.",
    image: "/images/projects/velora-mockup.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Booking Architecture"],
    liveUrl: "#",
    badge: "Featured Client",
  },
  {
    id: "noir-table",
    title: "NOIR TABLE",
    category: "Contemporary Fine Dining",
    subtitle: "Gastronomic Storytelling & Reservation Architecture",
    description:
      "Atmospheric fine-dining website focused on menu discovery, sensory gastronomy storytelling, sommelier pairing recommendations, and instantaneous reservation UX.",
    image: "/images/projects/noir-table-mockup.jpg",
    techStack: ["Next.js Edge", "Tailwind CSS", "Interactive Menu", "Speed Optimization"],
    liveUrl: "#",
    badge: "Featured Client",
  },
  {
    id: "apex-house",
    title: "APEX HOUSE",
    category: "Cinematography & Creative Studio",
    subtitle: "Commercial Film Portfolio & Custom Quoting Engine",
    description:
      "A modern film studio experience combining cinematography portfolio, camera equipment packages, video reels, and an interactive custom quoting engine to rapidly convert production inquiries.",
    image: "/images/projects/apex-house-mockup.jpg",
    techStack: ["React", "Quoting Engine", "Video Integration", "Brand Strategy"],
    liveUrl: "#",
    badge: "Concept Architecture",
  },
];
