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
              <div className="bg-card border border-border/40 rounded-xl p-5 h-full hover:border-accent/50 hover:shadow-md transition-all relative overflow-hidden">
                <Quote className="w-7 h-7 text-accent/30 mb-3" />

                <p className="text-xs text-foreground/80 leading-snug line-clamp-4 mb-4 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-2.5 pt-3 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
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
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial.course}
                    </p>
                  </div>
                </div>

                {testimonial.placement && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 bg-primary text-background text-[10px] font-bold rounded">
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
