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

const partnerRegisterFormSchema = z.object({
  username: z.string().min(1, { message: "Username  is required" }),
  email: z.string().min(1, { message: "Email  is required" }),
  contact: z.string().min(1, { message: "Contact  is required" }),
  program: z.string().min(1, { message: "Program  is required" }),
  location: z.string().min(1, { message: "Location  is required" }),
  image: z.string().min(1, { message: "Image  is required" }),
});

export type PartnerRegistrationFormValues = z.infer<
  typeof partnerRegisterFormSchema
>;

export default function PartnerRegisterationForm() {
  const router = useRouter();

  const [partnertype, setPartnerType] = useState<string>("individual");

  const form = useForm<PartnerRegistrationFormValues>({
    resolver: zodResolver(partnerRegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
      program: "",
      location: "",
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

  async function onSubmit(values: PartnerRegistrationFormValues) {
    // registerUserMutation.mutate(values);
    // console.log(values);
  }

  const handleSelectPartnerType = (type: string) => {
    setPartnerType(type);
  };

  return (
    <>
      {/* <div className="fixed z-100 w-full  p-4 min-w-screen content-center mx-auto inset-0 bg-black bg-opacity-50 "> */}
      <div className="relative flex flex-col justify-center gap-4  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
        <h2 className="text-2xl  font-bold">Become a Partner </h2>
        <p>
          Partner with us to drive positive change in communities and support
          sustainable initiatives. Align your brand with purpose, contribute to
          a better world, and explore partnership opportunities today.
        </p>
        <div className="flex gap-3">
          <Button
            className={`bg-transparent ${
              partnertype === "individual" && `bg-primary`
            }`}
            onClick={() => handleSelectPartnerType("individual")}
          >
            Individual
          </Button>
          <Button
            className={`bg-transparent ${
              partnertype === "organization" && `bg-primary`
            }`}
            onClick={() => handleSelectPartnerType("organization")}
          >
            Organization
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col my-8 space-y-8 w-full p-5 "
          >
            {partnertype === "individual" ? (
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
                      name="contact"
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
                  </div>

                  <div className="flex flex-col gap-6 text-left col-span-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="email"
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
            ) : (
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
                              placeholder="Company name"
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
                      name="contact"
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
                  </div>

                  <div className="flex flex-col gap-6 col-span-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="email"
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
            )}

            <div className="flex flex-col justify-center items-center text-center mx-auto text-[12px] ">
              <p className="p-2 border border-[#736666] w-full rounded-lg mb-4">
                What field do you want to partner with us in? e.g Photography,
                Healthcare, etc
              </p>
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
