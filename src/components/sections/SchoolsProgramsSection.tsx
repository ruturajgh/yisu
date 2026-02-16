import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock, ChevronsUpDown } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { schools } from "@/data/schools";
import { trendingCourses } from "@/data/courses";
import { cn } from "@/lib/utils";

export default function SchoolsProgramsSection() {
  const featuredCourses = trendingCourses.slice(0, 8);
  const activeSchools = schools.filter(s => !s.isComingSoon);

  return (
    <section id="programs" className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="Schools & Programs"
          subtitle="Academic Excellence"
          description="Choose your area of interest or browse our featured courses"
          badgeVariant="glass"
        />

        {/* Schools Grid - Bigger Cards */}
        <div className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {schools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.03 }}
                className="relative group h-full"
              >
                <div className={cn(
                  "bg-card border border-border/40 rounded-xl p-5 h-full transition-all",
                  school.isComingSoon ? "opacity-50" : "hover:border-primary/50 hover:shadow-md"
                )}>
                  <div className="flex flex-col items-center text-center space-y-2.5">
                    <span className="text-3xl">{school.icon}</span>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {school.name.replace(/School of /, "").replace(/and /, " & ")}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>
                        {school.isComingSoon ? "Launching Soon" : `${school.courses} ${school.courses === 1 ? "Course" : "Courses"}`}
                      </span>
                    </div>
                  </div>
                  {school.description && (
                    <div className="absolute inset-0 bg-foreground/95 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center p-4">
                      <p className="text-xs text-center text-foreground/90 leading-tight">
                        {school.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Courses - Bigger Cards */}
        <div className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="h-full"
              >
                 <div className="bg-card border border-border/40 rounded-xl overflow-hidden h-full hover:border-primary/50 hover:shadow-md transition-all group">
                   {/* Real Course Image */}
                   <div className="relative h-40 bg-muted/50 overflow-hidden">
                     <img
                       src={course.image || "/images/swiggy-course.webp"}
                       alt={course.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       loading="lazy"
                     />
                     {course.isNew && (
                       <div className="absolute top-3 right-3 z-10">
                         <span className="px-2 py-1 bg-accent text-background text-xs font-bold rounded-md shadow-sm">
                           NEW
                         </span>
                       </div>
                     )}
                   </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    {/* Partner */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {course.partner.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        {course.partner}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                      {course.name}
                    </h3>

                    {/* Meta Row */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-border/30">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{course.duration}</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">
                        {course.fee}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center pt-2">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
