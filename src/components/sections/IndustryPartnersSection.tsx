import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { partners } from "@/data/partners";

export default function IndustryPartnersSection() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-secondary section-padding relative overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider uppercase text-accent border-2 border-accent rounded-sm">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
            Industry Collaborations
          </h2>
          <p className="text-lg text-primary/70 max-w-3xl">
            "Designed with Industry. Delivered for Employability."
          </p>
        </div>

        <div className="mt-16 overflow-hidden relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 w-40 h-20 rounded-xl bg-white border-2 border-primary/50 flex items-center justify-center hover:border-accent hover:shadow-md transition-all cursor-default"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[120px] max-h-[50px] object-contain"
                  />
                ) : (
                  <span className="text-base font-bold text-primary text-center px-2">
                    {partner.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-muted">
            <Handshake className="w-6 h-6 text-accent" />
            <span className="text-base">
              Join <span className="font-bold text-primary">30+</span> industry partners shaping future education
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}