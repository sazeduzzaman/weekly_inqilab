"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryNews;
const FeaturedCategoryNews_1 = __importDefault(require("./FeaturedCategoryNews"));
const NonFeaturedCategoryNews_1 = __importDefault(require("./NonFeaturedCategoryNews"));
function CategoryNews({ categoryItems }) {
    const isFeatured = categoryItems.filter(
    // if date id 1 feature then add in isFeature
    (item) => item.is_featured === 1);
    const featureData = isFeatured;
    const isnonFeatured = categoryItems.filter((item) => item.is_featured === 0);
    const nonFeatureData = isnonFeatured;
    return (<div className="space-y-8">
      <div className="px-10 md:px-0">
        <FeaturedCategoryNews_1.default featureData={featureData}/>
        <NonFeaturedCategoryNews_1.default nonFeatureData={nonFeatureData}/>
      </div>
    </div>);
}
