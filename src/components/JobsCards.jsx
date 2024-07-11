const JobsCards = ({ state, title, description, year, company }) => {
  return (
    <div className="flex gap-4 text-[#adb7be]">
      <div
        className="bg-[#181818] w-28 h-14 flex justify-center items-center px-2"
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
        <h2 className="text-4xl">{title}</h2>
        <h3 className="text-xl">{company}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobsCards;
