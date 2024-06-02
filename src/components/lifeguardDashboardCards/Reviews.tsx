import Image from "next/image";

export default function Reviews() {
  return (
    <>
      <div className=" bg-[#1E1E1E] p-4 w-full h-full rounded-2xl">
        <div className="flex w-full justify-between items-center mb-4 text-[#C2C2C2]">
          <h2 className="font-medium text-2xl">Reviews</h2>
          <span className="text-sm text-[#2930ff] cursor-pointer">
            View All
          </span>
        </div>
        <div>
          <div className="flex items-center gap-4  w-full  mb-4 md:mb-4 p-4 border border-[#c2c2c2] rounded-lg bg-[#141414]   hover:bg-[#292929] transition duration-300 ease-in-out">
            <div className="">
              <Image
                src="/images/review-image.png"
                alt="News letter icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex items-center justify-between mx-4 w-full py-1 text-[#C2C2C2]  gap-4 ">
              <h4 className="font-semibold text-2xl">Amy</h4>
              <p className="font-medium text-[16px] align-middle ">
                Life-changing support from a compassionate therapist who truly
                listens and guides with wisdom.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4  w-full  mb-4 md:mb-8 p-5  border border-[#c2c2c2] rounded-lg bg-[#141414]   hover:bg-[#292929] transition duration-300 ease-in-out">
            <div className="">
              <Image
                src="/images/review-image.png"
                alt="News letter icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex items-center justify-between mx-4 w-full py-1 text-[#C2C2C2]  gap-4 ">
              <h4 className="font-semibold text-2xl">Amy</h4>
              <p className="font-medium text-[16px] align-middle ">
                Life-changing support from a compassionate therapist who truly
                listens and guides with wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
