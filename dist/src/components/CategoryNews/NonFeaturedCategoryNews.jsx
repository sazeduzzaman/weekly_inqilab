"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NonFeaturedCategoryNews;
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function NonFeaturedCategoryNews({ nonFeatureData }) {
    return (<>
      {/* <div className="divider divider-neutral">Non Featured</div> */}
      <div className="relative w-full aspect-[768/71] mt-20">
        <image_1.default src="/images/ads-768x71.webp" alt="Ad banner" fill className="object-cover rounded-md"/>
      </div>
      <div className="space-y-4">
        <div className="container w-[70%] mx-auto mt-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {nonFeatureData.length === 0 ? (<p>No featured news available.</p>) : (<div className="grid gap-4">
                  {nonFeatureData.map((item) => (<link_1.default href={`/details/${item.category_name ?? "uncategory"}/${item.slug}`} key={item.id} className="group">
                      <div className="border-b pb-4" key={item.id}>
                        <div className="card card-side bg-white flex items-center rounded-none">
                          <figure className="relative flex-shrink-0 h-[250px] w-[400px] overflow-hidden rounded-md">
                            <OptimizedNewsImage_1.default imageName={item.thumbnail || "No image"} altText={`Thumbnail for ${item.bangla_title}`} heightClass="h-full" widthClass="w-full" priority className="rounded-t-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                          </figure>
                          <div className="card-body">
                            <h2 className="ft-size">{item.bangla_title}</h2>
                            <div className="news-details-p" dangerouslySetInnerHTML={{
                    __html: item.bangla_summary,
                }}/>
                            <div className="flex items-start space-x-4 mt-4">
                              <div>
                                <image_1.default className="border-b-1 bg-red-600 rounded-sm p-1" src="/favicon.ico" alt="Next.js logo" width={30} height={30} priority/>
                              </div>
                              <div>
                                <p>{item.author}</p>
                                <div>
                                  <small className="text-white block">
                                    <NewsTimeShower_1.default newsTime={item.published_at ||
                    new Date().toISOString()}/>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </link_1.default>))}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </>);
}
