"use client";
import { updateUserData } from "@/api/user";
import RegisterLayout from "@/components/layouts/RegisterLayout";
import { Button } from "@/components/ui/button";
import { UserData, useRegistrationStore } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

// export default function UserPreferedEngagement() {
//   const router = useRouter();
//   const step = useRegistrationStore((state) => state.step);
//   const entries = useRegistrationStore((state) => state.entries);
//   const { goToPrevStep, goToNextStep, resetStore } = useRegistrationStore(
//     (state) => state.actions
//   );
//   const [userPreference, setUserPreference] = useState<string[]>([]);

//   const handleItemClick = (item: string) => {
//     setUserPreference((prevSelectedItems) => [...prevSelectedItems, item]);
//   };

//   const updateUserMutation = useMutation({
//     mutationFn: updateUserData,
//     onSuccess: (data) => {
//       toast.success(data.data.message || "User Registered successfully");
//       router.push("/dashboard");
//     },
//     onError: (error) => {
//       toast.error(error.message || "An error occurred");
//     },
//   });

//   const updateUser = () => {
//     updateUserMutation.mutate({
//       ...entries,
//       userPreference,
//     });
//     router.push("/dashboard"), resetStore();
//   };

//   return (
//     <>
//       <RegisterLayout>
//         <div className="mx-auto bg-[#1E1E1E] p-6 rounded-lg w-full max-w-2xl  flex flex-col justify-center items-center">
//           <div className=" flex flex-col justify-center items-center w-full p-4">
//             <Image
//               src="/images/genzify-logo.png"
//               alt="Logo"
//               width={100}
//               height={100}
//             />
//             <div className="text-center flex flex-col items-center justify-center gap-8">
//               <h1 className="text-3xl font-bold text-[#c2c2c2] mt-4">
//                 Sign Up
//               </h1>
//               <p className="text-[#c2c2c2] text-sm w-[90%]">
//                 Input your email address and password for secure login to the
//                 TAG Portal
//               </p>
//             </div>
//             {userPreferencesArray.map((item) => (
//               <div key={item} onClick={() => handleItemClick(item)}>
//                 <span className="border-2 bg-red-600">{item}</span>
//               </div>
//             ))}
//             <div>
//               <Button
//                 onClick={() => {
//                   console.log(userPreference);
//                   updateUser();
//                 }}
//               >
//                 <span>Proceed to Dashboard</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </RegisterLayout>
//     </>
//   );
// }
