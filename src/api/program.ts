import { axios_server } from ".";

export async function getPrograms() {
  try {
    const res = await axios_server.get<any>("/features");
    return res.data;
  } catch (error) {
    throw error;
  }
}
