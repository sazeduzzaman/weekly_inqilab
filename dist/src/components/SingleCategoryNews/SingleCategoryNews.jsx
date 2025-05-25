"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CategoryFeature_1 = __importDefault(require("./CategoryFeature"));
const CategoryNonFeature_1 = __importDefault(require("./CategoryNonFeature"));
const SingleCategoryNews = ({ singleCategoryData, }) => {
    //   Filter is the data Featured Or Not
    const isFeatured = singleCategoryData.filter(
    // if date id 1 feature then add in isFeature
    (item) => item.is_featured === 1);
    const nonFeatured = singleCategoryData.filter(
    // if date id 2 non feature then add in nonFeature
    (item) => item.is_featured === 2);
    return (<div>
      <div>
        <CategoryFeature_1.default isFeatured={isFeatured}/>
      </div>
      <div className="divider divider-primary">Non Feature</div>
      <div>
        <CategoryNonFeature_1.default nonFeatured={nonFeatured}/>
      </div>
    </div>);
};
exports.default = SingleCategoryNews;
