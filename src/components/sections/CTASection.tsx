import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Phone, Mail } from "lucide-react";
import Button from "@/components/shared/Button";
import { contactInfo } from "@/data/constants";

export default function CTASection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <GraduationCap className="w-16 h-16 text-gold mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight"
          >
            Ready to Begin Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Take the first step toward a transformative educational experience at Young India Skills University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" variant="gold" className="text-lg px-10 py-4 shadow-lg">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="w-5 h-5 text-gold" />
              <div className="text-left">
                <p className="text-xs text-white/70">Admissions</p>
                <p className="font-semibold text-base">{contactInfo.admissionsPhone}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Mail className="w-5 h-5 text-gold" />
              <div className="text-left">
                <p className="text-xs text-white/70">Email</p>
                <p className="font-semibold text-base">{contactInfo.admissionsEmail}</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base text-white/80 mt-8"
          >
            {contactInfo.officeHours}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
