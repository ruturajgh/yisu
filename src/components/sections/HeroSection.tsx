import { motion } from "framer-motion";
import { ArrowRight, Award, Users, ArrowDown } from "lucide-react";
import Button from "@/components/shared/Button";
import { useCountUp } from "@/lib/hooks/use-count-up";
import heroCampus from "@/assets/hero-campus.jpg";

export default function HeroSection() {
  const { displayValue: learnerCount } = useCountUp({
    end: 40680,
    duration: 2500,
    suffix: "+"
  });

  return (
    <section className="relative min-h-[600px] lg:min-h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-royal/85" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-narrow section-padding">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-accent/40 rounded-sm text-accent text-sm font-semibold mb-6 tracking-wide backdrop-blur-sm bg-accent/10"
          >
            <Award className="w-3.5 h-3.5" />
            Government of Telangana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-serif text-navy-foreground"
          >
            Young India Skills{" "}
            <span className="relative inline-block">
              <span className="relative z-10">University</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-accent to-accent/50 origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-navy-foreground/80 mb-6 font-sans max-w-2xl"
          >
            India's first government-backed skills university with practical courses and real-world projects for job-ready graduates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Button size="lg" variant="gold">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10 hover:border-accent/50">
              Explore Programs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-navy-foreground/5 backdrop-blur-sm border border-navy-foreground/10 max-w-md"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-0.5 font-serif" ref={null}>
                {learnerCount}
              </div>
              <div className="text-sm text-navy-foreground/70">Learners enrolled</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-navy-foreground/50"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}