"use client";
import React, { useEffect, useState, useMemo } from "react";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdConnectWithoutContact } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import Link from "next/link";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

interface NewsItem {
  id?: number;
  author_id?: number | null;
  title?: string;
  bangla_title?: string;
  slug?: string;
  bangla_summary?: string;
  thumbnail?: string;
  type?: string;
  author?: string;
  view_count?: number;
  category_name?: string;
  category_bangla_name?: string;
  published_at?: string;
  subCategory_bangla_name?: string;
  bangla_content?: string;
}

interface NewsDetails {
  category_bangla_name?: string;
  news_details?: NewsItem;
  related_news?: NewsItem[];
}

interface Props {
  singelNewsItems: NewsDetails;
  slug?: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function RightSide({ singelNewsItems, slug }: Props) {
  const relatedData = useMemo(
    () => singelNewsItems.related_news || [],
    [singelNewsItems.related_news]
  );
  const [shuffledData, setShuffledData] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Filter out current slug, then shuffle
    const filtered = relatedData.filter((item) => item.slug !== slug);
    const shuffled = shuffleArray(filtered);
    setShuffledData(shuffled);
  }, [relatedData, slug]);

  return (
    <>
      <div className="card rounded-none shadow-sm mt-0 mr-10">
        <div className="card-header bg-black rounded-md text-start ps-5 py-3 text-white">
          গুরুত্বপূর্ণ
        </div>
        <div className="card-body">
          <div className="mb-3">
            <Link href="/ad-cost" className="flex items-center">
              <RiAdvertisementLine className="me-3" size={30} /> প্রিন্ট সংস্করণ
            </Link>
          </div>
          <div className="mb-3">
            <Link href="/epaper" className="flex items-center">
              <HiOutlineLightBulb className="me-3" size={30} /> অনলাইন সংস্করণ
            </Link>
          </div>
          <div className="mb-3">
            <Link href="/contact" className="flex items-center">
              <MdConnectWithoutContact className="me-3" size={30} /> যোগাযোগের
              ঠিকানা
            </Link>
          </div>
          <div>
            <Link href="/epaper" className="flex items-center">
              <LuPartyPopper className="me-3" size={30} /> ইপেপার পড়ুন
            </Link>
          </div>
        </div>
      </div>

      {/* Related News Section */}
      <div className="card rounded-none shadow-sm mt-5 mr-10">
        <div className="card-header  bg-black rounded-md text-start ps-5 py-3 text-white">
          সম্পর্কিত আরও খবর...
        </div>
        <div className="card-body px-1 py-0">
          {shuffledData.slice(0, 10).map((item, index) => (
            <div className="" key={index}>
              <Link
                href={`/details/${item.category_name ?? "uncategory"}/${
                  item.slug
                }`}
              >
                <div className="card p-0 group rounded-none card-side shadow-none items-center">
                  <figure className="w-[80px] h-[80px] overflow-hidden rounded-lg flex-shrink-0">
                    <OptimizedNewsImage
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                      imageName={item.thumbnail || "no img"}
                      altText={item.bangla_title}
                      priority
                    />
                  </figure>
                  <div className="card-body p-2 py-0">
                    <h2 className="card-title h-15">
                      {(item.bangla_title ?? "")
                        .split(" ")
                        .slice(0, 6)
                        .join(" ")}
                      {(item.bangla_title ?? "").split(" ").length > 6
                        ? "..."
                        : ""}
                    </h2>
                    <span className="text-site-secondary opacity-70 block">
                      <NewsTimeShower
                        newsTime={item.published_at || new Date().toISOString()}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
