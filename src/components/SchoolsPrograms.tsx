import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const schools = [
  {
    name: "School of Applied Life Sciences",
    programs: 5,
    description: "Equipping students with practical skills in biotechnology, food science, and environmental studies.",
  },
  {
    name: "School of Logistics & Supply Chain Management",
    programs: 4,
    description: "Industry-ready training in logistics, warehousing, and supply chain operations.",
  },
  {
    name: "School of Digital Technologies",
    programs: 6,
    description: "Cutting-edge programs in AI, data science, cybersecurity, and software development.",
  },
  {
    name: "School of Healthcare & Allied Sciences",
    programs: 4,
    description: "Practical healthcare education designed with hospital and pharma partnerships.",
  },
];

const SchoolsPrograms = () => {
  return (
    <section className="bg-card section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-3">
            Schools & <span className="text-primary">Programs</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore our industry-integrated academic schools designed for employability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border rounded-md p-6 hover:border-primary/30 hover:shadow-md transition-all group bg-background"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {school.name}
                </h3>
                <span className="text-xs font-semibold bg-muted text-muted-foreground px-2 py-1 rounded-sm whitespace-nowrap">
                  {school.programs} Programs
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{school.description}</p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-royal p-0 h-auto font-semibold">
                View Programs <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsPrograms;
