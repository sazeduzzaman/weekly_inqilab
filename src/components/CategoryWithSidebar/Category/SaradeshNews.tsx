import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { ViewedNewsListProps } from "@/lib/types/ViewedDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default function SaradeshNews({ viewedItems }: ViewedNewsListProps) {
  const viewedItemsFilterd = viewedItems.slice(0, 6);
  return (
    <div>
      <SectionTitle title="সর্বাধিক পঠিত" />
      {viewedItemsFilterd.map((item, index) => (
        <Link href={`/details/${item.slug}/${item.id}`} key={index}>
          <div className="card group rounded-none card-side shadow-sm items-center mb-3">
            <figure className="w-[140px] h-[140px] overflow-hidden rounded-lg flex-shrink-0">
              <OptimizedNewsImage
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                imageName={item.title_img || "no img"}
                altText={item.title}
                priority
              />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title">{item.title}</h2>
              <small className="text-site-secondary opacity-70 block mt-1">
                <NewsTimeShower
                  newsTime={item.news_time || new Date().toISOString()}
                />
              </small>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
