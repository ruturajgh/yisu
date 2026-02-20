import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { leadership } from "@/data/leadership";

export default function LeadershipShowcase() {
  const featuredLeaders = leadership.slice(0, 4);

  return (
    <section className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="Visionary Leaders"
          subtitle="Leadership"
          description="Led by industry veterans and government visionaries"
          badgeVariant="glass"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-6">
          {featuredLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <div className="bg-card border border-border/40 rounded-xl overflow-hidden h-full hover:border-accent/50 hover:shadow-md transition-all">
                {/* Bigger Portrait */}
                <div className="h-56 bg-muted/50 flex items-center justify-center overflow-hidden">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold text-primary">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {leader.designation}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {leader.role}
                  </p>
                  {leader.quote && (
                    <p className="text-sm text-muted-foreground leading-snug line-clamp-5 italic">
                      "{leader.quote}"
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
