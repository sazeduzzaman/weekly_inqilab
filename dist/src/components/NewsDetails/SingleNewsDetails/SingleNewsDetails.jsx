"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SingleNewsDetails;
const react_1 = __importDefault(require("react"));
const MainSidebar_1 = __importDefault(require("@/components/Sidebar/MainSidebar/MainSidebar"));
const RightSide_1 = __importDefault(require("./RightSide"));
const SiteInformation_1 = require("@/lib/api/SiteInformation");
const NewsDetailsContent_1 = __importDefault(require("./NewsDetailsContent"));
async function SingleNewsDetails({ singelNewsItems }) {
    const { news_details: itemData = {} } = singelNewsItems;
    const siteInformationData = await (0, SiteInformation_1.SiteInformation)();
    return (<div className="grid grid-cols-12 gap-6 mb-5">
      {/* Left Sidebar */}
      <div className="col-span-12 md:col-span-3 order-3 md:order-1">
        <RightSide_1.default singelNewsItems={singelNewsItems} slug={itemData.slug}/>
      </div>

      {/* Main Content */}
      <div className="col-span-12 md:col-span-6 order-1 md:order-2">
        <NewsDetailsContent_1.default itemData={itemData}/>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-12 md:col-span-3 order-2 md:order-3">
        <h1 className="card-title inline-block border-b-2 border-current">
          বিজ্ঞাপন কর্নার
        </h1>
        <MainSidebar_1.default siteInformationData={siteInformationData}/>
      </div>
    </div>);
}
