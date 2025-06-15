"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewsDetailsContent;
const react_1 = __importStar(require("react"));
const ShareNews_1 = __importDefault(require("@/components/ShareNews/ShareNews"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const bs_1 = require("react-icons/bs");
const ClientReview_1 = __importDefault(require("../ClientReview/ClientReview"));
const FontSizeAdjustment_1 = __importDefault(require("@/utils/FontSizeAdjustment]/FontSizeAdjustment"));
function NewsDetailsContent({ itemData }) {
    const [fontSize, setFontSize] = (0, react_1.useState)(16); // Default font size
    const handleIncrease = () => setFontSize((prev) => Math.min(prev + 5, 48));
    const handleDecrease = () => setFontSize((prev) => Math.max(prev - 5, 10));
    const handleReset = () => setFontSize(16);
    if (!itemData) {
        return <div>No news data available.</div>;
    }
    return (<div className="col-span-6" style={{ fontSize: `${fontSize}px` }}>
      <div>
        <link_1.default href={`/category/${itemData.category_name ?? "uncategory"}`}>
          <h1 className="card-title inline-block border-b-2 border-current">
            {itemData.category_bangla_name ??
            itemData.subCategory_bangla_name ??
            "Inqilab"}
          </h1>
        </link_1.default>

        <div className="my-10">
          <h2 className="mb-8 font-semibold text-gray-800 leading-12" style={{ fontSize: "38px" }}>
            {itemData.bangla_title ?? "No Title"}
          </h2>

          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <div className="flex items-start space-x-4">
              <div>
                <image_1.default className="bg-red-600 rounded-full p-3" src="/favicon.ico" alt="Next.js logo" width={50} height={50} priority/>
              </div>
              <div>
                <p>{itemData.author ?? "ইনকিলাব"}</p>
                <p className="text-sm text-gray-500 flex">
                  <span className="pe-1">প্রকাশ:</span>
                  <NewsTimeShower_1.default newsTime={itemData.published_at}/>
                </p>
              </div>
            </div>

            <div>
              <div className="text-sm flex items-center text-gray-500 space-x-2">
                <span>নিউজটি শেয়ার করুন:</span>
                <bs_1.BsShare color="red"/>
                <ShareNews_1.default title={itemData.bangla_title ?? "No Title"} url={`https://weekly-inqilab.vercel.app/details/${itemData.category_name ?? "uncategory"}/${itemData.slug}`}/>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-5 text-gray-800 leading-8 pt-3">
              {itemData.bangla_summary ?? ""}
            </h2>
          </div>

          <div className="relative h-[600px] w-full mt-5">
            <OptimizedNewsImage_1.default imageName={itemData.thumbnail || "no-image.jpg"} altText={`Thumbnail for ${itemData.bangla_title ?? "news"}`} heightClass="h-full" widthClass="w-full" priority className="object-cover"/>
            <div className="flex justify-between items-center">
              <p className="pt-3 text-center text-site-secondary">
                ফাইল ছবি | ইনকিলাব
              </p>
              <div>
                <FontSizeAdjustment_1.default fontSize={fontSize} onIncrease={handleIncrease} onDecrease={handleDecrease} onReset={handleReset}/>
              </div>
            </div>
          </div>

          <div className="pt-15">
            <div className="news-details-para pt-3">
              <div dangerouslySetInnerHTML={{
            __html: itemData.bangla_content ?? "",
        }}/>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <ClientReview_1.default slug={itemData.slug} title={itemData.bangla_title}/>
      </div>
    </div>);
}
