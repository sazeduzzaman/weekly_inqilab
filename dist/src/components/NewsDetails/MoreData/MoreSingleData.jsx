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
exports.default = MoreSingleData;
const react_1 = __importStar(require("react"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
// ✅ Fisher-Yates Shuffle
function getRandomItems(array, count) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}
function MoreSingleData({ categoryItems, slug, count = 5, // default to 4 items
 }) {
    const [randomItems, setRandomItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const filtered = categoryItems.filter((item) => item.slug !== slug);
        const selected = getRandomItems(filtered, count);
        setRandomItems(selected);
    }, [categoryItems, slug, count]);
    return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-4">
      {randomItems.map((item) => (<div key={item.id}>
          <link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}>
            <div className="card rounded-none shadow-sm group">
              <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                <OptimizedNewsImage_1.default className="w-full h-full rounded-none object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.bangla_title} heightClass="h-full" widthClass="w-full" priority/>
              </figure>
              <div className="card-body px-2">
                <h2 className="card-title h-12">
                  {(item.bangla_title ?? "").split(" ").slice(0, 6).join(" ")}
                  {(item.bangla_title ?? "").split(" ").length > 6 ? "..." : ""}
                </h2>
                <span className="text-site-secondary opacity-70 block mt-1">
                  <NewsTimeShower_1.default newsTime={item.published_at}/>
                </span>
              </div>
            </div>
          </link_1.default>
        </div>))}
    </div>);
}
