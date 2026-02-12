import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return { ref, isInView, hasAnimated };
}

export function useScrollRevealMany(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    ...options
  });

  return { ref, isInView };
}