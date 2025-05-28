"use strict";
// app/details/[categoryDetails]/[newsDetails]/page.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
exports.generateMetadata = generateMetadata;
exports.default = Page;
const NewsDetails_1 = __importDefault(require("@/components/NewsDetails/NewsDetails"));
exports.dynamic = "force-dynamic";
async function generateMetadata({ params }) {
    const newsId = await params.newsDetails;
    const res = await fetch(`https://v2.weeklyinqilab.com/api/v1/news-details/${newsId}`);
    if (!res.ok) {
        return {
            title: "সংবাদ বিস্তারিত - Error",
            description: "সংবাদ ডেটা পাওয়া যায়নি।",
        };
    }
    const data = await res.json();
    const metaData = data.news_details;
    // Customize title and description based on fetched data
    return {
        title: metaData.bangla_title || "সংবাদ বিস্তারিত",
        description: metaData.bangla_summary || "বাংলা সংবাদ বিস্তারিত পড়ুন এবং আপডেট থাকুন।",
        keywords: ["সংবাদ", "বাংলা", "নিউজ", "বাংলাদেশ"],
        openGraph: {
            title: metaData.bangla_title || "সংবাদ বিস্তারিত",
            description: metaData.bangla_summary ||
                "বাংলা সংবাদ বিস্তারিত পড়ুন এবং আপডেট থাকুন।",
            images: [
                {
                    url: metaData.thumbnail || "/images/placeholderImage.webp",
                    alt: metaData.category_bangla_name || "সংবাদ",
                },
            ],
        },
    };
}
async function Page({ params }) {
    const resolvedParams = await params;
    const newsId = resolvedParams.newsDetails;
    const res = await fetch(`https://v2.weeklyinqilab.com/api/v1/news-details/${newsId}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        console.error("Failed to fetch news data");
        return <p>Failed to fetch news data</p>;
    }
    const data = await res.json();
    const singelNewsItems = data;
    return (<div className="p-4">
      <NewsDetails_1.default singelNewsItems={singelNewsItems}/>
    </div>);
}
