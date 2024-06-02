import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import PinField from "react-pin-field";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRegistrationStore } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import { verifyUseremail } from "@/api/user";
import { toast } from "sonner";
import RegisterLayout from "../layouts/RegisterLayout";

const pinSchema = z.object({
  otp: z.string().min(4, {
    message: "OTP must be at least 6 characters long",
  }),
});

export type PinField = z.infer<typeof pinSchema> & { email: string };

type props = {
  email: string;
  handleVerifyEmail: (email: any, otp: any) => void;
};

export default function OTPInput() {
  const router = useRouter();
  const step = useRegistrationStore((state) => state.step);
  const { goToPrevStep, goToNextStep, resetStore } = useRegistrationStore(
    (state) => state.actions
  );
  const form = useForm<PinField>({
    resolver: zodResolver(pinSchema),
    defaultValues: {
      otp: "",
    },
  });

  const verifyEmailMutation = useMutation({
    mutationFn: verifyUseremail,
    onSuccess: (data) => {
      toast.success(
        data.data.message ||
          "Email verified successfully, Proceed to complete registration"
      );
      localStorage.removeItem("email");

      const { token } = data.data;
      console.log(token, "token");
      if (typeof token !== "undefined") {
        localStorage.setItem("token", token);
      }

      goToNextStep();
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
      resetStore();
    },
  });

  function onSubmit(values: PinField) {
    // Retrieving a string from local storage
    if (typeof localStorage !== "undefined") {
      const { otp } = values;
      const email = localStorage.getItem("email") ?? "";
      verifyEmailMutation.mutate({ email, otp });
    } else {
      // Handle the case where localStorage is not available
      console.error("local Storage is not available. Unable to store data.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="text-center flex flex-col items-center justify-center gap-8">
                  <h1 className="text-3xl font-bold text-[#c2c2c2] mt-4">
                    Sign Up
                  </h1>
                  <p className="text-[#c2c2c2] text-sm w-[90%]">
                    Input your email address and password for secure login to
                    the TAG Portal
                  </p>
                </div>
              </FormLabel>

              <FormControl>
                <div className=" w-full mx-auto mt-4 grid grid-cols-6 gap-2">
                  <PinField
                    className={cn(
                      "h-8 w-8 md:h-12 md:w-12 bg-[#141414] text-white rounded-md border border-input text-center focus:outline-primary"
                    )}
                    onChange={field.onChange}
                    type="text"
                    autoComplete="one-time-code"
                    autoFocus
                    length={6}
                    inputMode="numeric"
                    // validate="0123456789"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="mt-4 text-left text-[#c2c2c2] text-sm ">
          <p>
            Didn&apos;t receive an OTP?{" "}
            <Link className="text-[#62B2FD]" href="#">
              Resend
            </Link>
          </p>
        </div>

        <Button
          // onClick={() => <RegisterForm otp={form.getValues("otp")
          //    handleVerifyEmail();
          // }
          // />}
          className="mt-4 w-full"
          variant="default"
          type="submit"
        >
          Continue
        </Button>
      </form>
    </Form>
  );
}
