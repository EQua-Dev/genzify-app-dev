import DashboardLayout from "@/components/layouts/DasboardLayout";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function WhiteBoxProgram() {
  return (
    <>
      <DashboardLayout>
        <div className="h-full w-full container text-[#c2c2c2] ">
          <div className=" flex flex-col md:grid grid-cols-3 gap-4 md:grid-rows-2 auto-rows-min">
            <div className="rounded-2xl col-span-2">
              <Image
                src="/images/white-box-program.png"
                alt="White Box"
                width={400}
                height={300}
                className="rounded-2xl w-full h-full"
              />
            </div>

            <div className="bg-[#1E1E1E] h-full w-full rounded-2xl col-span-1 py-8 px-4 row-span-2 flex flex-col center">
              <div>
                <h3 className="text-center pb-4">FAQs</h3>
                <Accordion type="single" collapsible>
                  {/* value 1 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Sip and Flip?</AccordionTrigger>
                    <AccordionContent>
                      Definition of Sip and Flip
                    </AccordionContent>
                  </AccordionItem>
                  {/* value 2 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Sip and Flip?</AccordionTrigger>
                    <AccordionContent>
                      Definition of Sip and Flip
                    </AccordionContent>
                  </AccordionItem>
                  {/* value 3 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Sip and Flip?</AccordionTrigger>
                    <AccordionContent>
                      Definition of Sip and Flip
                    </AccordionContent>
                  </AccordionItem>
                  {/* value 4 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Sip and Flip?</AccordionTrigger>
                    <AccordionContent>
                      Definition of Sip and Flip
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Suggestion Box</h3>
                <Textarea
                  className="bg-[#1e1e1e] "
                  placeholder="Enter Suggestion"
                />
              </div>
            </div>

            <div className=" col-span-2  row-span-2 grid grid-cols-3 gap-4 mb-6 ">
              <div className=" rounded-2xl col-span-2 ">
                <Image
                  src="/images/box.png"
                  alt="White Box"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
              <div className="bg-[#1e1e1e]  w-full rounded-2xl col-span-1 px-8 py-4 flex flex-col ">
                <p>
                  Make a Donation to genzify white box project to enable y young
                  girls round Africa get period care packages
                </p>
                <ArrowRight className="h-6 w-6 bg-[#1e1e1e] rounded-full self-end" />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
