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
      {featureMain.length === 0 ? (<p>No featured news available.</p>) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Main Featured */}
          <div className="md:col-span-2">
            {featureMain.map((item) => (<link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`} key={item.id}>
                <div className="card rounded-none shadow-sm group">
                  <figure className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[495px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10"/>
                    <OptimizedNewsImage_1.default imageName={item.thumbnail || "No image"} altText={`Thumbnail for ${item.bangla_title}`} heightClass="h-full" widthClass="w-full" priority className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                  </figure>
                  <div className="card-body bg-black text-white rounded-b-md">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                      {item.bangla_title}
                    </h1>
                    <small className="block mt-4 text-red-700">
                      <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
                    </small>
                    <span>{item.category_bangla_name}</span>
                  </div>
                </div>
              </link_1.default>))}
          </div>

          {/* Sidebar - Other Featured */}
          <div className="md:col-span-1 space-y-3">
            {featureOthers.map((item) => (<link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`} key={item.id} className="group block">
                <div className="flex gap-3 items-center shadow-sm">
                  <div className="w-1/3 min-w-[90px] h-[90px] sm:h-[110px] md:h-[150px] overflow-hidden">
                    <OptimizedNewsImage_1.default imageName={item.thumbnail || "No image"} altText={`Thumbnail for ${item.bangla_title}`} heightClass="h-full" widthClass="w-full" className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                  </div>
                  <div className="w-2/3 text-sm font-medium">
                    <h1 className="font-semibold mb-1 h-15 line-clamp-3">
                      {item.bangla_title}
                    </h1>
                    <small className="text-gray-500 block mt-2">
                      <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
                    </small>
                  </div>
                </div>
              </link_1.default>))}
          </div>
        </div>)}
    </div>);
}
