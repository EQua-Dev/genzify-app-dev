import { axios_server } from ".";

type User = {
  user: {
    _id: string;
    email: string;
    profile_image: string;
    role: string;
    status: boolean;
    isVerified: boolean;
    dob: string;
    first_name: string;
    last_name: string;
    id: string;
    token: string;
  };
};

export async function registerUser(data: { email: string; password: string }) {
  try {
    const res = await axios_server.post<any>("/user/signup", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}
export async function verifyUseremail(data: { otp: string; email: string }) {
  try {
    const res = await axios_server.post<any>("/user/verify-account", data);

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(data: {
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
  nationality: string;
  state: string;
  address: string;
  gender?: string;
  dob?: string;
}) {
  try {
    const res = await axios_server.patch<any>("/user", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(data: { email: string; password: string }) {
  try {
    const res = await axios_server.post<any>("user/login", data);
    const token = res.data?.data.token;
    console.log(res, "response");
    console.log(token, "token");

    localStorage.setItem("token", token);

    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserDetails() {
  try {
    const res = await axios_server.get<any>("/user");

    return res.data;
  } catch (error) {
    throw error;
  }
}

// export async function adminLoginUser(data: {
//   userId: string;
//   password: string;
// }) {
//   try {
//     const res = await axios_server.post<any>("user/login", data);
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// }
