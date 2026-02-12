import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  highlightWord?: string;
  children?: ReactNode;
  badgeVariant?: "default" | "glass";
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
  highlightWord,
  children,
  badgeVariant = "default"
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn(alignClasses[align], className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase ${
            badgeVariant === 'glass'
              ? 'glass-card text-accent'
              : 'text-primary border border-primary/30 rounded-sm'
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-foreground mb-4"
      >
        {renderTitle()}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl"
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}