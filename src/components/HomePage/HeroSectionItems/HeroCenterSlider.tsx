"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import { SpotLightNewsListProps } from "@/lib/types/SpotLightNewsDataType";
import Image from "next/image";

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
                  <div className="card rounded-none shadow-sm group overflow-hidden mb-3 w-full">
                    {/* Image section */}
                    <figure className="relative w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                      {/* Black gradient overlay */}
                      <div className="absolute inset-0 h-full z-10" />

                      <Image
                        src={items.thumbnail || "/placeholder.png"}
                        alt={`Thumbnail for ${items.thumbnail}`}
                        width={800}
                        height={310}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </figure>

                    {/* Title section with fixed height */}
                    <div className="w-full bg-[#000000] h-[115px] flex items-center justify-center px-4 text-start">
                      <h1 className="slider-title text-white leading-7">
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
