"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import { SpotLightNewsListProps } from "@/lib/types/SpotLightNewsDataType";

export default function HeroCenterSlider({
  spotLightItems,
}: SpotLightNewsListProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);
  return (
    <div className="w-full">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {spotLightItems.map((items) => (
              <div key={items.id} className="w-full flex-shrink-0">
                <Link
                  // href="/"
                  href={`/details/${items.category_name ?? "uncategory"}/${
                    items.slug
                  }`}
                >
                  <div className="card rounded-none shadow-sm group bg-gradient-to-t from-black to-transparent overflow-hidden mb-3 w-full">
                    <figure className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                      {/* Black gradient overlay on top of the image */}
                      <div className="absolute inset-0 h-[510px] bg-gradient-to-t from-black/100 to-transparent z-10 " />
                      <OptimizedNewsImage
                        imageName={items.thumbnail || "No image"}
                        altText={`Thumbnail for ${items.thumbnail}`}
                        heightClass="h-[510px]"
                        widthClass="w-full"
                        priority
                        className="object-cover"
                      />
                    </figure>

                    {/* Title section */}
                    <div className="card-body relative flex items-center justify-center bg-black hero-title">
                      <h1 className="slider-title font-normal text-start text-white leading-8 z-10">
                        {/* {(items.bangla_title ?? "")
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                        {(items.bangla_title ?? "").split(" ").length > 5
                          ? "..."
                          : ""} */}
                          {items.bangla_title}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
