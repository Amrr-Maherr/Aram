"use client"
import { useEffect } from "react";
import AboutUsImage from "./AboutUsImage";
import AboutUsText from "./AboutUsText";
import ScrollReveal from "scrollreveal";

export default function AboutUsSection() {
  useEffect(() => {
    // إعداد ScrollReveal
    ScrollReveal().reveal(".about-us-image", {
      duration: 1000,
      origin: "left",
      distance: "100px",
      opacity: 0,
      delay: 200,
    });

    ScrollReveal().reveal(".about-us-text", {
      duration: 1000,
      origin: "right",
      distance: "100px",
      opacity: 0,
      delay: 400,
    });
  }, []);

  return (
    <div className="h-fit">
      <div className="container w-[90%] mx-auto overflow-x-hidden flex items-center justify-between flex-wrap md:flex-nowrap my-[100px] gap-10">
        <div className="about-us-image">
          <AboutUsImage />
        </div>
        <div className="about-us-text">
          <AboutUsText />
        </div>
      </div>
    </div>
  );
}
