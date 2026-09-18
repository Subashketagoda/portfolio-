import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Subhash Ketagoda | Full-Stack Developer & Software Engineer",
    short_name: "Subhash Ketagoda",
    description:
      "Official portfolio of Subhash Ketagoda — Senior Full-Stack Developer and Software Engineer specializing in Next.js, React, Node.js, TypeScript, and high-performance bespoke digital systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b0f",
    theme_color: "#080b0f",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
