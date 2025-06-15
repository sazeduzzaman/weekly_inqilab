"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NonFeaturedCategoryNews;
const Advertisment_1 = require("@/lib/api/Advertisement/Advertisment");
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Advertisement_1 = __importDefault(require("../Advertisement/Advertisement"));
async function NonFeaturedCategoryNews({ nonFeatureData, }) {
    const advertisementSidebarRandom = await (0, Advertisment_1.Advertisment)();
    const AdvertisementSidebarRandom = advertisementSidebarRandom;
    return (<>
      {/* Top Advertisement */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[768px] aspect-[768/71] mt-10 mx-auto">
          {AdvertisementSidebarRandom?.some((ad) => ad.position === "category_featured") ? (<Advertisement_1.default advertisements={AdvertisementSidebarRandom} position="category_featured" availability="available" marginB={10}/>) : (<image_1.default src="/images/ads-768x71.webp" alt="Inqilab Logo" width={1000} height={400} className="w-full h-auto object-contain"/>)}
        </div>
      </div>

      {/* News Items */}
      <div className="space-y-8 px-4 md:px-10 max-w-7xl mx-auto my-10">
        {nonFeatureData.length === 0 ? (<p>No featured news available.</p>) : (<div className="space-y-6">
            {nonFeatureData.map((item) => (<link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`} key={item.id} className="group block">
                <div className="border-b pb-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white rounded-md shadow-sm overflow-hidden">
                    {/* Image */}
                    <figure className="w-full md:w-[400px] h-[250px] flex-shrink-0 relative overflow-hidden">
                      <OptimizedNewsImage_1.default imageName={item.thumbnail || "No image"} altText={`Thumbnail for ${item.bangla_title}`} heightClass="h-full" widthClass="w-full" priority className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                    </figure>

                    {/* Content */}
                    <div className="flex-1 px-2">
                      <h2 className="text-lg md:text-xl font-semibold mb-2">
                        {item.bangla_title}
                      </h2>
                      <div className="text-sm text-gray-700 mb-2" dangerouslySetInnerHTML={{
                    __html: item.bangla_summary,
                }}/>
                      <div className="flex items-start gap-3 mt-4">
                        <image_1.default src="/favicon.ico" alt="Author" width={30} height={30} className="rounded-sm bg-red-600 p-1"/>
                        <div>
                          <p className="text-sm font-medium">
                            {item.author ?? "ইনকিলাব"}
                          </p>
                          <small className="text-black block">
                            <NewsTimeShower_1.default newsTime={item.published_at || new Date().toISOString()}/>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </link_1.default>))}
          </div>)}
      </div>

      {/* Bottom Advertisement */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-[768px] aspect-[768/71] mb-10 mx-auto">
          {AdvertisementSidebarRandom?.some((ad) => ad.position === "category_middle") ? (<Advertisement_1.default advertisements={AdvertisementSidebarRandom} position="category_middle" availability="available" marginB={10}/>) : (<image_1.default src="/images/ads-768x71.webp" alt="Inqilab Logo" width={1000} height={400} className="w-full h-auto object-contain"/>)}
        </div>
      </div>
    </>);
}
