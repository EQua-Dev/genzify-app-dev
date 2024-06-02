"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Donate from "../DonateModal";

export default function Donation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer transform transition duration-500 hover:scale-110 hover:opacity-60 bg-[url('/images/donation-mobile.png')] md:bg-[url('/images/donation.png')] bg-no-repeat h-52 md:h-56 lg:h-72 rounded-2xl w-full bg-cover bg-center">
            <div className="min-w-full max-w-full md:h-full align-bottom flex flex-col justify-center content-end text-center font-bold text-white text-3xl backdrop-blur-sm">
              {" "}
              <span className="mt-10">Coming Soon</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          {/* <Donate /> */}
          <div className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
            <span>Hey!</span>
            <h2>This service is coming soon</h2>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
