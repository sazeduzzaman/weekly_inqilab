import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCenterSlider from "./HeroCenterSlider";

const HeroSectionItems = () => {
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          {/* <SectionTitle title="জাতীয়" /> */}
          <div className="">
            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-150 transition-transform duration-500 ease-in-out group-hover:scale-130">
                  <Image
                    className="object-cover"
                    src="/images/news-1.jpg"
                    alt="Shoes"
                    layout="fill"
                    priority
                  />
                </figure>
                <div className="card-body flex items-center justify-center px-0">
                  <h2 className="card-title font-normal bg-black p-3 px-4 text-white w-full shadow-lg card-title-gr">
                    ডিএনসিসির অভিযান / মূল সড়কে চলবে না রিকশা, বন্ধ হবে চার্জিং
                    পয়েন্ট
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-6">
          {/* <SectionTitle title="সর্বশেষ" /> */}
          <HeroCenterSlider />
        </div>
        <div className="col-span-3">
          {/* <SectionTitle title="সর্বাধিক" /> */}
          <div className="">
            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-73 transition-transform duration-500 ease-in-out group-hover:scale-105">
                  {/* Image */}
                  <Image
                    className="object-cover"
                    src="/images/news-6.jpg"
                    alt="Shoes"
                    layout="fill"
                    priority
                  />

                  {/* Bottom Overlay with Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 px-4 py-3 z-10">
                    <h2 className="text-white font-normal">
                      <span className="block">দুঃসংবাদ জানাল আবহাওয়া দফতর</span>
                      <small className="text-site-secondary opacity-70 block mt-1">
                        কিছুক্ষন আগে
                      </small>
                    </h2>
                  </div>
                </figure>
              </div>
            </Link>

            <Link href="#">
              <div className="card rounded-none bg-base-100 image-full shadow-sm group overflow-hidden mb-3">
                <figure className="relative w-full h-73 transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <Image
                    className="object-cover"
                    src="/images/news-7.jpg"
                    alt="Shoes"
                    layout="fill"
                    priority
                  />
                </figure>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-black/0 px-4 py-3 z-10">
                  <h2 className="text-white font-normal">
                    <span>রাতের মধ্যে ঢাকাসহ ১৫ জেলায় ৬০ কিমি বেগে ঝড়</span> <br />
                    <small className="text-start text-site-secondary opacity-70">
                      ১ ঘন্টা আগে
                    </small>
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
