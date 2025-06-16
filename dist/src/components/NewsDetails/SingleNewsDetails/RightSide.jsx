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
exports.default = RightSide;
const react_1 = __importStar(require("react"));
const ri_1 = require("react-icons/ri");
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
const lu_1 = require("react-icons/lu");
const link_1 = __importDefault(require("next/link"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
function RightSide({ singelNewsItems, slug }) {
    const relatedData = (0, react_1.useMemo)(() => singelNewsItems.related_news || [], [singelNewsItems.related_news]);
    const [shuffledData, setShuffledData] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        // Filter out current slug, then shuffle
        const filtered = relatedData.filter((item) => item.slug !== slug);
        const shuffled = shuffleArray(filtered);
        setShuffledData(shuffled);
    }, [relatedData, slug]);
    return (<>
      <div className="card rounded-none shadow-sm mt-0 mr-10">
        <div className="card-header bg-black rounded-none text-start ps-5 py-3 text-white">
          গুরুত্বপূর্ণ
        </div>
        <div className="card-body">
          <div className="mb-3">
            <link_1.default href="/ad-cost" className="flex items-center">
              <ri_1.RiAdvertisementLine className="me-3" size={30}/> প্রিন্ট সংস্করণ
            </link_1.default>
          </div>
          <div className="mb-3">
            <link_1.default href="/epaper" className="flex items-center">
              <hi_1.HiOutlineLightBulb className="me-3" size={30}/> অনলাইন সংস্করণ
            </link_1.default>
          </div>
          <div className="mb-3">
            <link_1.default href="/contact" className="flex items-center">
              <md_1.MdConnectWithoutContact className="me-3" size={30}/> যোগাযোগের
              ঠিকানা
            </link_1.default>
          </div>
          <div>
            <link_1.default href="/epaper" className="flex items-center">
              <lu_1.LuPartyPopper className="me-3" size={30}/> ইপেপার পড়ুন
            </link_1.default>
          </div>
        </div>
      </div>

      {/* Related News Section */}
      <div className="card rounded-none shadow-sm mt-5 mr-10">
        <div className="card-header  bg-black rounded-none text-start ps-5 py-3 text-white">
          সম্পর্কিত আরও খবর
        </div>
        <div className="card-body px-1 py-0 pt-4">
          {shuffledData.slice(0, 10).map((item, index) => (<div className="" key={index}>
              <link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}>
                <div className="card p-0 group rounded-none card-side shadow-none items-center">
                  <figure className="w-[100px] h-[100px] overflow-hidden rounded-none flex-shrink-0">
                    <OptimizedNewsImage_1.default className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.bangla_title} priority/>
                  </figure>
                  <div className="card-body p-2 py-0">
                    <h2 className="card-title h-12">
                      {(item.bangla_title ?? "")
                .split(" ")
                .slice(0, 4)
                .join(" ")}
                      {(item.bangla_title ?? "").split(" ").length > 4
                ? "..."
                : ""}
                    </h2>
                    <span className="text-site-secondary opacity-70 block">
                      <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
                    </span>
                  </div>
                </div>
              </link_1.default>
            </div>))}
        </div>
      </div>
    </>);
}
