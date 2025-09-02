import Link from "next/link";
import React from "react";
import HeroCenterSlider from "./HeroCenterSlider";
import { SpotLightNewsListProps } from "@/lib/types/SpotLightNewsDataType";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Image from "next/image";

export default function HeroSectionItems({
  spotLightItems,
}: SpotLightNewsListProps) {
  // Default to empty array if undefined or null
  const items = spotLightItems ?? [];

  // Step 1: Sort by latest published_at first
  const sortedByDate = [...items].sort(
    (a, b) =>
      new Date(b.published_at ?? "").getTime() -
      new Date(a.published_at ?? "").getTime()
  );

  // Step 2: Take top 10 latest items
  const top10Latest = sortedByDate.slice(0, 10);

  // Step 3: Divide into display sections (no shuffle)
  const latestOne = top10Latest.slice(0, 4); // Next 6
  const latestThree = top10Latest.slice(4, 13); // Next 2

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Center Column - Hero Slider */}
        <div className="md:col-span-5">
          <HeroCenterSlider spotLightItems={latestOne} />
        </div>
        {/* Left Column - Latest One */}
        <div className="md:col-span-7 hero-side-mobile">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {latestThree.map((items) => (
              <div key={items.id}>
                <Link
                  href={`/details/${items.category_name ?? "uncategory"}/${
                    items.slug
                  }`}
                >
                  <div className="card rounded-none bg-base-100 shadow-sm group overflow-hidden mb-1">
                    <figure className="relative w-full h-[230px] md:h-[230px]">
                      <Image
                        src={items.thumbnail || "/placeholder.png"}
                        alt={items.bangla_title ?? ""}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                      />

                      {/* Gradient overlay + text */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent px-4 py-3 z-10">
                        <h2 className="text-white font-normal text-sm md:text-base">
                          <span className="block">{items.bangla_title}</span>
                          <small className="text-site-secondary opacity-70 block mt-1">
                            <NewsTimeShower
                              newsTime={
                                items.published_at || new Date().toISOString()
                              }
                            />
                          </small>
                        </h2>
                      </div>
                    </figure>
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
