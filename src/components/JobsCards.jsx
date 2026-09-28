import Image from "next/image";
const JobsCards = ({ state, title, description, year, company, imageUrl }) => {
  return (
    <div className="flex gap-4 max-md:gap-1 ">
      <div
        className="bg-[#181818] w-28 h-14 flex justify-center items-center px-2 max-md:w-12 max-md:text-xs"
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
        }}
      >
        {year}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-4 h-4 p-2 rounded-full ${
            state ? "bg-yellow-300 shadow-md shadow-yellow-300" : "bg-gray-300"
          }`}
        ></div>
        <div className="flex h-full">
          <div className="flex border-r h-full"></div>
        </div>
      </div>
      <div>
        <h2 className="text-xl  font-bold">{title}</h2>
        <div className="flex items-center gap-2 py-2">
          <div className="bg-white opacity-90 rounded-md">
            <Image
              src={imageUrl}
              alt="devdatep"
              width={40}
              height={40}
              className="opacity-100"
            />
          </div>
          <h3 className="text-lg ">{company}</h3>
        </div>
        <p className="max-md:text-base text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default JobsCards;
