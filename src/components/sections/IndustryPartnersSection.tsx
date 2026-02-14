import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { partners } from "@/data/partners";

export default function IndustryPartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white section-compact relative overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase text-gold bg-gray-50 rounded-sm">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-navy mb-4">
            Industry Collaborations
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Designed with Industry. Delivered for Employability.
          </p>
        </motion.div>

        {/* Infinite Scroll Logo Strip */}
        <div className="mt-12 overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -4000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
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
                className="flex-shrink-0 w-36 h-18 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-gold/40 hover:bg-gray-100 transition-all cursor-default"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[120px] max-h-[50px] object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-navy text-center px-2">
                    {partner.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Fade gradients on sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-3 text-gray-600">
            <Handshake className="w-5 h-5 text-gold" />
            <span className="text-base">
              Join <span className="font-semibold text-navy">30+</span> industry partners shaping future education
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
