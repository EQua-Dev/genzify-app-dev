"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/layouts/DasboardLayout";
import Image from "next/image";
import UserInfoCard from "@/components/dashboardCards/Information";
import EditProfileForm from "@/components/form/EditProfileForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import UpdatePasswordForm from "@/components/form/updatePasswordForm";

export default function ProfilePage() {
  const [open, setIsOpen] = useState(false);

  function handleOpen(open: boolean) {
    setIsOpen(open);
  }

  return (
    <>
      <DashboardLayout>
        <div className="text-[#c2c2c2] flex items-center w-full  ">
          <ArrowLeft className="cursor-pointer hidden md:flex" />
          <header>
            <h1 className="text-2xl font-bold w-full self-center text-center ">
              Profile
            </h1>
          </header>
        </div>
        <div className=" flex flex-col md:grid grid-cols-5 w-full h-[] gap-4 overflow-hidden">
          <div className=" relative col-span-2 row-span-2 w-full h-full rounded-2xl ">
            <div className=" absolute p-8 w-full backdrop-blur-md bottom-5  text-[#c2c2c2]">
              <div className="flex justify-between p-2">
                <h3 className="text-2xl font-medium ">Yolanda Adams</h3>

                <Dialog open={open} onOpenChange={handleOpen}>
                  <DialogTrigger asChild>
                    <button className="p-3 border border-[#0008FF] text-lg text-[#0008ff] cursor-pointer rounded-lg">
                      Edit Profile
                    </button>
                  </DialogTrigger>

                  <DialogContent>
                    <EditProfileForm />
                  </DialogContent>
                </Dialog>
              </div>
              <h4>About me</h4>

              <p>
                Hey there, I&apos;m Yolanda! Passionate about art, music, and
                traveling. Constantly seeking new adventures and connecting with
                inspiring individuals. Let&apos;s explore the world together
              </p>
            </div>
            <Image
              src="/images/userProfile.png"
              width={600}
              height={700}
              alt="Profile Picture"
              className="w-full rounded-2xl "
            />
          </div>
          <div className=" col-span-3 rounded-2xl flex flex-col-reverse md:grid grid-cols-3 gap-4 h-[]">
            <div className="bg-[#1e1e1e] content-start col-span-1 rounded-2xl row-span-1  flex flex-col h-full items-center justify-between py-5 px-1 text-[#c2c2c2]">
              <p className="w-1/2 text-left">
                Keep your account secure with a new password by updating it
                here.
              </p>

              <Dialog open={open} onOpenChange={handleOpen}>
                <DialogTrigger asChild>
                  <ArrowRight
                    className="self-end bg-gray-500 w-6 h-6 rounded-full cursor-pointer"
                    size={24}
                  />
                </DialogTrigger>

                <DialogContent>
                  <UpdatePasswordForm />
                </DialogContent>
              </Dialog>
            </div>
            <div className="bg-[#1e1e1e] col-span-2 rounded-2xl row-span-1 p-4 text-[#c2c2c2]">
              <h2 className="text-[#c2c2c2] text-xl mb-2">Personal Details</h2>
              <div>
                <span>Name:</span>
                <span> Yolanda Adams</span>
              </div>

              <div>
                <span>Phone No: </span>
                <span>+2347018946630</span>
              </div>

              <div>
                <span>Email Address:</span>
                <span>+ YolandaAdams@gmail.com</span>
              </div>
              <div>
                <span>Gender:</span>
                <span>Female</span>
              </div>

              <div>
                <span>DOB: </span>
                <span> 12 Nov</span>
              </div>
              <div>
                <span>State of Residence: </span>
                <span>Lagos</span>
              </div>
              <div>
                <span>Nationality: </span>
                <span>Nigerian</span>
              </div>
            </div>
            <div className=" hidden md:flex bg-[#1e1e1e] col-span-2 rounded-2xl row-span-1 px-3 py-6">
              <UserInfoCard />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
