"use client";
import React, { useState } from "react";
import ShareNews from "@/components/ShareNews/ShareNews";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import Image from "next/image";
import Link from "next/link";
import { BsShare } from "react-icons/bs";
import ClientReview from "../ClientReview/ClientReview";
import FontSizeAdjustment from "@/utils/FontSizeAdjustment]/FontSizeAdjustment";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";

// News item interface representing a single news article
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

// Props for your component
interface Props {
  singelNewsItems?: any; // if unused, you may remove it from props
  itemData?: NewsItem;
}

export default function NewsDetailsContent({ itemData }: Props) {
  const [fontSize, setFontSize] = useState(16); // Default font size

  const handleIncrease = () => setFontSize((prev) => Math.min(prev + 5, 48));
  const handleDecrease = () => setFontSize((prev) => Math.max(prev - 5, 10));
  const handleReset = () => setFontSize(16);

  if (!itemData) {
    return <div>No news data available.</div>;
  }
  return (
    <div className="col-span-6" style={{ fontSize: `${fontSize}px` }}>
      <div>
        <Link href={`/category/${itemData.category_name ?? "uncategory"}`}>
          <h1 className="card-title inline-block border-b-2 border-current">
            {itemData.category_bangla_name ??
              itemData.subCategory_bangla_name ??
              "Inqilab"}
          </h1>
        </Link>

        <div className="my-10">
          <h2
            className="mb-8 font-semibold text-gray-800 leading-12"
            style={{ fontSize: "38px" }}
          >
            {itemData.bangla_title ?? "No Title"}
          </h2>

          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <div className="flex items-start space-x-4">
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
                <p>{itemData.author ?? "ইনকিলাব"}</p>
                <p className="text-sm text-gray-500 flex">
                  <span className="pe-1">প্রকাশ:</span>
                  <NewsTimeShower newsTime={itemData.published_at} />
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm flex items-center text-gray-500 space-x-2">
                <span>নিউজটি শেয়ার করুন:</span>
                <BsShare color="red" />
                <div className="ps-3">
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
                  >
                    <FaRegCopy size={20} />
                  </button>
                </div>
                <ShareNews
                  title={itemData.bangla_title ?? "No Title"}
                  url={`https://weeklyinqilab.com/details/${
                    itemData.category_name ?? "uncategory"
                  }/${itemData.slug}`}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-5 text-gray-800 leading-8 pt-3">
              {itemData.bangla_summary ?? ""}
            </h2>
          </div>

          <div className="relative h-[600px] w-full mt-5">
            <OptimizedNewsImage
              imageName={itemData.thumbnail || "no-image.jpg"}
              altText={`Thumbnail for ${itemData.bangla_title ?? "news"}`}
              heightClass="h-full"
              widthClass="w-full"
              priority
              className="object-cover"
            />
            <div className="flex justify-between items-center">
              <p className="pt-3 text-center text-site-secondary">
                ফাইল ছবি | ইনকিলাব
              </p>
              <div>
                <FontSizeAdjustment
                  fontSize={fontSize}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onReset={handleReset}
                />
              </div>
            </div>
          </div>

          <div className="pt-15">
            <div className="news-details-para pt-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: itemData.bangla_content ?? "",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <ClientReview slug={itemData.slug} title={itemData.bangla_title} />
      </div>
    </div>
  );
}
