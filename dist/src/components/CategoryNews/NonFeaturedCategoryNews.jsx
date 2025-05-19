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
        <image_1.default src="/images/advertisement.png" alt="Ad banner" fill className="object-cover rounded-md"/>
      </div>
      <div className="space-y-4">
        <div className="container w-[70%] mx-auto mt-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              {nonFeatureData.length === 0 ? (<p>No featured news available.</p>) : (<div className="grid gap-4">
                  {nonFeatureData.map((item) => (<link_1.default href={`/details/${item.category_name}/${item.id}`} key={item.id} className="group">
                      <div className="border-b pb-4" key={item.id}>
                        <div className="card card-side bg-white flex items-center rounded-none">
                          <figure className="relative flex-shrink-0 h-[250px] w-[400px] overflow-hidden rounded-md">
                            <OptimizedNewsImage_1.default imageName={item.title_img || "No image"} altText={`Thumbnail for ${item.news_title}`} heightClass="h-full" widthClass="w-full" priority className="rounded-t-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                          </figure>
                          <div className="card-body">
                            <h2 className="text-2xl">{item.news_title}</h2>
                            <div className="news-details-p" dangerouslySetInnerHTML={{
                    __html: item.news_short_brief,
                }}/>
                            <div>
                              <small className="text-white block mt-4">
                                <NewsTimeShower_1.default newsTime={item.news_time || new Date().toISOString()}/>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </link_1.default>))}
                </div>)}
            </div>
            {/* <div className="col-span-4">Sidebar</div> */}
          </div>
        </div>
      </div>
    </>);
}
