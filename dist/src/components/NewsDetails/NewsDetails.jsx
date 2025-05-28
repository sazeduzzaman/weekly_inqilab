"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = NewsDetails;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const MoreData_1 = __importDefault(require("./MoreData/MoreData"));
const SingleNewsDetails_1 = __importDefault(require("./SingleNewsDetails/SingleNewsDetails"));
exports.metadata = {
    title: "সংবাদ বিস্তারিত",
    description: "বাংলা সংবাদ বিস্তারিত পড়ুন এবং আপডেট থাকুন।",
    keywords: ["সংবাদ", "বাংলা", "নিউজ", "বাংলাদেশ"],
    openGraph: {
        title: "সংবাদ বিস্তারিত",
        description: "বাংলা সংবাদ বিস্তারিত পড়ুন এবং আপডেট থাকুন।",
        images: [
            {
                url: "/default-thumbnail.jpg",
                alt: "সংবাদ",
            },
        ],
    },
};
function NewsDetails({ singelNewsItems }) {
    // Destructure news_details safely with fallback to empty object
    const { news_details: itemData = {} } = singelNewsItems;
    return (<>
      <div className="container mx-auto">
        <SingleNewsDetails_1.default singelNewsItems={singelNewsItems}/>
        <div>
          <div className="pt-5 pb-5">
            <link_1.default href={`/category/${itemData.category_name}`} className="font-semibold">
              {itemData.category_bangla_name} নিয়ে আরও পড়ুন
            </link_1.default>
          </div>
        </div>
        <div className="border-t-1 mb-5">
          <div className="pt-5">
            <MoreData_1.default itemData={itemData}/>
          </div>
        </div>
      </div>
    </>);
}
