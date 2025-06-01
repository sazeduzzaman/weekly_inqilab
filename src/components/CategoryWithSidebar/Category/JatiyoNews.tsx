import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { RajnitiNewsListProps } from "@/lib/types/RajnitiDataType";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";
import React from "react";

export default function JatiyoNews({
  rajnitiItems = [],
}: RajnitiNewsListProps) {
  //   Filter is the data Featured Or Not
  const isFeatured = rajnitiItems.filter(
    // if date id 1 feature then add in isFeature
    (item) => item.is_featured === 1
  );
  const featureData = isFeatured.slice(0, 1);
  const isnonFeatured = rajnitiItems.filter(
    // if date id 2 non feature then add in nonFeature
    (item) => item.is_featured === 0
  );
  const nonFeatureData = isnonFeatured.slice(0, 3);
  return (
    <div>
      <div>
        <SectionTitle
          title={
            rajnitiItems[0]?.category_bangla_name ??
            rajnitiItems[0]?.subCategory_bangla_name ??
            "শিরোনাম নেই"
          }
        />
      </div>

      {featureData.map((item, index) => (
        <div className="card rounded-none shadow-sm mb-6" key={index}>
          <Link
            href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}
          >
            <div className="block cursor-pointer">
              <figure className="relative w-full h-[300px] sm:h-[400px] md:h-[440px] overflow-hidden rounded-md">
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
                  <figure className="relative h-[180px] sm:h-[200px] md:h-[215px] overflow-hidden rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110">
                    <OptimizedNewsImage
                      className="object-cover w-full h-full rounded-md"
                      imageName={item.thumbnail || "no img"}
                      altText={item.title}
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
    </div>
  );
}
