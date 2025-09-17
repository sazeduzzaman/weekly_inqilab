import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

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
  category_bangla_name: string;
  subCategory_bangla_name: string;
}

interface Props {
  featureData: NewsItem[];
}

export default function FeaturedCategoryNews({ featureData }: Props) {
  const featureMain = featureData.slice(0, 1);
  const featureOthers = featureData.slice(1, 5);

  return (
    <div className="space-y-4">
      {featureMain.length === 0 ? (
        <p>No featured news available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Main Featured */}
          <div className="md:col-span-2">
            {featureMain.map((item) => (
              <Link
                href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}
                key={item.id}
              >
                <div className="card rounded-none shadow-sm group">
                  <figure className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[495px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <OptimizedNewsImage
                      imageName={item.thumbnail || "No image"}
                      altText={`Thumbnail for ${item.bangla_title}`}
                      heightClass="h-full"
                      widthClass="w-full"
                      priority
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>
                  <div className="card-body bg-black text-white rounded-b-md">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                      {item.bangla_title.split(" ").slice(0, 8).join(" ")}...
                    </h1>
                    <p className="block mt-4 text-red-700">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </p>
                    {/* <span>{item.category_bangla_name}</span> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar - Other Featured */}
          <div className="md:col-span-1 space-y-3">
            {featureOthers.map((item) => (
              <Link
                href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}
                key={item.id}
                className="group block"
              >
                <div className="flex gap-3 items-center shadow-sm">
                  <div className="w-1/3 min-w-[90px] h-[90px] sm:h-[110px] md:h-[150px] overflow-hidden">
                    <OptimizedNewsImage
                      imageName={item.thumbnail || "No image"}
                      altText={`Thumbnail for ${item.bangla_title}`}
                      heightClass="h-full"
                      widthClass="w-full"
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="w-2/3 text-sm font-medium">
                    <h1 className="text-lg md:text-xl mb-1 h-15 line-clamp-3">
                       {item.bangla_title.split(" ").slice(0, 8).join(" ")}...
                    </h1>
                    <small className="text-gray-500 block mt-2">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </small>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
