import type { ParamHTMLAttributes } from "react";

import styles from "./styles.module.scss";

const Text = ({
  className = "",
  ...props
}: ParamHTMLAttributes<HTMLDivElement>) => {
  return <p className={`${styles.text} ${className}`} {...props} />;
};

export default Text;
