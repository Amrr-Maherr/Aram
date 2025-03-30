import WhyChoosUsGrid from "./WhyChoosUsGrid";
import WhyChoosUsText from "./WhyChoosUsText";

export default function WhyChoosUsSection() {
    return (
      <>
        <div className="w-[90%] mx-auto flex items-center justify-center gap-10 flex-wrap md:flex-nowrap">
          <WhyChoosUsGrid />
          <WhyChoosUsText />
        </div>
      </>
    );
}