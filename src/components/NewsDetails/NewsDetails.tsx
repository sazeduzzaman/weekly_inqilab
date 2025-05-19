import React from "react";

interface NewsItem {
  id: number;
  news_title: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  category_name: string;
  category_name_bangla: string;
}

interface Props {
  singelNewsItems: NewsItem; // ❗ not an array
}

export default function NewsDetails({ singelNewsItems }: Props) {
  console.log(singelNewsItems, "singelNewsItems");

  const item = singelNewsItems;

  return (
    <div className="container mx-auto space-y-6 py-4">
      <div key={item.id} className="border rounded-xl p-4 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">{item.news_title}</h2>
        <p className="text-sm text-gray-500">
          প্রকাশের সময়: {new Date(item.news_time).toLocaleString("bn-BD")}
        </p>
        <p className="text-sm text-gray-600">
          বিভাগ: {item.category_name_bangla} ({item.category_name})
        </p>
        <p className="mt-2 text-sm text-gray-700">Feature Status: {item.is_featured}</p>
      </div>
    </div>
  );
}
