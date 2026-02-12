import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Reddy",
    program: "B.Sc. Applied Life Sciences",
    quote: "YISU gave me practical skills that no textbook could. My internship at Aurobindo turned into a full-time role.",
  },
  {
    name: "Rahul Sharma",
    program: "B.Sc. Logistics & SCM",
    quote: "The industry exposure and hands-on training at YISU prepared me for real challenges in the supply chain sector.",
  },
  {
    name: "Ananya Krishnan",
    program: "B.Sc. Digital Technologies",
    quote: "From campus to career in just months — YISU's placement support and industry connections made all the difference.",
  },
];

const stats = [
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Industry Partners" },
  { value: "2,000+", label: "Students Enrolled" },
  { value: "20+", label: "Programs Offered" },
];

const Testimonials = () => {
  return (
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-3">
            Student <span className="text-primary">Success</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hear from graduates who transformed their careers through YISU.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border rounded-md p-6 bg-background"
            >
              <Quote className="w-6 h-6 text-gold mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
