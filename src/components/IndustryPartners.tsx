import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const partners = ["Swiggy", "GMR Group", "Aurobindo Pharma", "Mahindra Logistics", "Apollo Hospitals", "Infosys"];

const IndustryPartners = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container-narrow text-center">
        <h2 className="section-title text-secondary-foreground mb-3">
          Industry <span className="text-gold">Collaborations</span>
        </h2>
        <p className="text-secondary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
          "Designed with Industry. Delivered for Employability."
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-md p-4 flex items-center justify-center h-20 hover:border-gold/40 transition-colors"
            >
              <span className="text-sm font-semibold text-secondary-foreground/80">{partner}</span>
            </motion.div>
          ))}
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
          Partner With Us
        </Button>
      </div>
    </section>
  );
};

export default IndustryPartners;
