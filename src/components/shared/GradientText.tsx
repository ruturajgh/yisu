import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export default function GradientText({
  children,
  className = "",
  from = "from-primary",
  to = "to-accent"
}: GradientTextProps) {
  return (
    <span className={cn(`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`, className)}>
      {children}
    </span>
  );
}