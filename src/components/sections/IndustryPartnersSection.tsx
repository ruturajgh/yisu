import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { partners } from "@/data/partners";

export default function IndustryPartnersSection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase text-gold bg-gray-50 rounded-sm">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy mb-4">
            Industry Collaborations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Designed with Industry. Delivered for Employability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-sm transition-shadow"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
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
