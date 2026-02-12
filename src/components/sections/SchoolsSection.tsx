import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import BadgeComp from "@/components/shared/Badge";
import { schools } from "@/data/schools";

export default function SchoolsSection() {
  return (
    <section className="bg-light-blue section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="Explore Your Interests"
          subtitle="Our Schools"
          description="YISU offers specialized schools across various sectors, each designed with industry partnerships to ensure job-ready graduates."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {schools.map((school, index) => (
            <SchoolCard key={school.id} school={school} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg">
            Explore All Schools <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface SchoolCardProps {
  school: {
    id: number;
    name: string;
    courses: number;
    icon?: string;
    isComingSoon?: boolean;
    description?: string;
  };
  index: number;
}

function SchoolCard({ school, index }: SchoolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <motion.div
        className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-xl transition-all relative overflow-hidden"
      >
        {school.isComingSoon && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="absolute top-4 right-4"
          >
            <BadgeComp variant="primary">Coming Soon</BadgeComp>
          </motion.div>
        )}

        <div className="mb-5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="text-5xl mb-4"
          >
            {school.icon}
          </motion.div>
          <h3 className="font-serif font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
            {school.name}
          </h3>
          {school.description && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {school.description}
            </p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          className="flex items-center gap-4 pt-4 border-t border-border/50"
        >
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="font-semibold text-foreground">
              {school.courses} {school.courses === 1 ? "Course" : "Courses"}
            </span>
          </div>
          {!school.isComingSoon && (
            <motion.div
              whileHover={{ x: 3 }}
              className="ml-auto text-primary group-hover:text-accent transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          )}
        </motion.div>

        {!school.isComingSoon && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
}