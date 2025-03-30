import AboutUsImage from "./AboutUsImage";
import AboutUsText from "./AboutUsText";
import Button from "../Button";

export default function AboutUsSection() {


  return (
    <div className="h-fit">
      <div className="container w-[90%] mx-auto overflow-x-hidden flex items-center justify-between flex-wrap md:flex-nowrap my-[100px] gap-10">
        <div className="about-us-image">
          <AboutUsImage />
        </div>
        <div className="about-us-text flex items-center flex-col justify-end gap-10">
          <AboutUsText />
          <Button text="قراءه المزيد" />
        </div>
      </div>
    </div>
  );
}
