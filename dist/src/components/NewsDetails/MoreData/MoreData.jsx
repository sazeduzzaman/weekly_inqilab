"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MoreData;
const react_1 = __importDefault(require("react"));
const MoreSingleData_1 = __importDefault(require("./MoreSingleData"));
async function MoreData({ itemData }) {
    const res = await fetch(`https://admin.weeklyinqilab.com/api/v1/category-news/${itemData.category_name}`, {
        // next: { revalidate: 1},
        next: { revalidate: 1 },
    });
    const json = await res.json();
    const categoryItems = Array.isArray(json)
        ? json
        : json.data || json.news || [];
    return (<>
      {categoryItems.length === 0 ? (<p className="text-center text-gray-500 my-10">
          কোনো সংবাদ পাওয়া যায়নি
        </p>) : (<MoreSingleData_1.default categoryItems={categoryItems} slug={itemData.slug}/>)}
    </>);
}
