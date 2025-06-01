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
                  <figure className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg">
                    <OptimizedNewsImage
                      className="w-full h-full object-cover rounded-lg"
                      imageName={item.thumbnail || "no img"}
                      altText={item.name}
                      heightClass="h-full"
                      widthClass="w-full"
                      priority
                    />
                  </figure>
                  <div className="card-body px-3 py-2">
                    <h2 className="card-title h-15 text-base sm:text-lg font-semibold leading-snug line-clamp-3">
                      {(item.bangla_title ?? "")
                        .split(" ")
                        .slice(0, 6)
                        .join(" ")}
                      {(item.bangla_title ?? "").split(" ").length > 6
                        ? "..."
                        : ""}
                    </h2>
                    <span className="text-site-secondary opacity-70 block mt-1 text-sm sm:text-base">
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
