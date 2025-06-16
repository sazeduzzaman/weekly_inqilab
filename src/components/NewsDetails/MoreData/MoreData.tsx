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
  const formattedCategory = itemData?.category_name
    ? itemData.category_name.toLowerCase().split(" ").join("-")
    : "";

  const res = await fetch(
    `https://admin.weeklyinqilab.com/api/v1/category-news/${formattedCategory}`,
    {
      next: { revalidate: 1 },
      // next: { revalidate: 1 },
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
