import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Users } from "lucide-react";
import Button from "@/components/shared/Button";
import { useCountUp } from "@/lib/hooks/use-count-up";
import heroCampus from "@/assets/hero-campus.jpg";
import { useRef } from "react";

const leaders = [
  { id: 1, name: "Sri A. Revanth Reddy", initials: "SAR" },
  { id: 2, name: "Sri D. Sridhar Babu", initials: "DSB" },
  { id: 3, name: "Mr. Anand Mahindra", initials: "AM" },
  { id: 4, name: "Mr. V.L.V.S.S. Subba Rao", initials: "VSS" }
];

export default function HeroGovernment() {
  const { displayValue: learnerCount } = useCountUp({
    end: 56754,
    duration: 2500,
    suffix: "+"
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative flex items-center overflow-hidden">
      {/* Video/Background */}
      <div className="absolute inset-0">
        <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-primary/95"
        />
      </div>

      {/* Government Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border-[20px] border-white rounded-full"
        />
      </div>



      <div className="relative z-10 container-narrow section-padding">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl col-span-2">
            {/* Government Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2  "
            >
              <img
                src="/images/tglogo.png"
                alt="Government of Telangana"
                className="h-24 w-auto relative z-10"
              />

              <img
                src="/images/TelanganaRaising.jpg"
                alt="Telangana Rising"
                className="h-24 w-auto relative z-10 rounded-full"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif text-white">
                Young India Skills{" "}
                <span className="text-white relative inline-block">
                  University
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 w-full h-[4px] bg-accent origin-left"
                  />
                </span>
              </h1>


              <p className="text-lg text-white/95 max-w-xl leading-relaxed">
                Practical courses, real-world projects, and certifications that open doors to new opportunities.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="gold" className="text-lg px-8 py-4 shadow-xl">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:border-white text-lg px-8 py-4"
                onClick={() => scrollToSection('about')}
              >
                Know more About us
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex absolute top-0 right-2 items-center gap-4 px-6 py-4 w-max bg-white rounded-full shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-serif">{learnerCount}</div>
                <div className="text-sm text-primary">learners visited YISU</div>
              </div>
            </motion.div>

            {/* Leadership Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <button
                onClick={() => scrollToSection('leadership')}
                className="group text-left"
              >
                <p className="text-base text-accent font-bold mb-4 flex items-center gap-2">
                  Meet Our Leadership <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {leaders.map((leader, index) => (
                    <div
                      key={leader.id}
                      className="flex-shrink-0 flex flex-col items-center group-hover:scale-105 transition-transform"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center border-2 border-primary mb-2"
                      >
                        <span className="text-base font-serif font-bold text-primary">
                          {leader.initials}
                        </span>
                      </motion.div>
                      <p className="text-sm text-white font-semibold whitespace-nowrap max-w-[100px] text-center">
                        {leader.name.split(' ').slice(-2).join(' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right - Government Logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative Background Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] border-2 border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[240px] h-[240px] border border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[180px] h-[180px] border border-white/10 rounded-full"
            />
          </motion.div>
        </div>
      </div >

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/90"
        >
          <div className="w-5 h-9 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div >
    </section >
  );
}
