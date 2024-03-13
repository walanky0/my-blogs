import type { InputHTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

const Checkbox = ({
  id,
  children,
  className = "",
  ...props
}: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>) => {
  return (
    <article className={`${styles.checkbox} ${className}`}>
      <div className={styles.checkbox__input_wrapper}>
        <input className={styles.input} id={id} {...props} type="checkbox" />
      </div>
      <label htmlFor={id} className={styles.checkbox__content}>
        {children}
      </label>
    </article>
  );
};

export default Checkbox;
