import { GraduationCap, Building2, Briefcase, Target } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: GraduationCap, text: "Skills-first education model" },
  { icon: Building2, text: "Industry-integrated programs" },
  { icon: Briefcase, text: "Job-oriented curriculum" },
  { icon: Target, text: "Government-backed university" },
];

const AboutSnapshot = () => {
  return (
    <section className="bg-light-blue section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-foreground mb-6">
              About <span className="text-primary">YISU</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Young India Skills University (YISU) is India's pioneering government-backed skills university,
              established under the YISU Act 2024 by the Government of Telangana. YISU bridges the gap between
              academic learning and industry requirements through its innovative, employment-focused curriculum.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a vision to create a new generation of skilled professionals, YISU partners with leading
              industries to deliver programs that ensure every graduate is job-ready from day one.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-royal transition-colors">
              Read Full Overview →
            </a>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-border p-6 rounded-md hover:border-gold/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm font-semibold text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
