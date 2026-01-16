'use client';

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
        "shadow-xl shadow-black/20 ring-1 ring-white/5",
        "transition-colors duration-300",
        hoverEffect && "hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40",
        className
      )}
      {...props}
    >
      {/* Noise texture overlay for texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
