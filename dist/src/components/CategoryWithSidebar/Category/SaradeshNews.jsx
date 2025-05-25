"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SaradeshNews;
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function SaradeshNews({ viewedItems }) {
    const viewedItemsFilterd = viewedItems.slice(0, 6);
    return (<div>
      <SectionTitle_1.default title="সর্বাধিক পঠিত"/>
      {viewedItemsFilterd.map((item, index) => (<link_1.default href={`/details/${item.category_name}/${item.id}`} key={index}>
          <div className="card group rounded-none card-side shadow-sm items-center mb-3">
            <figure className="w-[140px] h-[140px] overflow-hidden rounded-lg flex-shrink-0">
              <OptimizedNewsImage_1.default className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.title_img || "no img"} altText={item.name} priority/>
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title">{item.news_title}</h2>
              <small className="text-site-secondary opacity-70 block mt-1">
                <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
              </small>
            </div>
          </div>
        </link_1.default>))}
    </div>);
}
