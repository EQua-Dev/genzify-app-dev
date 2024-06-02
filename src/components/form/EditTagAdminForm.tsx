// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { SetStateAction, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { useMutation, useQuery } from "@tanstack/react-query";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";
// import { Checkbox } from "@/components/ui/checkbox";

// const tagAdminCreationFormSchema = z.object({
//   full_name: z.string().min(1, { message: "Username  is required" }),
//   email: z.string().min(1, { message: "Email  is required" }),
//   program: z.string().min(1, { message: "Program  is required" }),
//   location: z.string().min(1, { message: "Location  is required" }),
// });

// export type TagAdminCreationFormValues = z.infer<
//   typeof tagAdminCreationFormSchema
// >;

export default function AdminEditingForm() {
  //   const router = useRouter();
  //   const [admintype, setAdminType] = useState<string>("new");
  //   const form = useForm<TagAdminCreationFormValues>({
  //     resolver: zodResolver(tagAdminCreationFormSchema),
  //     defaultValues: {
  //       full_name: "",
  //       email: ""
  //       program: "",
  //       location: "",
  //     },
  //   });
  //   //   const registerUserMutation = useMutation({
  //   //     mutationFn: registerUser,
  //   //     onSuccess: (data) => {
  //   //       toast.success(data.data.message || "An error occurred");
  //   //       router.push("/verify-email");
  //   //     },
  //   //     onError: (error) => {
  //   //       // toast.error( || "An error occurred");
  //   //     },
  //   //   });
  //   async function onSubmit(values: TagAdminCreationFormValues) {
  //     // registerUserMutation.mutate(values);
  //     // console.log(values);
  //   }
  //   const handleSelectAdminType = (type: string) => {
  //     setAdminType(type);
  //   };
  return (
    //     <>
    //       <div className="relative flex flex-col justify-center gap-4  py-8  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
    //         {admintype === "existing" ? (
    //           <>
    //             <h3 className="text-xl font-medium">Edit Admin Details</h3>
    //             <p className="text-sm w-full text-wrap ">
    //               You are about to edit the details of an existing admin. Please
    //               review and confirm the changes.
    //             </p>
    //           </>
    //         ) : (
    //           <>
    //             <h3 className="text-xl font-medium">Create New Admin</h3>
    //             <p className="text-sm w-2/3 text-wrap ">
    //               You are about to create a new admin, Please carefully enter your
    //               details then review and confirm before Execution.
    //             </p>
    //           </>
    //         )}
    //         <div className="flex gap-4">
    //           <Button
    //             className={`bg-transparent px-10 border py-2  ${
    //               admintype === "existing" && `bg-primary`
    //             }`}
    //             onClick={() => handleSelectAdminType("existing")}
    //           >
    //             Existing Admin
    //           </Button>
    //           <Button
    //             className={`bg-transparent px-10 border py-2 ${
    //               admintype === "new" && `bg-primary`
    //             }`}
    //             onClick={() => handleSelectAdminType("new")}
    //           >
    //             New Admin
    //           </Button>
    //         </div>
    //         <Form {...form}>
    //           <form
    //             onSubmit={form.handleSubmit(onSubmit)}
    //             className=" flex flex-col my-8 space-y-8 w-full p-5 "
    //           >
    //             {admintype === "existing" ? (
    //               <>
    //                 <div className=" flex flex-col gap-6 col-span-1">
    //                   <FormField
    //                     control={form.control}
    //                     name="username"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Username"
    //                             {...field}
    //                             type="email"
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full  rounded-md  py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                   <FormField
    //                     control={form.control}
    //                     name="contact"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Contact"
    //                             {...field}
    //                             type="text"
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                   <FormField
    //                     control={form.control}
    //                     name="program"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Program"
    //                             type="text"
    //                             {...field}
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                   <FormField
    //                     control={form.control}
    //                     name="program"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Program"
    //                             type="text"
    //                             {...field}
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                 </div>
    //               </>
    //             ) : (
    //               <>
    //                 <div className="flex flex-col gap-6 col-span-1">
    //                   <FormField
    //                     control={form.control}
    //                     name="name"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Name"
    //                             type="text"
    //                             {...field}
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                   <FormField
    //                     control={form.control}
    //                     name="email"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Email"
    //                             type="email"
    //                             {...field}
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                   <FormField
    //                     control={form.control}
    //                     name="location"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Location"
    //                             type="text"
    //                             {...field}
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   />
    //                   {/* <FormField
    //                     control={form.control}
    //                     name="image"
    //                     render={({ field }) => (
    //                       <FormItem>
    //                         <FormControl>
    //                           <Input
    //                             placeholder="Image"
    //                             type="text"
    //                             {...field}
    //                             className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
    //                           />
    //                         </FormControl>
    //                         <FormMessage />
    //                       </FormItem>
    //                     )}
    //                   /> */}
    //                 </div>
    //               </>
    //             )}
    //             <Button className="" size="md" type="submit">
    //               Create Tag Admin
    //             </Button>
    //           </form>
    //         </Form>
    //       </div>
    //       {/* </div> */}
    //     </>
    <div>Temporal place holder</div>
  );
}
