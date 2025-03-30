import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesBox({ ele }) {
  return (
    <div className="w-[330px] h-[194px]  p-4 flex flex-col items-end justify-between shadow-xl rounded-lg mx-auto my-5">
      <div className="text-3xl text-[#8A1E70]">
        <FontAwesomeIcon icon={ele.icon} />
      </div>
      <div className="text-lg font-semibold mt-2">{ele.title}</div>
      <div className="text-sm text-center mt-1">{ele.description}</div>
    </div>
  );
}
