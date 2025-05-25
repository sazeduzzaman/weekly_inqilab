"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MoreData;
const react_1 = __importDefault(require("react"));
const MoreSingleData_1 = __importDefault(require("./MoreSingleData"));
async function MoreData({ singelNewsItems }) {
    const item = singelNewsItems.category_id;
    const res = await fetch(`https://backoffice.ajkal.us/category-news/${item}`, {
        next: { revalidate: 60 },
    });
    const json = await res.json();
    const categoryItems = Array.isArray(json)
        ? json
        : json.data || json.news || [];
    return (<>
      <MoreSingleData_1.default categoryItems={categoryItems}/>
    </>);
}
