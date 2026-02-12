import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "gold" | "success" | "new";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClasses = {
    default: "bg-secondary text-foreground/70 border-border",
    primary: "bg-primary/20 text-primary/90 border-primary/40",
    gold: "bg-accent/20 text-accent/90 border-accent/40",
    success: "bg-green-500/20 text-green-700 border-green-500/40",
    new: "bg-red-500/20 text-red-700 border-red-500/40"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}