"use client";

import { observer } from "mobx-react-lite";

import ButtonLink from "@/components/ui/Button/ButtonLink";
import { routesPaths } from "@/constants/routes-patch";
import { userStore } from "@/module/user/userStore";

import UserAvatar from "../UserAvatar";
import styles from "./styles.module.scss";

const ObserverUserAuth = () => {
  const { user, isLoadingUser } = userStore;

  if (isLoadingUser) {
    return <div>Загрузка</div>;
  } else if (user) {
    return <UserAvatar user={user} />;
  }

  return (
    <div className={styles.authWrapper}>
      <ButtonLink href={routesPaths.signIn()} theme="info" size="medium">
        Войти
      </ButtonLink>
      <ButtonLink href={routesPaths.signUp()} theme="warning" size="medium">
        Зарегистрироваться
      </ButtonLink>
    </div>
  );
};

export default observer(ObserverUserAuth);
