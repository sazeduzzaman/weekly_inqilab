import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AdItem {
  position: string;
  availability: string;
  image_path?: string | null;
  link?: string;
}

interface AdvertisementProps {
  advertisements?: AdItem[];
  position: string;
  availability?: string;
  width?: number;
  height?: number;
  marginB?: number;
}

export default function Advertisement({
  advertisements = [],
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

  const placeholderImage =
    position === "sidebar_random"
      ? "/images/side-advertisement.webp"
      : position === "header_right"
      ? "/images/bottom-ad.gif"
      : position === "home_middle"
      ? "/images/bottom-ad.gif"
      : position === "home_bottom"
      ? "/images/bottom-ad.gif"
      : position === "category_middle"
      ? "/images/category_middle.webp"
      : position === "category_featured"
      ? "/images/category_featured.webp"
      : position === "news_below_image"
      ? "/images/news_below_image.webp"
      : position === "news_bottom"
      ? "/images/middle-ad.jpg"
      : "/images/placeholderImage.webp";

  if (filteredAds.length === 0) {
    return (
      <div>
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
            ad.link ? (
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
            )
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
