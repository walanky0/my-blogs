import type { PropsWithChildren } from "react";

import styles from "./layout.module.scss";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.layout}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default layout;
