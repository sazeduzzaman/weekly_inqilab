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
async function Page({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const categoryId = resolvedSearchParams.id;
    console.log(resolvedSearchParams, "categoryName");
    const res = await fetch(`https://backoffice.ajkal.us/category-news/${categoryId}`, {
        next: { revalidate: 60 },
    });
    const json = await res.json();
    const categoryItems = Array.isArray(json)
        ? json
        : json.data || json.news || [];
    const categoryItemsName = categoryItems[1].category_name_bangla;
    return (<div className="container mx-auto">
      <div className="mt-4 flex justify-between border-b mb-4 ">
        <p className="font-semibold text-1xl">{categoryItemsName} নিউজ</p>
        <CurrentTimeShower_1.default />
      </div>
      <CategoryNews_1.default categoryId={categoryId}/>
    </div>);
}
