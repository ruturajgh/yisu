import { motion } from "framer-motion";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { academicsGallery } from "@/data/constants";

export default function AcademicsGallerySection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="container-narrow">
        <SectionHeader
          title="Academics at YISU"
          subtitle="Campus Life"
          description="Experience hands-on learning, industry visits, and practical training at YISU."
          align="center"
          badgeVariant="glass"
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
      whileHover={{ scale: 1.02 }}
      className="group h-full"
    >
      <motion.div
        className="bg-secondary border-2 border-primary hover:border-accent hover:shadow-lg rounded-xl overflow-hidden transition-all h-full flex flex-col"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          className="relative aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center overflow-hidden"
        >
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <ImageIcon className="w-16 h-16 text-accent/30" />
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-accent/20 flex items-center justify-center"
          >
            <ImageIcon className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif font-bold text-base text-primary mb-2 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1">
            {item.description}
          </p>
        </div>

        <motion.div
          className="h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </motion.div>
  );
}