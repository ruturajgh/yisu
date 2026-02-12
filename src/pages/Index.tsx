import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NewsTicker from "@/components/layout/NewsTicker";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import TrendingCoursesSection from "@/components/sections/TrendingCoursesSection";
import SchoolsSection from "@/components/sections/SchoolsSection";
import WhyYISUSection from "@/components/sections/WhyYISUSection";
import OutreachSection from "@/components/sections/OutreachSection";
import AcademicsGallerySection from "@/components/sections/AcademicsGallerySection";
import EventsSection from "@/components/sections/EventsSection";
import IndustryPartnersSection from "@/components/sections/IndustryPartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <NewsTicker />
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <LeadershipSection />
        <TrendingCoursesSection />
        <SchoolsSection />
        <WhyYISUSection />
        <OutreachSection />
        <AcademicsGallerySection />
        <EventsSection />
        <IndustryPartnersSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;