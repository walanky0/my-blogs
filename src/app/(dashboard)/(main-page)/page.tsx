import type { Metadata } from "next";

import Tag from "@/components/Tag";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Title from "@/components/ui/Title";
import ArticleCard from "@/module/articles/components/ArticleCard";
import { articlesServices } from "@/module/articles/services/articlesServices";
import { generateMetaTitle } from "@/utils/generateMeta";

import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: generateMetaTitle("Главная"),
};

type Props = {
  searchParams: { [key: string]: string };
};

const MainPage = async ({ searchParams }: Props) => {
  const categories = await articlesServices.getAllCategories();
  const articles = await articlesServices.getArticles({
    per_page: 20,
    page: 1,
    category: searchParams.tag || "",
  });

  return (
    <ContentWrapper>
      <Container>
        <div className={styles.header}>
          <Title>Статьи месяца</Title>
          <Button theme="info" size="medium">
            Написать статью
          </Button>
        </div>
        <nav className="theme-list">
          <ul className={styles.tags}>
            {categories.map((item) => (
              <li key={item.id} className={styles.tag}>
                <Tag tag={item} />
              </li>
            ))}
          </ul>
        </nav>
        <section className={styles.list}>
          {articles.map((item) => (
            <ArticleCard key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </ContentWrapper>
  );
};

export default MainPage;
