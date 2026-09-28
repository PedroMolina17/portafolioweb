import JobsCards from "./JobsCards";

const Jobs = () => {
  return (
    <div id="experience" className="py-10 md:py-24">
      <h2 className="text-4xl text-center mt-10 font-bold">Experience Jobs</h2>
      <div className="flex flex-col gap-2 mt-10 justify-center items-center">
        <div className="w-full flex flex-col gap-6">
          <JobsCards
            state={true}
            title="Analist Programmer"
            company="Textil del Valle"
            year={"2026"}
            description={
              "Analyze and develop software requirements, collaborate with users to gather and define business needs, create and track incidents, and maintain and improve enterprise applications. Develop solutions using Angular, .NET, and SQL, working with business logic, databases, and APIs while coordinating with different teams to ensure requirements are properly implemented."
            }
            imageUrl="/images/tdv.png"
          />

          <JobsCards
            state={false}
            title="Co-Leader Frontend Developer"
            company="Devdatep Consulting"
            year={"2024"}
            description={
              "I co-led the Frontend team at Devdatep Consulting, ensuring that the endpoints were functioning correctly. I assigned tasks and provided assistance whenever needed. Additionally, I collaborated closely with the backend team to streamline integrations and improve overall project efficiency. I also mentored junior developers, fostering a collaborative and supportive team environment."
            }
            imageUrl="/images/devdatep.png"
          />
          <JobsCards
            state={false}
            title="It Assisnt"
            company="Agricola Andrea S.A.C"
            year={"2022"}
            description={
              "I co-led the Frontend team at Devdatep Consulting, ensuring that the endpoints were functioning correctly. I assigned tasks and provided assistance whenever needed. Additionally, I collaborated closely with the backend team to streamline integrations and improve overall project efficiency. I also mentored junior developers, fostering a collaborative and supportive team environment."
            }
            imageUrl="/images/agricola-andrea.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
