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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { CreateTagUser } from "@/api/superAdmin";
import { getSystemProperties } from "@/api/system";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
type Checked = DropdownMenuCheckboxItemProps["checked"];

const tagAdminCreationFormSchema = z.object({
  full_name: z.string().min(1, { message: "Full name  is required" }),
  email: z.string().min(1, { message: "Email  is required" }),
  privileges: z.array(z.string()), // Add the missing argument here
  location: z.string().min(1, { message: "Location  is required" }),
});

export type TagAdminCreationFormValues = z.infer<
  typeof tagAdminCreationFormSchema
>;

export default function AdminCreationForm() {
  const router = useRouter();
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  const [admintype, setAdminType] = useState<string>("new");

  const form = useForm<TagAdminCreationFormValues>({
    resolver: zodResolver(tagAdminCreationFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      privileges: [], // Fix: Change the value to an empty array
      location: "",
    },
  });

  const createTagAdmin = useMutation({
    mutationFn: CreateTagUser,
    onSuccess: (data) => {
      toast.success(data.data.message || "An error occurred");
      router.push("/dashboard-super-admin");
    },
    onError: (error) => {
      // toast.error( || "An error occurred");
    },
  });

  const systemPropertiesQuery = useQuery({
    queryKey: ["systemProperties"],
    queryFn: getSystemProperties,
  });
  console.log(systemPropertiesQuery.data);

  const systemProperties = systemPropertiesQuery.data?.data || [];

  async function onSubmit(values: TagAdminCreationFormValues) {
    createTagAdmin.mutate(values);
    console.log(values);
  }

  return (
    <>
      <div className="relative flex flex-col justify-center gap-4  py-4  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
        <h3 className="text-xl font-medium">Create New Admin</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col my-8 space-y-8 w-full p-5 "
          >
            <>
              <div className=" flex flex-col gap-6 col-span-1">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Full name"
                          {...field}
                          type="text"
                          className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full  rounded-md  py-4 focus:outline-none focus:border-[#fff]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  name="privileges"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        {/* <Input
                          placeholder="Program"
                          type="text"
                          {...field}
                          className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
                        /> */}

                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button className="w-full">
                              Select Privileges
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Privileges</DropdownMenuLabel>
                            {systemProperties.map((property: any) => (
                              <DropdownMenuCheckboxItem
                                key={property.id}
                                checked={field.value.includes(property.id)}
                                onCheckedChange={(checked) => {
                                  const newPrivileges = checked
                                    ? [...field.value, property.id]
                                    : field.value.filter(
                                        (id) => id !== property.id
                                      );
                                  field.onChange(newPrivileges);
                                }}
                              >
                                {property.name}
                              </DropdownMenuCheckboxItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>

            <Button className="" type="submit">
              Create Tag Admin
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
