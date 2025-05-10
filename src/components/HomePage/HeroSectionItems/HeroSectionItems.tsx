import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSlider from "./HeroSlider";

const HeroSectionItems = () => {
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <SectionTitle title="জাতীয়" />
          <div className="">
            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <Image
                    className="object-cover"
                    src="/images/news-1.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    unoptimized
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    শনিবার শতভাগ কারখানায় বেতন-বোনাস পরিশোধ সম্পন্ন হবে:
                    বিজিএমইএ
                  </h2>
                </div>
              </div>
            </Link>

            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <Image
                    className="object-cover"
                    src="/images/news-2.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    unoptimized
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    জান, পৃথিবীর সমস্ত সুখ আল্লাহ তোমাকে দিক: মাহিয়া মাহি
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-6">
          <SectionTitle title="সর্বশেষ" />
          <HeroSlider />
        </div>
        <div className="col-span-3">
          <SectionTitle title="সর্বাধিক" />
          <div className="">
            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <Image
                    className="object-cover"
                    src="/images/news-1.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    unoptimized
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    শনিবার শতভাগ কারখানায় বেতন-বোনাস পরিশোধ সম্পন্ন হবে:
                    বিজিএমইএ
                  </h2>
                </div>
              </div>
            </Link>

            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden">
                <figure className="relative w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <Image
                    className="object-cover"
                    src="/images/news-2.webp"
                    alt="Shoes"
                    layout="fill" // Fill the parent container
                    unoptimized
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title font-normal">
                    জান, পৃথিবীর সমস্ত সুখ আল্লাহ তোমাকে দিক: মাহিয়া মাহি
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionItems;
