import React from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  color?: "green" | "pink" | "blue";
}

export function GlitchText({ 
  text, 
  className, 
  as: Component = "h1", 
  color = "green",
  ...props 
}: GlitchTextProps) {
  const glowClass = color === "pink" ? "text-glow-pink" : color === "blue" ? "text-glow-blue" : "text-glow";
  const shadowColor = color === "pink" ? "var(--color-neon-pink)" : color === "blue" ? "var(--color-neon-blue)" : "var(--color-neon-green)";

  return (
    <div className="relative inline-block group">
      <Component 
        className={cn(
          "relative z-10 font-glitch uppercase tracking-widest", 
          glowClass,
          className
        )}
        {...props}
      >
        {text}
      </Component>
      
      {/* Glitch Layers */}
      <Component 
        className={cn(
          "absolute top-0 left-0 -z-10 opacity-70 animate-pulse font-glitch uppercase tracking-widest text-[var(--color-neon-pink)] mix-blend-screen translate-x-[2px]",
          className
        )}
        aria-hidden="true"
      >
        {text}
      </Component>
      
      <Component 
        className={cn(
          "absolute top-0 left-0 -z-10 opacity-70 animate-pulse font-glitch uppercase tracking-widest text-[var(--color-neon-blue)] mix-blend-screen -translate-x-[2px]",
          className
        )}
        style={{ animationDelay: "0.5s" }}
        aria-hidden="true"
      >
        {text}
      </Component>
    </div>
  );
}
