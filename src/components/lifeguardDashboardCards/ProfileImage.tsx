import { Button } from "../ui/button";

export default function ProfileImage() {
  return (
    <>
      <div className="flex bg-[url('/images/lifeguard.png')] text-[#c2c2c2] h-[30rem] bg-center bg-no-repeat md:h-full  mx-auto rounded-2xl bg-cover">
        <div className="flex flex-col backdrop-blur-xl text-wrap align-middle  items-left justify-end self-end w-full  ">
          <div className="m-4 ">
            <div className="flex justify-between items-center">
              <h3>Dr. Sarah</h3>
              <Button className="p-2 rounded-xl border border-primary text-primary bg-transparent">
                Edit Profile
              </Button>
            </div>
            <h4>Safe Haven</h4>
            <p className="text-sm">
              Hi there, I&apos;m Mrs Sarah, a seasoned therapist with years of
              experience. I provide compassionate support and guidance to help
              individuals overcome life&apos;s hurdles with empathy and
              understanding
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
