import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "About",
    children: ["Overview", "Leadership", "University Act"]
  },
  {
    label: "Schools & Programs",
    children: ["Schools", "Courses", "Industry Partners"]
  },
  {
    label: "Admissions",
    children: ["Apply Now", "Eligibility", "Fees"]
  },
  { label: "Notices & Events" },
  { label: "Contact" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-lg border-b border-border transition-all duration-300"
      >
        <nav className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img
                  src="/images/skills university.svg"
                  alt="YISU Logo"
                  className="h-10 md:h-12 w-auto"
                />
              </motion.div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                    {item.label}
                    {item.children && <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === index && "rotate-180")} />}
                  </button>
                  <AnimatePresence>
                    {item.children && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-xl py-2 min-w-[280px] z-50"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary hover:pl-5 transition-all"
                          >
                            {child}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg hover:text-accent hover:bg-accent/5 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <Button variant="gold" size="sm">
                Apply Now
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                          >
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Button variant="outline" size="md" className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="gold" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}