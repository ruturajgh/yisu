import { motion } from "framer-motion";
import { MapPin, Users, Building2, Award, TrendingUp, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { outreachStats } from "@/data/constants";

export default function OutreachSection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 section-padding relative overflow-hidden">
      {/* Very Subtle Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 138, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 left-12 w-36 h-36 bg-primary/3 rounded-full blur-2xl"
        />
      </div>

      <div className="container-narrow">
        <SectionHeader
          title="YISU Outreach Projects"
          subtitle="Impact Beyond Campus"
          description="YISU reaches out to rural government colleges across Telangana, providing full-cycle job readiness programs to empower youth."
          align="center"
          badgeVariant="glass"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <ProjectCard
            name="MAJOR"
            location="Manthani"
            subtitle="Manthani Job Opportunities & Readiness"
            stats={outreachStats.major}
            delay={0}
          />
          <ProjectCard
            name="VIKTOR"
            location="Vikarabad"
            subtitle="Vikarakabad Kodangal Training for Opportunities and Readiness"
            stats={outreachStats.viktor}
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg">
            Learn About Our Outreach <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  name: string;
  location: string;
  subtitle: string;
  stats: {
    students: number;
    recruiters: string;
    colleges: string;
    placements: {
      logistics: number;
      banks: number;
    };
  };
  delay: number;
}

function ProjectCard({ name, location, subtitle, stats, delay }: ProjectCardProps) {
  const totalPlacements = stats.placements.logistics + stats.placements.banks;

  return (
    <motion.div
      initial={{ opacity: 0, x: delay === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/70 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg rounded-xl p-8 transition-all"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 + delay }}
        className="mb-6"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-accent/10 rounded-lg border border-accent/30">
          <span className="text-3xl font-bold text-accent font-serif">{name}</span>
        </div>
      </motion.div>

      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-muted-foreground">{location}</span>
      </div>

      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">{subtitle}</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + delay }}
          className="text-center p-4 rounded-lg bg-white/50 border border-border hover:bg-white/60 transition-colors"
        >
          <Users className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-accent font-serif">{stats.students}</div>
          <div className="text-xs text-muted-foreground mt-1">Students</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + delay }}
          className="text-center p-4 rounded-lg bg-white/50 border border-border hover:bg-white/60 transition-colors"
        >
          <Building2 className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-accent font-serif">{stats.recruiters}</div>
          <div className="text-xs text-muted-foreground mt-1">Recruiters</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + delay }}
          className="text-center p-4 rounded-lg bg-white/50 border border-border hover:bg-white/60 transition-colors"
        >
          <Award className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-accent font-serif">{stats.colleges}</div>
          <div className="text-xs text-muted-foreground mt-1">Colleges</div>
        </motion.div>
      </div>

      <div className="p-5 rounded-lg bg-accent/5 border border-accent/20">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-accent" />
          <span className="text-sm font-semibold text-accent">Placements Achieved</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-accent font-serif">{totalPlacements}</div>
            <div className="text-xs text-muted-foreground mt-1">Total Placements</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-foreground">{stats.placements.logistics}</div>
            <div className="text-xs text-muted-foreground">Logistics</div>
            <div className="text-sm font-semibold text-foreground mt-1">{stats.placements.banks}</div>
            <div className="text-xs text-muted-foreground">Banks</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}