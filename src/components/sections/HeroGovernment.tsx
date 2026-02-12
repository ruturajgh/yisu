import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import heroCampus from "@/assets/hero-campus.jpg";

export default function HeroGovernment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background - elegant gradient overlay */}
      <div className="absolute inset-0">
        <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy/85 to-navy-light/80" />
      </div>

      <div className="relative z-10 container-narrow">
        <div className="max-w-3xl">
          {/* Government Logos - refined, smaller */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <img
              src="/images/tglogo.png"
              alt="Government of Telangana"
              className="h-16 opacity-90"
            />
            <div className="w-px h-12 bg-white/20" />
            <img
              src="/images/TelanganaRaising.jpg"
              alt="Telangana Rising"
              className="h-16 rounded-full"
            />
          </motion.div>

          {/* Heading - classic, commanding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-6">
              Young India Skills{" "}
              <span className="text-gold">University</span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Practical courses, real-world projects, and certifications that open doors
              to new opportunities. Building the future of skills education.
            </p>
          </motion.div>

          {/* CTAs - clean, no scale effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" variant="gold" className="text-base px-8 py-4">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-4 border-white text-white hover:bg-white/10"
              onClick={() => scrollToSection('about')}
            >
              Explore Programs
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator - no bouncing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
