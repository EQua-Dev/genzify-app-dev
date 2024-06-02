"use client";
import Image from "next/image";
import { lifeguardNavItems, lifeguardNavItems2 } from "../constants/navs";
import SuperAdminDashboardHeader from "../header/DashboardHeader";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function LifeguardDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <div className=" h-full w-full md:h-contain flex xl:min-w-screen bg-[#141414]">
        <div className="hidden md:flex flex-col justify-center h-full items-center min-h-full">
          <div>
            <Image
              src="/images/genzify-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className=" mt-4 w-[12rem] text-sm  ">
            <div className="">
              {lifeguardNavItems.map((item, index) => {
                const activeLink = pathname === item.path;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-start p-3 my-4 w-full  ${
                      activeLink ? "bg-primary" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center shrink-0">
                      <Image
                        src={`${item.icon}.png`}
                        width={50}
                        height={50}
                        alt={item.name}
                        className="w-6 h-6 shrink-0"
                      />
                    </div>
                    <div className="ml-2">
                      <span className="text-white">{item.name}</span>
                    </div>
                  </div>
                );
              })}

              <Separator
                className="mt-20 mb-10 w-[70%] mx-auto text-[#525151]"
                color="#525151"
              />

              {lifeguardNavItems2.map((item, index) => {
                const activeLink = pathname === item.path;
                return (
                  <div
                    key={index}
                    className={`flex  justify-start p-3 my-4 w-full  ${
                      activeLink ? "bg-primary" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center shrink-0">
                      <Image
                        src={`${item.icon}.png`}
                        width={50}
                        height={50}
                        alt={item.name}
                        className="w-6 h-6 shrink-0"
                      />
                    </div>
                    <div className="ml-2">
                      <span className="text-white">{item.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="  p-2 mx-auto">
          <div className="flex flex-col gap-6 md:max-w-[80rem] lg:max-w-[75rem] md:mx-8 ">
            <div className="">
              <SuperAdminDashboardHeader />
            </div>
            <div className="flex-1 mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
