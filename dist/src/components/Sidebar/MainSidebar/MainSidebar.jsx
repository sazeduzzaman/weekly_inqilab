"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainSidebar;
const Advertisement_1 = __importDefault(require("@/components/Advertisement/Advertisement"));
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const Advertisment_1 = require("@/lib/api/Advertisement/Advertisment");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
// export default async function MainSidebar() {
async function MainSidebar({ siteInformationData }) {
    const advertisementSidebarRandom = await (0, Advertisment_1.Advertisment)();
    const AdvertisementSidebarRandom = advertisementSidebarRandom.slice(3, 6);
    return (<div className="mb-3">
      <div className="card rounded-none shadow-sm p-5">
        <figure>
          <image_1.default src="/favicon.ico" alt="Fab Icon" width={50} height={50} className="w-8 h-8 rounded-full object-cover"/>
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h1>আর জানতে</h1>
          <div>
            <SocialLinks_1.default siteInformationData={siteInformationData}/>
          </div>
        </div>
      </div>
      <div className="card rounded-none shadow-sm mt-5">
        <link_1.default href="/epaper">
          <h1 className="text-center text-3xl site-text-secondary p-3">
            আমাদের ইপেপার
          </h1>
          <figure className="border border-red-700">
            <image_1.default src="/images/epaper/FrontPage.jpg" alt="Epaper Preview" width={400} height={300} style={{ width: "100%", height: "auto" }} // ✅ Responsive layout via style
    />
          </figure>
        </link_1.default>
      </div>
      <div className="card rounded-none mt-5">
        <Advertisement_1.default advertisements={AdvertisementSidebarRandom} position="sidebar_random" availability="available" marginB={10} // <-- string here
    />
      </div>
    </div>);
}
