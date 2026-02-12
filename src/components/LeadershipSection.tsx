import { motion } from "framer-motion";

const leaders = [
  { title: "Chancellor", name: "Hon. Governor of Telangana", role: "Chancellor, YISU" },
  { title: "Minister", name: "Minister of Education", role: "Government of Telangana" },
  { title: "Chairman", name: "Sri. Chairman", role: "Chairman, YISU Governing Body" },
  { title: "Vice Chancellor", name: "Prof. Vice Chancellor", role: "Vice Chancellor, YISU" },
];

const LeadershipSection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-3">
            University <span className="text-primary">Leadership</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Guided by distinguished leaders committed to transforming skills education in India.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-muted border-2 border-border group-hover:border-gold transition-colors flex items-center justify-center">
                <span className="text-3xl font-serif font-bold text-primary">{leader.title[0]}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">{leader.title}</p>
              <p className="font-serif font-semibold text-foreground text-sm">{leader.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{leader.role}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-sm text-primary hover:text-royal font-medium underline underline-offset-4">
            View Full Leadership →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
