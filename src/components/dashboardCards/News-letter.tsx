import Image from "next/image";
import { string } from "zod";

type NewsletterData = {
  id: number;
  title: string;
  icon: string;
  date: string;
  description: string;
};

// Temporary program list data

const Newsletterlist = [
  {
    id: 1,
    title: "Dear Gen Z - January 2024",
    icon: "/icons/pdf.png",
    date: "2021-09-01",
    description: "This is a description of program 1",
  },
  {
    id: 2,
    title: "Dear Gen Z - January 2024",
    icon: "/icons/pdf.png",
    date: "2021-09-02",
    description: "This is a description of program 2",
  },
  {
    id: 3,
    title: "Dear Gen Z - January 2024",
    icon: "/icons/pdf.png",
    date: "2021-09-03",
    description: "This is a description of program 3",
  },
];

export default function Newsletter() {
  return (
    <>
      <div className=" bg-[#1E1E1E] rounded-lg p-4 w-full h-full">
        <div className="flex w-full justify-between items-center mb-4 text-[#C2C2C2]">
          <h2 className="font-medium text-2xl">News Letter</h2>
          <span className="text-sm text-[#2930ff]">View All</span>
        </div>

        {Newsletterlist.map((newsletter: NewsletterData) => (
          <div
            key={newsletter.id}
            className="flex items-center gap-4 w-full  mb-4 p-1 border border-[#c2c2c2] rounded-lg hover:bg-[#292929] transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex items-center justify-between mx-6 py-1 w-full  gap-4 ">
              <h3 className="font-medium text-[12px] align-middle text-[#C2C2C2]">
                {newsletter.title}
              </h3>
              <div className="">
                <Image
                  src={newsletter.icon}
                  alt="News letter icon"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
