import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, GraduationCap, ExternalLink } from "lucide-react";
import Button from "@/components/shared/Button";

export default function LogoHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Layer 2: Logo Header with Actions */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative bg-white border-b border-border transition-all duration-300 z-50"
      >
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Left: Multiple Logos */}
            <div className="flex items-center gap-6">
              {/* YISU Logo - Clickable to home */}
              <a href="/" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src="/images/skills university.svg"
                    alt="Young India Skills University"
                    className="h-16 w-auto"
                  />
                </motion.div>
              </a>

              {/* Vertical Separator */}
              <div className="w-px h-12 bg-border opacity-50" aria-hidden="true"></div>

              {/* Telangana Rising Logo - Decorative (no action) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img
                  src="/images/TelanganaRaising.jpg"
                  alt="Telangana Rising"
                  className="h-16 w-auto rounded-full"
                />
              </motion.div>
            </div>

            {/* Right: Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="p-3 rounded-lg text-primary/80 hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Search (Ctrl+K)"
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Notices Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 rounded-lg text-primary/80 hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Notices (3 new)"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </motion.button>

              {/* Student Portal Link */}
              <a
                href="https://portal.yisu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary/80 hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Student Portal</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>

              {/* Apply Now Button - Prominent */}
              <Button variant="gold" size="lg" className="text-base font-bold px-8 py-3 shadow-lg hover:shadow-xl">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Modal */}
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center pt-28 bg-black/60 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl mx-4 bg-white shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Search className="w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search programs, courses, events, news..."
                className="flex-1 text-lg outline-none placeholder:text-foreground/40"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-foreground/60 mb-4 font-semibold">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {["BFSI Program", "Admissions 2026", "Fee Structure", "Campus Tour", "Placement", "Online Courses"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-primary/80 hover:text-accent hover:bg-accent/5 rounded-lg transition-all border border-border"
                  >
                    {term}
                  </button>
                ))}
              </div>
              <p className="text-xs text-foreground/40 mt-6">Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd> to close</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
