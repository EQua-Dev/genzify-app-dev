export default function ActivityCard() {
  return (
    <>
      <div
        className="h-full text-white gap-3  
          bg-[#1d1d1d] rounded-2xl py-4  w-full"
      >
        <div className="  relative grid grid-cols-2 grid-rows-2 justify-between  gap-4 w-full">
          <div className=" bg-[#ff0000] rounded-md text-[14px] content-center align-middle h-40  w-40 flex flex-col items-center justify-center mx-auto ">
            <span>0</span>
            <p>Due Sessions</p>
          </div>
          <div className="  bg-[#7000FF] rounded-md text-[14px] content-center align-middle h-40 w-40 flex  flex-col  items-center justify-center mx-auto">
            <span>0</span>
            <p>Completed sessions</p>
          </div>
          <div className="  bg-[#e9fcff] text-[#171717]  rounded-md text-[14px] content-center h-40 w-40 align-middle flex flex-col items-center justify-center mx-auto">
            <span>0</span>
            <p>Pending sessions</p>
          </div>
          <div className="  bg-[#0d8e9f] rounded-md text-[14px] content-center h-40 w-40 align-middle flex flex-col items-center justify-center mx-auto">
            <span>0</span>
            <p>Aproved sessions</p>
          </div>
        </div>
      </div>
    </>
  );
}
