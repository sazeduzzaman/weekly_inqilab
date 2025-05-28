import React from "react";
import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import { BsShare } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import FontSizeAdjustment from "@/utils/FontSizeAdjustment]/FontSizeAdjustment";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdConnectWithoutContact } from "react-icons/md";
import MainSidebar from "@/components/Sidebar/MainSidebar/MainSidebar";
import ClientReview from "../ClientReview/ClientReview";
import ShareNews from "@/components/ShareNews/ShareNews";
import Meta from "@/components/MetaData/Meta";

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
export default function SingleNewsDetails({ singelNewsItems }: Props) {
  // Destructure news_details safely with fallback to empty object
  const { news_details: itemData = {} } = singelNewsItems;
  return (
    <>
    <Meta
  title="ইনকিলাব | বিস্তারিত"
  description="সর্বশেষ সংবাদ, বিশ্লেষণ ও রিপোর্ট পড়ুন ইনকিলাবে।"
  image="https://weekly-inqilab.vercel.app/static/default-thumbnail.jpg"
  url="https://weekly-inqilab.vercel.app"
  type="website"
/>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="card rounded-none shadow-sm mt-5">
            <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
              গুরুত্বপূর্ণ
            </div>
            <div className="card-body">
              <div>
                <Link href="/ad-cost" className="flex items-center">
                  <RiAdvertisementLine className="me-3" size={30} /> প্রিন্ট
                  সংস্করণ
                </Link>
              </div>
              <div>
                <Link href="/epaper" className="flex items-center">
                  <HiOutlineLightBulb className="me-3" size={30} /> অনলাইন
                  সংস্করণ
                </Link>
              </div>
              <div>
                <Link href="/contact" className="flex items-center">
                  <MdConnectWithoutContact className="me-3" size={30} />{" "}
                  যোগাযোগের ঠিকানা
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div>
            <Link href={`/category/${itemData.category_name}`}>
              <h1 className="card-title inline-block border-b-2 border-current">
                {itemData.category_bangla_name ??
                  itemData.subCategory_bangla_name ??
                  "Inqilab"}
              </h1>
            </Link>

            <div className="my-10">
              <h2
                className="mb-5 font-semibold text-gray-800 leading-12"
                style={{ fontSize: "40px" }}
              >
                {itemData.bangla_title ?? "No Title"}
              </h2>

              <div className="flex justify-between items-center border-b-1 pb-2">
                <div className="flex items-start space-x-4">
                  <div>
                    <Image
                      className="border-b-1 bg-red-600 rounded-full p-3"
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
                  <div className="text-sm flex items-center text-gray-500">
                    <div className="flex items-center">
                      <span>নিউজটি শেয়ার করুন:</span>
                      <BsShare color="red" className="ml-2" />
                    </div>
                    <ShareNews
                      title={itemData.bangla_title ?? "No Title"}
                      url={`https://weekly-inqilab.vercel.app/details/${
                        itemData.category_name ?? "uncategory"
                      }/${itemData.slug}`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-1xl mb-5 font-semibold text-gray-800 leading-6 pt-3">
                  {itemData.bangla_summary}
                </h2>
              </div>

              <div className="relative h-[600px] w-full mt-5">
                <OptimizedNewsImage
                  imageName={itemData.thumbnail || "no-image.jpg"}
                  altText={`Thumbnail for ${itemData.bangla_title}`}
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
                    <FontSizeAdjustment />
                  </div>
                </div>
              </div>

              <div className="pt-15">
                <div className="news-details-para pt-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: itemData.bangla_content || "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <ClientReview />
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="card-title inline-block border-b-2 border-current">
            বিজ্ঞাপন কর্নার
          </h1>
          <MainSidebar />
        </div>
      </div>
    </>
  );
}
