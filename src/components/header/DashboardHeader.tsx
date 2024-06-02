import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Menu, SearchIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="flex justify-center items-center gap-4 w-full text-[#c2c2c2]">
      <div className="md:hidden mt-1">
        <Menu color="#c2c2c2" size={40} />
      </div>

      <div className="w-full z-10 mb-4 ">
        <div className=" relative flex justify-between items-center gap-6 w-full">
          <div className="relative w-full max-w-lg">
            <Input
              placeholder="Search, Programs, Events"
              className="  py-6 px-14  rounded-lg bg-[#1E1E1E] w-full text-white"
            />
          </div>

          <SearchIcon
            className="absolute top-4 left-6  "
            size={24}
            color="#c2c2c2"
          />

          {/*Replace with an Image */}
          <div className="hidden md:flex gap-2 justify-center items-center self-end">
            <div className="h-14 w-14 bg-gray-300 rounded-full">
              {/* <Image src="/" /> */}
            </div>
            {/* <span className="text-white mx-4 mb-4 ">username</span> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-primary hover:ring-1 hover:ring-primary hover:ring-offset-1 md:hidden"
                >
                  <span className="sr-only">Name</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20 border-2" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Yolanda Adams
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      yolanda.adams@gmail.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="#">Profile</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
