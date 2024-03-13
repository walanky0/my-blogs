import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";

import { authLocalStorage } from "@/helpers/authLocalStorage";
import { userServices } from "@/module/user/services/userServices";
import { UserLoginType, UserSignUpType } from "@/types/api/user-api.type";
import { UserType } from "@/types/models/user.type";

class UserStore {
  user: UserType | null = null;
  isLoadingUser = true;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: UserLoginType): Promise<boolean> => {
    this.isLoadingUser = true;
    try {
      const user = await userServices.login(data);
      runInAction(() => {
        this.user = user;
        this.isLoadingUser = false;
      });
      authLocalStorage.setUserId(user.id);
    } catch (e: any) {
      toast(e.message);
      this.isLoadingUser = false;
      return false;
    }

    return true;
  };

  signUp = async (data: UserSignUpType): Promise<boolean> => {
    this.isLoadingUser = true;
    try {
      const user = await userServices.signUp(data);
      runInAction(() => {
        this.user = user;
        this.isLoadingUser = false;
      });
      authLocalStorage.setUserId(user.id);
    } catch (e: any) {
      toast(e.message);
      this.isLoadingUser = false;
      return false;
    }
    return true;
  };

  exit = (): void => {
    this.user = null;
    this.isLoadingUser = false;
    authLocalStorage.clearUserId();
  };

  loginByTokenIfExist = async (): Promise<boolean> => {
    this.isLoadingUser = true;
    try {
      const userId = authLocalStorage.getUserIdIfExist();
      const user = await userServices.receiveUserById(userId);
      runInAction(() => {
        this.user = user;
        this.isLoadingUser = false;
      });
      toast("С возвращением, наш дорогой читатель!");
    } catch (e: any) {
      this.isLoadingUser = false;
      return false;
    }
    return true;
  };
}

export const userStore = new UserStore();
