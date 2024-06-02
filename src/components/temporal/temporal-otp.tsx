import Image from "next/image";
import RegisterLayout from "../layouts/RegisterLayout";
import OTPInput from "../form/Otpform";

export default function OtpPage() {
  return (
    <>
      <RegisterLayout>
        <div className="bg-[#1E1E1E] p-6 rounded-2xl w-full max-w-80 md:max-w-sm lg:max-w-2xl  flex flex-col justify-center items-center">
          <div className=" flex flex-col justify-center items-center w-full p-4">
            <Image
              src="/images/genzify-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <div>
              <OTPInput />
            </div>
          </div>
        </div>
      </RegisterLayout>
    </>
  );
}
