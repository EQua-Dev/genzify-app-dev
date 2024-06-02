import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import * as z from "zod";

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
import { adminLoginUser, loginUser } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const loginFormSchema = z.object({
  userId: z.string().min(1, { message: "Email or Phone Number is required" }),
  password: z.string().min(1, {
    message: "Password field  cannot be empty",
  }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export default function AdminLoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const adminLoginMutation = useMutation({
    mutationFn: adminLoginUser,
    onSuccess: (data) => {
      toast.success(data.data.message || "Login successfully");
      router.push("/dashboard-customer");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
    },
  });

  async function onSubmit(values: LoginFormValues) {
    try {
      await adminLoginMutation.mutate(values);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-8 w-full "
      >
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="User ID"
                  {...field}
                  type="text"
                  className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-4 focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" relative flex flex-col gap-4">
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
                    className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  rounded-md w-full p-3 focus:outline-none focus:border-[#62B2FD]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="absolute right-6 top-2">
            {showPassword ? (
              <EyeOff
                size={20}
                className="cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                size={22}
                className="cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <Button
          className="w-full"
          //   size="md"
          type="submit"
          //   disabled={mutation.isPending}
        >
          Proceed to Dashboard
        </Button>
      </form>
      <div className="flex flex-col w-full justify-center items-center text-center mx-auto ">
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
            <Link
              href="#"
              className="w-fit text-sm font-semibold text-[#62B2FD]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
}
