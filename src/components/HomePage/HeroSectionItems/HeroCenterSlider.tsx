"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroCenterSlider() {
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

  const slides = [
    {
      id: 1,
      image: "/images/slider-1.webp",
      title: "শনিবার শতভাগ কারখানায় বেতন-বোনাস পরিশোধ সম্পন্ন হবে: বিজিএমইএ",
    },
    {
      id: 2,
      image: "/images/slider-2.webp",
      title: "জান, পৃথিবীর সমস্ত সুখ আল্লাহ তোমাকে দিক: মাহিয়া মাহি",
    },
    {
      id: 3,
      image: "/images/slider-1.webp",
      title: "নতুন সিনেমা নিয়ে আসছে বিদ্যা বালান",
    },
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <Link href="#">
                  <div className="card rounded-none image-full shadow-sm group overflow-hidden mb-3 w-full">
                    <figure className="relative h-[395px] w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <Image
                        className="object-cover"
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                      />
                    </figure>
                    <div className="card-body flex items-center justify-center">
                      <h2 className="card-title font-normal text-center">
                        {slide.title}
                      </h2>
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
