import { motion } from "framer-motion";
import { Bell, Flag, ChevronRight, Sparkles, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/constants";
import { cn } from "@/lib/utils";

export default function GovernmentBar() {
  const notifications = [
    "YISU Admissions Open for 2026-27 Academic Year - Apply Now!",
    "New Skill Development Programs Announced in BFSI & Healthcare",
    "Government-backed Certification Programs Available",
    "100% Placement Assistance for All Programs"
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-primary overflow-hidden shadow-lg"
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
            {/* Left Side: Logos + Contact */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Government Logos */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden sm:flex items-center gap-3"
              >
                <img
                  src="/images/tglogo.png"
                  alt="Government of Telangana"
                  className="h-10 opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>

              <span className="text-white/60 hidden sm:block">|</span>

              {/* Government Info */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="text-white/95 font-bold tracking-wide hidden md:inline">Government of Telangana</span>
                <span className="text-white/90 md:hidden">Govt. of Telangana</span>
                <motion.div className="hidden md:flex items-center gap-2 text-accent font-semibold">
                  <Flag className="w-3.5 h-3.5" />
                  <span className="text-accent/90">YISU Act 2024</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side: Contact + Social + YISU Brand */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Contact Info */}
              <motion.a
                href={`tel:${contactInfo.admissionsPhone}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden md:flex items-center gap-2 text-white/90 hover:text-accent transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{contactInfo.admissionsPhone}</span>
              </motion.a>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-2"
              >
                {[
                  { name: 'facebook', Icon: Facebook, url: socialLinks.facebook },
                  { name: 'twitter', Icon: Twitter, url: socialLinks.twitter },
                  { name: 'linkedin', Icon: Linkedin, url: socialLinks.linkedin },
                  { name: 'instagram', Icon: Instagram, url: socialLinks.instagram },
                  { name: 'youtube', Icon: Youtube, url: socialLinks.youtube }
                ].slice(0, window.innerWidth < 640 ? 3 : 5).map(({ name, Icon, url }, index) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>

              {/* YISU Branding */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-2 pl-4 border-l border-white/20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-accent/90 font-bold text-base hidden sm:inline">YISU</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Notification Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t-2 border-accent/50 bg-primary"
        >
          <div className="container-narrow px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bell className="w-5 h-5 text-accent flex-shrink-0" />
              </motion.div>
              <div className="flex-1 overflow-hidden">
                <motion.div
                  className="flex gap-12 whitespace-nowrap"
                  animate={{ x: [0, -800] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  {notifications.map((notice, index) => (
                    <span key={index} className="text-white/95 text-base md:text-lg flex items-center gap-2">
                      {notice}
                      <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                    </span>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {notifications.map((notice, index) => (
                    <span key={`dup-${index}`} className="text-white/95 text-base md:text-lg flex items-center gap-2">
                      {notice}
                      <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
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
