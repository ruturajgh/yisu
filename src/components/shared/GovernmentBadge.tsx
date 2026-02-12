import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface GovernmentBadgeProps {
  variant?: "seal" | "emblem" | "stamp";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function GovernmentBadge({ variant = "seal", size = "md", className = "" }: GovernmentBadgeProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-24 h-24"
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-10 h-10",
    xl: "w-12 h-12"
  };

  const sealContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 border-4 border-white/80 shadow-2xl ${sizeClasses[size]} ${className}`}
    >
      <Shield className={`${iconSizes[size]} text-navy`} strokeWidth={2} />
    </motion.div>
  );

  const emblemContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 border-4 border-white shadow-2xl ${sizeClasses[size]} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className={`${iconSizes[size]}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="50" cy="50" r="45" className="text-white" />
        <path d="M50 20 L55 40 L75 40 L60 52 L65 72 L50 60 L35 72 L40 52 L25 40 L45 40 Z" className="text-white" fill="currentColor" />
      </svg>
    </motion.div>
  );

  const stampContent = (
    <motion.div
      initial={{ opacity: 0, rotate: -15 }}
      animate={{ opacity: 1, rotate: -15 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center justify-center rounded-full border-4 border-accent/50 bg-transparent ${sizeClasses[size]} ${className}`}
    >
      <div className="text-center">
        <div className="text-[10px] font-bold text-accent tracking-widest">GOVERNMENT</div>
        <div className="text-[8px] text-accent/70">of Telangana</div>
      </div>
    </motion.div>
  );

  if (variant === "seal") return sealContent;
  if (variant === "emblem") return emblemContent;
  return stampContent;
}
