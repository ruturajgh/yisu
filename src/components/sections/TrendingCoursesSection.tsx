import { motion } from "framer-motion";
import { Clock, DollarSign, ArrowRight, ExternalLink, Badge } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import BadgeComp from "@/components/shared/Badge";
import { trendingCourses } from "@/data/courses";

export default function TrendingCoursesSection() {
  const topCourses = trendingCourses.slice(0, 6);

  return (
    <section className="bg-card border-t border-border section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="Trending Courses"
          subtitle="Industry-Aligned Programs"
          description="Explore our most sought-after courses designed with leading industry partners for immediate employability."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {topCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg">
            View All Courses <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface CourseCardProps {
  course: {
    id: number;
    name: string;
    partner: string;
    duration: string;
    fee: string;
    isNew?: boolean;
    badge?: string;
  };
  index: number;
}

function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <motion.div
        className="bg-white/70 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg rounded-xl p-6 h-full transition-all relative overflow-hidden"
      >
        {course.isNew && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="absolute top-4 right-4"
          >
            <BadgeComp variant="new">NEW</BadgeComp>
          </motion.div>
        )}

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
              {course.partner.charAt(0)}
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {course.partner}
            </p>
          </div>
          <h3 className="font-serif font-semibold text-lg text-foreground mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {course.name}
          </h3>
        </div>

        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <DollarSign className="w-4 h-4 text-accent" />
            <span className="font-semibold text-foreground">{course.fee}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          className="pt-4 border-t border-border/50"
        >
          <Button
            variant="ghost"
            size="sm"
            className="w-full group-hover:bg-accent/10 group-hover:text-accent"
          >
            View Course <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}