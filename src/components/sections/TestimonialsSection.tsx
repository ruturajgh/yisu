import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-card border-t border-border section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="Hear from Our Students"
          subtitle="Success Stories"
          description="Discover how YISU has transformed careers"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    initials?: string;
    course: string;
    placement?: string;
    quote: string;
    image?: string;
  };
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <motion.div
        className="bg-background border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-xl transition-all relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          className="flex flex-col items-center text-center mb-5"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/30 shadow-lg mb-4">
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-primary font-serif">
                {testimonial.initials}
              </span>
            )}
          </div>
          <h3 className="font-serif font-bold text-lg text-foreground">{testimonial.name}</h3>
          <p className="text-sm text-muted-foreground">{testimonial.course}</p>
        </motion.div>

        {testimonial.placement && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20"
          >
            <CheckCircle className="w-4 h-4" />
            {testimonial.placement}
          </motion.div>
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
