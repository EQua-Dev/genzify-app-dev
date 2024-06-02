"use client";
import SuperAdminNotification from "@/components/SuperAdminNotification";
import AdminCreationForm from "@/components/form/AddTagAdminForm";
import AdminEditingForm from "@/components/form/EditTagAdminForm";
import SuperAdminDashboardLayout from "@/components/layouts/SuperAdminDashboardLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function DashboardSuperAdmin() {
  const [open, setIsOpen] = useState(false);
  const [admintype, setAdminType] = useState<string>("new");

  function handleOpen(open: boolean) {
    setIsOpen(open);
  }

  function handleSelectAdminType(type: string) {
    setAdminType(type);
  }

  return (
    <>
      <SuperAdminDashboardLayout>
        <div className=" h-full grid grid-cols-1 md:grid-cols-4 gap-4 text-[#c2c2c2] overflow-hidden row-auto-min">
          <div className="bg-[#1e1e1e] flex flex-col py-4 px-4 justify-between rounded-2xl">
            <span className="w-2/3 font-semibold text-lg ">
              Admin 001 Kano State, Nigeria
            </span>
            <ArrowRight
              className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
              size={40}
            />
          </div>
          <div className="bg-[#1e1e1e] flex flex-col py-4 px-4 justify-between rounded-2xl">
            <span className="w-2/3 font-semibold text-lg">
              Admin 002 FCT Abuja, Nigeria
            </span>
            <ArrowRight
              className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
              size={40}
            />
          </div>
          <div className="bg-[#1e1e1e] flex flex-col py-4 px-4 justify-between rounded-2xl">
            <span className="w-2/3 font-semibold text-lg">
              Admin 003 Accra, Ghana
            </span>
            <ArrowRight
              className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
              size={40}
            />
          </div>

          <Dialog open={open} onOpenChange={handleOpen}>
            <DialogTrigger asChild>
              <div className="bg-[#1e1e1e] cursor-pointer flex flex-col  py-8 px-4  rounded-2xl">
                <span className="w-1/2 font-medium text-lg">Add New Admin</span>
                <Plus
                  className=" bg-[#171717] self-center align-middle w-14 h-14 rounded-full p-2"
                  size={20}
                />
              </div>
            </DialogTrigger>

            <DialogContent>
              <>
                <div className="w-full text-[#c2c2c2]">
                  {admintype === "new" ? (
                    <div className="text-[#c2c2c2]">
                      <p className="text-sm w-2/3 text-center mt-4 text-wrap ">
                        You are about to create a new admin, Please carefully
                        enter your details then review and confirm before
                        Execution.
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm w-2/3 text-wrap ">
                      Y You are about to edit the details of an existing admin.
                      Please review and confirm the changes.
                    </p>
                  )}

                  <div className="flex gap-4 pt-2">
                    <Button
                      className={`bg-transparent px-10 border py-2  ${
                        admintype === "existing" && `bg-primary`
                      }`}
                      onClick={() => handleSelectAdminType("existing")}
                    >
                      Existing Admin
                    </Button>
                    <Button
                      className={`bg-transparent px-10 border py-2 ${
                        admintype === "new" && `bg-primary`
                      }`}
                      onClick={() => handleSelectAdminType("new")}
                    >
                      New Admin
                    </Button>
                  </div>
                  {admintype === "new" ? (
                    <AdminCreationForm />
                  ) : (
                    <AdminEditingForm />
                  )}
                </div>
              </>
            </DialogContent>
          </Dialog>

          <div className=" h-full w-full col-span-4 grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className=" h-full w-full col-span-4 grid grid-cols-3 gap-4 md:grid-rows-5">
              <div className="bg-[#1d1d1d] px-6 py-3  flex flex-col justify-between gap-4 rounded-2xl h-full w-full row-span-1">
                <span className="text-sm">Total Donations</span>
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

              <div className="bg-[#1d1d1d] px-6 py-3 flex flex-col  justify-between gap-4 rounded-2xl h-full w-full row-span-1">
                <span className="text-sm">Total Donations</span>
                <div className="flex justify-between">
                  <span className="text-2xl text-white font-semibold">
                    150 <span className="text-sm"> Points</span>
                  </span>
                  <ArrowRight
                    className=" bg-[#171717] self-end w-10 h-10 rounded-full p-2"
                    size={40}
                  />
                </div>
              </div>
              <div className="bg-[#1d1d1d] px-6 py-3 flex flex-col  justify-between gap-4 rounded-2xl h-full w-full row-span-1">
                <span className="text-sm">Total Donations</span>
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
              <div className="w-full rounded-2xl col-span-3 row-span-1 md:row-span-4">
                <Image
                  src="/images/super-admin.png"
                  alt="Super Admin Chart"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>

            {/*  */}
            <div className="bg-[#1d1d1d] rounded-2xl col-span-2">
              <SuperAdminNotification />
            </div>
          </div>
        </div>
      </SuperAdminDashboardLayout>
    </>
  );
}
