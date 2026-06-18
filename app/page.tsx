import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedExpertise from "@/components/TrustedExpertise";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChoose from "@/components/WhyChoose";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import BIC from "@/components/BIC";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedExpertise />
        <LogoMarquee />
        <Services />
        <FeaturedProjects />
        <WhyChoose />
        <Team />
        <Industries />
        <Testimonials />
        <BIC />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
