import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { LatestNewsListProps } from "@/lib/types/LatestDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturesItems({ latestItems }: LatestNewsListProps) {
  const latestItemsData = latestItems.slice(0, 6);
  console.log(latestItems[0], "latestItems[0].category_id");
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="flex justify-between items-center">
        <SectionTitle title="বৈশিষ্ট্য" />
      </div>
      <div className="grid grid-cols-6 gap-3">
        {latestItemsData.map((item) => (
          <div key={item.id}>
            <Link
              href={`/details/${item.category_name ?? "uncategory"}/${
                item.slug
              }`}
            >
              <div className="card rounded-none shadow-sm group">
                <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage
                    className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    imageName={item.thumbnail || "no img"}
                    altText={item.title}
                    heightClass="h-full"
                    widthClass="w-full"
                    priority
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title h-15">{item.title}</h2>
                  <small className="text-site-secondary opacity-70 block mt-1">
                    {/* {items.news_time} */}
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
      <div className="relative w-full h-full">
        <Image
          src="/images/advertisement.gif"
          alt="Ad banner"
          fill
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
}
