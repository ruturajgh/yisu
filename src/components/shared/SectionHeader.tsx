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
  icon?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
  highlightWord,
  children,
  badgeVariant = "default",
  icon
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={`inline-block px-2.5 py-1 mb-2 text-[10px] font-semibold tracking-wider uppercase rounded-lg ${
            badgeVariant === 'glass'
              ? 'glass-card text-accent'
              : 'text-primary border border-primary/30'
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif tracking-tight text-primary mb-1"
      >
        {renderTitle()}
      </motion.h2>
      {icon && <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-muted-foreground mb-1"
      >
        {icon}
      </motion.span>}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full text-base text-foreground/80 max-w-3xl"
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}