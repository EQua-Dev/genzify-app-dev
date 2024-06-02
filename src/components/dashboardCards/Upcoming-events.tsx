"use client";
import { getAllEvents } from "@/api/events";
import { getSystemProperties } from "@/api/system";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import EventRegistrationForm from "../form/EventRegistrationForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function UpcomingEvents() {
  const getAllEventsQuery = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
  console.log(getAllEventsQuery?.data, "getAllEventsQuery.data");

  const handleClose = () => {
    const closeButton = document.querySelector("[data-radix-dialog-close]");
    if (closeButton) closeButton.click();
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className=" relative cursor-pointer transform transition duration-500 hover:scale-110 hover:opacity-60 flex bg-[url('/images/go-pro-event.jpeg')] text-white bg-center bg-no-repeat h-96 md:h-full  mx-auto rounded-2xl bg-cover  "
            onClick={() => console.log("clicked")}
          >
            <ChevronRight className="absolute right-4 top-2" />
            <div className="rounded-2xl flex flex-col backdrop-blur-xl text-wrap align-middle  items-left  justify-end self-end">
              <div className="">
                <h2 className="my-1 px-2 text-lg">Upcoming Events</h2>
                <h3 className="px-2 text-2xl font-bold">Gen Z Sports Fest</h3>
                <p className="px-2 pb-4">
                  Join us for the Gen Z Sports Fest! Dive into diverse sports
                  activities, enjoy live performances, and participate in
                  workshops led by pros. Meet your favorite sports stars, savor
                  delicious food, and connect with peers. Whether you&apos;re
                  competing, learning, or having fun, this event promises an
                  unforgettable experience. Secure your spot now!
                </p>
                <p className="px-2 pb-4 font-bold">
                  Date: Saturday, 15 June 2024
                </p>

                <p className="px-2 pb-4 font-bold">
                  Venue: Image Garden Boundary RD, GRA Benin City
                </p>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="">
            <DialogClose asChild>
              <EventRegistrationForm onClose={handleClose} />
            </DialogClose>
          </div>
        </DialogContent>
        {/*<DialogContent className="w-1/2">
          {getAllEventsQuery.data &&
            getAllEventsQuery.data.map((event, index) => (
              <Link
                href="/dashboard-customer/events/[id]"
                key={index}
                className="flex flex-col text-2xl font-bold text-center text-[#c2c2c2]  p-4 mb-4"
              >
                <DialogTitle>{event.title}</DialogTitle>
              </Link>
            ))}
        </DialogContent>*/}
      </Dialog>
    </>
  );
}
