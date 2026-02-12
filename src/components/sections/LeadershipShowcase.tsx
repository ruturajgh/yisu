import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, Twitter, Linkedin, Award, TrendingUp, ChevronDown, X } from "lucide-react";
import GovernmentBadge from "@/components/shared/GovernmentBadge";
import { leadership } from "@/data/leadership";
import { cn } from "@/lib/utils";

export default function LeadershipShowcase() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadership[0] | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-navy via-navy/95 to-secondary section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-[600px] h-[600px] border-[1px] border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] border-[1px] border-primary/10 rounded-full"
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <GovernmentBadge variant="seal" size="sm" />
            <span className="text-accent font-semibold text-sm tracking-widest">LEADERSHIP COUNCIL</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
            Visionary Leaders
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Guided by distinguished leaders committed to transforming skills education in India through Telangana Rising initiative.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadership.map((leader, index) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              index={index}
              onClick={() => setSelectedLeader(leader)}
            />
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative glass bg-white/5 backdrop-blur-md border border-accent/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <GovernmentBadge variant="emblem" size="md" />
          </div>
          <Quote className="w-8 h-8 text-accent mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl text-white/90 font-serif italic mb-4">
            "Building the future of skills education through visionary leadership and unwavering commitment to excellence."
          </blockquote>
          <p className="text-accent font-semibold">— Young India Skills University</p>
        </motion.div>
      </div>

      {/* Leader Detail Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <LeaderModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

interface LeaderCardProps {
  leader: typeof leadership[0];
  index: number;
  onClick: () => void;
}

function LeaderCard({ leader, index, onClick }: LeaderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="glass bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative p-8">
          {/* Role Badge */}
          <div className="absolute top-6 right-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <GovernmentBadge variant="seal" size="sm" className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          {/* Portrait */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="aspect-[4/5] max-w-[200px] mx-auto rounded-2xl bg-gradient-to-br from-navy/80 to-navy/60 border-2 border-accent/30 flex items-center justify-center overflow-hidden relative group-hover:border-accent/60 transition-colors"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/50 mb-3">
                    <span className="text-4xl font-serif font-bold text-accent">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs">Official Portrait</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info */}
          <div className="text-center relative z-10">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-accent text-xs font-semibold mb-3">
              {leader.role}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">{leader.name}</h3>
            <p className="text-accent font-medium text-sm mb-4">{leader.designation}</p>
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="text-white/70 text-sm leading-relaxed italic mb-4"
            >
              "{leader.quote}"
            </motion.blockquote>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent/80 transition-colors"
            >
              View Full Profile <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface LeaderModalProps {
  leader: typeof leadership[0];
  onClose: () => void;
}

function LeaderModal({ leader, onClose }: LeaderModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass bg-navy/95 backdrop-blur-xl border-2 border-accent/30 rounded-3xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center hover:bg-accent/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left - Portrait */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy/80 to-navy/60 border-2 border-accent/30 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-accent/20 flex items-center justify-center border-4 border-accent/50 mb-4">
                    <span className="text-5xl font-serif font-bold text-accent">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">Official Portrait</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="glass bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white/40 text-xs mb-2">Digital Signature</p>
              <p className="text-accent font-serif text-xl italic">{leader.name}</p>
            </div>

            {/* Social Links */}
            {leader.socialLinks && (
              <div className="flex gap-3">
                {leader.socialLinks.twitter && (
                  <a
                    href={leader.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 glass bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-white"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                )}
                {leader.socialLinks.linkedin && (
                  <a
                    href={leader.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 glass bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <GovernmentBadge variant="seal" size="sm" />
                <span className="text-accent font-semibold text-sm tracking-widest">{leader.role.toUpperCase()}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">{leader.name}</h2>
              <p className="text-accent font-medium">{leader.designation}</p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass bg-accent/10 border border-accent/20 rounded-xl p-6"
            >
              <Quote className="w-6 h-6 text-accent mb-3" />
              <p className="text-white/90 text-lg italic leading-relaxed">{leader.quote}</p>
            </motion.div>

            {/* Full Bio */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Biography
              </h3>
              <p className="text-white/70 leading-relaxed">{leader.fullBio || leader.description}</p>
            </div>

            {/* Achievements */}
            {leader.achievements && leader.achievements.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {leader.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Media Quotes */}
            {leader.mediaQuotes && leader.mediaQuotes.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">Media Mentions</h3>
                <div className="space-y-2">
                  {leader.mediaQuotes.map((quote, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      className="glass bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                    >
                      <p className="text-white/60 text-sm italic">"{quote}"</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
