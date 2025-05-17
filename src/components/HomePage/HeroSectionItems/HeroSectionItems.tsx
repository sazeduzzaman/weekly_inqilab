import Link from "next/link";
import React from "react";
import HeroCenterSlider from "./HeroCenterSlider";
import { SpotLightNewsListProps } from "@/lib/types/SpotLightNewsDataType";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

export default function HeroSectionItems({
  spotLightItems,
}: SpotLightNewsListProps) {
  console.log(spotLightItems, "spotLightItems");
  const leatestOne = spotLightItems.slice(1, 2);
  const leatestTwo = spotLightItems.slice(3, 6);
  const leatestThree = spotLightItems.slice(6, 8);

  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          {/* <SectionTitle title="জাতীয়" /> */}
          <div className="">
            {leatestOne.map((items) => (
              <div key={items.id}>
                <Link href="#">
                  <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                    <figure className=" transition-transform duration-500 ease-in-out group-hover:scale-130">
                      <OptimizedNewsImage
                        imageName={items.title_img || "no img"}
                        altText={`Thumbnail for ${items.title_img || "no img"}`}
                        heightClass="h-[570px]"
                        widthClass="w-full"
                        priority
                        className="p-0 rounded-none"
                      />
                    </figure>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 px-4 py-3 z-10">
                      <h2 className="text-white font-normal py-20">
                        {items.news_title} <br />
                        <small className="text-site-secondary opacity-70 block mt-1">
                          {/* {items.news_time} */}
                          <NewsTimeShower
                            newsTime={
                              items.news_time || new Date().toISOString()
                            }
                          />
                        </small>
                      </h2>
                    </div>
                    <br />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6">
          {/* <SectionTitle title="সর্বশেষ" /> */}
          <HeroCenterSlider spotLightItems={leatestTwo} />
        </div>
        <div className="col-span-3">
          {/* <SectionTitle title="সর্বাধিক" /> */}
          <div className="">
            {leatestThree.map((items) => (
              <Link href="#" key={items.id}>
                <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                  <figure className="relative w-full h-73 transition-transform duration-500 ease-in-out group-hover:scale-105">
                    {/* Image */}
                    <OptimizedNewsImage
                      imageName={items.title_img || "no image"}
                      altText={`Thumbnail for ${items.title_img}`}
                      priority
                      widthClass="w-full"
                      heightClass="h-73"
                      hoverEffect
                      className="rounded-none"
                    />

                    {/* Bottom Overlay with Title */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 px-4 py-3 z-10">
                      <h2 className="text-white font-normal">
                        <span className="block">{items.news_title}</span>
                        <small className="text-site-secondary opacity-70 block mt-1">
                          {/* {items.news_time} */}
                          <NewsTimeShower
                            newsTime={
                              items.news_time || new Date().toISOString()
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
    </div>
  );
}
