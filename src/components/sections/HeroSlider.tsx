import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import { heroSlides } from "@/data/heroSlides";
import { cn } from "@/lib/utils";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative py-8 lg:py-12 overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-light">
      <div className="container-narrow">
        <div className="relative">
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6 items-center"
            >
              {/* Left: Content */}
              <div className="space-y-3">
                {currentSlide.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm border border-accent/40 rounded-full"
                  >
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {currentSlide.badge}
                    </span>
                  </motion.div>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white leading-tight"
                >
                  {currentSlide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Compact Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3 pt-2"
                >
                  {currentSlide.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg"
                    >
                      <span className="text-sm">{stat.icon}</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-sm font-bold text-white">{stat.value}</span>
                        <span className="text-[10px] text-white/60 uppercase">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 pt-2"
                >
                  <Button variant="gold" size="sm" className="text-sm">
                    {currentSlide.ctaText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    <span className="text-xs">{isPaused ? "Play" : "Pause"}</span>
                  </button>
                </motion.div>
              </div>

              {/* Right: Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden md:block"
              >
                <PlaceholderImage
                  label={currentSlide.subtitle}
                  icon="🎓"
                  aspectRatio="4:3"
                  color={currentSlide.color}
                  className="h-full min-h-[300px]"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-0 left-0 flex gap-1.5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-6 h-1 rounded-full transition-all",
                  currentIndex === idx
                    ? "bg-accent w-8"
                    : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
