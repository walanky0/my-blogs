import { axiosInstants } from "@/services/axios";
import type { ArticlesRequestType } from "@/types/api/articles-api.type";
import type { ArticleType, CategoryType } from "@/types/models/articles.type";

const getAllCategories = async (): Promise<CategoryType[]> => {
  const res = await axiosInstants.get<CategoryType[]>("/categories");

  return res.data as CategoryType[];
};

const getArticles = async (
  data: ArticlesRequestType
): Promise<ArticleType[]> => {
  const params = new URLSearchParams({
    _page: data.page.toString(),
    _per_page: data.per_page.toString(),
    category: data.category || "",
  });
  const res = await axiosInstants.get(`/articles?${params}`);
  return res.data.data;
};

export const articlesServices = {
  getAllCategories,
  getArticles,
};
