import { Shield, Handshake, TrendingUp, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Shield,
    title: "Government Backing",
    description: "Established under YISU Act 2024 by the Government of Telangana, ensuring institutional credibility.",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description: "Curriculum co-designed with leading corporates for real-world relevance and employability.",
  },
  {
    icon: TrendingUp,
    title: "Placement-Oriented",
    description: "Structured placement support with industry partners ensuring career opportunities for every graduate.",
  },
  {
    icon: Wrench,
    title: "Practical Learning",
    description: "Hands-on training, internships, and project-based learning from day one of the program.",
  },
];

const WhyYISU = () => {
  return (
    <section className="bg-light-blue section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-3">
            Why Choose <span className="text-primary">YISU</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Four pillars that define our commitment to transforming skills education.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-md p-6 text-center hover:shadow-md hover:border-gold/40 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYISU;
