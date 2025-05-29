import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { WordNewsListProps } from "@/lib/types/WordNewsDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default function WorldNews({ wordNewsItems }: WordNewsListProps) {
  const wordNewsData = wordNewsItems.slice(0, 4);
  return (
    <>
      <div>
        <SectionTitle title="বিশ্ব সংবাদ" />
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {wordNewsData.map((item, index) => (
          <div key={index}>
            <Link href={`/details/${item.category_name}/${item.id}`}>
              <div className="card rounded-none shadow-sm group">
                <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage
                    className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    imageName={item.thumbnail || "no img"}
                    altText={item.name}
                    heightClass="h-full"
                    widthClass="w-full"
                    priority
                  />
                </figure>
                <div className="card-body px-2">
                  <h2 className="card-title h-15">
                    {(item.bangla_title ?? "").split(" ").slice(0, 6).join(" ")}
                    {(item.bangla_title ?? "").split(" ").length > 6
                      ? "..."
                      : ""}
                  </h2>
                  <span className="text-site-secondary opacity-70 block mt-1">
                    {/* {items.news_time} */}
                    <NewsTimeShower
                      newsTime={item.news_time || new Date().toISOString()}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
