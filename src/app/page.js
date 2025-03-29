import Image from "next/image";
import TopNav from "./Components/TopNav";
import MainNav from "./Components/MainNav";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <>
      <TopNav />
      <MainNav />
      <HeroSection/>
    </>
  );
}
