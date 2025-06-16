"use client"
import { BreakingNewsListProps } from "@/lib/types/BreakingDataType";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function MarqueSliderItems({
  breakingItems,
}: BreakingNewsListProps) {
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
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {extendedBreakingItems.map((item, index) => (
              <div
                className="embla__slide min-w-0 flex-[0_0_auto] border-r-2 border-white px-2 flex items-center gap-2"
                key={index}
              >
                {/* <OptimizedNewsImage
                  className="w-6 h-6 rounded-none object-cover"
                  // src={item.thumbnail || "no img"}
                  imageName={item.thumbnail || "no img"}
                  altText={item.name}
                  heightClass="h-6"
                  widthClass="w-[30px]"
                  priority
                /> */}
                <Link
                  href={`/details/${item.category_name ?? "uncategory"}/${
                    item.slug
                  }`}
                >
                  {item.bangla_title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
