import Link, { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
  theme?: "main" | "info" | "warning";
  size?: "small" | "medium" | "large";
  href: string;
};

const ButtonLink = ({
  className = "",
  theme = "main",
  size = "large",
  ...props
}: PropsWithChildren<LinkProps & Props>) => {
  return (
    <Link
      className={`${styles.button} ${className} ${styles[theme]} ${styles[size]}`}
      {...props}
    />
  );
};

export default ButtonLink;
