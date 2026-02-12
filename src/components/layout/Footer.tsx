import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Button from "@/components/shared/Button";
import { contactInfo, socialLinks } from "@/data/constants";

const combinedLinks = [
  "About Us",
  "University Act",
  "YISU Schools",
  "Admissions",
  "Notices & Events",
  "Student Portal"
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="border-t border-secondary-foreground/10">
          <div className="section-padding pb-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-royal flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-serif font-bold text-xl">Y</span>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-xl leading-none block">YISU</span>
                    <span className="text-[11px] text-secondary-foreground/60 leading-none block">Young India Skills University</span>
                  </div>
                </div>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-6">
                  Established by the Government of Telangana under the YISU Act 2024.
                </p>
                <div className="flex items-center gap-3">
                  {Object.entries(socialLinks).slice(0, 5).map(([key, url]) => {
                    const Icon = {
                      instagram: Instagram,
                      linkedin: Linkedin,
                      twitter: Twitter,
                      facebook: Facebook,
                      youtube: Youtube
                    }[key] as React.ComponentType<{ className?: string }>;

                    return (
                      <motion.a
                        key={key}
                        href={url}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="font-serif font-semibold mb-6 text-accent">Quick Links</h4>
                <ul className="space-y-3">
                  {combinedLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hover:bg-accent"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="font-serif font-semibold mb-6 text-accent">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-secondary-foreground/70 leading-relaxed">{contactInfo.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-secondary-foreground/70">{contactInfo.admissionsPhone}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-secondary-foreground/70">{contactInfo.admissionsEmail}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-secondary-foreground/10 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-secondary-foreground/50">
              © 2024 Young India Skills University. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-secondary-foreground/50">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-accent transition-colors">RTI</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
