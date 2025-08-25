"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsItem {
  id?: number;
  category_name?: string;
  category_bangla_name?: string;
  slug?: string;
  bangla_title?: string;
  thumbnail?: string;
  published_at?: string;
  is_featured?: string | number;
}

interface EnvironmentProps {
  environment: NewsItem[];
  fontSize: number;
}

export default function Environment({
  environment,
  fontSize,
}: EnvironmentProps) {
  if (!environment || environment.length === 0) return null;

  // Sort by published_at descending (latest first) and take latest 4
  const latestVideos = [...environment]
    .sort(
      (a, b) =>
        new Date(b.published_at || 0).getTime() -
        new Date(a.published_at || 0).getTime()
    )
    .slice(0, 4);

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <SectionTitle
          title={latestVideos[0]?.category_bangla_name ?? "ভিডিও"}
        />
      </div>
      <div className="container mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestVideos.map((item, index) => (
            <Link
              href={`/details/${item.category_name ?? "uncategory"}/${
                item.slug
              }`}
              key={index}
              className="relative h-48 rounded overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.thumbnail || "/images/placeholderImage.webp"}
                alt={item.bangla_title || "News Thumbnail"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
              {/* Text content */}
              <div className="absolute bottom-2 left-2 text-white z-10">
                <div className="text-red-500 text-xs badge">
                  <NewsTimeShower
                    newsTime={item.published_at || new Date().toISOString()}
                  />
                </div>
                <h4
                  className="font-semibold mt-1"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {item.bangla_title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
