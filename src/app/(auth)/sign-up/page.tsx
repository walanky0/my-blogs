import type { Metadata } from "next";

import { generateMetaTitle } from "@/utils/generateMeta";

import SignInForm from "./SignUpForm";

export const metadata: Metadata = {
  title: generateMetaTitle("Регистрация"),
};

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;
