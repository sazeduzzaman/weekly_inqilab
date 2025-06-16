"use strict";
// app/category/[id]/page.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = generateMetadata;
exports.default = Page;
const CategoryNews_1 = __importDefault(require("@/components/CategoryNews/CategoryNews"));
const CurrentTimeShower_1 = __importDefault(require("@/utils/CurrentTimeShower/CurrentTimeShower"));
const image_1 = __importDefault(require("next/image"));
async function generateMetadata({ params }) {
    const { slug } = await params; // <-- no await here
    const res = await fetch(`https://admin.weeklyinqilab.com/api/v1/category-news/${slug}`, {
        next: { revalidate: 1 }, // force no caching
    });
    if (!res.ok) {
        return {
            title: "সংবাদ বিস্তারিত - Error",
            description: "সংবাদ ডেটা পাওয়া যায়নি।",
        };
    }
    const data = await res.json();
    const metaData = data.category || {};
    return {
        title: metaData.bangla_name +
            " || " +
            "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর এবং নিউজ" || "",
        description: "সাপ্তাহিক ইনকিলাব এ সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন, এবং আরও অনেক বিষয় পড়ুন। সর্বদা আপডেট থাকুন।",
        keywords: [
            "সাপ্তাহিক ইনকিলাব",
            "বাংলা সংবাদ",
            "নিউজ",
            "বাংলাদেশ",
            "খেলা",
            "বিনোদন",
        ],
        openGraph: {
            title: metaData.bangla_name +
                " || " +
                "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর এবং নিউজ" || "",
            description: "সাপ্তাহিক ইনকিলাব এ সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন, এবং আরও অনেক বিষয় পড়ুন। সর্বদা আপডেট থাকুন।",
            images: [
                {
                    url: "/images/placeholderImage.webp",
                    alt: metaData.bangla_name +
                        " || " +
                        "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর এবং নিউজ" || "",
                },
            ],
        },
    };
}
async function Page({ params }) {
    const { slug } = await params; // <-- no await here
    const res = await fetch(`https://admin.weeklyinqilab.com/api/v1/category-news/${slug}`, {
        next: { revalidate: 1 }, // force no caching
    });
    const json = await res.json();
    const { category, data } = json;
    const categoryItems = Array.isArray(data) ? data : [];
    return (<div className="container mx-auto">
      <div className="mt-4 mb-4 px-10 md:px-0 border-b flex flex-col md:flex-row justify-between">
        <p className="font-semibold text-1xl ft-size">
          {category?.bangla_name ?? "অনির্ধারিত"} নিউজ
        </p>
        <CurrentTimeShower_1.default />
      </div>

      {categoryItems.length > 0 ? (<CategoryNews_1.default categoryItems={categoryItems}/>) : (<div className="text-center justify-center items-center flex h-screen">
          <div>
            <h2 className="text-4xl font-bold text-gray-700">
              কোনো সংবাদ পাওয়া যায়নি
            </h2>
            <p className="mt-2 text-gray-500">
              অনুগ্রহ করে পরে আবার চেষ্টা করুন অথবা অন্য ক্যাটেগরি নির্বাচন
              করুন।
            </p>

            <div>
              <image_1.default className="flex justify-center mx-auto" src="/images/no-data-found.jpg" alt="Next.js logo" width={800} height={800} priority/>
            </div>
          </div>
        </div>)}
    </div>);
}
