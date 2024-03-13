import { type ParamHTMLAttributes } from "react";

import styles from "./styles.module.scss";

const Tile = ({
  children,
  className = "",
  ...props
}: ParamHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${styles.tile} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Tile;
