"use client";

import React from "react";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function TechBadge({ name, icon, className = "" }: TechBadgeProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121219]/90 border border-white/10 shadow-lg backdrop-blur-md transition-all hover:border-[#ff8a00]/40 ${className}`}
    >
      {icon}
      <span className="text-xs font-semibold text-gray-200 tracking-wide">
        {name}
      </span>
    </div>
  );
}
