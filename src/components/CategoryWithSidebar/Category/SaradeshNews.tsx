import { ViewedNewsListProps } from "@/lib/types/ViewedDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import React from "react";

export default function SaradeshNews({ viewedItems }: ViewedNewsListProps) {
  const viewedItemsFilterd = viewedItems.slice(0, 6);
  return (
    <div>
      {viewedItemsFilterd.map((item, index) => (
        <div
          key={index}
          className="card rounded-none card-side shadow-sm items-center mb-3"
        >
          <figure className="relative w-[140px] h-[140px] flex-none">
            <OptimizedNewsImage
              imageName={item.title_img || "no img"}
              altText={`Thumbnail for ${item.title_img || "no img"}`}
              heightClass="h-full"
              widthClass="w-full"
              priority
              className="p-0 rounded-none"
            />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title">{item.news_title}</h2>
            <small className="text-site-secondary opacity-70 block mt-1">
              {/* {items.news_time} */}
              <NewsTimeShower
                newsTime={item.news_time || new Date().toISOString()}
              />
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}
