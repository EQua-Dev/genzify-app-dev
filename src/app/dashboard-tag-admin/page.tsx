import TagPlaylist from "@/components/TagPlaylist";
import UpcomingEvents from "@/components/dashboardCards/Upcoming-events";
import TagAdminDashboardLayout from "@/components/layouts/TagAdminDashboardLayout";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DashboardAdmin() {
  return (
    <>
      <TagAdminDashboardLayout>
        <div className="h-full grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="rounded-2xl col-span-2">
            <UpcomingEvents />
          </div>

          <div className="rounded-2xl col-span-3 text-[#c2c2c2] grid grid-cols-3 gap-4">
            <div className="bg-[#1d1d1d] px-6 py-3 flex flex-col justify-between gap-4 rounded-2xl h-full w-full row-span-1">
              <span className="text-sm">Donations</span>
              <div className="flex justify-between">
                <span className="text-2xl text-white font-semibold">
                  520 <span className="text-sm"> Points</span>
                </span>
                <ArrowRight
                  className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
                  size={40}
                />
              </div>
            </div>

            <div className="bg-[#1d1d1d] px-6 py-3  flex flex-col justify-between gap-4 rounded-2xl h-full w-full row-span-1">
              <span className="text-sm">Partners</span>
              <div className="flex justify-between">
                <span className="text-2xl text-white font-semibold">
                  60 <span className="text-sm"> Points</span>
                </span>
                <ArrowRight
                  className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
                  size={40}
                />
              </div>
            </div>

            <div className="bg-[#1d1d1d] px-6 py-3  flex flex-col justify-between gap-4 rounded-2xl h-full w-full row-span-1">
              <span className="text-sm">Volunteers</span>
              <div className="flex justify-between">
                <span className="text-2xl text-white font-semibold">
                  459 <span className="text-sm"> Points</span>
                </span>
                <ArrowRight
                  className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
                  size={40}
                />
              </div>
            </div>
            <div className="rounded-2xl col-span-3 p-2 ">
              <Image
                src="/images/tag-admin-chart.png"
                alt="Super Admin Chart"
                width={800}
                height={800}
                className="rounded-2xl w-full h-full"
              />
            </div>
          </div>

          <div className=" md:col-span-5 text-[#c2c2c2] flex flex-col md:grid grid-cols-3 gap-4">
            <div className="rounded-2xl">
              <Image
                src="/images/book-of-the-month-chart.png"
                alt="Book of the Month Chart"
                width={800}
                height={800}
              />
            </div>
            <div className="rounded-2xl">
              <TagPlaylist />
            </div>
            <div className="flex flex-col gap-4 w-full justify-between">
              <div className="rounded-2xl bg-[#1e1e1e] flex flex-col gap-4 p-5 ">
                <p className=" text-xl w-1/2">Dear GenZ Newsletter</p>
                <ArrowRight
                  size={40}
                  className="h-10 w-10 rounded-full self-end p-4 bg-[#171717]"
                />
              </div>
              <div className="rounded-2xl bg-[#1e1e1e] flex flex-col gap-4 p-5 ">
                <p className=" text-xl w-1/2">Award Genzify Donor Points</p>
                <ArrowRight
                  size={40}
                  className="h-10 w-10 rounded-full self-end p-4 bg-[#171717]"
                />
              </div>
            </div>
          </div>
        </div>
      </TagAdminDashboardLayout>
    </>
  );
}
