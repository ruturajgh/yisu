import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-navy section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy-foreground mb-4">
          Begin Your Journey at <span className="text-gold">YISU</span>
        </h2>
        <p className="text-navy-foreground/70 text-lg max-w-xl mx-auto mb-8">
          Take the first step towards a skills-driven career backed by the Government of Telangana.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-base px-8">
            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10 font-semibold text-base px-8">
            <Download className="mr-2 w-4 h-4" /> Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
