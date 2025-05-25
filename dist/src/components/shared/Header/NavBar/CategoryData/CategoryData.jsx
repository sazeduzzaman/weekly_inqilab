"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryData;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function CategoryData({ categoryItems }) {
    const categoryDataItems = categoryItems.slice(0, 13);
    return (<div className="container mx-auto">
      <ul className="flex items-center justify-center py-2 overflow-x-auto whitespace-nowrap">
        {categoryDataItems.map((item, index) => (<li key={index} className="flex items-center px-8 pt-2">
            <link_1.default href={`/category/${item.name}?id=${item.id}`} className="dark:text-white cta-menus text-white">
             {item.bangla_name}
            </link_1.default>
          </li>))}
      </ul>
    </div>);
}
