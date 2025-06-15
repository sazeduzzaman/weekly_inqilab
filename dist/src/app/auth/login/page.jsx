"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const FormItems_1 = __importDefault(require("./FormItems/FormItems"));
// ✅ Static metadata for home page
exports.metadata = {
    title: "লগিন করুন | সাপ্তাহিক ইনকিলাব",
    description: "সাপ্তাহিক ইনকিলাব-এ যুক্ত হোন। বাংলা সংবাদ পড়তে এবং আরও অনেক ফিচার উপভোগ করতে লগিন করুন।",
    keywords: ["লগিন", "রেজিস্টার", "ইনকিলাব", "বাংলা নিউজ", "একাউন্ট তৈরি"],
    metadataBase: new URL("https://weeklyinqilab.com"), // Optional but helps for og/twitter
    openGraph: {
        title: "সাপ্তাহিক ইনকিলাব - বাংলা খবর",
        description: "বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ পড়ুন সাপ্তাহিক ইনকিলাবে। সব সময় আপডেট থাকুন।",
        url: "https://weeklyinqilab.com",
        siteName: "সাপ্তাহিক ইনকিলাব",
        type: "website",
        images: [
            {
                // url: "https://admin.weeklyinqilab.com/images/inqilab-og-image.jpg",
                url: "/images/placeholderImage.webp",
                alt: "সাপ্তাহিক ইনকিলাব - বাংলা খবর",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "সাপ্তাহিক ইনকিলাব - বাংলা সংবাদ",
        description: "সাপ্তাহিক ইনকিলাব এ সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা ও বিনোদনের খবর পড়ুন।",
        images: ["/images/placeholderImage.webp"],
    },
};
const Page = () => {
    return (<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <link_1.default href="/">
            <image_1.default src="/images/logo.png" alt="Inqilab Logo" width={200} height={80}/>
          </link_1.default>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          লগইন করুন
        </h2>

        <FormItems_1.default />

        <div className="text-center text-sm text-gray-600 mt-6">
          একাউন্ট নেই?
          <link_1.default href="/auth/register" className="text-indigo-600 font-medium ml-1 hover:underline">
            নিবন্ধন করুন
          </link_1.default>
        </div>
      </div>
    </div>);
};
exports.default = Page;
