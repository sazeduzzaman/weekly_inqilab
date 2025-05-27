"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeaturesItems;
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function FeaturesItems({ latestItems }) {
    const latestItemsData = latestItems.slice(0, 6);
    console.log(latestItems[0], "latestItems[0].category_id");
    return (<div className="container mx-auto mt-5 mb-6">
      <div className="flex justify-between items-center">
        <SectionTitle_1.default title="বৈশিষ্ট্য"/>
      </div>
      <div className="grid grid-cols-6 gap-3">
        {latestItemsData.map((item) => (<div key={item.id}>
            <link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}>
              <div className="card rounded-none shadow-sm group">
                <figure className="relative h-[200px] overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage_1.default className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.bangla_title} heightClass="h-full" widthClass="w-full" priority/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title h-15">{item.bangla_title}</h2>
                  <small className="text-site-secondary opacity-70 block mt-1">
                    {/* {items.news_time} */}
                    <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
                  </small>
                </div>
              </div>
            </link_1.default>
          </div>))}
      </div>
      <div className="relative w-full h-full">
        <image_1.default src="/images/advertisement.gif" alt="Ad banner" fill className="object-cover rounded-md"/>
      </div>
    </div>);
}
