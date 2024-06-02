import React from "react";

export default function LifeGuardNotification() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-[#c2c2c2] bg-[#1E1E1E] rounded-2xl p-4 ">
        <div className="flex flex-col gap-4 justify-center p-4 ">
          <h3 className="text-2xl self-start ">Notification</h3>
          <div className="flex items-center gap-4  w-full min-w-full  mb-4 md:mb-4 p-4  border border-[#c2c2c2] rounded-lg   hover:bg-[#292929] transition duration-300 ease-in-out bg-[#141414]">
            <p className="text-[16px]">
              Reminder to select your available dates for April 2024
            </p>
          </div>
          <div className="flex items-center gap-4  w-full min-w-full  mb-4 md:mb-4 p-4  border border-[#c2c2c2] rounded-lg   hover:bg-[#292929] transition duration-300 ease-in-out bg-[#141414]">
            <p className="text-[14px]">
              Reminder to select your available dates for April 2024
            </p>
          </div>
          <div className="flex items-center gap-4  w-full min-w-full  mb-4 md:mb-4 p-4  border border-[#c2c2c2] rounded-lg   hover:bg-[#292929] transition duration-300 ease-in-out bg-[#141414]">
            <p className="text-[14px]">
              Reminder to select your available dates for April 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
