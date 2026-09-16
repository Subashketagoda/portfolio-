"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/40 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 shadow-lg">
      <div className="relative w-full h-52 sm:h-60 bg-[#161622] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      <div className="p-5 flex items-end justify-between gap-4">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#181822] border border-white/[0.06] text-[11px] font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="w-9 h-9 rounded-xl bg-[#181822] border border-white/10 hover:border-orange-500 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all shrink-0 mb-1"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
