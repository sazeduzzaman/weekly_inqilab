"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewsDetails;
const OptimizedNewsImage_1 = __importDefault(require("@/utils/OptimizedNewsImage/OptimizedNewsImage"));
const react_1 = __importDefault(require("react"));
const ClientReview_1 = __importDefault(require("./ClientReview/ClientReview"));
const MainSidebar_1 = __importDefault(require("../Sidebar/MainSidebar/MainSidebar"));
const bs_1 = require("react-icons/bs");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const FontSizeAdjustment_1 = __importDefault(require("@/utils/FontSizeAdjustment]/FontSizeAdjustment"));
const NewsTimeShower_1 = __importDefault(require("@/utils/NewsTimeShower/NewsTimeShower"));
const ri_1 = require("react-icons/ri");
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
function NewsDetails({ singelNewsItems }) {
    const itemData = singelNewsItems.news_details;
    return (<div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1"></div>
        <div className="col-span-2">
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
              <h2 className="text-5xl mb-5 font-semibold text-gray-800 leading-15">
                {itemData.bangla_title}
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

                <p className="text-sm flex items-center text-gray-500">
                  নিউজটি দেখেছেন:
                  <bs_1.BsPerson color="red" className="ml-2"/>
                  {itemData.view_count}
                </p>
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
                {/* <div className="text-1xl font-semibold">
          {itemData.bangla_summary}
        </div> */}
                <div className="news-details-para pt-3">
                  <div dangerouslySetInnerHTML={{
            __html: itemData.bangla_content,
        }}/>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <ClientReview_1.default />
          </div>

          <div className="border-t-1 mb-5">
            <div className="pt-5 pb-5">
              <p className="font-semibold">
                {itemData.category_bangla_name} নিয়ে আরও পড়ুন
              </p>
            </div>
            {/* <MoreData singelNewsItems={singelNewsItems} /> */}
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="card-title inline-block border-b-2 border-current">
            বিজ্ঞাপন কর্নার
          </h1>
          <MainSidebar_1.default />
        </div>
      </div>
    </div>);
}
