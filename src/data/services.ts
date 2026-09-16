export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  linkText: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export const personal = {
  name: "Subash Ketagoda",
  firstName: "Subash",
  lastName: "Ketagoda",
  monogram: "SK",
  role: "Full-Stack Developer / Creative Web Developer",
  prefix: "HELLO, I'M",
  headline: "Subash Ketagoda",
  subtitle: "Full-Stack Developer | Creative Web Developer",
  typedTitles: [
    "Full-Stack Developer",
    "Creative Web Developer",
    "MERN & Next.js Specialist",
    "UI/UX Technologist",
  ],
  bio: "I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.",
  status: "AVAILABLE FOR FREELANCE",
  aboutHeading: "Building Digital Solutions That Make a Difference",
  aboutDescription:
    "I'm a passionate Full-Stack Developer with 6+ years of experience creating web applications that are fast, scalable, and user-friendly. I specialize in JavaScript & TypeScript technologies across the modern web stack and love solving complex problems with elegant solutions.",
  email: "subhashketagoda@gmail.com",
  phone: "+94 78 965 6969",
  whatsapp: "https://wa.me/94789656969?text=Hi%20Subhash,%20I'd%20like%20to%20discuss%20a%20project",
  location: "Colombo, Sri Lanka",
  availability: "Available for Freelance",
  responseTime: "Within 24 hours",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    email: "mailto:subhashketagoda@gmail.com",
  },
};

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies, high-level architecture, and best engineering practices.",
    iconName: "Code2",
    linkText: "LEARN MORE",
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description:
      "Responsive, high-performance user interfaces crafted with React, Next.js, Tailwind CSS, and fluid motion design.",
    iconName: "Monitor",
    linkText: "LEARN MORE",
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    description:
      "Robust RESTful APIs, microservices, and server-side logic engineered with Node.js, Express, and cloud databases.",
    iconName: "Server",
    linkText: "LEARN MORE",
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "High-performance database schema modeling, indexing, and optimization for MongoDB, PostgreSQL, and SQL stores.",
    iconName: "Database",
    linkText: "LEARN MORE",
  },
];

export const stats: StatItem[] = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Projects" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Subash delivered an exceptional web application that exceeded our expectations. His attention to detail, rapid communication, and technical expertise are truly outstanding.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Working with Subash was a fantastic experience. He's professional, communicates clearly, and delivers high-quality, production-ready code right on schedule.",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Subash transformed our vision into a lightning-fast, high-converting digital platform. His clean architecture and problem-solving skills made a massive difference to our business.",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GrowthCo",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
];
