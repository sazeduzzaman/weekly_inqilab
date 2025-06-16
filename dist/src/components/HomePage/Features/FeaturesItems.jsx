"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeaturesItems;
const Advertisement_1 = __importDefault(require("@/components/Advertisement/Advertisement"));
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const Advertisment_1 = require("@/lib/api/Advertisement/Advertisment");
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
async function FeaturesItems({ latestItems, }) {
    const latestItemsData = latestItems.slice(0, 6);
    const advertisementSidebarRandom = await (0, Advertisment_1.Advertisment)();
    const AdvertisementSidebarRandom = advertisementSidebarRandom;
    return (<div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <SectionTitle_1.default title="সর্বশেষ"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {latestItemsData.map((item) => (<div key={item.id} className="w-full">
            <link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`}>
              <div className="card rounded-none shadow-sm group flex flex-col h-full cursor-pointer">
                <figure className="relative w-full h-48 sm:h-56 md:h-48 lg:h-40 xl:h-44 overflow-hidden transition-transform duration-500 ease-in">
                  <OptimizedNewsImage_1.default className="w-full h-full rounded-none object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" imageName={item.thumbnail || "no img"} altText={item.bangla_title} heightClass="h-full" widthClass="w-full" priority/>
                </figure>
                <div className="card-body px-2 py-3 flex flex-col justify-between flex-grow">
                  <h2 className="card-title text-sm sm:text-base md:text-sm lg:text-base xl:text-sm font-semibold leading-tight h-12 line-clamp-3">
                    {(item.bangla_title ?? "").split(" ").slice(0, 7).join(" ")}
                    {(item.bangla_title ?? "").split(" ").length > 7
                ? "..."
                : ""}
                  </h2>
                  <div className="flex justify-between items-center mt-2 text-xs sm:text-sm font-normal opacity-70">
                    <span>{item.category_bangla_name}</span>
                    <span className="text-red-700 block">
                      <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
                    </span>
                  </div>
                </div>
              </div>
            </link_1.default>
          </div>))}
      </div>
      <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 mt-6 rounded-none overflow-hidden flex items-center justify-center">
        <Advertisement_1.default advertisements={AdvertisementSidebarRandom} position="home_middle" availability="available" marginB={2}/>
      </div>
    </div>);
}
