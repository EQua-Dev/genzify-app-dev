"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { registerForEvents } from "@/api/events";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Lottie from "react-lottie";
import * as animationData from "../../../public/raw/genzify-loading.json";

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
import axios from "axios";

const partnerRegisterFormSchema = z
  .object({
    username: z.string().min(1, { message: "Username  is required" }),
    email: z.string().min(1, { message: "Email  is required" }),
    contact: z.string().min(1, { message: "Contact  is required" }),
    program: z.string().min(1, { message: "Program  is required" }),
    location: z.string().min(1, { message: "Location  is required" }),
    partnertype: z.enum(["participant", "vendor", "other"]), // Example values
    activities: z.array(z.string()).optional(),
    items: z.array(z.string()).optional(),
    //activities: z.array().min(1, { message: "Select at least one activity" }),
  })
  .refine(
    (data) => {
      if (
        data.partnertype === "participant" &&
        (!data.activities || data.activities.length === 0)
      ) {
        return false;
      }
      if (
        data.partnertype === "vendor" &&
        (!data.items || data.items.length === 0)
      ) {
        return false;
      }
      return true;
    },
    {
      message:
        "Activities are required for participants, and items are required for vendors",
      path: ["activities", "items"],
    }
  );

export type PartnerRegistrationFormValues = z.infer<
  typeof partnerRegisterFormSchema
>;

export default function EventRegistrationForm({ onClose }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [registrantType, setRegistrantType] = useState<string>("participant");
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [activities, setActivities] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);

  const [participantForm, setParticipantForm] = useState({
    audience: "participant",
    full_name: "",
    email: "",
    location: "",
    phone: "",
    activities: [],
    sales: [],
    event_id: "665ab369bc11b6c8c451b87c",
  });

  const [vendorForm, setVendorForm] = useState({
    audience: "vendor",
    full_name: "",
    email: "",
    location: "",
    phone: "",
    activities: [],
    sales: [],
    event_id: "665ab369bc11b6c8c451b87c",
  });

  const [attendeeForm, setAttendeeForm] = useState({
    audience: "attendee",
    full_name: "",
    email: "",
    location: "",
    phone: "",
    activities: [],
    sales: [],
    event_id: "665ab369bc11b6c8c451b87c",
  });

  const form = useForm<PartnerRegistrationFormValues>({
    resolver: zodResolver(partnerRegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
      program: "",
      location: "",
      partnertype: registrantType, // Add this field
      activities: [],
      items: [],
      //activities: [],
    },
  });

  const eventRegistrationMutation = useMutation({
    mutationFn: registerForEvents,
    onSuccess: (data) => {
      setIsLoading(false);
      toast.success("Event Registration Successful");
      onClose();
      window.location.reload();
    },
    onError: (error) => {
      setIsLoading(false);
      console.log(error);
      toast.error(error.response.data.msg || "An error occurred");
    },
  });
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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

  const activitiesList = [
    { id: "football", name: "Football" },
    { id: "chess", name: "Chess" },
    { id: "taekwondo", name: "Taekwondo" },
    { id: "table-tennis", name: "Tennis" },
    { id: "sports-trivia", name: "Trivia" },
    { id: "other", name: "Other" },
  ];

  const itemsList = [
    { id: "food", name: "Food" },
    { id: "drink", name: "Drink" },
    { id: "sportswear", name: "Sportswear" },
    { id: "other", name: "Other" },
  ];

  async function onSubmit(values: any) {
    // try {
    //   const response = await axios.post(
    //     "https://tag-backend-xmx1.onrender.com/api/events/invitation",
    //     values
    //   );
    //   console.log("Form submitted successfully:", response.data);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
    try {
      await eventRegistrationMutation.mutate(values);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let eventForm = participantForm;
    switch (registrantType) {
      case "participant":
        eventForm = participantForm;
        break;
      case "vendor":
        eventForm = vendorForm;
        break;
      case "attendee":
        eventForm = attendeeForm;
        break;
    }
    // Handle form submission logic here
    console.log("Form submitted:", eventForm);
    onSubmit(eventForm).then((data) => {
      console.log("data", data);
    });
  };

  const handleSelectPartnerType = (type: string) => {
    setRegistrantType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (registrantType == "participant") {
      setParticipantForm({ ...participantForm, [name]: value });
    } else if (registrantType == "vendor") {
      setVendorForm({ ...vendorForm, [name]: value });
    } else {
      setAttendeeForm({ ...attendeeForm, [name]: value });
    }
  };

  const handleActivityChange = (name, checked) => {
    if (registrantType == "participant") {
      const newActivities = checked
        ? [...participantForm.activities, name]
        : participantForm.activities.filter((activity) => activity !== name);
      setParticipantForm({ ...participantForm, activities: newActivities });
    } else if (registrantType == "vendor") {
      const newSalesItems = checked
        ? [...vendorForm.sales, name]
        : vendorForm.sales.filter((item) => item !== name);
      setVendorForm({ ...vendorForm, sales: newSalesItems });
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Lottie options={lottieOptions} height={250} width={250} />
        </div>
      )}
      {/* <div className="fixed z-100 w-full  p-4 min-w-screen content-center mx-auto inset-0 bg-black bg-opacity-50 "> */}
      <div className="relative flex flex-col justify-center gap-4  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
        <h2 className="text-1l  font-bold p-4 justify-center items-center text-center">
          Register for Gen Z Sports Fest{" "}
        </h2>
        <p className="text-center">
          Welcome! Whether you&apos;re joining as an Attendee, Participant, or
          Vendor, we&apos;re excited to have you. Fill out the form below to
          secure your spot and be part of the ultimate sports celebration. See
          you there!
        </p>
        <div className="flex gap-3">
          <Button
            className={`bg-transparent ${
              registrantType === "participant" && `bg-primary`
            }`}
            onClick={() => handleSelectPartnerType("participant")}
          >
            Participant
          </Button>
          <Button
            className={`bg-transparent ${
              registrantType === "vendor" && `bg-primary`
            }`}
            onClick={() => handleSelectPartnerType("vendor")}
          >
            Vendor
          </Button>
          <Button
            className={`bg-transparent ${
              registrantType === "attendee" && `bg-primary`
            }`}
            onClick={() => handleSelectPartnerType("attendee")}
          >
            Attendee
          </Button>
        </div>

        {registrantType === "participant" ? (
          <>
            <div className="max-w-md mx-auto mt-10">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {/* Full Name */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Email */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Location */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location (City/ State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Phone Number */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>
                {/* Activities Dropdown and Input */}
                <div className="col-span-2">
                  <p className="text-[12px]">Select one or multiple</p>
                  <div className="flex flex-row gap-4 row-span-1">
                    <div className="flex-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button className="w-full">
                            Select Intrested Activities
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Activities</DropdownMenuLabel>
                          {activitiesList.map((activity: any) => (
                            <DropdownMenuCheckboxItem
                              key={activity.name}
                              checked={participantForm.activities.includes(
                                activity.name
                              )}
                              onCheckedChange={(e) =>
                                handleActivityChange(activity.name, e)
                              }
                            >
                              {activity.name}
                            </DropdownMenuCheckboxItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="activities"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Activities
                      </label>
                      <input
                        type="text"
                        id="activities"
                        name="activities"
                        value={participantForm.activities.join(", ")}
                        readOnly
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff]"
                      />
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : registrantType === "vendor" ? (
          <>
            <div className="max-w-md mx-auto mt-10">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {/* Full Name */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Email */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Location */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location (City/ State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Phone Number */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>
                {/* Activities Dropdown and Input */}
                <div className="col-span-2">
                  <p className="text-[12px]">Select one or multiple</p>
                  <div className="flex flex-row gap-4 row-span-1">
                    <div className="flex-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button className="w-full">
                            Select Intrested Sales Item
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Sales Items</DropdownMenuLabel>
                          {itemsList.map((item: any) => (
                            <DropdownMenuCheckboxItem
                              key={item.name}
                              checked={vendorForm.sales.includes(item.name)}
                              onCheckedChange={(e) =>
                                handleActivityChange(item.name, e)
                              }
                            >
                              {item.name}
                            </DropdownMenuCheckboxItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="sales"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sales Items
                      </label>
                      <input
                        type="text"
                        id="sales"
                        name="sales"
                        value={vendorForm.sales.join(", ")}
                        readOnly
                        className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff]"
                      />
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-md mx-auto mt-10">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {/* Full Name */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Email */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Location */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location (City/ State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Phone Number */}
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onChange={handleInputChange}
                    className="bg-[#141414] text-[#c2c2c2] shadow-sm border-[#525151] border-2 w-full rounded-md p-2 focus:outline-none focus:border-[#fff] mt-1 block"
                  />
                </div>

                {/* Submit Button */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
}
