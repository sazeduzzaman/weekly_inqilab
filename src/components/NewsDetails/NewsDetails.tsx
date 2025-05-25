import OptimizedNewsImage from "@/utils/OptimizedNewsImage/OptimizedNewsImage";
import React from "react";
import ClientReview from "./ClientReview/ClientReview";
import MoreData from "./MoreData/MoreData";
import MainSidebar from "../Sidebar/MainSidebar/MainSidebar";
import FontSizeAdjustment from "@/utils/FontSizeAdjustment]/FontSizeAdjustment";
import { BsPerson } from "react-icons/bs";

interface NewsItem {
  id: number;
  name: string;
  category_id: string;
  news_title: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  category_name: string;
  category_name_bangla: string;
  news_short_brief: string;
  news_detail: string;
  view_count: number;
}

interface Props {
  singelNewsItems: NewsItem; // ❗ not an array
}

export default function NewsDetails({ singelNewsItems }: Props) {

  const item = singelNewsItems;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <div>
            <h1 className="card-title inline-block border-b-2 border-current">
              {item.category_name_bangla}
            </h1>
            <div key={item.id} className="my-10">
              <h2 className="text-5xl mb-5 font-semibold text-gray-800 leading-15">
                {item.news_title}
              </h2>
              <div className="flex justify-between items-center border-b-1 pb-2">
                <div>
                  <p className="text-sm text-gray-500">
                    প্রকাশের সময়:{" "}
                    {new Date(item.news_time).toLocaleString("bn-BD")}
                  </p>
                  <p className="text-sm text-gray-600">
                    বিভাগ: {item.category_name_bangla} ({item.category_name})
                  </p>
                </div>
                <p className="text-sm flex items-center text-gray-500">
                  নিউজটি দেখেছেন:
                  <span className="mx-2">
                    {item.view_count
                      .toString()
                      .replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[+d])}
                  </span>
                  <BsPerson color="red" />
                </p>
              </div>
              <div className="relative h-[600px] w-full mt-5">
                <OptimizedNewsImage
                  imageName={item.title_img || "no-image.jpg"}
                  altText={`Thumbnail for ${item.title_img}`}
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
                <div className="text-1xl font-semibold">
                  {item.news_short_brief}
                </div>
                <div className="news-details-para pt-3">
                  <div dangerouslySetInnerHTML={{ __html: item.news_detail }} />
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
      <div className="border-t-1 mb-5">
        <div className="pt-5 pb-5">
          <p className="font-semibold">
            {item.category_name_bangla} নিয়ে আরও পড়ুন
          </p>
        </div>
        <MoreData singelNewsItems={item} />
      </div>
    </div>
  );
}
