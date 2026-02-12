import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "About YISU",
    children: ["Overview", "Vision & Mission", "University Act", "Leadership", "Governance", "Accreditation"],
  },
  {
    label: "Schools & Programs",
    children: ["School of Applied Life Sciences", "School of Logistics & SCM", "Course Finder"],
  },
  {
    label: "Admissions",
    children: ["How to Apply", "Eligibility", "Important Dates", "Fees & Support", "Scholarships", "FAQs"],
  },
  { label: "Corporate Partnerships" },
  { label: "Student Life" },
  { label: "Notices" },
  { label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-secondary/80 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground text-xs py-1.5">
        <div className="container-narrow flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <span>Established by Government of Telangana | YISU Act 2024</span>
          <div className="hidden sm:flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Student Portal</a>
            <a href="#" className="hover:text-gold transition-colors">Staff Login</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">Y</span>
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-secondary-foreground leading-none block">YISU</span>
              <span className="text-[10px] text-secondary-foreground/70 leading-none">Young India Skills University</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-secondary-foreground/90 hover:text-gold transition-colors font-medium">
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>
                {item.children && (
                  <div className="absolute top-full left-0 bg-card border border-border rounded-md shadow-lg py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <a key={child} href="#" className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
              Apply Now
            </Button>
          </div>

          <button className="lg:hidden text-secondary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-secondary-foreground/10">
            {navItems.map((item) => (
              <a key={item.label} href="#" className="block px-4 py-3 text-sm text-secondary-foreground hover:text-gold transition-colors font-medium">
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-gold-light font-semibold">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
