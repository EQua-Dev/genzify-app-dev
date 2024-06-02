"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const volunteerRegisterFormSchema = z.object({
  username: z.string().min(1, { message: "Username  is required" }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  program: z.string().min(1, { message: "Program  is required" }),
  location: z.string().min(1, { message: "Location  is required" }),
  email: z.string().min(1, { message: "Email  is required" }),
  nationality: z.string().min(1, { message: "Nationality  is required" }),
  age: z.string().min(1, { message: "Nationality  is required" }),

  image: z.string().min(1, { message: "Image  is required" }),
});

export type VolunteerRegistrationFormValues = z.infer<
  typeof volunteerRegisterFormSchema
>;

export default function VolunteerRegisterationForm() {
  const form = useForm<VolunteerRegistrationFormValues>({
    resolver: zodResolver(volunteerRegisterFormSchema),
    defaultValues: {
      username: "",
      phone: "",
      program: "",
      location: "",
      email: "",
      nationality: "",
      age: "",
      image: "",
    },
  });

  //   const registerUserMutation = useMutation({
  //     mutationFn: registerUser,
  //     onSuccess: (data) => {
  //       toast.success(data.data.message || "An error occurred");
  //       router.push("/verify-email");
  //     },
  //     onError: (error) => {
  //       // toast.error( || "An error occurred");
  //     },
  //   });

  async function onSubmit(values: VolunteerRegistrationFormValues) {
    // registerUserMutation.mutate(values);
    // console.log(values);
  }

  return (
    <>
      {/* <div className="fixed z-100 w-full  p-4 min-w-screen content-center mx-auto inset-0 bg-black bg-opacity-50 "> */}
      <div className="relative flex flex-col justify-center gap-4  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
        <h2 className="text-2xl  font-bold">Join Our Team of Volunteers </h2>
        <p>
          Join our volunteer team and make a tangible impact on communities.
          Your skills and passion can contribute to projects fostering social
          change and sustainability. Upload a file telling us how we can work
          together. Apply now to be part of our mission for a better world.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col my-8 space-y-8 w-full p-5 "
          >
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className=" flex flex-col gap-6 col-span-1">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Username"
                            {...field}
                            type="email"
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full  rounded-md  py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Contact"
                            {...field}
                            type="text"
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Program"
                            type="text"
                            {...field}
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Location"
                            type="text"
                            {...field}
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-6 text-left col-span-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type="email"
                            {...field}
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Nationality"
                            type="text"
                            {...field}
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Age"
                            type="text"
                            {...field}
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Image"
                            type="text"
                            {...field}
                            className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </>

            <div className="flex flex-col justify-center items-center text-center mx-auto ">
              <div className="inline-flex items-center justify-around gap-2">
                <p>
                  By clicking on apply, you have read and agreed to our{" "}
                  <span className="text-">
                    <a>Terms and Conditions</a>
                  </span>{" "}
                </p>
                <Checkbox className="w-4 h-4" />
              </div>
            </div>

            <Button className="" size="default" type="submit">
              Apply
            </Button>
          </form>
        </Form>
      </div>
      {/* </div> */}
    </>
  );
}
