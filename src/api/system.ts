import { axios_server } from ".";

export async function getSystemProperties() {
  try {
    const res = await axios_server.get<any>("/systems");
    return res.data;
  } catch (error) {
    throw error;
  }
}
