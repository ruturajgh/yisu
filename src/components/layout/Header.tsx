import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Bell, GraduationCap, Phone, BookOpen, UserCircle } from "lucide-react";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/constants";

const navItems = [
  {
    label: "About",
    children: [
      { label: "Overview", href: "#about" },
      { label: "Leadersip", href: "#leadersip" },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Layer 3: Navigation Bar Only */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-border transition-all duration-300"
      >
        <div className="container-narrow w-full ">
          <div className="flex h-16 lg:h-20 ">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-around gap-1.5 flex-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-5 py-4 text-base font-semibold text-primary/90 hover:text-accent hover:bg-accent/5 transition-all rounded-lg border-b-2 border-transparent hover:border-accent">
                    {item.label}
                    {item.badge && (
                      <span className="ml-1.5 px-2 py-0.5 text-xs font-bold text-accent bg-accent/10 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.children && (
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === index && "rotate-180")} />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.children && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white border-2 border-primary/20 shadow-2xl py-2 min-w-[260px] z-50 rounded-xl overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className={cn(
                              "block px-5 py-3 text-base text-primary/90 hover:bg-primary hover:text-white hover:pl-7 transition-all font-medium",
                              child.featured && "bg-accent/10 text-accent font-bold"
                            )}
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Search Button on right side of header */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-lg text-primary/80 hover:text-accent hover:bg-accent/10 transition-colors"
              aria-label="Search (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Search Modal */}
      <AnimatePresence>
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
      </AnimatePresence>

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
                              className={cn(
                                "block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all font-medium",
                                child.featured && "text-accent font-bold bg-accent/5"
                              )}
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