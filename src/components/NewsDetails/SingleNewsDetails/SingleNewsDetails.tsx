import React from "react";
import MainSidebar from "@/components/Sidebar/MainSidebar/MainSidebar";
import RightSide from "./RightSide";
import { SiteInformation } from "@/lib/api/SiteInformation";
import NewsDetailsContent from "./NewsDetailsContent";

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
  itemData?: NewsDetails;
}
export default async function SingleNewsDetails({ singelNewsItems }: Props) {
  // Destructure news_details safely with fallback to empty object
  const { news_details: itemData = {} } = singelNewsItems;
  const siteInformationData = await SiteInformation();
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mb-5">
        <div className="col-span-3">
          <div className="">
            <RightSide singelNewsItems={singelNewsItems} slug={itemData.slug} />
          </div>
        </div>

        <NewsDetailsContent itemData={itemData} />

        <div className="col-span-3">
          <h1 className="card-title inline-block border-b-2 border-current">
            বিজ্ঞাপন কর্নার
          </h1>
          <MainSidebar siteInformationData={siteInformationData} />
        </div>
      </div>
    </>
  );
}
