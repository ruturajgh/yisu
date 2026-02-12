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
          transition={{ duration: 0.5, delay: 0.3 }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <ImageIcon className="w-16 h-16 text-gray-300" />
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-serif font-bold text-base text-navy mb-2 leading-snug line-clamp-2 group-hover:text-gold transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
