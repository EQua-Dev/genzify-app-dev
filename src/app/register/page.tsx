import RegisterForm from "@/components/form/RegisterForm";
import RegisterLayout from "@/components/layouts/RegisterLayout";
import Image from "next/image";
import React from "react";

export default function RegisterPage() {
  return (
    <>
      <RegisterLayout>
        <div className="mx-auto bg-transparent md:bg-[#1E1E1E] p-4 rounded-2xl w-full max-w-2xl md:h-[90vh]  flex flex-col justify-between items-center gap-2">
          <div className=" flex flex-col gap-4 justify-center items-center w-full md:p-4">
            <Image
              src="/images/genzify-logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
            <div className="text-center flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-[#c2c2c2]">Sign Up</h1>
              <p className="text-[#c2c2c2] text-sm w-[80%] text-wrap">
                Input your email address and password for secure login to the
                TAG Portal
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </RegisterLayout>
    </>
  );
}
