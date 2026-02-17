import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ExternalLink, Menu, X, ChevronDown, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
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

export default function LogoHeader() {
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
          <div className="flex items-center justify-between h-20 lg:h-24">
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

              {/* Leadership Images: CM, Telangana Rising, VC */}
              <div className="flex items-center gap-3">
                {/* Telangana Rising - Circular */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <img
                    src="/images/TelanganaRaising.jpg"
                    alt="Telangana Rising"
                    className="h-20 -w-20 w-auto rounded-full"
                  />
                </motion.div>

                {/* CM Image - Circular */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <img
                    src="/images/chancellor.webp"
                    alt="CM Revanth Reddy"
                    className="h-20 w-20 rounded-full object-cover border-2 border-white/20"
                  />
                </motion.div>

              </div>
            </div>

            {/* Right: Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Anand Mahindra - Circular, Subtle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img
                  src="/images/anand-mahindra.webp"
                  alt="Anand Mahindra"
                  className="h-20 w-20 rounded-full object-cover border-2 border-accent/20  transition-opacity"
                />
              </motion.div>

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
