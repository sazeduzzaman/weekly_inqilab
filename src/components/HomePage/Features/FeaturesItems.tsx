import Advertisement from "@/components/Advertisement/Advertisement";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
import { LatestNewsListProps } from "@/lib/types/LatestDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default async function FeaturesItems({
  latestItems,
}: LatestNewsListProps) {
  const latestItemsData = latestItems.slice(0, 6);
  const advertisementSidebarRandom = await Advertisment();
  const AdvertisementSidebarRandom = advertisementSidebarRandom;
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
                    className="w-full h-full rounded-none object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    imageName={item.thumbnail || "no img"}
                    altText={item.bangla_title}
                    heightClass="h-full"
                    widthClass="w-full"
                    priority
                  />
                </figure>
                <div className="card-body px-2 py-3 flex flex-col justify-between flex-grow">
                  <h2 className="card-title text-sm sm:text-base md:text-sm lg:text-base xl:text-sm font-semibold leading-tight h-12 line-clamp-3">
                    {(item.bangla_title ?? "").split(" ").slice(0, 7).join(" ")}
                    {(item.bangla_title ?? "").split(" ").length > 7
                      ? ""
                      : ""}
                  </h2>
                  <div className="flex justify-between items-center mt-2 text-xs sm:text-sm font-normal opacity-70">
                    <span>{item.category_bangla_name}</span>
                    <span className="text-red-700 block">
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
      <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 mt-6 rounded-none overflow-hidden flex items-center justify-center">
        <Advertisement
          advertisements={AdvertisementSidebarRandom}
          position="home_middle"
          availability="available"
          marginB={2}
        />
      </div>
    </div>
  );
}
