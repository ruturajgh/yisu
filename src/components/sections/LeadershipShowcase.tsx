import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import GovernmentBadge from "@/components/shared/GovernmentBadge";
import { leadership } from "@/data/leadership";

export default function LeadershipShowcase() {
  return (
    <section id="leadership" className="section bg-navy text-white">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <GovernmentBadge variant="seal" size="sm" />
            <span className="text-gold font-bold text-sm tracking-widest">LEADERSHIP COUNCIL</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-3">
            Visionary Leaders
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Guided by distinguished leaders committed to transforming skills education in India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {leadership.map((leader, index) => (
            <LeaderCard key={leader.id} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface LeaderCardProps {
  leader: typeof leadership[0];
  index: number;
}

function LeaderCard({ leader, index }: LeaderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-xl bg-gold/20 flex items-center justify-center border-2 border-gold">
            <span className="text-3xl font-serif font-bold text-gold">
              {leader.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-bold mb-3">
            {leader.role}
          </div>
          <h3 className="text-xl font-bold font-serif mb-1">{leader.name}</h3>
          <p className="text-gold text-sm font-medium mb-3">{leader.designation}</p>
          <p className="text-white/70 text-sm leading-relaxed italic">"{leader.quote}"</p>
        </div>
      </div>
    </motion.div>
  );
}
