"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewsDetails;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const MoreData_1 = __importDefault(require("./MoreData/MoreData"));
const SingleNewsDetails_1 = __importDefault(require("./SingleNewsDetails/SingleNewsDetails"));
function NewsDetails({ singelNewsItems }) {
    // Destructure news_details safely with fallback to empty object
    const { news_details: itemData = {} } = singelNewsItems;
    return (<>
      <div className="container mx-auto">
        <SingleNewsDetails_1.default singelNewsItems={singelNewsItems}/>
        {itemData.category_name ? (<div>
            <div className="pt-5 pb-5">
              <link_1.default href={`/category/${itemData.category_name}`} className="font-semibold">
                {itemData.category_bangla_name} নিয়ে আরও পড়ুন
              </link_1.default>
            </div>

            <div className="border-t-1 mb-5">
              <div className="pt-5">
                <MoreData_1.default itemData={itemData}/>
              </div>
            </div>
          </div>) : (<p className="text-center text-gray-500 mt-10">
            আর কোনো সম্পর্কিত তথ্য পাওয়া যায়নি।
          </p>)}
      </div>
    </>);
}
