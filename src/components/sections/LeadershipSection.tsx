import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { leadership } from "@/data/leadership";

export default function LeadershipSection() {
  return (
    <section className="bg-light-blue section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="University Leadership"
          subtitle="Meet Our Leaders"
          description="Guided by distinguished leaders committed to transforming skills education in India."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {leadership.map((leader, index) => (
            <LeaderCard key={leader.id} leader={leader} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="md">
            View Full Leadership <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface LeaderCardProps {
  leader: {
    id: number;
    name: string;
    role: string;
    designation?: string;
    image?: string;
    quote?: string;
    description?: string;
  };
  index: number;
}

function LeaderCard({ leader, index }: LeaderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <motion.div
        className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-2xl transition-all relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/10 to-royal/10 flex items-center justify-center border-4 border-primary/20 group-hover:border-accent/50 transition-colors shadow-lg"
        >
          <span className="text-4xl font-serif font-bold text-primary">{leader.name.charAt(0)}</span>
        </motion.div>

        <div className="text-center mb-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">{leader.role}</p>
          <h3 className="font-serif font-bold text-lg text-foreground mb-1">{leader.name}</h3>
          {leader.designation && (
            <p className="text-xs text-muted-foreground leading-snug">{leader.designation}</p>
          )}
        </div>

        {leader.quote && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="relative pt-4 mt-4 border-t border-border/50"
          >
            <Quote className="w-5 h-5 text-primary/20 absolute top-2 left-0" />
            <p className="text-xs text-muted-foreground italic leading-relaxed pl-6 line-clamp-4 group-hover:text-foreground/80 transition-colors">
              "{leader.quote}"
            </p>
          </motion.div>
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}