import Link from "next/link";
import React from "react";
import HeroCenterSlider from "./HeroCenterSlider";
import { SpotLightNewsListProps } from "@/lib/types/SpotLightNewsDataType";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

export default function HeroSectionItems({
  spotLightItems,
}: SpotLightNewsListProps) {
  const leatestOne = spotLightItems.slice(1, 2);
  const leatestTwo = spotLightItems.slice(3, 6);
  const leatestThree = spotLightItems.slice(6, 8);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Left Column - Latest One */}
        <div className="md:col-span-3">
          {leatestOne.map((items) => (
            <div key={items.id}>
              <Link
                href={`/details/${items.category_name ?? "uncategory"}/${
                  items.slug
                }`}
              >
                <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                  <figure className="transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <OptimizedNewsImage
                      imageName={items.thumbnail || "no img"}
                      altText={`Thumbnail for ${items.thumbnail || "no img"}`}
                      heightClass="h-[500] md:h-[598px]" // Responsive height
                      widthClass="w-full"
                      priority
                      className="p-0 rounded-none"
                    />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 px-4 py-3 z-10">
                    <h2 className="text-white font-normal text-sm md:text-base py-10 md:py-20">
                      {items.bangla_title}
                      <br />
                      <small className="text-site-secondary opacity-70 block mt-5">
                        <NewsTimeShower
                          newsTime={
                            items.published_at || new Date().toISOString()
                          }
                        />
                      </small>
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Center Column - Hero Slider */}
        <div className="md:col-span-6">
          <HeroCenterSlider spotLightItems={leatestTwo} />
        </div>

        {/* Right Column - Latest Three */}
        <div className="md:col-span-3">
          {leatestThree.map((items) => (
            <Link
              href={`/details/${items.category_name ?? "uncategory"}/${
                items.slug
              }`}
              key={items.id}
            >
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-[700] md:h-[293px] transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <OptimizedNewsImage
                    imageName={items.thumbnail || "no image"}
                    altText={`Thumbnail for ${items.thumbnail}`}
                    priority
                    widthClass="w-full"
                    heightClass="h-full"
                    hoverEffect
                    className="rounded-none"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 px-4 py-3 z-10">
                    <h2 className="text-white font-normal text-sm md:text-base">
                      <span className="block">{items.bangla_title}</span>
                      <small className="text-site-secondary opacity-70 block mt-5">
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
          ))}
        </div>
      </div>
    </div>
  );
}
