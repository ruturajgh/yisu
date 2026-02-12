import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "gold" | "success" | "new";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClasses = {
    default: "bg-muted text-muted-foreground border-border",
    primary: "bg-primary/10 text-primary border-primary/30",
    gold: "bg-accent/10 text-accent border-accent/30",
    success: "bg-green-500/10 text-green-600 border-green-500/30",
    new: "bg-red-500/10 text-red-600 border-red-500/30"
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