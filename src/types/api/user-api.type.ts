import { UserType } from "../models/user.type";

export type UserLoginType = {
    login: string;
    password: string;
}

export type UserSignUpType = {
    name: string,
    login: string;
    password: string;
}

export type UserLoginResponseType = UserType[]