"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPlayFill } from "react-icons/bs";

interface NewsItem {
  id?: number;
  category_name?: string;
  name?: string;
  category_bangla_name?: string;
  subCategory_bangla_name?: string;
  slug?: string;
  bangla_title?: string;
  thumbnail?: string;
  video_url?: string;
  published_at?: string;
  is_featured?: string | number;
  author?: string;
  bangla_summary?: string;
  bangla_content?: string;
}

interface VideoNewsProps {
  videoItems: NewsItem[];
  fontSize: number;
}

export default function VideoNews({ videoItems, fontSize }: VideoNewsProps) {
  if (!videoItems || videoItems.length === 0) return null;

  // sort by published_at descending
  const sortedVideos = [...videoItems].sort((a, b) => {
    const dateA = new Date(a.published_at || 0).getTime();
    const dateB = new Date(b.published_at || 0).getTime();
    return dateB - dateA; // latest first
  });

  // featured: latest 1
  const featureData: NewsItem[] = sortedVideos
    .filter((item) => item.is_featured === "1")
    .slice(0, 1);

  // non-featured: latest 4
  const nonFeatureData: NewsItem[] = sortedVideos
    .filter((item) => item.is_featured === "0")
    .slice(0, 4);

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <SectionTitle title={featureData[0]?.category_bangla_name ?? "ভিডিও"} />
        <div>
          {featureData[0] && (
            <Link
              href={`/category/${
                featureData[0].category_name
                  ?.replace(/\s+/g, "-")
                  .toLowerCase() || "uncategory"
              }?id=${featureData[0]?.id ?? ""}`}
            >
              <span className="text-red-500">আরও দেখুন</span>
            </Link>
          )}
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          {/* Featured News */}
          <div className="relative col-span-6 h-102 rounded-0 overflow-hidden group cursor-pointer">
            {featureData.map((item, index) => (
              <Link
                href={`/details/${item.category_name ?? "uncategory"}/${
                  item.slug
                }`}
                key={index}
              >
                <div>
                  <Image
                    src={item.thumbnail || "/images/placeholderImage.webp"}
                    alt="Feature News"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-16 w-16 rounded-full bg-red-500 animate-ping" />
                      <span className="relative h-16 w-16 rounded-full bg-red-500 backdrop-blur-md border border-red-500/50 flex items-center justify-center">
                        <BsPlayFill className="w-8 h-8 text-white" />
                      </span>
                    </div>
                  </div>
                  {/* bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white mb-4 z-10">
                    <div className="text-red-500 text-sm badge">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </div>
                    <h3
                      className="font-bold mt-2"
                      style={{ fontSize: `${fontSize * 1.2}px` }}
                    >
                      {item.bangla_title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Non-featured News */}
          <div className="col-span-6">
            {nonFeatureData.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nonFeatureData.map((item, index) => (
                  <Link
                    href={`/details/${item.category_name ?? "uncategory"}/${
                      item.slug
                    }`}
                    key={index}
                    className="relative h-48 rounded-0 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={item.thumbnail || "/images/placeholderImage.webp"}
                      alt="News Thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-8 w-8 rounded-full bg-red-500 animate-ping" />
                        <span className="relative h-8 w-8 rounded-full bg-red-500 backdrop-blur-md border border-red-500/50 flex items-center justify-center">
                          <BsPlayFill className="w-3 h-3 text-white" />
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white z-10">
                      <div className="text-red-500 text-xs badge">
                        <NewsTimeShower
                          newsTime={
                            item.published_at || new Date().toISOString()
                          }
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
