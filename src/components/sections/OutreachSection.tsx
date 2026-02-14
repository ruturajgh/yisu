import { motion } from "framer-motion";
import { MapPin, Users, Building2, Award, TrendingUp, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { outreachStats } from "@/data/constants";

export default function OutreachSection() {
  return (
    <section className="bg-white section-compact relative overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          title="YISU Outreach Projects"
          subtitle="Impact Beyond Campus"
          description="YISU reaches out to rural government colleges across Telangana, providing full-cycle job readiness programs to empower youth."
          align="center"
          badgeVariant="glass"
        />

        <div className="grid lg:grid-cols-2 gap-6 mt-10">
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
            delay={0.15}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg">
          <span className="text-2xl font-bold font-serif">{name}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-5 h-5 text-gold" />
        <span className="text-base font-bold text-navy">{location}</span>
      </div>

      <p className="text-sm text-gray-600 uppercase tracking-wider mb-5">{subtitle}</p>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + delay }}
          className="text-center p-3 rounded-lg bg-white border border-gray-200"
        >
          <Users className="w-5 h-5 text-gold mx-auto mb-2" />
          <div className="text-xl font-bold text-navy font-serif">{stats.students}</div>
          <div className="text-sm text-gray-600 mt-1">Students</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + delay }}
          className="text-center p-3 rounded-lg bg-white border border-gray-200"
        >
          <Building2 className="w-5 h-5 text-gold mx-auto mb-2" />
          <div className="text-xl font-bold text-navy font-serif">{stats.recruiters}</div>
          <div className="text-sm text-gray-600 mt-1">Recruiters</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + delay }}
          className="text-center p-3 rounded-lg bg-white border border-gray-200"
        >
          <Award className="w-5 h-5 text-gold mx-auto mb-2" />
          <div className="text-xl font-bold text-navy font-serif">{stats.colleges}</div>
          <div className="text-sm text-gray-600 mt-1">Colleges</div>
        </motion.div>
      </div>

      <div className="p-4 rounded-lg bg-navy/5 border border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-gold" />
          <span className="text-base font-bold text-gold">Placements Achieved</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-navy font-serif">{totalPlacements}</div>
            <div className="text-sm text-gray-600 mt-1">Total Placements</div>
          </div>
          <div className="text-right">
            <div className="text-base font-bold text-navy">{stats.placements.logistics}</div>
            <div className="text-sm text-gray-600">Logistics</div>
            <div className="text-base font-bold text-navy mt-1">{stats.placements.banks}</div>
            <div className="text-sm text-gray-600">Banks</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
