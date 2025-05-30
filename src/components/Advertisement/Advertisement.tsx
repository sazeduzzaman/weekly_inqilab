import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AdItem {
  position: string;
  availability: string;
  image_path?: string | null;
  link?: string; // optional link url
  // add more fields if needed
}

interface AdvertisementProps {
  advertisements: AdItem[];
  position: string; // filter by position
  availability?: string; // optional filter by availability
  width?: number; // optional image width
  height?: number; // optional image height
  marginB?: number; // optional image height
}

export default function Advertisement({
  advertisements,
  position,
  availability,
  width = 915,
  height = 85,
  marginB = 0,
}: AdvertisementProps) {
  const filteredAds = advertisements.filter(
    (ad) =>
      ad.position === position &&
      (availability ? ad.availability === availability : true)
  );

  // Choose placeholder image based on position
  const placeholderImage =
    // Sidebar - Random [340×280]
    position === "sidebar_random"
      ? "/images/placeholderImage.webp"
      : // Global - Header (Right Side) [915×85]
      position === "header_right"
      ? "/images/ads-768x71.webp"
      : // Homepage - Middle Section [1185×340]
      position === "home_middle"
      ? "/images/home_middle.webp"
      : // Homepage - Bottom (Above Footer) [1185×340]
      position === "home_bottom"
      ? "/images/home_bottom.webp"
      : // Category Page - Middle Section [500×500]
      position === "category_middle"
      ? "/images/category_middle.webp"
      : // Category Page - Featured Section [728×90]
      position === "category_featured"
      ? "/images/category_featured.webp"
      : // News Article - Below Main Image [500×300]
      position === "news_below_image"
      ? "/images/news_below_image.webp"
      : // News Article - Bottom of the Page [300×250]
      position === "news_bottom"
      ? "/images/news_bottom.webp"
      : "/images/placeholderImage.webp";

  if (filteredAds.length === 0) {
    return (
      <div className="">
        <Image
          src={placeholderImage}
          alt="Ad banner"
          width={width}
          height={height}
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <>
      {filteredAds.map((ad, idx) => (
        <div key={idx} style={{ marginBottom: `${marginB}px` }}>
          {ad.availability === "available" ? (
            <>
              {ad.link ? (
                <Link href={ad.link} passHref>
                  <Image
                    src={ad.image_path ?? "/images/ads-768x71.webp"}
                    alt="Ad banner"
                    width={width}
                    height={height}
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              ) : (
                <Image
                  src={ad.image_path ?? "/images/ads-768x71.webp"}
                  alt="Ad banner"
                  width={width}
                  height={height}
                  priority
                  style={{ objectFit: "cover" }}
                />
              )}
            </>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              বিজ্ঞাপন বর্তমানে উপলব্ধ নেই।
            </p>
          )}
        </div>
      ))}
    </>
  );
}
