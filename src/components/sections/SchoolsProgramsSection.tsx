import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import BadgeComp from "@/components/shared/Badge";
import { schools } from "@/data/schools";
import { trendingCourses } from "@/data/courses";

export default function SchoolsProgramsSection() {
  const activeSchools = schools.filter(s => !s.isComingSoon).slice(0, 4);
  const featuredCourses = trendingCourses.slice(0, 3);

  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          title="Schools & Programs"
          subtitle="Explore Your Path"
          description="Choose your area of interest or browse our featured courses"
          align="center"
          badgeVariant="glass"
        />

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-serif font-bold text-2xl text-primary mb-2">Our Schools</h3>
            <p className="text-sm text-primary/70">Specialized programs designed with industry partners</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeSchools.map((school, index) => (
              <SchoolCard key={school.id} school={school} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-8"
          >
            <Button variant="outline" size="lg">
              Explore All Schools <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-serif font-bold text-2xl text-primary mb-2">Featured Courses</h3>
            <p className="text-sm text-primary/70">Industry-aligned programs for immediate employability</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mt-8"
          >
            <Button variant="primary" size="lg">
              View All Courses <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
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
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group h-full"
    >
      <motion.div
        className="bg-secondary border-2 border-primary hover:border-accent rounded-xl p-6 h-full transition-all relative overflow-hidden"
      >
        <div className="mb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="text-5xl mb-4"
          >
            {school.icon}
          </motion.div>
          <h3 className="font-serif font-bold text-base text-primary leading-snug group-hover:text-accent transition-colors">
            {school.name}
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          className="flex items-center gap-2 pt-4 border-t-2 border-primary/50 text-sm"
        >
          <GraduationCap className="w-4 h-4 text-accent" />
          <span className="font-bold text-primary">
            {school.courses} {school.courses === 1 ? "Course" : "Courses"}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
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
      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group h-full"
    >
      <motion.div
        className="bg-secondary border-2 border-primary hover:border-accent rounded-xl p-6 h-full transition-all relative overflow-hidden"
      >
        {course.isNew && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            className="absolute top-4 right-4"
          >
            <BadgeComp variant="new">NEW</BadgeComp>
          </motion.div>
        )}

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs">
              {course.partner.charAt(0)}
            </div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">
              {course.partner}
            </p>
          </div>
          <h3 className="font-serif font-bold text-base text-primary mb-3 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
            {course.name}
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-primary/70">
            <Clock className="w-4 h-4 text-accent" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary/70">
            <span className="font-bold text-primary">{course.fee}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
          className="pt-3 border-t-2 border-primary/50 flex items-center justify-center"
        >
          <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
