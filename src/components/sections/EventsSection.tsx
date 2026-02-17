import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import { events } from "@/data/events";

export default function EventsSection() {
  const latestEvents = events.slice(0, 6);

  return (
    <section className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="Latest Events"
          subtitle="Campus Updates"
          description="Stay updated with latest happenings at YISU"
          align="center"
          badgeVariant="glass"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {latestEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="h-full"
            >
              <div className="bg-card relative border border-border/40 rounded-xl overflow-hidden h-full hover:border-primary/50 hover:shadow-md transition-all group">
                {/* Date Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="flex flex-col items-center bg-primary px-2.5 py-1.5 rounded-lg shadow-sm">
                    <span className="text-xs font-bold text-background uppercase">
                      {event.date.slice(0, 3)}
                    </span>
                    <span className="text-base font-bold text-background font-serif leading-none mt-0.5">
                      {event.date.match(/\d+/)?.[0] || ""}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-14 px-4 pb-4 h-full flex flex-col">
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 mb-3">
                    {event.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {event.date.split(", ")[1] || ""}
                    </span>
                    {event.isNew && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-2 py-0.5 bg-accent text-background text-[10px] font-bold rounded"
                      >
                        NEW
                      </motion.span>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-border/30 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
