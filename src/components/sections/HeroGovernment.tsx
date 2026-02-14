import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Button from "@/components/shared/Button";
import heroCampus from "@/assets/hero-campus.jpg";
import { leadership } from "@/data/leadership";
import GovernmentBadge from "@/components/shared/GovernmentBadge";

export default function HeroGovernment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        {/* Background - elegant gradient overlay */}
        <div className="absolute inset-0">
          <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/90 to-navy-light/85" />
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container-narrow">
          <div>
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Council Images */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                {leadership.slice(0, 4).map((leader, index) => (
                  <motion.div
                    key={leader.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-14 h-14 bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-full overflow-hidden cursor-pointer hover:border-accent/60 transition-all"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-lg font-serif font-bold text-white">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border-accent/40 rounded-full text-accent text-sm font-bold mb-6"
                >
                  Government of Telangana Initiative
                </motion.div>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6">
                  Young India Skills{" "}
                  <span className="text-gold relative inline-block">
                    University
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-accent to-accent/50 origin-left"
                    />
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                  Practical courses, real-world projects, and certifications that open doors
                  to new opportunities. Building the future of skills education in India.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <Button size="lg" variant="gold" className="text-base px-8 py-4 font-bold shadow-lg hover:shadow-xl">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4 border-white/60 text-white hover:bg-white/10 hover:border-white"
                  onClick={() => scrollToSection('about')}
                >
                  Explore Programs
                </Button>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-4 py-4 text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  Contact Us
                </a>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 text-sm text-white/70"
              >
                <span className="text-accent font-semibold">Quick Links:</span>
                <a href="#notices" className="hover:text-accent transition-colors">Admissions Open</a>
                <span className="text-white/40">•</span>
                <a href="#fees" className="hover:text-accent transition-colors">Fee Structure</a>
                <span className="text-white/40">•</span>
                <a href="#dates" className="hover:text-accent transition-colors">Important Dates</a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
