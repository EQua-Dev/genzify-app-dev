import { axios_server } from ".";

export async function CreateTagUser(data: {
  full_name: string;
  email: string;
  privileges: string[];
  location: string;
}) {
  try {
    const res = await axios_server.post<any>("/user/create-user", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}
