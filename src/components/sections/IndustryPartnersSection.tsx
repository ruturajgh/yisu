import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { partners } from "@/data/partners";

export default function IndustryPartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-4 bg-white/5 border-y border-border/30 overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Our Partners
          </span>
          <div className="flex-1 h-px bg-border/40"></div>
        </motion.div>

        {/* Infinite Scroll Logo Strip - Bigger Logos */}
        <motion.div
          className="flex gap-5"
          animate={{
            x: [0, -1000, -2000]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-32 h-14 rounded-xl bg-card border border-border/40 flex items-center justify-center hover:border-accent/40 hover:bg-muted/30 transition-all cursor-pointer"
              title={partner.name}
            >
              <span className="text-xs font-medium text-foreground/70 text-center px-2 truncate">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-4"
        >
          <div className="inline-flex items-center gap-2 text-sm text-foreground/70">
            <Handshake className="w-4 h-4 text-accent" />
            <span>
              Join <span className="font-semibold text-foreground">30+</span> industry partners
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
