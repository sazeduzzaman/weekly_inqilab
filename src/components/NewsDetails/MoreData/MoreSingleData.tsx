"use client";
import React, { useEffect, useState } from "react";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Link from "next/link";

interface NewsItem {
  id?: number;
  category_id?: number;
  sub_category_id?: number | null;
  sub_sub_category_id?: number | null;
  author_id?: number | null;
  title?: string;
  bangla_title?: string;
  slug?: string;
  summary?: string;
  bangla_summary?: string;
  content?: string;
  bangla_content?: string;
  thumbnail?: string;
  banner_image?: string;
  video_url?: string | null;
  tags?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  type?: string;
  is_featured?: number;
  is_most_read?: number;
  is_breaking?: number;
  is_trending?: number;
  show_on_homepage?: number;
  show_in_slider?: number;
  status?: string;
  published_at?: string;
  author?: string;
  view_count?: number;
  share_count?: number;
  comment_count?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  category_name?: string | null;
  category_bangla_name?: string | null;
  subCategory_name?: string;
  subCategory_bangla_name?: string;
}

interface MoreSingleDataProps {
  categoryItems: NewsItem[];
  slug?: number | string;
  count?: number; // optional: number of items to show
}

// ✅ Fisher-Yates Shuffle
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function MoreSingleData({
  categoryItems,
  slug,
  count = 5, // default to 4 items
}: MoreSingleDataProps) {
  const [randomItems, setRandomItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const filtered = categoryItems.filter((item) => item.slug !== slug);
    const selected = getRandomItems(filtered, count);
    setRandomItems(selected);
  }, [categoryItems, slug, count]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-4">
      {randomItems.map((item) => (
        <div key={item.id}>
          <Link
            href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}
          >
            <div className="card rounded-none shadow-sm group">
              <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                <OptimizedNewsImage
                  className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  imageName={item.thumbnail || "no img"}
                  altText={item.bangla_title}
                  heightClass="h-full"
                  widthClass="w-full"
                  priority
                />
              </figure>
              <div className="card-body px-2">
                <h2 className="card-title h-15">
                  {(item.bangla_title ?? "").split(" ").slice(0, 6).join(" ")}
                  {(item.bangla_title ?? "").split(" ").length > 6 ? "..." : ""}
                </h2>
                <span className="text-site-secondary opacity-70 block mt-1">
                  <NewsTimeShower newsTime={item.published_at} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
