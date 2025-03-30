import Image from "next/image";
import TopNav from "./Components/TopNav";
import MainNav from "./Components/MainNav";
import HeroSection from "./Components/HeroSection";
import OurServicesSection from "./Components/Services/OurServicesSection";

export default function Home() {
  return (
    <>
      <TopNav />
      <MainNav />
      <HeroSection />
      <OurServicesSection/>
    </>
  );
}
