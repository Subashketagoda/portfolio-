"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  dataCursor?: string;
  dataCursorText?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  variant = "primary",
  dataCursor = "button",
  dataCursorText = "",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-semibold shadow-lg shadow-gold-500/20 border border-gold-400/40";
      case "secondary":
        return "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold-500/40 backdrop-blur-md";
      case "outline":
        return "bg-transparent hover:bg-gold-500/10 text-gold-400 border border-gold-500/30 hover:border-gold-400";
      case "ghost":
        return "bg-transparent hover:bg-white/5 text-muted hover:text-white";
      default:
        return "";
    }
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.2 }}
      className={`inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs md:text-sm tracking-wider uppercase font-mono transition-all duration-300 relative overflow-hidden group cursor-pointer select-none ${getVariantStyles()} ${className}`}
      data-cursor={dataCursor}
      data-cursor-text={dataCursorText}
      onClick={onClick}
    >
      {/* Light sheen effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
