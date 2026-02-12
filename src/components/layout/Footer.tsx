import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import Button from "@/components/shared/Button";
import { contactInfo, socialLinks, quickLinks, usefulLinks } from "@/data/constants";
import { notices } from "@/data/notices";

export default function Footer() {
  const footerNotices = notices.slice(0, 4);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="border-t border-secondary-foreground/10">
          <div className="section-padding pb-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  Established by the Government of Telangana under the YISU Act 2024 to deliver skills-first, industry-integrated higher education.
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
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent"></span>
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
                <h4 className="font-serif font-semibold mb-6 text-accent">Useful Links</h4>
                <ul className="space-y-3">
                  {usefulLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-accent hover:text-accent-foreground">
                      View All →
                    </Button>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="font-serif font-semibold mb-6 text-accent">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-secondary-foreground/70 leading-relaxed">{contactInfo.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                    <div className="text-sm text-secondary-foreground/70">
                      <div>{contactInfo.admissionsPhone}</div>
                      <div className="text-xs text-muted-foreground">Admissions</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                    <div className="text-sm text-secondary-foreground/70">
                      <div>{contactInfo.admissionsEmail}</div>
                      <div className="text-xs text-muted-foreground">Admissions</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 flex-shrink-0 text-accent" />
                    <div className="text-sm text-secondary-foreground/70">
                      <div>{contactInfo.generalEmail}</div>
                      <div className="text-xs text-muted-foreground">General Queries</div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t border-secondary-foreground/10 pt-8 mb-8"
            >
              <h4 className="font-serif font-semibold mb-6 text-accent text-center">Latest Notices</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {footerNotices.map((notice) => (
                  <motion.a
                    key={notice.id}
                    href={notice.link || "#"}
                    whileHover={{ y: -4 }}
                    className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg p-4 hover:border-accent/30 hover:bg-secondary-foreground/10 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-secondary-foreground/50 mb-1">{notice.date}</p>
                        <p className="text-sm text-secondary-foreground/90 group-hover:text-accent transition-colors line-clamp-2">
                          {notice.title}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="outline" size="sm">
                  View All Notices →
                </Button>
              </div>
            </motion.div>
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
              © 2024 Young India Skills University. All rights reserved. Government of Telangana.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-secondary-foreground/50">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-accent transition-colors">RTI</a>
              <span className="hidden md:inline">|</span>
              <span>{contactInfo.officeHours}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}