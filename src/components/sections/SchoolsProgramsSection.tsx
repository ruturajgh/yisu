import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock } from "lucide-react";
import Button from "@/components/shared/Button";
import { schools } from "@/data/schools";
import { trendingCourses } from "@/data/courses";

export default function SchoolsProgramsSection() {
  const activeSchools = schools.filter(s => !s.isComingSoon).slice(0, 4);
  const featuredCourses = trendingCourses.slice(0, 3);

  return (
    <section className="section bg-gray-50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">Academic Excellence</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-navy mt-3 mb-4">
            Schools & Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your area of interest or browse our featured courses
          </p>
        </div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-serif font-bold text-2xl text-navy mb-2">Our Schools</h3>
            <p className="text-sm text-gray-600">Specialized programs designed with industry partners</p>
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
            transition={{ duration: 0.5, delay: 0.2 }}
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
            <h3 className="font-serif font-bold text-2xl text-navy mb-2">Featured Courses</h3>
            <p className="text-sm text-gray-600">Industry-aligned programs for immediate employability</p>
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
            transition={{ duration: 0.5, delay: 0.25 }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 h-full hover:shadow-md transition-shadow">
        <div className="mb-4">
          <div className="text-5xl mb-4">
            {school.icon}
          </div>
          <h3 className="font-serif font-bold text-base text-navy leading-snug">
            {school.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-gray-200 text-sm">
          <GraduationCap className="w-4 h-4 text-gold" />
          <span className="font-bold text-gray-700">
            {school.courses} {school.courses === 1 ? "Course" : "Courses"}
          </span>
        </div>
      </div>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 h-full hover:shadow-md transition-shadow relative">
        {course.isNew && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-2 py-1 bg-gold text-white text-xs font-bold rounded">NEW</span>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center text-white font-bold text-xs">
              {course.partner.charAt(0)}
            </div>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              {course.partner}
            </p>
          </div>
          <h3 className="font-serif font-bold text-base text-navy mb-3 leading-snug line-clamp-2">
            {course.name}
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-gold" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-bold text-navy">{course.fee}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-navy" />
        </div>
      </div>
    </motion.div>
  );
}
