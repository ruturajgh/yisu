import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">Y</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg leading-none block text-secondary-foreground">YISU</span>
                <span className="text-[10px] text-secondary-foreground/60 leading-none">Young India Skills University</span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Established by the Government of Telangana under the YISU Act 2024 to deliver skills-first, industry-integrated higher education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {["About YISU", "Schools & Programs", "Admissions", "Student Life", "Notices"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Corporates */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">For Corporates</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {["Partner With Us", "Skill Development", "CSR Opportunities", "Hire Our Graduates"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>+91-XXXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>info@yisu.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © 2026 Young India Skills University. All rights reserved. Government of Telangana.
          </p>
          <div className="flex gap-4 text-xs text-secondary-foreground/50">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">RTI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
