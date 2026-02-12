import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Phone, Mail } from "lucide-react";
import Button from "@/components/shared/Button";
import { contactInfo } from "@/data/constants";

export default function CTASection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 border-2 border-accent mb-8"
          >
            <GraduationCap className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight"
          >
            Ready to Begin Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto"
          >
            Take the first step toward a transformative educational experience at Young India Skills University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" variant="gold" className="text-lg px-10 py-4 shadow-2xl">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 bg-white/20 text-white border-2 border-white/70 hover:bg-white/30 hover:border-white">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="text-xs text-white/70">Admissions</p>
                <p className="font-bold text-base">{contactInfo.admissionsPhone}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Mail className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="text-xs text-white/70">Email</p>
                <p className="font-bold text-base">{contactInfo.admissionsEmail}</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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