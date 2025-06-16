"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EpaperAdSidebar;
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const ri_1 = require("react-icons/ri");
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
const Advertisement_1 = __importDefault(require("@/components/Advertisement/Advertisement"));
const Advertisment_1 = require("@/lib/api/Advertisement/Advertisment");
const image_1 = __importDefault(require("next/image"));
// export default async function MainSidebar() {
async function EpaperAdSidebar({ siteInformationData }) {
    const advertisementSidebarRandom = await (0, Advertisment_1.Advertisment)();
    const AdvertisementSidebarRandom = advertisementSidebarRandom;
    return (<div>
      <div className="mb-3">
        <div className="card rounded-none shadow-sm p-5">
          <figure className="">
            <image_1.default src="/favicon.ico" alt="Epaper Preview" width={400} height={300} style={{ width: "100%", height: "auto" }} // ✅ Responsive layout via style
    />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <h1>আর জানতে</h1>
            <div>
              <SocialLinks_1.default siteInformationData={siteInformationData}/>
            </div>
          </div>
        </div>
        <div className="card rounded-none shadow-sm mt-5">
          <div className="card-header bg-red-700 rounded-none text-center py-3 text-white">
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
                <hi_1.HiOutlineLightBulb className="me-3" size={30}/> অনলাইন সংস্করণ
              </link_1.default>
            </div>
            <div>
              <link_1.default href="/contact" className="flex items-center">
                <md_1.MdConnectWithoutContact className="me-3" size={30}/> যোগাযোগের
                ঠিকানা
              </link_1.default>
            </div>
          </div>
        </div>
        <div className="card rounded-none mt-3 ">
          <Advertisement_1.default advertisements={AdvertisementSidebarRandom} position="sidebar_random" availability="available" marginB={10} // <-- string here
    />
        </div>
      </div>
    </div>);
}
