"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewsDetails;
const react_1 = __importDefault(require("react"));
function NewsDetails({ singelNewsItems }) {
    console.log(singelNewsItems, "singelNewsItems");
    const item = singelNewsItems;
    return (<div className="container mx-auto space-y-6 py-4">
      <div key={item.id} className="border rounded-xl p-4 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">{item.news_title}</h2>
        <p className="text-sm text-gray-500">
          প্রকাশের সময়: {new Date(item.news_time).toLocaleString("bn-BD")}
        </p>
        <p className="text-sm text-gray-600">
          বিভাগ: {item.category_name_bangla} ({item.category_name})
        </p>
        <p className="mt-2 text-sm text-gray-700">Feature Status: {item.is_featured}</p>
      </div>
    </div>);
}
