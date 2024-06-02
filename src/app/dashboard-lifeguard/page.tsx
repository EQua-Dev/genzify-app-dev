import LifeguardDashboardLayout from "@/components/layouts/LifeguardDashboardLayout";
import ActivityCard from "@/components/lifeguardDashboardCards/ActivityCard";
import LifeGuardNotification from "@/components/lifeguardDashboardCards/Notification";
import ProfileImage from "@/components/lifeguardDashboardCards/ProfileImage";
import Reviews from "@/components/lifeguardDashboardCards/Reviews";
import { ArrowRight } from "lucide-react";

import React from "react";

export default function DashboardLifeguard() {
  return (
    <LifeguardDashboardLayout>
      <div className="h-full flex flex-col  md:grid md:grid-cols-6 gap-4 md:max-w-[75rem] mx-auto ">
        <div className="rounded-2xl col-span-2">
          <ProfileImage />
        </div>
        <div className="text-[#c2c2c2]  rounded-2xl col-span-4  grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl col-span-1 p-4 flex flex-col justify-between gap-4  text-xl bg-[#1e1e1e]">
            <p className="w-2/3">
              Keep your account secure with a new password by updating it here.
            </p>
            <ArrowRight
              size={45}
              className="self-end h-10 w-10 rounded-full bg-[#171717] p-5 "
            />
          </div>
          <div className="bg-[#1e1e1e] rounded-2xl col-span-2 p-3 text-lg">
            <h4 className="text-xl">Personal Details</h4>
            <div className="mb-1 flex gap-4">
              <span>Name:</span>
              <span>Yolanda Adams</span>
            </div>
            <div className="mb-1 flex gap-4">
              <span>Phone No:</span>
              <span>+2347018946630</span>
            </div>
            <div className="mb-1 flex gap-4">
              <span>Email Address:</span>
              <span>yolandaAdams@gmail.com</span>
            </div>

            <div className="mb-1 flex gap-4">
              <span>Gender:</span>
              <span>Female</span>
            </div>

            <div className="mb-1 flex gap-4">
              <span>DOB:</span>
              <span>12 Nov</span>
            </div>

            <div className="mb-1 flex gap-4">
              <span>State of Residence:</span>
              <span>Lagos</span>
            </div>
            <div className="mb-1 flex gap-4">
              <span>Nationality:</span>
              <span>Nigerian</span>
            </div>
          </div>
          <div className="rounded-2xl col-span-2">
            <ActivityCard />
          </div>

          <div className="rounded-2xl col-span-1 p-4 flex flex-col justify-between gap-4  text-xl bg-[#1e1e1e]">
            <p className="w-2/3">
              Keep your account secure with a new password by updating it here.
            </p>
            <ArrowRight
              size={45}
              className="self-end h-10 w-10 rounded-full bg-[#171717] p-5 "
            />
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl col-span-1 min-h-full">
            <Reviews />
          </div>
          <div className="rounded-2xl col-span-1 min-h-full">
            <LifeGuardNotification />
          </div>
        </div>
      </div>
    </LifeguardDashboardLayout>
  );
}
