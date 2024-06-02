import DashboardLayout from "@/components/layouts/DasboardLayout";
import { ArrowLeft } from "lucide-react";

const GdpArray = [
  "2 Points Awarded - 2nd November, 2023",
  "7 Points Awarded - 5th March, 2023",
  "4 Points Awarded - 17th July, 2023",
  "9 Points Awarded - 9th September, 2023",
  "3 Points Awarded - 20th January, 2023",
  "6 Points Awarded - 10th June, 2023",
  "5 Points Awarded - 14th August, 2023",
  "8 Points Awarded - 30th April, 2023",
  "1 Points Awarded - 22nd May, 2023",
  "11 Points Awarded - 7th December, 2023",
  "10 Points Awarded - 18th February, 2023",
  "12 Points Awarded - 25th October, 2023",
];

console.log(GdpArray);

export default function GdpAll() {
  return (
    <>
      <DashboardLayout>
        <div className=" flex flex-col justify-center items-center">
          <div className="text-[#c2c2c2] flex items-center w-full ">
            <ArrowLeft className="cursor-pointer" />
            <header>
              <h1 className="text-2xl font-bold w-full self-center text-center ">
                GDP
              </h1>
            </header>
          </div>

          {GdpArray.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center my-4 text-[#c2c2c2] border border-[#
#525151] p-4 rounded-md bg-[#171717] w-[15rem]  md:w-[30rem]  py-4"
            >
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
}
