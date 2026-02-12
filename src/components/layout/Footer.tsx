import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Button from "@/components/shared/Button";
import GovernmentBadge from "@/components/shared/GovernmentBadge";
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
    <footer className="bg-primary text-white">
      <div className="container-narrow">
        {/* Government Branding Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary border-b-2 border-accent py-6 px-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-white font-bold text-base">Government of Telangana</p>
                <p className="text-accent/90 text-sm">Official Government Initiative</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white text-base">
              <span>YISU Act 2024</span>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10">
          <div className="section-padding pb-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg relative">
                    <span className="text-white font-serif font-bold text-2xl">Y</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-white/50"
                    />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-2xl leading-none block text-white">YISU</span>
                    <span className="text-sm text-white/90 leading-none block">Young India Skills University</span>
                  </div>
                </div>
                <p className="text-base text-white/95 leading-relaxed mb-6">
                  Established by Government of Telangana under YISU Act 2024. Building future workforce through practical skills education.
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
                        className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                      >
                        <Icon className="w-5 h-5" />
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
                <h4 className="font-serif font-bold mb-6 text-accent text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  {combinedLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-base text-white hover:text-accent transition-colors inline-flex items-center gap-2">
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
                <h4 className="font-serif font-bold mb-6 text-accent text-lg">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    <span className="text-base text-white leading-relaxed">{contactInfo.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                    <span className="text-base text-white">{contactInfo.admissionsPhone}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                    <span className="text-base text-white">{contactInfo.admissionsEmail}</span>
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
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/80">
              © 2024 Young India Skills University. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-accent transition-colors">RTI</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-center md:text-left"
          >
            <p className="text-sm text-white/80 flex items-center justify-center md:justify-start gap-2">
              <GovernmentBadge variant="stamp" size="sm" className="opacity-50" />
              <span>Government of Telangana • YISU Act 2024</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
