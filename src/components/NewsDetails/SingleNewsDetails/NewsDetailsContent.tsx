"use client";

import React, { useState, useRef, memo } from "react";
import ShareNews from "@/components/ShareNews/ShareNews";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Image from "next/image";
import Link from "next/link";
import { BsShare } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import FontSizeAdjustment from "@/utils/FontSizeAdjustment]/FontSizeAdjustment";
import ClientReview from "../ClientReview/ClientReview";
import VideoNewsIframe from "./VideoNewsIframe";

// Memoize ShareNews to prevent unnecessary re-renders
const MemoizedShareNews = memo(ShareNews);

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
  video_url?: string;
  category_name?: string;
  category_bangla_name?: string;
  published_at?: string;
  subCategory_bangla_name?: string;
  bangla_content?: string;
}

interface Props {
  singelNewsItems?: any;
  itemData?: NewsItem;
}

export default function NewsDetailsContent({ itemData }: Props) {
  const [fontSize, setFontSize] = useState(22);
  const newsRef = useRef<HTMLDivElement>(null);

  const handleIncrease = () => setFontSize((prev) => Math.min(prev + 5, 48));
  const handleDecrease = () => setFontSize((prev) => Math.max(prev - 5, 10));
  const handleReset = () => setFontSize(22);

  const handlePrint = () => {
    if (!newsRef.current) return;

    const printContents = newsRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  if (!itemData) return <div>No news data available.</div>;

  return (
    <div className="col-span-6" style={{ fontSize: `${fontSize}px` }}>
      {itemData?.category_name === "Video News" ? (
        <VideoNewsIframe itemData={itemData} fontSize={fontSize} />
      ) : (
        <div ref={newsRef} className="printable">
          {/* Category Title */}
          <Link href={`/category/${itemData.category_name ?? "uncategory"}`}>
            <h1
              className="card-title inline-block border-b-2 border-current"
              style={{ fontSize: `${fontSize * 1.2}px` }}
            >
              {itemData.category_bangla_name ??
                itemData.subCategory_bangla_name ??
                "Inqilab"}
            </h1>
          </Link>

          {/* Title */}
          <div className="my-10">
            <h2
              className="mb-8 font-semibold text-gray-800 leading-tight"
              style={{ fontSize: `${fontSize * 1.7}px` }}
            >
              {itemData.bangla_title ?? "No Title"}
            </h2>

            {/* Author & Time */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-2 gap-3">
              <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4 text-center sm:text-left">
                <div>
                  <Image
                    className="bg-red-600 rounded-full p-3"
                    src="/favicon.ico"
                    alt="Next.js logo"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div>
                  <p
                    className="text-base font-medium pt-2 lg:pt-0"
                    style={{ fontSize: `${fontSize * 0.9}px` }}
                  >
                    {itemData.author ?? "প্রকাশিত:"}
                  </p>
                  <p
                    className="text-gray-500 flex justify-center sm:justify-start flex-wrap"
                    style={{ fontSize: `${fontSize * 0.8}px` }}
                  >
                    <NewsTimeShower newsTime={itemData.published_at} />
                  </p>
                </div>
              </div>

              {/* Share, Copy, Print, Font Size */}
              <div
                className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2 text-gray-500"
                style={{ fontSize: `${fontSize * 0.85}px` }}
              >
                <span className="mb-3 sm:mb-0">নিউজটি শেয়ার করুন:</span>
                <div className="flex items-center gap-2">
                  <BsShare className="text-red-500" size={fontSize * 0.9} />

                  {/* Copy Link */}
                  <button
                    title="লিংক কপি করুন"
                    onClick={() => {
                      const link = `https://weeklyinqilab.com/details/${
                        itemData.category_name ?? "uncategory"
                      }/${itemData.slug}`;
                      navigator.clipboard
                        .writeText(link)
                        .then(() => toast.success("✅ লিংক কপি হয়েছে!"))
                        .catch(() => toast.error("❌ লিংক কপি করা যায়নি"));
                    }}
                    className="btn btn-circle btn-sm"
                    style={{ fontSize: `${fontSize * 0.85}px` }}
                  >
                    <FaRegCopy size={fontSize * 0.9} />
                  </button>

                  {/* Print */}
                  <button
                    title="প্রিন্ট করুন"
                    onClick={handlePrint}
                    className="btn btn-circle btn-sm"
                    style={{ fontSize: `${fontSize * 0.85}px` }}
                  >
                    🖨️
                  </button>

                  <MemoizedShareNews
                    title={itemData.bangla_title ?? "No Title"}
                    url={`https://weeklyinqilab.com/details/${
                      itemData.category_name ?? "uncategory"
                    }/${itemData.slug}`}
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <h2
              className="mb-5 text-gray-800 leading-relaxed pt-3 text-justify"
              style={{ fontSize: `${fontSize}px` }}
            >
              {itemData.bangla_summary ?? ""}
            </h2>

            {/* Thumbnail */}
            <div className="relative h-[200px] lg:h-[400px] w-full my-5">
              <OptimizedNewsImage
                imageName={itemData.thumbnail || "no-image.jpg"}
                altText={`Thumbnail for ${itemData.bangla_title ?? "news"}`}
                heightClass="h-full"
                widthClass="w-full"
                priority
              />
            </div>

            {/* Font size adjustment */}
            <div className="flex justify-end mt-2">
              <FontSizeAdjustment
                fontSize={fontSize}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onReset={handleReset}
              />
            </div>

            {/* Content */}
            <div
              className="news-details-para pt-3 text-justify"
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: itemData.bangla_content ?? "",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Client Review */}
      <div className="mb-5">
        <ClientReview slug={itemData.slug} title={itemData.bangla_title} />
      </div>
    </div>
  );
}
