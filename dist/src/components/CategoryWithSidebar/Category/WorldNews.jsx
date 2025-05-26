"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WorldNews;
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function WorldNews({ wordNewsItems }) {
    const wordNewsData = wordNewsItems.slice(0, 4);
    return (<>
      <div>
        <SectionTitle_1.default title="বিশ্ব সংবাদ"/>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {wordNewsData.map((item, index) => (<div key={index}>
            <link_1.default href={`/details/${item.category_name}/${item.id}`}>
              <div className="card rounded-none shadow-sm group">
                <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage_1.default className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.name} heightClass="h-full" widthClass="w-full" priority/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title h-15">{item.news_title}</h2>
                  <small className="text-site-secondary opacity-70 block mt-1">
                    {/* {items.news_time} */}
                    <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
                  </small>
                </div>
              </div>
            </link_1.default>
          </div>))}
      </div>
    </>);
}
