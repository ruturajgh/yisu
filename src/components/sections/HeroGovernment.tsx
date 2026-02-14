import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Building2, TrendingUp } from "lucide-react";
import Button from "@/components/shared/Button";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { siteStats } from "@/data/constants";
import heroCampus from "@/assets/hero-campus.jpg";

export default function HeroGovernment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Live statistics with count-up animation
  const { displayValue: learnerCount } = useCountUp({
    end: 40000,
    duration: 2500,
    suffix: "+"
  });

  const { displayValue: programCount } = useCountUp({
    end: 50,
    duration: 2000,
    suffix: "+"
  });

  const { displayValue: partnerCount } = useCountUp({
    end: 120,
    duration: 2200,
    suffix: "+"
  });

  const { displayValue: placementRate } = useCountUp({
    end: 95,
    duration: 1800,
    suffix: "%"
  });

  const stats = [
    {
      label: "Learners Enrolled",
      value: learnerCount,
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      label: "Programs Offered",
      value: programCount,
      icon: BookOpen,
      color: "from-accent to-accent/70"
    },
    {
      label: "Industry Partners",
      value: partnerCount,
      icon: Building2,
      color: "from-green-500 to-green-600"
    },
    {
      label: "Placement Rate",
      value: placementRate,
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Government Logos */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <img
                src="/images/tglogo.png"
                alt="Government of Telangana"
                className="h-16 opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="w-px h-12 bg-white/20" />
              <img
                src="/images/TelanganaRaising.jpg"
                alt="Telangana Rising"
                className="h-16 rounded-full hover:scale-105 transition-transform"
              />
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-accent/40 rounded-full text-accent text-sm font-bold mb-6"
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
                    className="absolute bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-accent to-accent/50 origin-left"
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

          {/* Right Content - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl transform transition-transform group-hover:scale-105" />
                    <div className="relative p-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="text-4xl font-bold text-accent font-serif mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/80 font-medium leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 relative"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl" />
              <div className="relative p-6">
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Admissions 2026-27
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Applications now open for all undergraduate and postgraduate programs. Apply before March 31, 2026.
                </p>
                <Button variant="gold" size="sm" className="w-full">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>

      {/* Mobile Statistics Section - Separate from hero */}
      <section className="lg:hidden relative bg-gradient-to-br from-navy-deep/90 via-navy/85 to-navy-light/80 py-8">
        <div className="container-narrow px-4">
          <div className="grid grid-cols-2 gap-3">
            {stats.slice(0, 2).map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-accent" />
                    <div className="text-2xl font-bold text-accent font-serif">{stat.value}</div>
                  </div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
