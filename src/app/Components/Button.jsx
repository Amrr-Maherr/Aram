export default function Button({text}) {
    return (
      <>
        <button className="w-[200px] cursor-pointer sm:w-[250px] md:w-[294px] h-[40px] sm:h-[48px] md:h-[56px] bg-[#1E3A8A] rounded-[10px] text-base sm:text-lg md:text-xl font-[600] text-white">
          {text}
        </button>
      </>
    );
}