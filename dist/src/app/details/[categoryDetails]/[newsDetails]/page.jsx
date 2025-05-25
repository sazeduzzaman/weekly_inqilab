"use strict";
// app/details/[categoryDetails]/[newsDetails]/page.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
exports.default = Page;
const NewsDetails_1 = __importDefault(require("@/components/NewsDetails/NewsDetails"));
exports.dynamic = "force-dynamic";
async function Page({ params }) {
    const resolvedParams = await params;
    const newsId = resolvedParams.newsDetails;
    const res = await fetch(`https://backoffice.ajkal.us/news-detail/${newsId}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        console.error("Failed to fetch news data");
        return <p>Failed to fetch news data</p>;
    }
    const data = await res.json();
    const singelNewsItems = data.data;
    return (<div className="p-4">
      <NewsDetails_1.default singelNewsItems={singelNewsItems}/>
    </div>);
}
