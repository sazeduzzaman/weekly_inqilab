import React from "react";
import MoreSingleData from "./MoreSingleData";

interface NewsItem {
  id: number;
  news_title: string;
  name: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  category_name: string;
  category_name_bangla: string;
  news_short_brief: string;
  news_detail: string;
  category_id: string;
}

interface Props {
  singelNewsItems: NewsItem; // ❗ not an array
}

export default async function MoreData({ singelNewsItems }: Props) {
  const item = singelNewsItems.category_id;

  const res = await fetch(`https://backoffice.ajkal.us/category-news/${item}`, {
    next: { revalidate: 60 },
  });

  const json = await res.json();
  const categoryItems: NewsItem[] = Array.isArray(json)
    ? json
    : json.data || json.news || [];

  console.log(categoryItems, "categoryItemsName");

  return (
    <>
      <MoreSingleData categoryItems={categoryItems} />
    </>
  );
}
