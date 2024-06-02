import DashboardLayout from "@/components/layouts/DasboardLayout";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GdpPage() {
  return (
    <>
      <DashboardLayout>
        <div className="text-[#c2c2c2] flex items-center w-full ">
          <ArrowLeft className="cursor-pointer" />
          <header>
            <h1 className="text-2xl font-bold w-full self-center text-center ">
              GDP
            </h1>
          </header>
        </div>
        <div className="flex flex-col p-4 md:p-0 md:grid grid-cols-5  w-full  gap-4 rounded-2xl">
          <div className=" col-span-2 min-h-screen  grid grid-rows-3 gap-4">
            <div className="bg-[#1E1E1E]    row-span-2 h-full  rounded-2xl flex flex-col gap-6 justify-center items-center">
              <span className="font-semibold text-3xl text-center text-[#c2c2c2]">
                GDPs
              </span>
              <div className="w-36 h-36 text-2xl bg-[#171717] rounded-full text-white font-medium flex justify-center items-center">
                5
              </div>
            </div>

            <div className="bg-[#1E1E1E] flex- flex-col   h-full row-span-1 text-[#C2C2C2]  rounded-2xl p-4">
              <div className="flex w-full justify-between items-center mb-10  ">
                <h2 className="font-medium text-xl">GDP History</h2>
                <span className="text-sm text-[#2930ff]">View All</span>
              </div>
              <div className="flex flex-col gap-5">
                <div
                  className="border border-[#
#525151] p-4 rounded-md bg-[#171717]"
                >
                  1 Point Awarded - 2nd January, 2024{" "}
                </div>

                <div
                  className="border border-[
#525151] p-4 rounded-md bg-[#171717]  "
                >
                  1 Point Awarded - 2nd January, 2024{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E1E1E]  col-span-3 row-span-3   rounded-2xl text-[#c2c2c2] p-6">
            <div className=" p-6">
              <h2 className="text-2xl font-bold w-full self-center text-center mb-8">
                FAQs
              </h2>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8" className="mb-6">
                    <AccordionTrigger>What are GDPs?</AccordionTrigger>
                    <AccordionContent>
                      GDPS are an abbreviation for Genzify Donor points
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
