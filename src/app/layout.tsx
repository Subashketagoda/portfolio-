import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://subhashketagoda.com"),
  title: "Subash Ketagoda | Full-Stack Developer",
  description:
    "Subash Ketagoda is a Sri Lankan full-stack developer creating modern, high-performance websites and digital experiences.",
  keywords: [
    "Subash Ketagoda",
    "Full-Stack Developer",
    "Creative Web Developer",
    "Sri Lanka Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "69 Studio",
    "Cargo Pizzeria",
    "DinePro Advisors",
  ],
  authors: [{ name: "Subash Ketagoda" }],
  creator: "Subash Ketagoda",
  publisher: "Subash Ketagoda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://subhashketagoda.com",
    siteName: "Subash Ketagoda — Full-Stack Developer",
    title: "Subash Ketagoda | Full-Stack Developer",
    description:
      "Subash Ketagoda is a Sri Lankan full-stack developer creating modern, high-performance websites and digital experiences.",
    images: [
      {
        url: "/images/subhash-ketagoda.jpg",
        width: 1200,
        height: 630,
        alt: "Subash Ketagoda — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subash Ketagoda | Full-Stack Developer",
    description:
      "Subash Ketagoda is a Sri Lankan full-stack developer creating modern, high-performance websites and digital experiences.",
    images: ["/images/subhash-ketagoda.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://subhashketagoda.com/#person",
      name: "Subash Ketagoda",
      jobTitle: "Full-Stack Developer & Creative Web Developer",
      description:
        "Subash Ketagoda is a Sri Lankan full-stack developer creating modern, high-performance websites and digital experiences.",
      url: "https://subhashketagoda.com",
      image: "https://subhashketagoda.com/images/subhash-ketagoda.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      sameAs: [
        "https://github.com/Subashketagoda",
        "https://linkedin.com",
        "https://69studiobysubash.online/",
      ],
      knowsAbout: [
        "Full-Stack Development",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "UI/UX Design",
        "API Architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://subhashketagoda.com/#website",
      url: "https://subhashketagoda.com",
      name: "Subash Ketagoda Portfolio",
      description:
        "Subash Ketagoda is a Sri Lankan full-stack developer creating modern, high-performance websites and digital experiences.",
      publisher: {
        "@id": "https://subhashketagoda.com/#person",
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090c] text-[#F3F3F7] antialiased selection:bg-[#ff8a00] selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
