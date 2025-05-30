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
  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/category-news/${itemData.category_name}`,
    {
      // next: { revalidate: 0 },
      next: { revalidate: 0 },
    }
  );

  const json = await res.json();

  const categoryItems: NewsItem[] = Array.isArray(json)
    ? json
    : json.data || json.news || [];

  return (
    <>
      {categoryItems.length === 0 ? (
        <p className="text-center text-gray-500 my-10">
          কোনো সংবাদ পাওয়া যায়নি
        </p>
      ) : (
        <MoreSingleData categoryItems={categoryItems} slug={itemData.slug} />
      )}
    </>
  );
}
