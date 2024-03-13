import { ParamHTMLAttributes } from "react";

import styles from "./styles.module.scss";

const Title = ({
  className = "",
  ...props
}: ParamHTMLAttributes<HTMLDivElement>) => {
  return <h2 className={`${styles.title} ${className}`} {...props} />;
};

export default Title;
