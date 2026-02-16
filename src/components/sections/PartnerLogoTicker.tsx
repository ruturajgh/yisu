import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export default function PartnerLogoTicker() {
  const logoRows = [
    partners.slice(0, 10),
    partners.slice(10, 20),
    partners.slice(20, 30)
  ];

  return (
    <section className="py-4 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="space-y-3">
        {logoRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4"
            animate={{
              x: rowIndex % 2 === 0 ? [0, -1000, 0] : [-1000, 0, -1000]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...row, ...row, ...row].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex-shrink-0 w-20 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer group"
                title={partner.name}
              >
                <span className="text-[10px] font-medium text-foreground/70 group-hover:text-foreground transition-colors text-center px-1 truncate">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
