import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Donate() {
  return (
    <>
      <div className="bg-[#171717] text-center">
        <h2 className="text-3xl font-bold text-[#c2c2c2] m-4">Donate</h2>
        <p className="text-[#c2c2c2] text-sm w-[90%] mb-4">
          Your support is crucial. Stand with us to drive meaningful initiatives
          and create a lasting impact in the lives of those we aim to uplift
        </p>
        <div className=" flex flex-col gap-4 ">
          <Input placeholder="Enter Amount" />
          <Button className=" w-full p-4 my-4 rounded-lg mt-4">Proceed</Button>
        </div>
      </div>
    </>
  );
}
