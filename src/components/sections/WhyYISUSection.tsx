import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyYISUPoints } from "@/data/constants";

export default function WhyYISUSection() {
  return (
    <section id="about" className="bg-card border-t border-border section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="Why Choose YISU"
          subtitle="Our Advantages"
          description="At YISU, we believe in empowering youth with industry-ready skills that make them job-ready from Day One."
          align="center"
          badgeVariant="glass"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {whyYISUPoints.map((point, index) => (
            <WhyCard key={point.id} point={point} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg">
            Learn More About YISU <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface WhyCardProps {
  point: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

function WhyCard({ point, index }: WhyCardProps) {
  const isFeatured = index === 0 || index === 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <motion.div
        className={`glass-card ${
          isFeatured ? 'border-primary/30 bg-primary/5' : 'border-border'
        } rounded-xl p-6 h-full hover:border-primary/40 transition-all relative overflow-hidden`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          className={`text-5xl mb-4 ${isFeatured ? 'text-6xl' : ''}`}
        >
          {point.icon}
        </motion.div>

        <h3 className="font-serif font-bold text-lg text-foreground mb-3 leading-snug">
          {point.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          • {point.description}
        </p>

        {isFeatured && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
}