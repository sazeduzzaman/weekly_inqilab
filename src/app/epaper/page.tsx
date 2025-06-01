import EpaperItems from "@/components/EpaperItems/EpaperItems";
import EpaperAdSidebar from "@/components/Sidebar/EpaperAdSidebar/EpaperAdSidebar";
import { EpaperDataSet } from "@/lib/api/Epaper/EpaperDataSet";
import { SiteInformation } from "@/lib/api/SiteInformation";
import type { Metadata } from "next";
// ✅ Define the interface here, matching what's used in EpaperItems

export const metadata: Metadata = {
  title: "ই-পেপার | সাপ্তাহিক ইনকিলাব - ডিজিটাল পত্রিকা",
  description:
    "সাপ্তাহিক ইনকিলাব এর ই-পেপার সংস্করণ পড়ুন অনলাইনে। প্রতিদিনের পত্রিকা, আগের সংখ্যা এবং বিভাগীয় খবর এক জায়গায়।",
  keywords: [
    "ই-পেপার",
    "সাপ্তাহিক ইনকিলাব",
    "পত্রিকা",
    "অনলাইন সংবাদপত্র",
    "বাংলা ই-পেপার",
    "ডিজিটাল পত্রিকা",
  ],
  metadataBase: new URL("https://weeklyinqilab.com"),
  openGraph: {
    title: "ই-পেপার | সাপ্তাহিক ইনকিলাব",
    description:
      "সাপ্তাহিক ইনকিলাব এর ই-পেপার সংস্করণ পড়ুন অনলাইনে। প্রতিদিনের পত্রিকা, আগের সংখ্যা এবং বিভাগীয় খবর এক জায়গায়।",
    url: "https://weeklyinqilab.com/epaper",
    siteName: "সাপ্তাহিক ইনকিলাব",
    type: "article",
    images: [
      {
        url: "/images/placeholderImage.webp",
        alt: "ই-পেপার - সাপ্তাহিক ইনকিলাব",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ই-পেপার | সাপ্তাহিক ইনকিলাব",
    description:
      "সাপ্তাহিক ইনকিলাব এর ই-পেপার সংস্করণ পড়ুন অনলাইনে। আগের সংখ্যা এবং পিডিএফ আকারে পত্রিকা দেখুন।",
    images: ["/images/placeholderImage.webp"],
  },
};

export default async function Page() {
  const siteInformationData = await SiteInformation();
  // Fetch data from API & process
  const epapersData = await EpaperDataSet();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-3">
        <EpaperItems epapersData={epapersData} />
        <div className="col-span-2">
          <div className="mt-5">
            <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
              বিজ্ঞাপন
            </div>
            <EpaperAdSidebar siteInformationData={siteInformationData} />
          </div>
        </div>
      </div>
    </div>
  );
}
