"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal"; // استيراد المكتبة

export default function ServicesBox({ ele }) {
  useEffect(() => {
    ScrollReveal().reveal(".service-box", {
      duration: 1000, 
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      delay: 200,
      interval: 200,
    });
  }, []);

  return (
    <div className="service-box w-[330px] h-[194px] p-4 flex flex-col items-end justify-between shadow-lg rounded-lg mx-auto my-5">
      <div className="text-3xl text-[#8A1E70]">
        <FontAwesomeIcon icon={ele.icon} />
      </div>
      <div className="text-lg font-semibold mt-2">{ele.title}</div>
      <div className="text-sm text-center mt-1">{ele.description}</div>
    </div>
  );
}
