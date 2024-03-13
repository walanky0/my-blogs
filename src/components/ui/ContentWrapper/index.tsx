import type { ParamHTMLAttributes } from "react";

import styles from "./styles.module.scss";

const ContentWrapper = ({
  className = "",
  ...props
}: ParamHTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.wrapper} ${className}`} {...props} />;
};

export default ContentWrapper;
