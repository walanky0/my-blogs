import Tag from "@/components/Tag";
import Tile from "@/components/ui/Tile";
import type { ArticleType } from "@/types/models/articles.type";

import styles from "./styles.module.scss";

type Props = {
  data: ArticleType;
};

const ArticleCard = ({ data: { title, description, category } }: Props) => {
  return (
    <article className="article-card">
      <Tile>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <ul className={styles.tags}>
          <li className={styles.tag}>
            <Tag
              tag={{
                id: "1",
                title: category,
              }}
            />
          </li>
        </ul>
      </Tile>
    </article>
  );
};

export default ArticleCard;
