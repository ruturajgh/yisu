import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Phone, Mail } from "lucide-react";
import Button from "@/components/shared/Button";
import { contactInfo } from "@/data/constants";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-royal to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

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
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
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
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Phone className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-xs text-white/60">Admissions</p>
                <p className="font-semibold">{contactInfo.admissionsPhone}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Mail className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-xs text-white/60">Email</p>
                <p className="font-semibold text-sm">{contactInfo.admissionsEmail}</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-white/60 mt-8"
          >
            {contactInfo.officeHours}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}