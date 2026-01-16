import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none",

          // Variants
          variant === "primary" &&
            "bg-stone-100 text-stone-900 hover:bg-white hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
          variant === "secondary" &&
            "bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/30",
          variant === "outline" &&
            "border border-stone-600 text-stone-300 hover:border-stone-400 hover:text-white bg-transparent",
          variant === "ghost" &&
            "text-stone-400 hover:text-white hover:bg-white/5",

          // Sizes
          size === "sm" && "h-9 px-4 text-xs tracking-wider uppercase",
          size === "md" && "h-11 px-8 text-sm tracking-wide",
          size === "lg" && "h-14 px-10 text-base tracking-widest uppercase",

          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
