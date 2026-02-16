import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { contactInfo } from "@/data/constants";

export default function CTASection() {
  return (
    <section id="apply" className="py-8 lg:py-12 bg-gradient-to-br from-primary via-royal to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-narrow relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white leading-tight"
            >
              Ready to Transform Your Career?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm md:text-base text-white/90 leading-relaxed"
            >
              Join thousands of students building successful careers with industry-aligned education at YISU.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Button variant="gold" size="sm" className="text-sm">
                Apply Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="text-sm border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Contact Information</h3>
              <div className="space-y-2 text-xs text-white/90">
                <div className="flex items-start gap-2">
                  <span className="text-accent">📍</span>
                  <span className="leading-relaxed">{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">📞</span>
                  <span>{contactInfo.admissionsPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">📧</span>
                  <span>{contactInfo.admissionsEmail}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
