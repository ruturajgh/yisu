import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { siteStats } from "@/data/constants";
import SectionHeader from "@/components/shared/SectionHeader";

export default function StatsSection() {
  return (
    <section className="bg-card border-t border-border section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="Impact at a Glance"
          subtitle="Our Numbers"
          description="Building the future of skills education with measurable impact across Telangana and beyond."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {siteStats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: {
    id: number;
    label: string;
    value: number;
    suffix?: string;
    icon?: string;
  };
  delay: number;
}

function StatCard({ stat, delay }: StatCardProps) {
  const { displayValue } = useCountUp({
    end: stat.value,
    duration: 2000,
    suffix: stat.suffix
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group p-6 lg:p-8 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className="text-4xl mb-4"
      >
        {stat.icon}
      </motion.div>
      <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-serif">
        {displayValue}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}