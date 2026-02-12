import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = "", hover = false, onClick }: CardProps) {
  const CardComponent = motion.div;

  return (
    <CardComponent
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={onClick}
      className={cn(
        "bg-card border border-border rounded-lg p-6",
        hover && "cursor-pointer hover:shadow-lg hover:border-primary/30",
        className
      )}
    >
      {children}
    </CardComponent>
  );
}