import { useRef, useScroll, useTransform } from "framer-motion";

export function useParallax(yOffset = 100) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);

  return { ref, y };
}