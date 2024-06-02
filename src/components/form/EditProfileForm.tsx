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
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const editprofileFormSchema = z.object({
  fullName: z.string().min(1, { message: "Enter Full name" }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  state: z.string().min(1, { message: "Program  is required" }),
  nationality: z.string().min(1, { message: "Nationality  is required" }),
  dob: z.string().min(1, { message: "Nationality  is required" }),

  gender: z.string().min(1, { message: "Select gender  is required" }),

  bio: z.string().min(1, { message: "Select gender  is required" }),
});

export type editprofileFormValues = z.infer<typeof editprofileFormSchema>;

export default function EditProfileForm() {
  const form = useForm<editprofileFormValues>({
    resolver: zodResolver(editprofileFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      state: "",
      dob: "",
      gender: "",
      nationality: "",
      bio: "",
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

  async function onSubmit(values: editprofileFormValues) {
    // registerUserMutation.mutate(values);
    // console.log(values);
  }

  return (
    <>
      {/* <div className="fixed z-100 w-full  p-4 min-w-screen content-center mx-auto inset-0 bg-black bg-opacity-50 "> */}
      <div className="relative flex flex-col justify-center gap-4  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
        <h2 className="text-2xl  font-bold">Edit Profile </h2>
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
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Full name"
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
                            placeholder="Phone no."
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
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="State of residence"
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
                    name="dob"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Date of birth"
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
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Select gender"
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
                </div>
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={() => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        className="bg-[#1e1e1e]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>

            <Button className="" size="default" type="submit">
              Save Changes
            </Button>
          </form>
        </Form>
      </div>
      {/* </div> */}
    </>
  );
}

export const renderEditProfileForm = () => {};
