import type { AxiosResponse } from "axios";

import type {
  UserLoginResponseType,
  UserLoginType,
  UserSignUpType,
} from "@/types/api/user-api.type";
import type { UserType } from "@/types/models/user.type";
import { getExceptionByType } from "@/utils/getExceptionByType";

import { axiosInstants } from "../../../services/axios";

const login = async (data: UserLoginType): Promise<UserType> => {
  const params = new URLSearchParams(data);

  const res: AxiosResponse<UserLoginResponseType> = await axiosInstants.get(
    `/users?${params}`
  );
  const user = res.data[0];

  if (!user) {
    throw getExceptionByType("user-not-found");
  }

  return user;
};

const signUp = async (data: UserSignUpType): Promise<UserType> => {
  const res = await axiosInstants.post("/users", data);
  const user = res.data[0];

  if (!user) {
    throw getExceptionByType("user-not-found");
  }
  return user;
};

const receiveUserById = async (userId: string): Promise<UserType> => {
  const params = new URLSearchParams({
    id: userId,
  });
  const res = await axiosInstants.get(`/users?${params}`);
  const user = res.data[0];

  if (!user) {
    throw getExceptionByType("user-not-found");
  }
  return user;
};

export const userServices = {
  login,
  signUp,
  receiveUserById,
};
