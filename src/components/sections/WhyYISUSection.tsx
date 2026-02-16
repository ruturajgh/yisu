import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyYISUPoints } from "@/data/constants";

export default function WhyYISUSection() {
  return (
    <section id="about" className="section bg-card relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-narrow">
        <SectionHeader
          title="Why Choose YISU"
          subtitle="Our Advantages"
          description="At YISU, we believe in empowering youth with industry-ready skills"
          badgeVariant="glass"
          className="mb-6"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {whyYISUPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative group h-full"
            >
              <div className="bg-card border border-border/40 rounded-xl p-5 h-full hover:border-accent/50 hover:shadow-md transition-all">
                {/* Icon + Short Title */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {point.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {point.title.split(' ').slice(0, 2).join(' ')}
                  </h3>
                </div>

                {/* Full info on hover */}
                <div className="absolute inset-0 bg-foreground/95 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-4">
                  <span className="text-xl mb-2">{point.icon}</span>
                  <h3 className="text-sm font-semibold text-background leading-tight mb-2 text-center">
                    {point.title}
                  </h3>
                  <p className="text-xs text-background/80 leading-tight text-center">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6"
        >
          <Button variant="gold" size="sm" className="text-sm">
            Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
