import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { ViewedNewsListProps } from "@/lib/types/ViewedDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default function Sorbadhik({ viewedItems }: ViewedNewsListProps) {
  const viewedItemsFilterd = viewedItems.slice(0, 6);
  return (
    <div>
      <SectionTitle title="সর্বাধিক পঠিত" />
      {viewedItemsFilterd.map((item, index) => (
        <Link
          href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}
          key={index}
        >
          <div className="card group rounded-none card-side shadow-sm items-center mb-3">
            <figure className="w-[140px] h-[140px] overflow-hidden rounded-lg flex-shrink-0">
              <OptimizedNewsImage
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                imageName={item.thumbnail || "no img"}
                altText={item.bangla_title}
                priority
              />
            </figure>
            <div className="card-body px-2">
              <h2 className="card-title h-15">
                {(item.bangla_title ?? "").split(" ").slice(0, 6).join(" ")}
                {(item.bangla_title ?? "").split(" ").length > 6 ? "..." : ""}
              </h2>
              <span className="text-site-secondary opacity-70 block mt-1">
                <NewsTimeShower
                  newsTime={item.published_at || new Date().toISOString()}
                />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
