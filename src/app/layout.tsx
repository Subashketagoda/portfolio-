import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CalEmbed from "@/components/CalEmbed";

export const viewport: Viewport = {
  themeColor: "#080b0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-two-zeta-97.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Subhash Ketagoda | Full-Stack Developer & Software Engineer",
    template: "%s | Subhash Ketagoda",
  },
  description:
    "Subhash Ketagoda (Subash Ketagoda) is a Senior Full-Stack Developer & Software Engineer based in Sri Lanka specializing in Next.js 15, React, Node.js, TypeScript, PostgreSQL, and high-performance bespoke digital systems & POS engines.",
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
    "Senior Software Engineer Colombo",
    "Freelance Web Developer Colombo",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "MERN Stack Developer",
    "Custom POS Developer",
    "Point of Sale System Sri Lanka",
    "Billing Software Developer",
    "UI/UX Technologist",
    "69 Studio",
    "69studiobysubash",
    "Cargo Pizzeria POS",
    "DinePro Advisors",
    "Velora Sanctuary",
    "Noir Table",
    "Apex House",
    "portfolio-two-zeta-97.vercel.app",
    "subhashketagoda.com",
  ],
  authors: [{ name: "Subhash Ketagoda", url: siteUrl }],
  creator: "Subhash Ketagoda",
  publisher: "Subhash Ketagoda",
  category: "technology",
  classification: "Portfolio, Software Engineering, Full-Stack Development, POS Systems",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Subhash Ketagoda | Portfolio",
    title: "Subhash Ketagoda | Full-Stack Developer & Software Engineer",
    description:
      "Subhash Ketagoda (Subash Ketagoda) is a Senior Full-Stack Developer & Software Engineer based in Sri Lanka creating modern, high-performance web applications, enterprise POS engines, and bespoke digital platforms.",
    images: [
      {
        url: `${siteUrl}/images/subhash-ketagoda.jpg`,
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
      "Subhash Ketagoda (Subash Ketagoda) is a Senior Full-Stack Developer & Software Engineer creating modern, high-performance digital systems and custom POS engines.",
    images: [`${siteUrl}/images/subhash-ketagoda.jpg`],
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Subhash Ketagoda",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "LK-11",
    "geo.placename": "Colombo, Sri Lanka",
    "geo.position": "6.9271;79.8612",
    "ICBM": "6.9271, 79.8612",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Subhash Ketagoda",
      alternateName: ["Subash Ketagoda", "Subhash", "Subash", "Ketagoda"],
      givenName: "Subhash",
      familyName: "Ketagoda",
      gender: "Male",
      jobTitle: "Senior Full-Stack Developer & Software Engineer",
      description:
        "Subhash Ketagoda (Subash Ketagoda) is a Sri Lankan Senior Full-Stack Developer & Software Engineer specializing in modern Next.js 15, React 19, Node.js, TypeScript, PostgreSQL, and bespoke high-performance POS and web systems.",
      url: siteUrl,
      image: `${siteUrl}/images/subhash-ketagoda.jpg`,
      email: "mailto:subhashketagoda@gmail.com",
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
      knowsLanguage: ["en", "si"],
      sameAs: [
        "https://github.com/Subashketagoda",
        "https://linkedin.com",
        "https://69studiobysubash.online/",
        "https://www.fiverr.com/apexgendigital/design-and-develop-a-modern-premium-business-website",
        siteUrl,
        "https://app.cal.com/portfolio",
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
        "Custom POS Systems",
        "Point of Sale Engineering",
        "Billing & Transaction Automation",
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
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Subhash Ketagoda | Portfolio",
      alternateName: "Subash Ketagoda Portfolio",
      description:
        "Official portfolio website of Subhash Ketagoda (Subash Ketagoda), Senior Full-Stack Developer and Software Engineer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Subhash Ketagoda - Full-Stack Developer & Software Engineer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Subhash Ketagoda Web Engineering & Software Development",
      url: siteUrl,
      image: `${siteUrl}/images/subhash-ketagoda.jpg`,
      priceRange: "$$",
      provider: {
        "@id": `${siteUrl}/#person`,
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
        "Custom POS & Billing Systems",
        "Next.js & React Frontend Architecture",
        "Backend & REST API Engineering",
        "E-Commerce Platform Development",
        "UI/UX Design & Prototyping",
        "Search Engine Optimization (SEO)",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${siteUrl}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: `${siteUrl}/#services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Projects",
          item: `${siteUrl}/#projects`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: `${siteUrl}/#contact`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects-list`,
      name: "Featured Projects by Subhash Ketagoda",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Cargo Pizzeria E-Commerce & POS",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${siteUrl}/#projects`,
          description:
            "Custom pizza ordering platform with dynamic cart management, POS billing integration, and automated WhatsApp order dispatch.",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "69 Studio Web Platform",
          applicationCategory: "DesignApplication",
          operatingSystem: "Web",
          url: "https://69studiobysubash.online/",
          description:
            "Creative agency portfolio platform featuring dark luxury aesthetics, 60fps micro-interactions, and conversion-optimized funnels.",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "DinePro Advisors Platform",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${siteUrl}/#projects`,
          description:
            "High-end corporate hospitality advisory platform with interactive financial calculator and consultation pipeline.",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "Velora Sanctuary Booking Engine",
          applicationCategory: "TravelApplication",
          operatingSystem: "Web",
          url: `${siteUrl}/#projects`,
          description:
            "Luxury villa hospitality portal with seamless date-picker booking flow, immersive video backgrounds, and guest amenities showcase.",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Subhash Ketagoda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Subhash Ketagoda (also known as Subash Ketagoda) is a Senior Full-Stack Developer and Software Engineer based in Colombo, Sri Lanka. He specializes in Next.js, React, Node.js, TypeScript, PostgreSQL, and custom POS billing systems.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Subhash Ketagoda provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Subhash provides full-stack web application development, custom Point of Sale (POS) and inventory billing software, Next.js frontend architecture, scalable REST APIs, UI/UX prototyping, and Search Engine Optimization (SEO).",
          },
        },
        {
          "@type": "Question",
          name: "Does Subhash Ketagoda build custom Point of Sale (POS) systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Subhash develops bespoke POS software, automated billing engines, inventory management modules, and WhatsApp takeaway ordering funnels for restaurants, cafes, and retail stores.",
          },
        },
        {
          "@type": "Question",
          name: "How can I hire or contact Subhash Ketagoda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `You can book a call directly via the Cal.com scheduling embed on his website (${siteUrl}/#booking) or reach out via email at subhashketagoda@gmail.com.`,
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Subhash Ketagoda specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "His core technology stack includes Next.js 15, React 19, TypeScript, Node.js, PostgreSQL, MongoDB, Redis, Tailwind CSS, Docker, and AWS edge network deployments.",
          },
        },
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
        {/* Preload critical above-the-fold hero image and loading signature to eliminate mobile delay */}
        <link
          rel="preload"
          href="/images/subash-hero.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/subhash-signature.png"
          as="image"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080b0f] text-[#F3F3F7] antialiased selection:bg-[#ff8a00] selection:text-black">
        <CalEmbed />
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* Cal.com inline embed initialization */}
        <Script
          id="cal-embed-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "portfolio", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns.portfolio("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#FFA500"},"dark":{"cal-brand":"#FFA500"}},"hideEventTypeDetails":false,"layout":"month_view"});`,
          }}
        />
      </body>
    </html>
  );
}
