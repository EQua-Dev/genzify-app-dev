import Image from "next/image";

// Temporary program list data

const programList = [
  {
    id: 1,
    title: "White Box Project",
    icon: "/icons/program.png",

    date: "2021-09-01",
    description: "This is a description of program 1",
  },
  {
    id: 2,
    title: "Life Programs - Safe Haven ",
    icon: "/icons/program.png",
    date: "2021-09-02",
    description: "This is a description of program 2",
  },
  {
    id: 3,
    title: "Life Programs - Bro Bono 3",
    icon: "/icons/program.png",
    date: "2021-09-03",
    description: "This is a description of program 3",
  },
  {
    id: 4,
    title: "VET Programs - Internships",
    icon: "/icons/program.png",
    date: "2021-09-04",
    description: "This is a description of program 4",
  },
];

export default function ProgramList() {
  return (
    <>
      <div className=" bg-[#1E1E1E] rounded-2xl max-w-full px-4 py-2 w-full h-full md:h-64 backdrop-blur-sm">
        <div className="flex w-full justify-between items-center mb-4 text-[#C2C2C2]">
          <h2 className="font-medium text-2xl">Program History</h2>
          <span className="text-sm text-[#2930ff] cursor-pointer">
            View All
          </span>
        </div>

        {/* {programList.map((program) => (
          <div
            key={program.id}
            className="flex flex-col gap-3 items-center justify-left w-full "
          >
            <div className="flex h-full gap-3 items-center w-full py-2 ">
              <div className=" ">
                <Image
                  src={program.icon}
                  alt="program icon"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="font-medium text-[22px] align-middle text-[#C2C2C2]">
                {program.title}
              </h3>
            </div>
          </div>
        ))} */}
        <div className="text-2xl font-bold text-center bg-clip-text bg-gradient-to-r text-[#c2c2c2] mb-4">
          <span>Hey!</span>
          <h2>This service is coming soon</h2>
        </div>
      </div>
    </>
  );
}
