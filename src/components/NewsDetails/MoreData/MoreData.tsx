import React from "react";
import MoreSingleData from "./MoreSingleData";

interface NewsItem {
  id?: number;
  category_id?: number;
  category_name?: string;
  bangla_title?: string;
  news_title?: string;
  name?: string;
  thumbnail?: string;
  slug?: string;
}

interface Props {
  itemData: NewsItem;
}

export default async function MoreData({ itemData }: Props) {
  console.log(itemData.slug, "itemData.slug received in MoreData");

  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/category-news/${itemData.category_name}`,
    {
      next: { revalidate: 60 },
    }
  );

  const json = await res.json();

  const categoryItems: NewsItem[] = Array.isArray(json)
    ? json
    : json.data || json.news || [];

  return (
    <>
      <MoreSingleData categoryItems={categoryItems} slug={itemData.slug} />
    </>
  );
}
