import { ParamHTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

const Container = ({
  className = "",
  ...props
}: PropsWithChildren<ParamHTMLAttributes<HTMLDivElement>>) => {
  return <div className={`${styles.container} ${className}`} {...props} />;
};

export default Container;
