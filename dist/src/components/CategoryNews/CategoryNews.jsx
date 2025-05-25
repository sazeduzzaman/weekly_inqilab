"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryNews;
const FeaturedCategoryNews_1 = __importDefault(require("./FeaturedCategoryNews"));
const NonFeaturedCategoryNews_1 = __importDefault(require("./NonFeaturedCategoryNews"));
async function CategoryNews({ categoryId }) {
    const res = await fetch(`https://backoffice.ajkal.us/category-news/${categoryId}`, {
        next: { revalidate: 60 },
    });
    const json = await res.json();
    const categoryItems = Array.isArray(json)
        ? json
        : json.data || json.news || [];
    const featureData = categoryItems.filter((item) => item.is_featured === 1);
    const nonFeatureData = categoryItems.filter((item) => item.is_featured === 2);
    return (<div className="space-y-8">
      <div>
        <FeaturedCategoryNews_1.default featureData={featureData}/>
        <NonFeaturedCategoryNews_1.default nonFeatureData={nonFeatureData}/>
      </div>
    </div>);
}
