import { motion } from "framer-motion";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { academicsGallery } from "@/data/constants";

export default function AcademicsGallerySection() {
  return (
    <section className="bg-card border-t border-border section-padding">
      <div className="container-narrow">
        <SectionHeader
          title="Academics at YISU"
          subtitle="Campus Life"
          description="Experience hands-on learning, industry visits, and practical training at YISU."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {academicsGallery.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface GalleryItemProps {
  item: {
    id: number;
    title: string;
    image?: string;
    description: string;
  };
  index: number;
}

function GalleryItem({ item, index }: GalleryItemProps) {
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
        className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all h-full flex flex-col"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden"
        >
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <ImageIcon className="w-16 h-16 text-primary/30" />
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-primary/20 flex items-center justify-center"
          >
            <ImageIcon className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif font-semibold text-base text-foreground mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {item.description}
          </p>
        </div>

        <motion.div
          className="h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </motion.div>
  );
}