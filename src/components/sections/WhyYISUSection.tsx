import { motion } from "framer-motion";
import { ArrowRight, Target, Wrench, UserCircle, Briefcase, TrendingUp, Award } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyYISUPoints } from "@/data/constants";

export default function WhyYISUSection() {
  const iconMap = {
    Target,
    Wrench,
    UserCircle,
    Briefcase,
    TrendingUp,
    Award
  } as const;

  return (
    <section id="about" className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="Why Choose YISU"
          subtitle="Our Advantages"
          description="At YISU, we believe in empowering youth with industry-ready skills"
          badgeVariant="glass"
          className="mb-6"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6">
          {whyYISUPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.03 }}
                className="h-full"
              >
                <div className="bg-card border border-border/40 rounded-xl p-6 h-full hover:border-accent/50 hover:shadow-md transition-all">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <span className="text-3xl">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
