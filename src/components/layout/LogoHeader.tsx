import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, GraduationCap, ExternalLink, Menu, X, ChevronDown, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import { contactInfo } from "@/data/constants";

const navItems = [
  {
    label: "About",
    children: [
      { label: "Overview", href: "#about" },
      { label: "Leadership", href: "#leadership" },
      { label: "University Act", href: "#act" },
      { label: "Campus", href: "#campus" }
    ]
  },
  {
    label: "Schools & Programs",
    children: [
      { label: "Our Schools", href: "#schools" },
      { label: "Programs", href: "#programs" },
      { label: "Courses", href: "#courses" },
      { label: "Industry Partners", href: "#partners" }
    ]
  },
  {
    label: "Admissions",
    children: [
      { label: "Apply Now", href: "#apply", featured: true },
      { label: "Eligibility", href: "#eligibility" },
      { label: "Fees & Scholarships", href: "#fees" },
      { label: "Important Dates", href: "#dates" }
    ]
  },
  {
    label: "Notices & Events",
    href: "#notices",
    badge: "3 New"
  },
  { label: "Contact", href: "#contact" }
];

export default function LogoHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
                  className="h-14 w-auto rounded-full"
                />
              </motion.div>
            </div>

            {/* Right: Actions - Desktop */}
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

            {/* Mobile: Hamburger Menu Button */}
            <button
              className="lg:hidden p-3 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 z-[60] flex"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-full max-w-md ml-auto bg-white shadow-2xl h-full overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Close Button */}
                <div className="flex items-center justify-between">
                  <img src="/images/skills university.svg" alt="YISU" className="h-10" />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3.5 text-base font-bold text-primary hover:text-accent hover:bg-accent/5 rounded-lg transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 text-xs font-bold text-accent bg-accent/10 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </a>
                      {item.children && (
                        <div className="pl-4 mt-1 space-y-0.5">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all font-medium"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="pt-4 border-t-2 border-border space-y-3">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full text-base font-bold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply Now
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full text-sm font-semibold"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full text-sm font-semibold"
                      onClick={() => setSearchOpen(true)}
                    >
                      <Search className="w-4 h-4 mr-2" />
                        Search
                      </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
