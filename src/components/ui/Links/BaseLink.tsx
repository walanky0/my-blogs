import Link, { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
  target?: "_blank";
};

const BaseLink = ({
  className = "",
  ...props
}: PropsWithChildren<Props & LinkProps>) => {
  return <Link className={`${className} ${styles.baseLink}`} {...props} />;
};

export default BaseLink;
