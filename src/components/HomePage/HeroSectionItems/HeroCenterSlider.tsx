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
      image: "/images/news-3.jpg",
      title: "মোদির সময় শেষ: পাকিস্তানের প্রতিরক্ষামন্ত্রী",
    },
    {
      id: 2,
      image: "/images/news-4.jpg",
      title: "‘অপারেশন সিন্দুর’ শেষ হয়নি, স্থগিত রাখা হয়েছে: মোদির হুঁশিয়ারি",
    },
    {
      id: 3,
      image: "/images/news-5.jpg",
      title: "রূপগঞ্জে সাংবাদিকের ওপর হামলার প্রতিবাদে মানববন্ধন, আলটিমেটাম",
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
                  <div className="card rounded-none shadow-sm group bg-gradient-to-t from-black h-[600px] to-transparent overflow-hidden mb-3 w-full">
                    <figure className="relative h-[525px] w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                      <Image
                        className="object-cover"
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                      />
                    </figure>
                    <div className="card-body flex items-center justify-center">
                      <h1 className="card-title text-3xl font-normal text-center text-white">
                        {slide.title}
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
