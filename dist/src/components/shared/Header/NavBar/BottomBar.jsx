"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BottomBar;
// export default BottomBar;
const react_1 = __importDefault(require("react"));
const CategoryData_1 = __importDefault(require("./CategoryData/CategoryData"));
const MarqueSlider_1 = __importDefault(require("../MarqueSlide/MarqueSlider"));
const CategoryDataSet_1 = require("@/lib/api/CategoryDataSet");
async function BottomBar() {
    const categoryItems = await (0, CategoryDataSet_1.CategoryDataSet)();
    return (<div className="bg-black">
      <CategoryData_1.default categoryItems={categoryItems}/>
      <MarqueSlider_1.default />
    </div>);
}
