import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const featuredTestimonials = testimonials.slice(0, 8);

  return (
    <section className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="Hear from Our Students"
          subtitle="Testimonials"
          description="Discover how YISU has transformed careers"
          badgeVariant="glass"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="h-full"
            >
              <div className="bg-card border border-border/40 rounded-xl p-6 h-full hover:border-accent/50 hover:shadow-md transition-all relative overflow-hidden">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />

                <p className="text-sm text-foreground/80 leading-snug line-clamp-4 mb-4 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-xs font-bold text-foreground font-serif">
                        {testimonial.initials}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {testimonial.course}
                    </p>
                  </div>
                </div>

                {testimonial.placement && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-primary text-background text-xs font-bold rounded">
                      {testimonial.placement}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
