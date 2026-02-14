import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NewsTicker from "@/components/layout/NewsTicker";
import GovernmentBar from "@/components/layout/GovernmentBar";
import LogoHeader from "@/components/layout/LogoHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroGovernment from "@/components/sections/HeroGovernment";
import StatsSection from "@/components/sections/StatsSection";
import LeadershipShowcase from "@/components/sections/LeadershipShowcase";
import SchoolsProgramsSection from "@/components/sections/SchoolsProgramsSection";
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
      {/* Layer 1: Government Bar */}
      <GovernmentBar />
      {/* Layer 2: Logo Header with Actions */}
      <LogoHeader />
      {/* Layer 3: Navigation Bar */}
      <Header />

      <main>
        <HeroGovernment />
       
        {/* <StatsSection /> */}
       <WhyYISUSection />
        <LeadershipShowcase />
         <SchoolsProgramsSection />
        <OutreachSection />
        <AcademicsGallerySection /> <IndustryPartnersSection /> 
        <EventsSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;