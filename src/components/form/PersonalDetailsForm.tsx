"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterLayout from "../layouts/RegisterLayout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import moment from "moment";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useRegistrationStore } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import { updateUserData } from "@/api/user";
import { toast } from "sonner";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";

const personalDetailsFormSchema = z.object({
  first_name: z.string().min(1, { message: "Full name is required" }),
  last_name: z.string().min(1, {
    message: " Email is required",
  }),
  phone: z.string().min(1, { message: "Email  is required" }),
  nationality: z.string(),
  state: z.string().min(1, {
    message: "Confirm password fiels should be same as password field",
  }),
  address: z.string().min(1, {
    message: "Address field  cannot be empty",
  }),
  gender: z.string().optional(),
  dob: z.date({
    required_error: "Please select a start date and time to continue.",
  }),
});

export type userPersonalDetails = z.infer<typeof personalDetailsFormSchema>;

export default function PersonalDetailsForm() {
  const router = useRouter();
  const entries = useRegistrationStore((state) => state.entries);
  const { addUserData, goToPrevStep, goToNextStep, resetStore } =
    useRegistrationStore((state) => state.actions);
  const form = useForm<userPersonalDetails>({
    resolver: zodResolver(personalDetailsFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      nationality: "",
      state: "",
      address: "",
      gender: "",
      dob: new Date(), // Change the type from string to Date
    },
  });

  const UpdateUserMutation = useMutation({
    mutationFn: updateUserData,
    onSuccess: (data) => {
      toast.success(data.data.message || "User data updated successfully");
      router.push("/dashboard-customer");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
    },
  });

  async function onSubmit(values: userPersonalDetails) {
    UpdateUserMutation.mutate({
      ...values,
      dob: moment(values.dob).format("DD-MM-YYYY"),
      ...entries,
    });
  }

  console.log(form.getValues());

  return (
    <RegisterLayout>
      <div className="bg-[#1E1E1E] p-6 rounded-2xl w-full max-w-2xl  flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center w-full p-4">
          <Image
            src="/images/genzify-logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="my-8 space-y-8 w-full p-5"
            >
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        type="text"
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Surname"
                        {...field}
                        type="text"
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
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
                        placeholder="Phone Number"
                        {...field}
                        type="number"
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
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
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="nigeria">Nigeria</SelectItem>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="uganda">Uganda</SelectItem>
                          <SelectItem value="kenya">Kenya</SelectItem>
                        </SelectContent>
                      </Select>
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
                        placeholder="State of Residence"
                        type="text"
                        {...field}
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="House Address or closest Landmark"
                        type="text"
                        {...field}
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 w-full gap-4">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent className="">
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Date of Birth"
                          type="date"
                          {...field}
                          className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                moment(field.value).format("DD-MM-YYYY")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="flex">
                            <Calendar
                              mode="single"
                              selected={field.value ? field.value : undefined}
                              onSelect={field.onChange}
                              // disabled={(date) =>
                              //   date <
                              //   new Date(
                              //     new Date().setDate(new Date().getDate() - 1)
                              //   )
                              // }
                              initialFocus
                            />

                            <div className="p-3"></div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                disabled={UpdateUserMutation.isPending}
              >
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </RegisterLayout>
  );
}
