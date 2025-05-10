"use client";

import { BreakingNewsMarqueProps } from "@/types/BreakingNewsMarqueProps";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

export default function MarqueSliderItems({
  breakingItems,
}: BreakingNewsMarqueProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, containScroll: "keepSnaps" },
    [
      AutoScroll({
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        speed: 0.85,
        startDelay: 50,
      }),
    ]
  );
  const extendedBreakingItems = [
    ...breakingItems,
    ...breakingItems,
    ...breakingItems,
  ];
  return (
    <div className="bg-site-secondary">
      <section className="mx-auto flex h-[45px] container items-center gap-x-2 py-2 text-white">
        <div className="flex items-center">
          <span className="blinking-dot"></span>
          <span className="pr-3 font-semibold">ব্রেকিং:</span>
        </div>
        <div className="embla w-[86rem] overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {extendedBreakingItems.map((item, index) => (
              <p
                className="embla__slide min-w-0 flex-[0_0_auto] border-r-2 border-white px-2 flex items-center gap-2"
                key={index}
              >
                <Image
                  className="w-6 h-6 rounded-lg object-cover"
                  src={item.image_url}
                  alt={item.name}
                  width={10}
                  height={10}
                  unoptimized
                  priority
                />
                <Link href={`/category/${item.category_id}`}>
                  {item.news_title}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
