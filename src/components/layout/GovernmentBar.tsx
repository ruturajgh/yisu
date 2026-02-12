import { motion } from "framer-motion";
import { Bell, Flag, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GovernmentBar() {
  const notifications = [
    "YISU Admissions Open for 2026-27 Academic Year",
    "New Skill Development Programs Announced",
    "Government-backed Certification Programs"
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative">
        {/* Top Government Branding */}
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="text-white/95 font-bold tracking-wide">Government of Telangana</span>
              </motion.div>
              <span className="text-white/60 hidden md:inline">|</span>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:flex items-center gap-2 text-accent font-semibold"
              >
                <Flag className="w-4 h-4" />
                <span className="text-accent/90">YISU Act 2024</span>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-accent" />
              </motion.div>
                <span className="text-accent/90 font-bold text-base">YISU</span>
            </motion.div>
          </div>
        </div>

        {/* Notification Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t-2 border-accent bg-primary"
        >
          <div className="container-narrow px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bell className="w-5 h-5 text-accent flex-shrink-0" />
              </motion.div>
              <div className="flex-1 overflow-hidden">
                <motion.div
                  className="flex gap-12 whitespace-nowrap"
                  animate={{ x: [0, -500] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {notifications.map((notice, index) => (
                    <span key={index} className="text-white/95 text-base flex items-center gap-2">
                      {notice}
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </span>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {notifications.map((notice, index) => (
                    <span key={`dup-${index}`} className="text-white text-base flex items-center gap-2">
                      {notice}
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
