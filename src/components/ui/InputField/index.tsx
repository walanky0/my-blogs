"use client";

import Image from "next/image";
import { useState } from "react";

import type { InputFieldProps } from "@/types/ui/input-field";

import styles from "./styles.module.scss";

const InputField = ({
  label,
  error,
  type,
  id,
  value,
  className = "",
  ...props
}: InputFieldProps) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleVisiblePassword = () => {
    setVisiblePassword((prev) => !prev);
  };

  const isPassword = type === "password";
  return (
    <article className={`${styles.wrapper} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputField}>
        <input
          className={styles.input}
          id={id}
          type={visiblePassword ? "text" : type}
          {...props}
          value={value}
        />
        {isPassword && (
          <button
            className={styles.wrapperEye}
            onClick={toggleVisiblePassword}
            type="button"
            aria-label="Изменить видемость поля"
          >
            {visiblePassword && (
              <Image
                className={styles.eye}
                src="/icons/eye-open.svg"
                width={30}
                height={30}
                alt="Показать пароль"
              />
            )}
            {!visiblePassword && (
              <Image
                className={styles.eye}
                src="/icons/eye-close.svg"
                width={30}
                height={30}
                alt="Скрыть пароль"
              />
            )}
          </button>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </article>
  );
};

export default InputField;
