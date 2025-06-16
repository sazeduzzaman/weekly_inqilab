"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryNews;
const FeaturedCategoryNews_1 = __importDefault(require("./FeaturedCategoryNews"));
const NonFeaturedCategoryNews_1 = __importDefault(require("./NonFeaturedCategoryNews"));
function CategoryNews({ categoryItems }) {
    // Normalize the data to ensure is_featured is a number
    const normalizedItems = categoryItems.map((item) => ({
        ...item,
        is_featured: Number(item.is_featured),
    }));
    // Filter after normalization
    const isFeatured = normalizedItems.filter((item) => item.is_featured === 1);
    const isNonFeatured = normalizedItems.filter((item) => item.is_featured === 0);
    return (<div className="space-y-8">
      <div className="px-10 md:px-0">
        <FeaturedCategoryNews_1.default featureData={isFeatured}/>
        <NonFeaturedCategoryNews_1.default nonFeatureData={isNonFeatured}/>
      </div>
    </div>);
}
