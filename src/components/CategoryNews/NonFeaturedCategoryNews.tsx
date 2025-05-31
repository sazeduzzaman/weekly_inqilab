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
      {/* <div className="divider divider-neutral">Non Featured</div> */}
      <div className="flex justify-center items-center">
        <div className="relative aspect-[768/71] mt-20 mx-auto">
          {AdvertisementSidebarRandom &&
          AdvertisementSidebarRandom.length > 0 &&
          AdvertisementSidebarRandom.some(
            (ad) => ad.position === "category_featured"
          ) ? (
            <Advertisement
              advertisements={AdvertisementSidebarRandom}
              position="category_featured"
              availability="available"
              marginB={10}
            />
          ) : (
            <div>
              <Image
                src="/images/ads-768x71.webp"
                alt="Inqilab Logo"
                width={1000}
                height={400}
              />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="container w-[70%] mx-auto my-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {nonFeatureData.length === 0 ? (
                <p>No featured news available.</p>
              ) : (
                <div className="grid gap-4">
                  {nonFeatureData.map((item) => (
                    <Link
                      href={`/details/${item.category_name ?? "uncategory"}/${
                        item.slug
                      }`}
                      key={item.id}
                      className="group"
                    >
                      <div className="border-b pb-4" key={item.id}>
                        <div className="card card-side bg-white flex items-center rounded-none">
                          <figure className="relative flex-shrink-0 h-[250px] w-[400px] overflow-hidden rounded-md">
                            <OptimizedNewsImage
                              imageName={item.thumbnail || "No image"}
                              altText={`Thumbnail for ${item.bangla_title}`}
                              heightClass="h-full"
                              widthClass="w-full"
                              priority
                              className="rounded-t-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                          </figure>
                          <div className="card-body">
                            <h2 className="ft-size">{item.bangla_title}</h2>
                            <div
                              className="news-details-p"
                              dangerouslySetInnerHTML={{
                                __html: item.bangla_summary,
                              }}
                            />
                            <div className="flex items-start space-x-4 mt-4">
                              <div>
                                <Image
                                  className="border-b-1 bg-red-600 rounded-sm p-1"
                                  src="/favicon.ico"
                                  alt="Next.js logo"
                                  width={30}
                                  height={30}
                                  priority
                                />
                              </div>
                              <div>
                                <p>{item.author ?? "ইনকিলাব"}</p>
                                <div>
                                  <small className="text-black block">
                                    <NewsTimeShower
                                      newsTime={
                                        item.published_at ||
                                        new Date().toISOString()
                                      }
                                    />
                                  </small>
                                </div>
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
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative aspect-[768/71] mb-10 mx-auto">
          {AdvertisementSidebarRandom &&
          AdvertisementSidebarRandom.length > 0 &&
          AdvertisementSidebarRandom.some(
            (ad) => ad.position === "category_middle"
          ) ? (
            <Advertisement
              advertisements={AdvertisementSidebarRandom}
              position="category_middle"
              availability="available"
              marginB={10}
            />
          ) : (
            <div>
              <Image
                src="/images/ads-768x71.webp"
                alt="Inqilab Logo"
                width={1000}
                height={400}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
