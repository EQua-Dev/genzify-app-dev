import { Button } from "./ui/button";

export default function TagPlaylist() {
  return (
    <>
      <div className="flex bg-[url('/images/playlist.png')] text-white  bg-center bg-no-repeat h-80 sm:h-96 md:h-full mx-auto bg-local  rounded-xl  bg-cover min-h-full min-w-full max-w-full ">
        <div className="flex flex-col  backdrop-blur-xl text-wrap align-middle  items-left px-4 py-2 justify-end self-end  w-full   ">
          <p>Listen to what the Gen Zs are playing with our curated playlist</p>
          <Button className=" bg-transparent border border-primary px-8 py-4 self-end">
            Add Link
          </Button>
        </div>
      </div>
    </>
  );
}
