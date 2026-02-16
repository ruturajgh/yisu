import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import { academicsGallery } from "@/data/constants";

export default function AcademicsGallerySection() {
  return (
    <section className="section bg-card">
      <div className="container-narrow">
        <SectionHeader
          title="Academics at YISU"
          subtitle="Campus Life"
          description="Hands-on learning, industry visits, and practical training"
          badgeVariant="glass"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {academicsGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="h-full"
            >
              <div className="bg-card border border-border/40 rounded-xl overflow-hidden h-full hover:border-primary/50 hover:shadow-md transition-all">
                {/* Bigger Image */}
                <div className="h-40 bg-muted/50">
                  <PlaceholderImage
                    label={item.title}
                    icon=""
                    aspectRatio="16:9"
                    color={index % 3 === 0 ? "blue" : index % 3 === 1 ? "gold" : "navy"}
                    className="h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug line-clamp-2 flex-1">
                    {item.description}
                  </p>

                  <div className="pt-3 mt-3 border-t border-border/30 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
