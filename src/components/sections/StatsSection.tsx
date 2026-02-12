import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { siteStats } from "@/data/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import GovernmentBadge from "@/components/shared/GovernmentBadge";

export default function StatsSection() {
  return (
    <section className="bg-card border-t border-border section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border-[1px] border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 border-[1px] border-primary/10 rounded-full"
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <GovernmentBadge variant="seal" size="sm" />
            <span className="text-accent font-semibold text-sm tracking-widest">IMPACT METRICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            Impact at a Glance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future of skills education with measurable impact across Telangana and beyond.
          </p>
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
      whileHover={{ y: -8 }}
      className="group glass bg-white/50 backdrop-blur-md border border-white/20 hover:border-accent/50 rounded-2xl p-6 lg:p-8 transition-all relative overflow-hidden"
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
