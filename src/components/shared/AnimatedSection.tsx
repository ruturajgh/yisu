import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, transitionMedium } from "@/lib/animations/variants";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const { ref, hasAnimated } = useScrollReveal();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ ...transitionMedium, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}