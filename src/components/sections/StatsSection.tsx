import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { siteStats } from "@/data/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import GovernmentBadge from "@/components/shared/GovernmentBadge";

export default function StatsSection() {
  return (
    <section className="bg-secondary section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
          <SectionHeader
            title="Impact at a Glance"
            subtitle="IMPACT METRICS"
            description="Building future of skills education with measurable impact across Telangana and beyond."
            align="center"
            badgeVariant="glass"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
      whileHover={{ scale: 1.05 }}
      className="group bg-white border-2 border-primary hover:border-accent hover:shadow-lg rounded-xl p-6 lg:p-8 transition-all relative overflow-hidden"
    >
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="text-5xl mb-4"
        >
          {stat.icon}
        </motion.div>
        <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 font-serif">
          {displayValue}
        </div>
        <div className="text-base text-primary/80 font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}
