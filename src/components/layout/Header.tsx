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
        className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-primary transition-all duration-300"
      >
        <nav className="container-narrow px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img
                  src="/images/skills university.svg"
                  alt="YISU Logo"
                  className="h-12 md:h-14 w-auto"
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
                  <button className="flex items-center gap-1.5 px-5 py-3 text-base font-medium text-primary hover:text-accent hover:bg-accent/5 transition-colors rounded-md border-b-2 border-transparent hover:border-accent">
                    {item.label}
                    {item.children && <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === index && "rotate-180")} />}
                  </button>
                  <AnimatePresence>
                    {item.children && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white border-2 border-primary shadow-xl py-3 min-w-[280px] z-50"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block px-5 py-3 text-base text-primary hover:bg-primary hover:text-white hover:pl-6 transition-all"
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

            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg text-primary hover:text-accent hover:bg-accent/5 transition-colors"
              >
                <Search className="w-6 h-6" />
              </motion.button>
              <Button variant="gold" size="md" className="text-base">
                Apply Now
              </Button>
            </div>

            <button
              className="lg:hidden p-3 rounded-lg bg-primary/5 text-primary hover:bg-primary/10"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              className="lg:hidden border-t-2 border-primary overflow-hidden bg-white"
            >
              <div className="px-5 py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href="#"
                      className="block px-5 py-4 text-base font-medium text-primary hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="pl-5 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="block px-5 py-3 text-base text-muted hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                          >
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 flex flex-col gap-4">
                  <Button variant="outline" size="lg" className="w-full text-base">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                  <Button variant="gold" size="lg" className="w-full text-base">
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