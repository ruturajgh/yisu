import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyYISUPoints } from "@/data/constants";

export default function WhyYISUSection() {
  return (
    <section id="about" className="bg-gray-50 section-padding relative overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          title="Why Choose YISU"
          subtitle="Our Advantages"
          description="At YISU, we believe in empowering youth with industry-ready skills that make them job-ready from Day One."
          align="center"
          badgeVariant="glass"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {whyYISUPoints.map((point, index) => (
            <WhyCard key={point.id} point={point} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 h-full hover:shadow-md transition-shadow">
        <div className="text-4xl mb-3">
          {point.icon}
        </div>

        <h3 className="font-serif font-bold text-lg text-navy mb-3 leading-snug">
          {point.title}
        </h3>

        <p className="text-base text-gray-600 leading-relaxed">
          {point.description}
        </p>
      </div>
    </motion.div>
  );
}
