"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SaradeshNews;
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function SaradeshNews({ viewedItems }) {
    const viewedItemsFilterd = viewedItems.slice(0, 6);
    return (<div>
      {viewedItemsFilterd.map((item, index) => (<link_1.default href={`/details/${item.category_name}/${item.id}`} key={index}>
          <div className="card rounded-none card-side shadow-sm items-center mb-3">
            <figure className="relative w-[140px] h-[140px] flex-none">
              <OptimizedNewsImage_1.default imageName={item.title_img || "no img"} altText={`Thumbnail for ${item.title_img || "no img"}`} heightClass="h-full" widthClass="w-full" priority className="p-0 rounded-none"/>
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title">{item.news_title}</h2>
              <small className="text-site-secondary opacity-70 block mt-1">
                {/* {items.news_time} */}
                <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
              </small>
            </div>
          </div>
        </link_1.default>))}
    </div>);
}
