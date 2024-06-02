"use client";
import OTPInput from "@/components/form/Otpform";
import PersonalDetailsForm from "@/components/form/PersonalDetailsForm";
import RegisterLayout from "@/components/layouts/RegisterLayout";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegistrationStore } from "@/store/user";
import OtpPage from "@/components/temporal/temporal-otp";

export default function CompleteUserRegistration() {
  const step = useRegistrationStore((state) => state.step);

  return <>{renderContent(step)}</>;
}

function renderContent(step: number) {
  console.log(step, "step");
  switch (step) {
    case 1:
      return <OtpPage />;
    case 2:
      return <PersonalDetailsForm />;

    default:
      return <OtpPage />;
  }
}

// function OtpPage() {
//   const router = useRouter();
//   return (
//     <>
//       <RegisterLayout>
//         <div className="bg-[#1E1E1E] p-6 rounded-2xl w-full max-w-2xl  flex flex-col justify-center items-center">
//           <div className=" flex flex-col justify-center items-center w-full p-4">
//             <Image
//               src="/images/genzify-logo.png"
//               alt="Logo"
//               width={100}
//               height={100}
//             />
//             <div>
//               <OTPInput />
//             </div>
//           </div>
//         </div>
//       </RegisterLayout>
//     </>
//   );
// }
