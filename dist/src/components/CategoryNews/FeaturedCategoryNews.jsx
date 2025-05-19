"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeaturedCategoryNews;
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function FeaturedCategoryNews({ featureData }) {
    const featureMain = featureData.slice(0, 1);
    const featureOthers = featureData.slice(1, 5);
    return (<div className="space-y-4">
      {featureMain.length === 0 ? (<p>No featured news available.</p>) : (<div className="grid grid-cols-3 gap-4">
          {/* Main Featured */}
          <div className="col-span-2">
            {featureMain.map((item) => (<link_1.default href={`/details/${item.category_name}/${item.id}`} key={item.id}>
                <div className="card rounded-none shadow-sm" key={item.id}>
                  <figure className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105 ">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10"/>
                    <OptimizedNewsImage_1.default imageName={item.title_img || "No image"} altText={`Thumbnail for ${item.news_title}`} heightClass="h-[507px]" widthClass="w-full" priority className="rounded-t-md"/>
                  </figure>
                  <div className="card-body bg-black rounded-b-md">
                    <h2 className="card-title text-white">{item.news_title}</h2>
                    <small className="text-white block mt-4">
                      {/* {items.news_time} */}
                      <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
                    </small>
                  </div>
                </div>
              </link_1.default>))}
          </div>

          {/* Sidebar - Other Featured */}
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-5">
              {featureOthers.map((item) => (<link_1.default href={`/details/${item.category_name}/${item.id}`} key={item.id}>
                  <div className="flex gap-4 items-center justify-center shadow-sm">
                    <div className="w-1/3">
                      <OptimizedNewsImage_1.default imageName={item.title_img || "No image"} altText={`Thumbnail for ${item.news_title}`} heightClass="h-[140px]" widthClass="w-full" priority={false} className="rounded-md"/>
                    </div>
                    <div className="w-2/3 text-sm font-medium">
                      {item.news_title}
                      <small className="text-gray-500 opacity-95 block mt-4">
                        {/* {items.news_time} */}
                        <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
                      </small>
                    </div>
                  </div>
                </link_1.default>))}
            </div>
          </div>
        </div>)}
    </div>);
}
