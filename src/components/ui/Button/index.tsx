import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

type Props = {
  theme?: "main" | "info" | "warning";
  size?: "small" | "medium" | "large";
};

const Button = ({
  className = "",
  theme = "main",
  size = "large",
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & Props) => {
  return (
    <button
      className={`${styles.button} ${className} ${styles[theme]} ${styles[size]}`}
      {...props}
    />
  );
};

export default Button;
