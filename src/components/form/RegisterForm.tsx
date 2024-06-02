"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { registerUser, verifyUseremail } from "@/api/user";
import { toast } from "sonner";
import OTPInput from "./Otpform";
import { useRegistrationStore } from "@/store/user";

const registerFormSchema = z.object({
  email: z.string().min(1, { message: "Email  is required" }),
  password: z.string().min(1, {
    message: "Password must be at least 8 characters long",
  }),
  confirmPassword: z.string().min(1, {
    message: "Confirm password fields should be same as password field",
  }),
  // referralCode: z.string().optional(),
});

export type RegistrationFormValues = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const { goToPrevStep, goToNextStep, resetStore } = useRegistrationStore(
    (state) => state.actions
  );
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      // confirmPassword: "",
      // referralCode: "",
    },
  });

  if (typeof localStorage !== "undefined") {
    // Setting a string in local storage
    localStorage.setItem("email", form.getValues("email"));
  } else {
    // Handle the case where localStorage is not available
    console.error("localStorage is not available. Unable to store data.");
  }

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(data.data.message);
      router.push("/verify-email");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
    },
  });

  async function onSubmit(values: RegistrationFormValues) {
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    registerUserMutation.mutate({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    type="email"
                    className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-xl w-full py-4 text-sm focus:outline-none "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-xl w-full py-4 text-sm focus:outline-none "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-xl w-full py-4 text-sm focus:outline-none "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            onClick={() => <OTPInput />}
            className="w-full"
            //   size="md"
            type="submit"
            //   disabled={mutation.isPending}
          >
            Continue
          </Button>
        </form>
        <div className="flex flex-col w-full justify-center items-center text-center mx-auto text-[#c2c2c2] ">
          <div className="flex flex-col gap-1 text-center">
            <div className="flex text-center w-full">
              Forgot your Password?&nbsp;
              <Link
                href="#"
                className="w-fit text-sm font-semibold text-[#62B2FD]"
              >
                Reset Now!
              </Link>
            </div>
            <div className="flex w-full text-center">
              Don&apos;t have an account?&nbsp;
              <Button className="w-fit text-sm font-semibold text-[#62B2FD]">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
