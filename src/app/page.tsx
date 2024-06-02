import DashboardLayout from "@/components/layouts/DasboardLayout";
import Donation from "@/components/dashboardCards/Donation";
import Partner from "@/components/dashboardCards/Partner";
import UpcomingEvents from "@/components/dashboardCards/Upcoming-events";
import UserInfoCard from "@/components/dashboardCards/Information";
import VolunteerCard from "@/components/dashboardCards/volunteer";
import ProgramList from "@/components/dashboardCards/Program-list";
import Newsletter from "@/components/dashboardCards/News-letter";
import PlayList from "@/components/dashboardCards/Play-list";
import BookOfTheMonth from "@/components/dashboardCards/Book";

export default function DashBoardPage() {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 h-full ">
          <div className="col-span-5">
            <UpcomingEvents />
          </div>

          <div className="block md:hidden">
            <UserInfoCard />
          </div>

          <div className=" col-span-7 flex flex-col md:grid grid-cols-6 gap-4">
            <div className=" w-full col-span-2">
              {" "}
              <Donation />
            </div>
            <div className="w-full col-span-2">
              {" "}
              <Partner />
            </div>
            <div className=" w-full col-span-2">
              <VolunteerCard />
            </div>
            <div className=" col-span-3">
              {" "}
              <ProgramList />
            </div>
            <div className=" hidden md:flex col-span-3">
              <BookOfTheMonth />
            </div>
          </div>

          <div className="col-span-12 flex flex-col md:grid grid-cols-3 gap-4 w-full ">
            <div className="md:flex flex-row-reverse gap-4 w-full col-span-2">
              <div className=" ">
                <Newsletter />
              </div>
              <div className=" ">
                <PlayList />
              </div>
            </div>

            <div className="hidden md:flex col-span-1">
              <UserInfoCard />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

// "use client";
// import LoginForm from "@/components/form/LoginForm";
// import Image from "next/image";
// import DashBoardPage from "./dashboard-customer/page";

// export default function LoginPage() {
//   return (
//     <DashBoardPage/>

//   );
// }
