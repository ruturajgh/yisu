import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteStats } from "@/data/constants";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-5 bg-foreground/5 border-y border-border/30">
      <div className="container-narrow">
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {siteStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/40 rounded-lg hover:bg-card hover:border-accent/30 transition-all group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </span>
              <div className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-base md:text-lg font-bold text-foreground"
                >
                  {stat.value}
                  {stat.suffix}
                </motion.span>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
