import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";
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
    label: "Contact",
    href: "#contact"
  }
];

export default function CompactHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <>
      {/* Compact Header - Single Row */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-primary shadow-md"
      >
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left Section: Leadership & University Logos */}
            <div className="flex items-center gap-3">
              {/* CM Image - Circular like Telangana Rising */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden sm:flex"
              >
                <img
                  src="/images/cm.jpg"
                  alt="CM Revanth Reddy"
                  className="h-14 w-auto rounded-full object-cover border-2 border-white/20"
                />
              </motion.div>

              {/* TG Logo - Subtle */}
              <motion.img
                src="/images/tglogo.png"
                alt="Government of Telangana"
                className="h-10 opacity-60 hover:opacity-80 transition-opacity hidden md:block"
                whileHover={{ scale: 1.02 }}
              />

              {/* Separator */}
              <span className="text-white/20 h-10 w-px hidden md:block" aria-hidden="true"></span>

              {/* YISU Logo - Primary */}
              <a href="/" className="flex items-center">
                <motion.img
                  src="/images/skills university.svg"
                  alt="Young India Skills University"
                  className="h-12 w-auto"
                  whileHover={{ scale: 1.02 }}
                />
              </a>

              {/* Separator */}
              <span className="text-white/20 h-10 w-px hidden md:block" aria-hidden="true"></span>

              {/* Telangana Rising - Subtle, Circular like CM */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden md:flex"
              >
                <img
                  src="/images/TelanganaRaising.jpg"
                  alt="Telangana Rising"
                  className="h-12 w-auto rounded-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                />
              </motion.div>
            </div>

            {/* Right Section: Anand + Navigation + Apply */}
            <div className="flex items-center gap-3">
              {/* Anand Mahindra - Circular, Subtle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden lg:flex"
              >
                <img
                  src="/images/anand-mahindra.jpg"
                  alt="Anand Mahindra"
                  className="h-12 w-12 rounded-full object-cover opacity-70 hover:opacity-90 transition-opacity border-2 border-accent/20"
                />
              </motion.div>

              {/* Desktop Navigation - Compact */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white/90 hover:text-accent hover:bg-white/10 transition-all rounded-md">
                      {item.label}
                      {item.children && (
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === index && "rotate-180")} />
                      )}
                    </button>
                    <AnimatePresence>
                      {item.children && activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 bg-white border-2 border-primary/20 shadow-2xl py-2 min-w-[220px] z-50 rounded-xl overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2.5 text-sm text-primary/90 hover:bg-primary hover:text-white hover:pl-7 transition-all font-medium",
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
              </nav>

              {/* Apply Button - Compact */}
              <a href="#apply">
                <Button variant="gold" size="sm" className="text-sm font-semibold px-4 py-2">
                  Apply
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer - Shows ALL Elements */}
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

                {/* Leadership Images Row */}
                <div className="flex items-center justify-center gap-4 py-3 border-b border-border">
                  <img
                    src="/images/cm.jpg"
                    alt="CM Revanth Reddy"
                    className="h-14 w-auto rounded-full object-cover border-2 border-white/20"
                  />
                  <img
                    src="/images/TelanganaRaising.jpg"
                    alt="Telangana Rising"
                    className="h-10 w-auto rounded-full object-cover opacity-70"
                  />
                  <img
                    src="/images/anand-mahindra.jpg"
                    alt="Anand Mahindra"
                    className="h-10 w-10 rounded-full object-cover opacity-70 border-2 border-accent/20"
                  />
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
                        {item.children && (
                          <ChevronDown className="w-4 h-4 text-foreground/40" />
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
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-sm font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
