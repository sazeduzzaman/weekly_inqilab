import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { BusinessNewsListProps } from "@/lib/types/BusinessNewsDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default function BusinessNews({
  businessNewsItems,
}: BusinessNewsListProps) {
  const businessNewsData = businessNewsItems.slice(0, 4);
  const categoryName = businessNewsData[0].category_bangla_name;
  return (
    <>
      <div>
        <SectionTitle title={categoryName + " সংবাদ"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {businessNewsData.map((item, index) => (
          <div key={index}>
            <Link
              href={`/details/${item.category_name ?? "uncategory"}/${
                item.slug
              }`}
            >
              <div className="block cursor-pointer">
                <div className="card rounded-none shadow-sm group">
                  <figure className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-none">
                    <OptimizedNewsImage
                      imageName={item.thumbnail || "no img"}
                      altText={`Thumbnail for ${item.title || "no img"}`}
                      heightClass="h-full"
                      widthClass="w-full"
                      priority
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
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
    </>
  );
}
