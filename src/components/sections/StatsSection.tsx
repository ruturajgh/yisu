import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { siteStats } from "@/data/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import GovernmentBadge from "@/components/shared/GovernmentBadge";

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 section-padding relative overflow-hidden">
      {/* Very Subtle Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 bg-accent/3 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-primary/3 rounded-full blur-2xl"
        />
      </div>

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
      className="group bg-white/70 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg rounded-xl p-6 lg:p-8 transition-all relative overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-4"
        >
          {stat.icon}
        </motion.div>
        <div className="text-3xl lg:text-4xl font-bold text-accent mb-2 font-serif">
          {displayValue}
        </div>
        <div className="text-sm text-muted-foreground font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}
