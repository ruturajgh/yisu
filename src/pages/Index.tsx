import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import AboutSnapshot from "@/components/AboutSnapshot";
import SchoolsPrograms from "@/components/SchoolsPrograms";
import IndustryPartners from "@/components/IndustryPartners";
import WhyYISU from "@/components/WhyYISU";
import Testimonials from "@/components/Testimonials";
import NoticesSection from "@/components/NoticesSection";
import CampusSection from "@/components/CampusSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LeadershipSection />
        <AboutSnapshot />
        <SchoolsPrograms />
        <IndustryPartners />
        <WhyYISU />
        <Testimonials />
        <NoticesSection />
        <CampusSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
