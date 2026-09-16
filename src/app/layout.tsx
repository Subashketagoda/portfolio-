import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const viewport: Viewport = {
  themeColor: "#080b0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://subhashketagoda.com"),
  title: {
    default: "Subhash Ketagoda | Full-Stack Developer & Software Engineer",
    template: "%s | Subhash Ketagoda",
  },
  description:
    "Subhash Ketagoda (Subash Ketagoda) is a Full-Stack Developer & Software Engineer based in Sri Lanka specializing in Next.js, React, Node.js, TypeScript, and high-performance bespoke digital solutions.",
  keywords: [
    "Subhash Ketagoda",
    "Subash Ketagoda",
    "Subhash",
    "Subash",
    "Ketagoda",
    "Subhash Ketagoda Portfolio",
    "Subash Ketagoda Portfolio",
    "Full-Stack Developer",
    "Full-Stack Developer Sri Lanka",
    "Software Engineer Sri Lanka",
    "Web Developer Sri Lanka",
    "Creative Web Developer",
    "Freelance Web Developer Colombo",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "MERN Stack Developer",
    "UI/UX Technologist",
    "69 Studio",
    "69studiobysubash",
    "Cargo Pizzeria",
    "DinePro Advisors",
    "subhashketagoda.com",
  ],
  authors: [{ name: "Subhash Ketagoda", url: "https://subhashketagoda.com" }],
  creator: "Subhash Ketagoda",
  publisher: "Subhash Ketagoda",
  category: "technology",
  classification: "Portfolio, Software Engineering, Full-Stack Development",
  alternates: {
    canonical: "https://subhashketagoda.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://subhashketagoda.com",
    siteName: "Subhash Ketagoda | Portfolio",
    title: "Subhash Ketagoda | Full-Stack Developer & Software Engineer",
    description:
      "Subhash Ketagoda (Subash Ketagoda) is a Full-Stack Developer & Software Engineer based in Sri Lanka creating modern, high-performance web applications.",
    images: [
      {
        url: "https://subhashketagoda.com/images/subhash-ketagoda.jpg",
        width: 1200,
        height: 630,
        alt: "Subhash Ketagoda — Full-Stack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhash Ketagoda | Full-Stack Developer & Software Engineer",
    description:
      "Subhash Ketagoda (Subash Ketagoda) is a Full-Stack Developer & Software Engineer creating modern, high-performance digital experiences.",
    images: ["https://subhashketagoda.com/images/subhash-ketagoda.jpg"],
    creator: "@subhashketagoda",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://subhashketagoda.com/#person",
      name: "Subhash Ketagoda",
      alternateName: ["Subash Ketagoda", "Subhash", "Subash", "Ketagoda"],
      givenName: "Subhash",
      familyName: "Ketagoda",
      gender: "Male",
      jobTitle: "Full-Stack Developer & Software Engineer",
      description:
        "Subhash Ketagoda (Subash Ketagoda) is a Sri Lankan Full-Stack Developer & Software Engineer specializing in modern Next.js, React, Node.js, and bespoke high-performance web systems.",
      url: "https://subhashketagoda.com",
      image: "https://subhashketagoda.com/images/subhash-ketagoda.jpg",
      nationality: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
      sameAs: [
        "https://github.com/Subashketagoda",
        "https://69studiobysubash.online/",
        "https://subhashketagoda.com",
      ],
      worksFor: {
        "@type": "Organization",
        name: "69 Studio",
        url: "https://69studiobysubash.online/",
      },
      knowsAbout: [
        "Full-Stack Web Development",
        "Software Engineering",
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
        "REST APIs",
        "UI/UX Design",
        "Web Performance Optimization",
        "Search Engine Optimization (SEO)",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Software Engineering & Computer Science",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://subhashketagoda.com/#website",
      url: "https://subhashketagoda.com",
      name: "Subhash Ketagoda | Portfolio",
      alternateName: "Subash Ketagoda Portfolio",
      description:
        "Official portfolio website of Subhash Ketagoda (Subash Ketagoda), Full-Stack Developer and Software Engineer.",
      publisher: {
        "@id": "https://subhashketagoda.com/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://subhashketagoda.com/#profilepage",
      url: "https://subhashketagoda.com",
      name: "Subhash Ketagoda - Full-Stack Developer & Software Engineer",
      isPartOf: {
        "@id": "https://subhashketagoda.com/#website",
      },
      about: {
        "@id": "https://subhashketagoda.com/#person",
      },
      mainEntity: {
        "@id": "https://subhashketagoda.com/#person",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://subhashketagoda.com/#service",
      name: "Subhash Ketagoda Web Engineering & Development",
      url: "https://subhashketagoda.com",
      image: "https://subhashketagoda.com/images/subhash-ketagoda.jpg",
      provider: {
        "@id": "https://subhashketagoda.com/#person",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Sri Lanka",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      serviceType: [
        "Full-Stack Web Development",
        "Custom Web Applications",
        "E-Commerce Solutions",
        "Next.js & React Frontend Architecture",
        "Backend & API Engineering",
        "UI/UX Design & Prototyping",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Preload critical above-the-fold hero image to eliminate LCP delay */}
        <link
          rel="preload"
          href="/images/subash-hero.png"
          as="image"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080b0f] text-[#F3F3F7] antialiased selection:bg-[#ff8a00] selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
