import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { siteStats } from "@/data/constants";

export default function StatsSection() {
  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">Impact Metrics</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-navy mt-2 mb-3">
            Impact at a Glance
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Building future of skills education with measurable impact across Telangana and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {siteStats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} delay={index * 0.05} />
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
      transition={{ duration: 0.4, delay }}
      className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 text-center hover:shadow-md transition-shadow"
    >
      <div className="text-3xl mb-3">{stat.icon}</div>
      <div className="text-3xl font-bold font-serif text-navy mb-2">{displayValue}</div>
      <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
    </motion.div>
  );
}
