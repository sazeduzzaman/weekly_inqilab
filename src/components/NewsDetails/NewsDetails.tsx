import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import React from "react";
import ClientReview from "./ClientReview/ClientReview";
import MainSidebar from "../Sidebar/MainSidebar/MainSidebar";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import FontSizeAdjustment from "@/utils/FontSizeAdjustment]/FontSizeAdjustment";
import { NewsItem } from "@/lib/types/CommonNewsTypes";
import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";

// Add this Props interface here:
interface Props {
  singelNewsItems: NewsItem;
}

export default function NewsDetails({ singelNewsItems }: Props) {
  const itemData = singelNewsItems.news_details;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <div>
            <Link href={`/category/${itemData.category_name}`}>
              <h1 className="card-title inline-block border-b-2 border-current">
                {itemData.category_bangla_name ??
                  itemData.subCategory_bangla_name ??
                  "Inqilab"}
              </h1>
            </Link>
            <div className="my-10">
              <h2 className="text-5xl mb-5 font-semibold text-gray-800 leading-15">
                {itemData.bangla_title}
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
                    <p>{itemData.author}</p>
                    <p className="text-sm text-gray-500 flex">
                      <span className="pe-1">প্রকাশ:</span>
                      <NewsTimeShower newsTime={itemData.published_at} />
                    </p>
                  </div>
                </div>

                <p className="text-sm flex items-center text-gray-500">
                  নিউজটি দেখেছেন:
                  <BsPerson color="red" className="ml-2" />
                  {itemData.view_count}
                </p>
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
                {/* <div className="text-1xl font-semibold">
                  {itemData.bangla_summary}
                </div> */}
                <div className="news-details-para pt-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: itemData.bangla_content,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <ClientReview />
          </div>

          <div className="border-t-1 mb-5">
            <div className="pt-5 pb-5">
              <p className="font-semibold">
                {itemData.category_bangla_name} নিয়ে আরও পড়ুন
              </p>
            </div>
            {/* <MoreData singelNewsItems={singelNewsItems} /> */}
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="card-title inline-block border-b-2 border-current">
            বিজ্ঞাপন কর্নার
          </h1>
          <MainSidebar />
        </div>
      </div>
    </div>
  );
}
