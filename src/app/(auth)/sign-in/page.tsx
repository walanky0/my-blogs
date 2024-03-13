import type { Metadata } from "next";

import { generateMetaTitle } from "@/utils/generateMeta";

import SignInForm from "./SignInForm";

export const metadata: Metadata = {
  title: generateMetaTitle("Вход"),
};

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;
