import JobsCards from "./JobsCards";

const Jobs = () => {
  return (
    <>
      <h2 className="text-4xl text-center mt-10 font-bold">Experience Jobs</h2>
      <div className="flex flex-col gap-2 mt-10 justify-center items-center">
        <div className="w-full flex flex-col gap-6">
          <JobsCards
            state={true}
            title="Co-Leader Frontend Developer"
            company="Devdatep"
            year={"2024"}
            description={
              "I co-led the Frontend team at Devdatep Consulting, ensuring that the endpoints were functioning correctly. I assigned tasks and provided assistance whenever needed. Additionally, I collaborated closely with the backend team to streamline integrations and improve overall project efficiency. I also mentored junior developers, fostering a collaborative and supportive team environment."
            }
          />
          <JobsCards
            state={false}
            title="It Assisnt"
            company="Agricola Andrea S.A.C"
            year={"2022"}
            description={
              "I co-led the Frontend team at Devdatep Consulting, ensuring that the endpoints were functioning correctly. I assigned tasks and provided assistance whenever needed. Additionally, I collaborated closely with the backend team to streamline integrations and improve overall project efficiency. I also mentored junior developers, fostering a collaborative and supportive team environment."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
