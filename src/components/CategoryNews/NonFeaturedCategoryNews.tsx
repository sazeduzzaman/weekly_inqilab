import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsItem {
  id: number;
  title: string;
  news_title: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  news_short_brief: string;
  category_name: string;
}

interface Props {
  nonFeatureData: NewsItem[];
}

export default function NonFeaturedCategoryNews({ nonFeatureData }: Props) {
  return (
    <>
      {/* <div className="divider divider-neutral">Non Featured</div> */}
      <div className="relative w-full aspect-[768/71] my-5">
        <Image
          src="/images/advertisement.png"
          alt="Ad banner"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="space-y-4">
        <div className="container w-[70%] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {nonFeatureData.length === 0 ? (
                <p>No featured news available.</p>
              ) : (
                <div className="grid gap-4">
                  {nonFeatureData.map((item) => (
                    <Link
                      href={`/details/${item.category_name}/${item.id}`}
                      key={item.id}
                    >
                      <div className="border-b pb-4" key={item.id}>
                        <div className="card card-side bg-white flex items-center rounded-none">
                          <figure className="relative flex-shrink-0 h-[250px] w-[400px] overflow-hidden rounded-md">
                            <OptimizedNewsImage
                              imageName={item.title_img || "No image"}
                              altText={`Thumbnail for ${item.news_title}`}
                              heightClass="h-full"
                              widthClass="w-full"
                              priority
                              className="rounded-none object-cover"
                            />
                          </figure>
                          <div className="card-body">
                            <h2 className="text-2xl">{item.news_title}</h2>
                            <div>{item.news_short_brief}</div>
                            <div>
                              <small className="text-white block mt-4">
                                <NewsTimeShower
                                  newsTime={
                                    item.news_time || new Date().toISOString()
                                  }
                                />
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <div className="col-span-4">Sidebar</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
