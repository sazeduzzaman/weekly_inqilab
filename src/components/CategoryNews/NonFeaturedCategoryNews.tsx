import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Advertisement from "../Advertisement/Advertisement";

interface NewsItem {
  id: number;
  title: string;
  news_title: string;
  is_featured: number;
  thumbnail: string;
  news_time: string;
  category_name: string;
  news_short_brief: string;
  bangla_title: string;
  published_at: string;
  summary: string;
  name: string;
  bangla_summary: string;
  slug: string;
  subCategory_name: string;
  subCategory_bangla_name: string;
  author: string;
}

interface Props {
  nonFeatureData: NewsItem[];
}

export default async function NonFeaturedCategoryNews({
  nonFeatureData,
}: Props) {
  const advertisementSidebarRandom = await Advertisment();
  const AdvertisementSidebarRandom = advertisementSidebarRandom;
  return (
    <>
      {/* Top Advertisement */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[768px] aspect-[768/71] mt-10 mx-auto">
          {AdvertisementSidebarRandom?.some(
            (ad) => ad.position === "category_featured"
          ) ? (
            <Advertisement
              advertisements={AdvertisementSidebarRandom}
              position="category_featured"
              availability="available"
              marginB={10}
            />
          ) : (
            <Image
              src="/images/ads-768x71.webp"
              alt="Inqilab Logo"
              width={1000}
              height={400}
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      </div>

      {/* News Items */}
      <div className="space-y-8 px-4 md:px-10 max-w-7xl mx-auto my-10">
        {nonFeatureData.length === 0 ? (
          <p>No featured news available.</p>
        ) : (
          <div className="space-y-6">
            {nonFeatureData.map((item) => (
              <Link
                href={`/details/${item.category_name ?? "uncategory"}/${
                  item.slug
                }`}
                key={item.id}
                className="group block"
              >
                <div className="border-b pb-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white rounded-none shadow-sm overflow-hidden">
                    {/* Image */}
                    <figure className="w-full md:w-[400px] h-[250px] flex-shrink-0 relative overflow-hidden">
                      <OptimizedNewsImage
                        imageName={item.thumbnail || "No image"}
                        altText={`Thumbnail for ${item.bangla_title}`}
                        heightClass="h-full"
                        widthClass="w-full"
                        priority
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </figure>

                    {/* Content */}
                    <div className="flex-1 px-2">
                      <h2 className="text-lg md:text-xl font-semibold mb-2">
                        {item.bangla_title}
                      </h2>
                      <div
                        className="text-sm text-gray-700 mb-2"
                        dangerouslySetInnerHTML={{
                          __html: item.bangla_summary,
                        }}
                      />
                      <div className="flex items-start gap-3 mt-4">
                        <Image
                          src="/favicon.ico"
                          alt="Author"
                          width={30}
                          height={30}
                          className="rounded-sm bg-red-600 p-1"
                        />
                        <div>
                          <p className="text-sm font-medium">
                            {item.author ?? "ইনকিলাব"}
                          </p>
                          <small className="text-black block">
                            <NewsTimeShower
                              newsTime={
                                item.published_at || new Date().toISOString()
                              }
                            />
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Advertisement */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[768px] aspect-[768/71] mb-10 mx-auto">
          {AdvertisementSidebarRandom?.some(
            (ad) => ad.position === "category_middle"
          ) ? (
            <Advertisement
              advertisements={AdvertisementSidebarRandom}
              position="category_middle"
              availability="available"
              marginB={10}
            />
          ) : (
            <Image
              src="/images/ads-768x71.webp"
              alt="Inqilab Logo"
              width={1000}
              height={400}
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
}
