"use client";

import { observer } from "mobx-react-lite";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useEffect } from "react";

import { userStore } from "@/module/user/userStore";

const OnEnterApp = () => {
  const { user, loginByTokenIfExist } = userStore;
  useEffect(() => {
    if (!user) {
      loginByTokenIfExist();
    }
  }, [user, loginByTokenIfExist]);
  return (
    <>
      <ProgressBar color="#29D" startPosition={0.3} />
    </>
  );
};

export default observer(OnEnterApp);
