"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function PlayList() {
  const router = useRouter();
  return (
    <>
      <div className="flex bg-[url('/images/vet.png')] text-white bg-center bg-no-repeat h-96 mx-auto bg-local  min-h-full min-w-full max-w-full  transition duration-500 hover:scale-110 hover:opacity-60 md:h-full rounded-2xl bg-cover">
        <div className="flex flex-col backdrop-blur-2xl text-wrap align-middle items-left px-4 py-2 justify-end self-end  ">
          <p>Listen to what the Gen Zs are playing with our curated playlist</p>
          <Button
            className="px-8 py-4 self-end bg-gray-400 cursor-not-allowed"
            //onClick={() => router.push("/dashboard-customer/internship")}
          >
            Internships
          </Button>
        </div>
      </div>
    </>
  );
}
