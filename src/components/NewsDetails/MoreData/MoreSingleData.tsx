import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

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
  categoryItems: NewsItem[];
}

// Fisher-Yates shuffle
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default async function MoreSingleData({ categoryItems }: Props) {
  const randomFive = getRandomItems(categoryItems, 5);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {randomFive.map((item) => (
        <div key={item.id}>
          <Link href={`/details/${item.category_name}/${item.id}`}>
            <div className="card rounded-none shadow-sm group">
              <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                <OptimizedNewsImage
                  className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  imageName={item.title_img || "no img"}
                  altText={item.name}
                  heightClass="h-full"
                  widthClass="w-full"
                  priority
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title h-15">{item.news_title}</h2>
                <small className="text-site-secondary opacity-70 block mt-1">
                  <NewsTimeShower
                    newsTime={item.news_time || new Date().toISOString()}
                  />
                </small>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
