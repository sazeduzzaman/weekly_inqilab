import SectionTitle from "@/components/SectionTitle/SectionTitle";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaVideo } from "react-icons/fa";

interface NewsItem {
  category_name?: string;
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
  itemData: NewsItem;
  fontSize: number;
}

export default function VideoNews({ itemData, fontSize }: VideoNewsProps) {
  const featureData = [itemData]; // single featured item
  const nonFeatureData: NewsItem[] = []; // empty if you only have one
  console.log(fontSize, "fontSize");
  return (
    <div>
      <div>
        <SectionTitle
          title={
            itemData.category_bangla_name ??
            itemData.subCategory_bangla_name ??
            "ভিডিও"
          }
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="relative col-span-6 h-96 rounded-0 overflow-hidden group cursor-pointer">
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
                        <FaVideo className="w-8 h-8 text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white mb-4">
                    <div className="text-red-500 text-sm badge">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </div>
                    <h3 className="text-3xl font-bold mt-2">
                      {item.bangla_title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="col-span-6">
            {nonFeatureData.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Render non-featured if any */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
