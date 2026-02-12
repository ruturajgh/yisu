import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { notices } from "@/data/notices";

export default function NewsTicker() {
  const latestNotices = notices.slice(0, 5);

  return (
    <div className="bg-secondary border-b border-secondary-foreground/10 overflow-hidden">
      <div className="container-narrow">
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 border-r border-secondary-foreground/10">
            <Bell className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Notices</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-8 py-2.5"
              animate={{
                x: [0, -1000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear"
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
            >
              {[...latestNotices, ...latestNotices].map((notice, index) => (
                <motion.a
                  key={`${notice.id}-${index}`}
                  href={notice.link || "#"}
                  className="flex-shrink-0 text-sm text-secondary-foreground/90 hover:text-accent transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {notice.title}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}