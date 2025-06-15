import React from "react";
import Link from "next/link";
import MoreData from "./MoreData/MoreData";
import SingleNewsDetails from "./SingleNewsDetails/SingleNewsDetails";
// import Head from "next/head";
// import { Metadata } from "next";

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
  news_details?: NewsItem; // nested news item object
}

interface Props {
  singelNewsItems: NewsDetails;
  
}

export default function NewsDetails({ singelNewsItems }: Props) {
  // Destructure news_details safely with fallback to empty object
  const { news_details: itemData = {} } = singelNewsItems;
  console.log(singelNewsItems, "singelNewsItems")

  return (
    <>
      <div className="container mx-auto">
        <SingleNewsDetails singelNewsItems={singelNewsItems} />
        {itemData.category_name ? (
          <div>
            <div className="pt-5 pb-5">
              <Link
                href={`/category/${itemData.category_name}`}
                className="font-semibold"
              >
                {itemData.category_bangla_name} নিয়ে আরও পড়ুন
              </Link>
            </div>

            <div className="border-t-1 mb-5">
              <div className="pt-5">
                <MoreData itemData={itemData} />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            আর কোনো সম্পর্কিত তথ্য পাওয়া যায়নি।
          </p>
        )}
      </div>
    </>
  );
}
