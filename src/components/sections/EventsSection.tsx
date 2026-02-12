import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import BadgeComp from "@/components/shared/Badge";
import { events } from "@/data/events";

export default function EventsSection() {
  const latestEvents = events.slice(0, 4);

  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          title="Latest Events"
          subtitle="Campus Updates"
          description="Stay updated with latest happenings at YISU"
          align="center"
          badgeVariant="glass"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {latestEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="primary" size="lg">
            View All Events <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface EventCardProps {
  event: {
    id: number;
    date: string;
    title: string;
    description: string;
    isNew?: boolean;
    link?: string;
  };
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const formatDate = (dateStr: string) => {
    const [monthPart, yearPart] = dateStr.split(", ");
    return {
      month: monthPart?.slice(0, 3),
      day: monthPart?.match(/\d+/)?.[0] || "",
      year: yearPart
    };
  };

  const { month, day, year } = formatDate(event.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group h-full"
    >
      <motion.div
        className="bg-secondary border-2 border-primary hover:border-accent hover:shadow-lg rounded-xl p-6 h-full transition-all relative overflow-hidden"
      >
        {event.isNew && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="absolute top-4 right-4"
          >
            <BadgeComp variant="new">NEW</BadgeComp>
          </motion.div>
        )}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-lg bg-primary border-2 border-primary flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-white uppercase">{month}</span>
              <span className="text-xl font-bold text-white font-serif leading-none mt-1">{day}</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-bold text-base text-primary mb-2 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
              {event.title}
            </h3>
            {year && (
              <p className="text-sm text-primary/70">{year}</p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          className="pt-4 mt-4 border-t-2 border-primary/50"
        >
          <a
            href={event.link || "#"}
            className="text-sm font-bold text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}