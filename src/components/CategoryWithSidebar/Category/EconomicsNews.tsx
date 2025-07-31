import Advertisement from "@/components/Advertisement/Advertisement";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
import { EconomicsNewsListProps } from "@/lib/types/EconomicsDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default async function EconomicsNews({
  economicsItems = [],
}: EconomicsNewsListProps) {
  const normalizedItems = economicsItems.map((item) => ({
    ...item,
    is_featured: Number(item.is_featured),
  }));

  const isFeatured = normalizedItems.filter((item) => item.is_featured === 1);
  const featureData = isFeatured.slice(0, 1);

  const isnonFeatured = normalizedItems.filter(
    (item) => item.is_featured === 0
  );
  const nonFeatureData = isnonFeatured.slice(0, 6);

  const advertisementSidebarRandom = await Advertisment();
  const AdvertisementSidebarRandom = advertisementSidebarRandom;
  return (
    <div>
      <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 mt-6 rounded-none overflow-hidden flex items-center justify-center">
        <Advertisement
          advertisements={AdvertisementSidebarRandom}
          position="home_middle"
          availability="available"
          marginB={2}
        />
      </div>
      <div>
        <SectionTitle
          title={
            economicsItems[0]?.category_bangla_name ??
            economicsItems[0]?.subCategory_bangla_name ??
            "শিরোনাম নেই"
          }
        />
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 lg:col-span-5">
          {featureData.map((item, index) => (
            <div className="card rounded-none shadow-none mb-6" key={index}>
              <Link
                href={`/details/${item.category_name ?? "uncategory"}/${
                  item.slug
                }`}
              >
                <div className="block cursor-pointer">
                  <figure className="relative w-full h-[400px] sm:h-[400px] md:h-[535px] overflow-hidden rounded-none">
                    <OptimizedNewsImage
                      imageName={item.thumbnail || "no img"}
                      altText={`Thumbnail for ${item.title || "no img"}`}
                      heightClass="h-full"
                      widthClass="w-full"
                      priority
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </figure>
                  <div className="card-body justify-center px-4 py-3">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
                      {item.bangla_title}
                    </h2>
                    <span className="text-site-secondary opacity-70 block mt-2 text-sm sm:text-base">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {nonFeatureData.map((item, index) => (
              <div key={index}>
                <Link
                  href={`/details/${item.category_name ?? "uncategory"}/${
                    item.slug
                  }`}
                >
                  <div className="block cursor-pointer">
                    <div className="card rounded-none shadow-sm group">
                      <figure className="relative h-[180px] sm:h-[200px] md:h-[215px] overflow-hidden rounded-none ">
                        <OptimizedNewsImage
                          className="object-cover rounded-none w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                          imageName={item.thumbnail || "no img"}
                          altText={item.title}
                          heightClass="h-full"
                          widthClass="w-full"
                          priority
                        />
                      </figure>
                      <div className="card-body px-3 py-2">
                        <h2 className="card-title h-12 text-base sm:text-lg font-semibold leading-snug line-clamp-3">
                          {(item.bangla_title ?? "")
                            .split(" ")
                            .slice(0, 6)
                            .join(" ")}
                          {(item.bangla_title ?? "").split(" ").length > 6
                            ? "..."
                            : ""}
                        </h2>
                        <span className="text-site-secondary opacity-70 block text-sm sm:text-base">
                          <NewsTimeShower
                            newsTime={
                              item.published_at || new Date().toISOString()
                            }
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
