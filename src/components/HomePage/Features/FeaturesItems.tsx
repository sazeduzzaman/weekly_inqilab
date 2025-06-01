import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { LatestNewsListProps } from "@/lib/types/LatestDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturesItems({ latestItems }: LatestNewsListProps) {
  const latestItemsData = latestItems.slice(0, 6);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <SectionTitle title="সর্বশেষ" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {latestItemsData.map((item) => (
          <div key={item.id} className="w-full">
            <Link
              href={`/details/${item.category_name ?? "uncategory"}/${
                item.slug
              }`}
            >
              <div className="card rounded-none shadow-sm group flex flex-col h-full cursor-pointer">
                <figure className="relative w-full h-48 sm:h-56 md:h-48 lg:h-40 xl:h-44 overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage
                    className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    imageName={item.thumbnail || "no img"}
                    altText={item.bangla_title}
                    heightClass="h-full"
                    widthClass="w-full"
                    priority
                  />
                </figure>
                <div className="card-body px-2 py-3 flex flex-col justify-between flex-grow">
                  <h2 className="card-title text-sm sm:text-base md:text-sm lg:text-base xl:text-sm font-semibold leading-tight h-15 line-clamp-3">
                    {(item.bangla_title ?? "").split(" ").slice(0, 4).join(" ")}
                    {(item.bangla_title ?? "").split(" ").length > 4
                      ? "..."
                      : ""}
                  </h2>
                  <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-site-secondary font-bold opacity-70">
                    <span>{item.category_bangla_name}</span>
                    <span className="text-mute opacity-70 block mt-1">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 mt-6 rounded-md overflow-hidden">
        <Image
          src="/images/advertisement.gif"
          alt="Ad banner"
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>
    </div>
  );
}
