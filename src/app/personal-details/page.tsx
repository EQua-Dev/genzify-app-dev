import PersonalDetailsForm from "@/components/form/PersonalDetailsForm";
import RegisterLayout from "@/components/layouts/RegisterLayout";
import Image from "next/image";
import React from "react";

export default function PersonalDetailsPage() {
  return (
    <>
      <RegisterLayout>
        <div className="mx-auto bg-[#1E1E1E] p-6 rounded-lg w-full max-w-2xl  flex flex-col justify-center items-center">
          <div className=" flex flex-col justify-center items-center w-full p-4">
            <Image
              src="/images/genzify-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <div className="text-center flex flex-col items-center justify-center gap-8">
              <h1 className="text-3xl font-bold text-[#c2c2c2] mt-4">
                Sign Up
              </h1>
              <p className="text-[#c2c2c2] text-sm w-[90%]">
                Enter your Personal details to Finish creating your account
                <div className="">
                  Already have an account?{" "}
                  <span className="text-[#62B2FD]"> Log in</span>{" "}
                </div>
              </p>
            </div>
            <PersonalDetailsForm />
          </div>
        </div>
      </RegisterLayout>
    </>
  );
}
