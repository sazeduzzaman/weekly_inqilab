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
      <div className="mt-4 flex justify-between border-b mb-4 ">
        <p className="font-semibold text-1xl ft-size">
          {category.bangla_name} নিউজ
        </p>
        <CurrentTimeShower_1.default />
      </div>
      <CategoryNews_1.default categoryItems={categoryItems}/>
    </div>);
}
