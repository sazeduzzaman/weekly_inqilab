"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JatiyoNews;
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function JatiyoNews({ rajnitiItems }) {
    //   Filter is the data Featured Or Not
    const isFeatured = rajnitiItems.filter(
    // if date id 1 feature then add in isFeature
    (item) => item.is_featured === 1);
    const featureData = isFeatured.slice(0, 1);
    const isnonFeatured = rajnitiItems.filter(
    // if date id 2 non feature then add in nonFeature
    (item) => item.is_featured === 2);
    const nonFeatureData = isnonFeatured.slice(0, 3);
    return (<div>
      <div>
        <SectionTitle_1.default title="রাজনীতি"/>
      </div>
      {featureData.map((item, index) => (<div className="card rounded-none shadow-sm" key={index}>
          <figure className="relative h-[440px] w-full">
            <OptimizedNewsImage_1.default imageName={item.title_img || "no img"} altText={`Thumbnail for ${item.title_img || "no img"}`} heightClass="h-full" widthClass="w-full" priority className="p-0 rounded-md"/>
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title">{item.news_title}</h2>
            <small className="text-site-secondary opacity-70 block mt-1">
              {/* {items.news_time} */}
              <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
            </small>
          </div>
        </div>))}
      {/* adasdasd */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {nonFeatureData.map((item, index) => (<div className="" key={index}>
            <link_1.default href={`/details/${item.category_name}/${item.id}`}>
              <div className="card rounded-none shadow-sm group">
                <figure className="relative h-[215px] overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage_1.default className="w-full h-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.title_img || "no img"} altText={item.name} heightClass="h-full" widthClass="w-full" priority/>
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
    </div>);
}
