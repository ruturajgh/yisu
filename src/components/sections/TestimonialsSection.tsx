import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 section-padding relative overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase text-gold bg-white rounded-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy mb-4">
            Hear from Our Students
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how YISU has transformed careers
          </p>
        </motion.div>

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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 h-full relative">
        <Quote className="w-8 h-8 text-gold/30 mb-4" />

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-xl font-bold text-navy font-serif">
                {testimonial.initials}
              </span>
            )}
          </div>
          <h3 className="font-serif font-semibold text-base text-navy">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.course}</p>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed text-center italic">
          "{testimonial.quote}"
        </p>

        {testimonial.placement && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-xs font-semibold">
              {testimonial.placement}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
