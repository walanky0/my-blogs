import Link from "next/link";

import { CategoryType } from "@/types/models/articles.type";

import styles from "./styles.module.scss";

type Props = {
  tag: CategoryType;
};

const Tag = ({ tag }: Props) => {
  return (
    <Link href={`?tag=${tag.title}`} className={styles.tag}>
      {tag.title}
    </Link>
  );
};

export default Tag;
