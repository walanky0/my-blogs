"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import InputFieldWithController from "@/components/ui/InputField/InputFieldWithController";
import BaseLink from "@/components/ui/Links/BaseLink";
import Text from "@/components/ui/Text";
import Tile from "@/components/ui/Tile";
import Title from "@/components/ui/Title";
import { additionalResources } from "@/constants/additional-resource";
import { FormErrors } from "@/constants/form-errors";
import { routesPaths } from "@/constants/routes-patch";
import { userStore } from "@/module/user/userStore";

import styles from "../styles.module.scss";

const yup = object().shape({
  name: string().required(FormErrors.REQUIRED),
  email: string().email(FormErrors.INVALID_EMAIL).required(FormErrors.REQUIRED),
  password: string().required(FormErrors.REQUIRED),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const { signUp, isLoadingUser, user } = userStore;
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
    resolver: yupResolver(yup),
  });
  const [isAcceptedRules, setIsAcceptedRules] = useState(false);

  useEffect(() => {
    if (user) {
      router.replace(routesPaths.main());
    }
  }, [user, router]);

  const onSubmit = async (values: typeof defaultValues) => {
    const isLogin = await signUp({
      name: values.name,
      login: values.email,
      password: values.password,
    });
    if (isLogin) {
      router.replace(routesPaths.main());
      return;
    }
    reset();
  };
  return (
    <Tile>
      <Title className={styles.title}>Регистрация</Title>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <InputFieldWithController
            name="name"
            control={control}
            id="name"
            label="Имя"
            placeholder="Илья"
          />
        </div>
        <div className={styles.field}>
          <InputFieldWithController
            name="email"
            control={control}
            id="email"
            label="E-mail"
            placeholder="test@mail.ru"
            type="email"
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
        <div className={styles.field}>
          <Checkbox
            id="confirm-rules"
            checked={isAcceptedRules}
            onChange={(e) => setIsAcceptedRules(e.target.checked)}
          >
            Я подверждаю что ознакомлен с{" "}
            <BaseLink href={additionalResources.termRules} target="_blank">
              пользовательским соглашением
            </BaseLink>
          </Checkbox>
        </div>
        <Button disabled={isLoadingUser || !isAcceptedRules}>Создать</Button>
      </form>
      <Text className={styles.footerText}>
        У вас уже есть аккаунт? <br />
        <BaseLink href={routesPaths.signIn()}>Войти</BaseLink>
      </Text>
    </Tile>
  );
};

export default observer(SignUpForm);
