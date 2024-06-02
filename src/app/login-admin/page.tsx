"use client";
import Image from "next/image";
import AdminLoginForm from "@/components/form/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <>
      <div className="relative h-screen min-h-screen w-full mx-auto overflow-hidden">
        <div className="blurred-bg absolute inset-0"></div>
        <div className="relative z-10 w-full flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="flex w-full flex-row justify-between  items-center text-[#c2c2c2]">
            <Image
              src="/images/sign-in.png"
              alt="Side Photo"
              width={500}
              height={500}
              className=" object-fill h-auto w-full  hidden md:flex"
            />

            <div className="flex flex-col text-center gap-4 items-center justify-center w-full  h-screen min-h-screen bg:transparent md:bg-[#1e1e1e]">
              <Image
                src="/images/genzify-logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
              <div className="text-center flex flex-col items-center justify-center gap-8">
                <h1 className="text-3xl font-bold text-[#c2c2c2] mt-4">
                  Admin Sign In
                </h1>
                <p className="text-[#c2c2c2] text-sm w-[90%]">
                  Input your email address and password for secure login to the
                  TAG Portal
                </p>
              </div>

              <div className="w-3/4 ">
                <AdminLoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
