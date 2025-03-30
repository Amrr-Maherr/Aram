import Image from "next/image";
import TopNav from "./Components/TopNav";
import MainNav from "./Components/MainNav";
import HeroSection from "./Components/HeroSection";
import OurServicesSection from "./Components/Services/OurServicesSection";
import AboutUsSection from "./Components/AboutUs/AboutUsSection";
import WhyChoosUsSection from "./Components/WhyChoosUs/WhyChoosUsSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <MainNav />
      <HeroSection />
      <OurServicesSection />
      <AboutUsSection />
      <WhyChoosUsSection />
      <Footer/>
    </>
  );
}
