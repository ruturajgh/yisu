import { motion } from "framer-motion";
import { ArrowRight, Award, Users, GraduationCap, Building2, ArrowDown } from "lucide-react";
import Button from "@/components/shared/Button";
import { useCountUp } from "@/lib/hooks/use-count-up";
import heroCampus from "@/assets/hero-campus.jpg";

const leadershipPhotos = [
  { name: "Sri A. Revanth Reddy", role: "Chancellor" },
  { name: "Mr. Anand Mahindra", role: "Chairman" },
  { name: "Sri D. Sridhar Babu", role: "Minister" },
  { name: "Mr. V.L.V.S.S. Subba Rao", role: "Vice Chancellor" }
];

export default function HeroSection() {
  const { displayValue: learnerCount } = useCountUp({
    end: 40680,
    duration: 2500,
    suffix: "+"
  });

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-royal/85" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-narrow section-padding">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent/40 rounded-sm text-accent text-sm font-semibold mb-8 tracking-wide backdrop-blur-sm bg-accent/10"
          >
            <Award className="w-4 h-4" />
            Established by Government of Telangana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif text-navy-foreground"
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
            className="text-lg md:text-xl lg:text-2xl text-navy-foreground/90 mb-4 font-sans max-w-3xl leading-relaxed"
          >
            Turn Your Dreams into Achievements with the Right Skills
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-navy-foreground/70 mb-8 font-sans max-w-2xl leading-relaxed"
          >
            Practical courses, real-world projects, and certifications that open doors to new opportunities. India's first government-backed skills university.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm text-navy-foreground/50 mb-10 font-sans"
          >
            YISU Act 2024, Government of Telangana
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg" variant="gold">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10 hover:border-accent/50">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
              Corporate Enquiry
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-navy-foreground/5 backdrop-blur-sm border border-navy-foreground/10 max-w-md"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1 font-serif" ref={null}>
                {learnerCount}
              </div>
              <div className="text-sm text-navy-foreground/70">Learners have begun their journey</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 max-w-sm"
        >
          <div className="space-y-4">
            {leadershipPhotos.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-navy-foreground/5 backdrop-blur-sm border border-navy-foreground/10 hover:bg-navy-foreground/10 hover:border-accent/30 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-royal/20 flex items-center justify-center text-primary font-serif font-bold text-xl border-2 border-primary/30 group-hover:border-accent/50 transition-colors">
                  {leader.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif font-semibold text-navy-foreground">{leader.name}</p>
                  <p className="text-xs text-accent uppercase tracking-wider">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
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