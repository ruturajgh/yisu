import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Users, Star, Play } from "lucide-react";
import Button from "@/components/shared/Button";
import { useCountUp } from "@/lib/hooks/use-count-up";
import GovernmentBadge from "@/components/shared/GovernmentBadge";
import heroCampus from "@/assets/hero-campus.jpg";
import { useRef } from "react";

export default function HeroGovernment() {
  const { displayValue: learnerCount } = useCountUp({
    end: 40680,
    duration: 2500,
    suffix: "+"
  });

  const { displayValue: courseCount } = useCountUp({
    end: 17,
    duration: 2500,
    suffix: "+"
  });

  const { displayValue: partnerCount } = useCountUp({
    end: 20,
    duration: 2500,
    suffix: "+"
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const cmInfo = {
    name: "Sri Anumula Revanth Reddy",
    designation: "Hon'ble Chief Minister, Telangana",
    role: "Chancellor, YISU"
  };

  return (
    <section ref={ref} className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
      {/* Video/Background */}
      <div className="absolute inset-0">
        <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/80 to-royal/75"
        />
      </div>

      {/* Government Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border-[20px] border-accent rounded-full"
        />
        <div className="absolute">
          <GovernmentBadge variant="emblem" size="xl" className="opacity-30" />
        </div>
      </div>

      {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Government Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full border border-accent/30"
            >
              <GovernmentBadge variant="seal" size="sm" />
              <span className="text-accent font-semibold text-sm tracking-wide">Government of Telangana</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif text-white">
                Young India Skills{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">University</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-accent to-transparent origin-left"
                  />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                India's first government-backed skills university with practical courses and real-world projects for job-ready graduates.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="gold" className="text-lg px-8 py-4 shadow-2xl">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-4">
                <Play className="mr-2 w-5 h-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3 px-5 py-4 glass-card rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5 font-serif">{learnerCount}</div>
                  <div className="text-xs text-white/60">Learners enrolled</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 glass-card rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5 font-serif">{courseCount}</div>
                  <div className="text-xs text-white/60">Industry courses</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - CM Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card border-2 border-accent/30 rounded-xl p-8 relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-accent/20 rounded-full"
              />
              <div className="absolute top-4 right-4">
                <GovernmentBadge variant="seal" size="md" />
              </div>

              {/* CM Portrait Placeholder */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full aspect-[4/5] max-w-sm mx-auto mb-6 rounded-xl bg-gradient-to-br from-navy/80 to-navy/60 border-2 border-accent/30 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center border-4 border-accent/50">
                      <span className="text-5xl font-serif font-bold text-accent">CM</span>
                    </div>
                    <p className="text-white/60 text-sm">Official Portrait</p>
                  </div>
                </div>
              </motion.div>

              {/* CM Info */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-xs font-semibold mb-4"
                >
                  CHANCELLOR
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">{cmInfo.name}</h3>
                <p className="text-accent font-medium text-sm mb-1">{cmInfo.designation}</p>
                <p className="text-white/60 text-sm">{cmInfo.role}</p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent my-6"
                />

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-white/80 text-sm leading-relaxed italic"
                >
                  "Education is the foundation upon which we build our future. At YISU, we're committed to equipping our youth with the skills needed for tomorrow's workforce."
                </motion.blockquote>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/50"
              >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-2 bg-accent rounded-full"
                  />
                </div>
              </motion.div>
      </motion.div>
    </section>
  );
}
