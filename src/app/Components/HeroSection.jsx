import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="h-dvh relative">
      <Image
        src="/Assets/HeroImage.png"
        alt="Hero Image"
        fill
        style={{
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-[59px] text-black">
          مرحبا بكم فى موقعنا
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-[59px] text-black">
          ارام لتنظيم الحفلات والمؤتمرات
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-[60px]">
          آرام علامة تجارية مسجلة لدي دائرة التنمية الاقتصادية والغرفة التجارية
          بمركز أبوظبي للأعمال بدولة الإمارات العربية المتحدة
        </p>
        <Button/>
      </div>
    </section>
  );
}
