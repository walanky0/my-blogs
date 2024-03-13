import { getExceptionByType } from "@/utils/getExceptionByType";

const USER_LOCAL_STORAGE_KEY = "@USER/USER_LOCAL_STORAGE_KEY";

const getUserIdIfExist = (): string => {
  try {
    const res = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (res) {
      return res;
    }
    throw getExceptionByType("cant-use-local-storage");
  } catch (e) {
    throw getExceptionByType("cant-use-local-storage");
  }
};

const setUserId = (userId: string): void => {
  try {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, userId);
  } catch (e) {
    throw getExceptionByType("cant-use-local-storage");
  }
};

const clearUserId = (): void => {
  try {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  } catch (e) {
    throw getExceptionByType("cant-use-local-storage");
  }
};

export const authLocalStorage = { getUserIdIfExist, setUserId, clearUserId };
