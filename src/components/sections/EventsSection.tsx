import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import BadgeComp from "@/components/shared/Badge";
import { events } from "@/data/events";

export default function EventsSection() {
  const latestEvents = events.slice(0, 4);

  return (
    <section className="bg-gray-50 section-padding relative overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          title="Latest Events"
          subtitle="Campus Updates"
          description="Stay updated with latest happenings at YISU"
          align="center"
          badgeVariant="glass"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {latestEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-5 h-full hover:shadow-md transition-shadow relative overflow-hidden">


        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          className="flex items-start gap-3"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-navy flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-white uppercase">{month}</span>
              <span className="text-lg font-bold text-white font-serif leading-none mt-1">{day}</span>
            </div>
          </div>
          <div className="flex-1 relative min-w-0">
            <h3 className="font-serif font-bold text-base text-navy mb-2 leading-snug line-clamp-2 group-hover:text-gold transition-colors">
              {event.title}
            </h3>

            <div className="flex justify-between">
              <p className="text-sm text-gray-600">{year ?? ''}</p>

              {event.isNew && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className=" bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded"
                >
                  NEW
                </motion.span>
              )}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
          className="pt-3 mt-3 border-t border-gray-200"
        >
          <a
            href={event.link || "#"}
            className="text-sm font-bold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
