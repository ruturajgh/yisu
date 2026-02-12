import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCampus} alt="YISU Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow section-padding text-navy-foreground">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 border border-gold/40 rounded-sm text-gold text-sm font-medium mb-6 tracking-wide">
            Established by Government of Telangana
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-serif">
            Young India Skills{" "}
            <span className="gold-underline pb-1">University</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-foreground/80 mb-3 font-sans max-w-2xl">
            India's first government-backed skills university — building employable graduates through industry-integrated education.
          </p>
          <p className="text-sm text-navy-foreground/60 font-sans mb-8">
            YISU Act 2024, Government of Telangana
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-base px-8">
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10 font-semibold text-base px-8">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 font-semibold text-base px-8">
              Corporate Enquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
