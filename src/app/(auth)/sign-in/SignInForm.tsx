"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import Button from "@/components/ui/Button";
import InputFieldWithController from "@/components/ui/InputField/InputFieldWithController";
import BaseLink from "@/components/ui/Links/BaseLink";
import Text from "@/components/ui/Text";
import Tile from "@/components/ui/Tile";
import Title from "@/components/ui/Title";
import { FormErrors } from "@/constants/form-errors";
import { routesPaths } from "@/constants/routes-patch";
import { userStore } from "@/module/user/userStore";

import styles from "../styles.module.scss";

const yup = object().shape({
  email: string().email(FormErrors.INVALID_EMAIL).required(FormErrors.REQUIRED),
  password: string().required(FormErrors.REQUIRED),
});

const defaultValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { login, isLoadingUser, user } = userStore;
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
    resolver: yupResolver(yup),
  });

  useEffect(() => {
    if (user) {
      router.replace(routesPaths.main());
    }
  }, [user, router]);
  const onSubmit = async (values: typeof defaultValues) => {
    const isLogin = await login({
      login: values.email,
      password: values.password,
    });
    if (isLogin) {
      router.replace(routesPaths.main());
    }
    reset();
  };
  return (
    <Tile>
      <Title className={styles.title}>Вход</Title>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <InputFieldWithController
            name="email"
            control={control}
            id="email"
            label="E-mail"
            placeholder="test@mail.ru"
          />
        </div>
        <div className={styles.field}>
          <InputFieldWithController
            name="password"
            control={control}
            id="password"
            label="Пароль"
            placeholder="qwerty123"
            type="password"
          />
        </div>
        <div className={styles.field}></div>
        <Button disabled={isLoadingUser}>Войти</Button>
      </form>
      <Text className={styles.footerText}>
        У вас еще нет аккаунта ? <br />
        <BaseLink href={routesPaths.signUp()}>Создать</BaseLink>
      </Text>
    </Tile>
  );
};

export default observer(SignInForm);
