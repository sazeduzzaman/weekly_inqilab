"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Page;
const EpaperItems_1 = __importDefault(require("@/components/EpaperItems/EpaperItems"));
const EpaperAdSidebar_1 = __importDefault(require("@/components/Sidebar/EpaperAdSidebar/EpaperAdSidebar"));
const EpaperDataSet_1 = require("@/lib/api/Epaper/EpaperDataSet");
const SiteInformation_1 = require("@/lib/api/SiteInformation");
// ✅ Define the interface here, matching what's used in EpaperItems
exports.metadata = {
    title: "ই-পেপার | সাপ্তাহিক ইনকিলাব - ডিজিটাল পত্রিকা",
    description: "সাপ্তাহিক ইনকিলাব এর ই-পেপার সংস্করণ পড়ুন অনলাইনে। প্রতিদিনের পত্রিকা, আগের সংখ্যা এবং বিভাগীয় খবর এক জায়গায়।",
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
        description: "সাপ্তাহিক ইনকিলাব এর ই-পেপার সংস্করণ পড়ুন অনলাইনে। প্রতিদিনের পত্রিকা, আগের সংখ্যা এবং বিভাগীয় খবর এক জায়গায়।",
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
        description: "সাপ্তাহিক ইনকিলাব এর ই-পেপার সংস্করণ পড়ুন অনলাইনে। আগের সংখ্যা এবং পিডিএফ আকারে পত্রিকা দেখুন।",
        images: ["/images/placeholderImage.webp"],
    },
};
async function Page() {
    const siteInformationData = await (0, SiteInformation_1.SiteInformation)();
    // Fetch data from API & process
    const epapersData = await (0, EpaperDataSet_1.EpaperDataSet)();
    return (<div className="container mx-auto px-8 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <EpaperItems_1.default epapersData={epapersData}/>
        <div className="order-3 lg:order-3 col-span-12 lg:col-span-2">
          <div className="mt-5">
            <div className="card-header bg-red-700 rounded-md text-center py-3 text-white">
              বিজ্ঞাপন
            </div>
            <EpaperAdSidebar_1.default siteInformationData={siteInformationData}/>
          </div>
        </div>
      </div>
    </div>);
}
