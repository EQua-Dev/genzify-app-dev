import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { axios_server } from ".";

export interface Event {
  title: string;
  description: string;
  images: string[];
  audiences: string[];
  activities: string[];
  sales: string[];
  date: string;
  startTime: string;
  features_code: string;
  _id: string;
}

// export const getAllEvents = async (): Promise<Events> => {
//   try {
//     const res = await axios_server.get<any>("/events");
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

export async function getAllEvents() {
  try {
    const res = await axios_server.get<Event[]>("/events");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function registerForEvents(data: any) {
  try {
    console.log(data);
    const res = await api.post("events/invitation", data);
    // const token = res.data?.data.token;
    console.log(res, "response");
    // console.log(token, "token");

    // localStorage.setItem("token", token);

    return res.data;
  } catch (error) {
    throw error;
  }
}

const createAxiosInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: "https://tag-backend-xmx1.onrender.com/api/",
  });
  return api;
};

const api = createAxiosInstance();

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    // Handle error responses here
    return Promise.reject(error);
  }
);

export default api;
