import { Building, FlaskConical, Monitor, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  { icon: Building, title: "Academic Blocks", desc: "Modern classrooms and seminar halls" },
  { icon: FlaskConical, title: "Research Labs", desc: "State-of-the-art laboratories" },
  { icon: Monitor, title: "Digital Centre", desc: "Advanced computing infrastructure" },
  { icon: Dumbbell, title: "Sports Complex", desc: "Indoor and outdoor sports facilities" },
];

const CampusSection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-3">
            Campus & <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A world-class campus designed for skills-oriented learning and holistic development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border rounded-md p-6 text-center hover:border-gold/40 transition-all"
            >
              <f.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
