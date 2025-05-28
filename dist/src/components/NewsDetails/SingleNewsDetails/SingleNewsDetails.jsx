"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SingleNewsDetails;
const react_1 = __importDefault(require("react"));
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const bs_1 = require("react-icons/bs");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const FontSizeAdjustment_1 = __importDefault(require("@/utils/FontSizeAdjustment]/FontSizeAdjustment"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const ri_1 = require("react-icons/ri");
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
const MainSidebar_1 = __importDefault(require("@/components/Sidebar/MainSidebar/MainSidebar"));
const ClientReview_1 = __importDefault(require("../ClientReview/ClientReview"));
const ShareNews_1 = __importDefault(require("@/components/ShareNews/ShareNews"));
const Meta_1 = __importDefault(require("@/components/MetaData/Meta"));
function SingleNewsDetails({ singelNewsItems }) {
    // Destructure news_details safely with fallback to empty object
    const { news_details: itemData = {} } = singelNewsItems;
    return (<>
    <Meta_1.default title="ইনকিলাব | বিস্তারিত" description="সর্বশেষ সংবাদ, বিশ্লেষণ ও রিপোর্ট পড়ুন ইনকিলাবে।" image="https://weekly-inqilab.vercel.app/static/default-thumbnail.jpg" url="https://weekly-inqilab.vercel.app" type="website"/>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="card rounded-none shadow-sm mt-5">
            <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
              গুরুত্বপূর্ণ
            </div>
            <div className="card-body">
              <div>
                <link_1.default href="/ad-cost" className="flex items-center">
                  <ri_1.RiAdvertisementLine className="me-3" size={30}/> প্রিন্ট
                  সংস্করণ
                </link_1.default>
              </div>
              <div>
                <link_1.default href="/epaper" className="flex items-center">
                  <hi_1.HiOutlineLightBulb className="me-3" size={30}/> অনলাইন
                  সংস্করণ
                </link_1.default>
              </div>
              <div>
                <link_1.default href="/contact" className="flex items-center">
                  <md_1.MdConnectWithoutContact className="me-3" size={30}/>{" "}
                  যোগাযোগের ঠিকানা
                </link_1.default>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div>
            <link_1.default href={`/category/${itemData.category_name}`}>
              <h1 className="card-title inline-block border-b-2 border-current">
                {itemData.category_bangla_name ??
            itemData.subCategory_bangla_name ??
            "Inqilab"}
              </h1>
            </link_1.default>

            <div className="my-10">
              <h2 className="mb-5 font-semibold text-gray-800 leading-12" style={{ fontSize: "40px" }}>
                {itemData.bangla_title ?? "No Title"}
              </h2>

              <div className="flex justify-between items-center border-b-1 pb-2">
                <div className="flex items-start space-x-4">
                  <div>
                    <image_1.default className="border-b-1 bg-red-600 rounded-full p-3" src="/favicon.ico" alt="Next.js logo" width={50} height={50} priority/>
                  </div>
                  <div>
                    <p>{itemData.author ?? "ইনকিলাব"}</p>
                    <p className="text-sm text-gray-500 flex">
                      <span className="pe-1">প্রকাশ:</span>
                      <NewsTimeShower_1.default newsTime={itemData.published_at}/>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-sm flex items-center text-gray-500">
                    <div className="flex items-center">
                      <span>নিউজটি শেয়ার করুন:</span>
                      <bs_1.BsShare color="red" className="ml-2"/>
                    </div>
                    <ShareNews_1.default title={itemData.bangla_title ?? "No Title"} url={`https://weekly-inqilab.vercel.app/details/${itemData.category_name ?? "uncategory"}/${itemData.slug}`}/>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-1xl mb-5 font-semibold text-gray-800 leading-6 pt-3">
                  {itemData.bangla_summary}
                </h2>
              </div>

              <div className="relative h-[600px] w-full mt-5">
                <OptimizedNewsImage_1.default imageName={itemData.thumbnail || "no-image.jpg"} altText={`Thumbnail for ${itemData.bangla_title}`} heightClass="h-full" widthClass="w-full" priority className="object-cover"/>
                <div className="flex justify-between items-center">
                  <p className="pt-3 text-center text-site-secondary">
                    ফাইল ছবি | ইনকিলাব
                  </p>
                  <div>
                    <FontSizeAdjustment_1.default />
                  </div>
                </div>
              </div>

              <div className="pt-15">
                <div className="news-details-para pt-3">
                  <div dangerouslySetInnerHTML={{
            __html: itemData.bangla_content || "",
        }}/>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <ClientReview_1.default />
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="card-title inline-block border-b-2 border-current">
            বিজ্ঞাপন কর্নার
          </h1>
          <MainSidebar_1.default />
        </div>
      </div>
    </>);
}
