import LimitedText from "@/utils/LimitedText/LimitedText";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

interface NewsItem {
  id: number;
  title: string;
  news_title: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  category_name: string;
  news_short_brief: string;
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
        <div className="grid grid-cols-3 gap-4">
          {/* Main Featured */}
          <div className="col-span-2">
            {featureMain.map((item) => (
              <Link
                href={`/details/${item.category_name}/${item.id}`}
                key={item.id}
              >
                <div
                  className="card rounded-none shadow-sm group"
                  key={item.id}
                >
                  <figure className="relative h-full w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10" />

                    <OptimizedNewsImage
                      imageName={item.title_img || "No image"}
                      altText={`Thumbnail for ${item.news_title}`}
                      heightClass="h-[480px]"
                      widthClass="w-full"
                      priority
                      className="rounded-t-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>

                  <div className="card-body bg-black rounded-b-md">
                    <h2 className="text-3xl text-white">{item.news_title}</h2>
                    <small className="block mt-4">
                      <NewsTimeShower
                        newsTime={item.news_time || new Date().toISOString()}
                      />
                    </small>
                    <p className="text-primary">{item.category_name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar - Other Featured */}
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-2">
              {featureOthers.map((item) => (
                <Link
                  href={`/details/${item.category_name}/${item.id}`}
                  key={item.id}
                  className="group"
                >
                  <div className="flex gap-4 items-center justify-center shadow-sm">
                    <div className="w-1/3 overflow-hidden">
                      <OptimizedNewsImage
                        imageName={item.title_img || "No image"}
                        altText={`Thumbnail for ${item.news_title}`}
                        heightClass="h-[150px]"
                        widthClass="w-full"
                        priority={false}
                        className="rounded-t-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="w-2/3 text-sm font-medium p-3">
                      <h1 className="card-title font-semibold mb-2">
                        {item.news_title}
                      </h1>
                      <LimitedText
                        htmlContent={item.news_short_brief}
                        wordLimit={10}
                        className="news-details-p"
                      />
                      <small className="text-gray-500 opacity-95 block mt-4">
                        <NewsTimeShower
                          newsTime={item.news_time || new Date().toISOString()}
                        />
                      </small>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
