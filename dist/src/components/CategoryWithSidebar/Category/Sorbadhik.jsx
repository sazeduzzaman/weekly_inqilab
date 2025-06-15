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
exports.default = Sorbadhik;
const react_1 = __importStar(require("react"));
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
function Sorbadhik({ viewedItems }) {
    const [randomLatestItems, setRandomLatestItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        // Step 1: Sort by published_at DESC
        const sorted = [...viewedItems].sort((a, b) => {
            const dateA = new Date(a.published_at ?? "").getTime();
            const dateB = new Date(b.published_at ?? "").getTime();
            return dateB - dateA;
        });
        // Step 2: Take top 10 latest items, then shuffle and take 6
        const latestSubset = sorted.slice(0, 10); // optional buffer for better randomness
        const shuffled = [...latestSubset].sort(() => 0.5 - Math.random());
        setRandomLatestItems(shuffled.slice(0, 5));
    }, [viewedItems]);
    return (<div>
      <SectionTitle_1.default title="সর্বাধিক পঠিত"/>
      {randomLatestItems.map((item, index) => (<link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`} key={index}>
          <div className="card group rounded-none card-side shadow-sm items-center mb-3">
            <figure className="w-[140px] h-[160px] overflow-hidden rounded-lg flex-shrink-0">
              <OptimizedNewsImage_1.default className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.bangla_title} priority/>
            </figure>
            <div className="card-body px-2">
              <h2 className="card-title h-15">
                {(item.bangla_title ?? "").split(" ").slice(0, 6).join(" ")}
                {(item.bangla_title ?? "").split(" ").length > 6 ? "..." : ""}
              </h2>
              <span>{item.category_bangla_name}</span>
              <span className="text-site-secondary opacity-70 block">
                <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
              </span>
            </div>
          </div>
        </link_1.default>))}
    </div>);
}
