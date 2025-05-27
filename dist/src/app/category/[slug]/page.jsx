"use strict";
// app/category/[id]/page.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
exports.default = Page;
const CategoryNews_1 = __importDefault(require("@/components/CategoryNews/CategoryNews"));
const CurrentTimeShower_1 = __importDefault(require("@/utils/CurrentTimeShower/CurrentTimeShower"));
const image_1 = __importDefault(require("next/image"));
exports.dynamic = "force-dynamic";
async function Page({ params }) {
    const { slug } = await params; // <-- no await here
    const res = await fetch(`https://v2.weeklyinqilab.com/api/v1/category-news/${slug}`, {
        next: { revalidate: 60 },
    });
    const json = await res.json();
    const { category, data } = json;
    const categoryItems = Array.isArray(data) ? data : [];
    return (<div className="container mx-auto">
      <div className="mt-4 flex justify-between border-b mb-4">
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
