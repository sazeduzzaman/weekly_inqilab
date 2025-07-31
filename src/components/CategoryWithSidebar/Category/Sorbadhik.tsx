"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { ViewedNewsListProps } from "@/lib/types/ViewedDataType";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";

export default function Sorbadhik({ viewedItems }: ViewedNewsListProps) {
  const [randomLatestItems, setRandomLatestItems] = useState<
    typeof viewedItems
  >([]);

  useEffect(() => {
    // Step 1: Sort by published_at DESC
    const sorted = [...viewedItems].sort((a, b) => {
      const dateA = new Date(a.published_at ?? "").getTime();
      const dateB = new Date(b.published_at ?? "").getTime();
      return dateB - dateA;
    });

    // Step 2: Take top 10 latest items, then shuffle and take 6
    const latestSubset = sorted.slice(0, 15); // optional buffer for better randomness
    const shuffled = [...latestSubset].sort(() => 0.5 - Math.random());
    setRandomLatestItems(shuffled.slice(0, 6));
  }, [viewedItems]);

  return (
    <div>
      <SectionTitle title="সর্বাধিক পঠিত" />
      {randomLatestItems.map((item, index) => (
        <Link
          href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}
          key={index}
        >
          <div className="card group rounded-none card-side shadow-sm items-center mb-3">
            <figure className="w-[140px] h-[140px] overflow-hidden rounded-none flex-shrink-0">
              <OptimizedNewsImage
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                imageName={item.thumbnail || "no img"}
                altText={item.bangla_title}
                priority
              />
            </figure>
            <div className="card-body p-2 px-3">
              <h2 className="card-title h-12 sorbadhitk-title">
                {(item.bangla_title ?? "").split(" ").slice(0, 11).join(" ")}
                {(item.bangla_title ?? "").split(" ").length > 11 ? "" : ""}
              </h2>
              <span className="pt-5">{item.category_bangla_name}</span>
              {/* <span className="text-site-secondary opacity-70 block">
                <NewsTimeShower
                  newsTime={item.published_at || new Date().toISOString()}
                />
              </span> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
