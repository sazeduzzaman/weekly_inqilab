"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TopBar;
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const CurrentTimeShower_1 = __importDefault(require("@/utils/CurrentTimeShower/CurrentTimeShower"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
// export default async function MainSidebar() {
function TopBar({ siteInformationData }) {
    return (<div className="bg-site-secondary py-0 top-bar">
      <div className="container mx-auto px-4">
        {/* Grid layout for larger screens and stacking on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {/* Time and Date */}
          <div className="flex items-center justify-center md:justify-start col-span-1 md:col-span-1">
            <CurrentTimeShower_1.default />
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-center col-span-1 md:col-span-1 text-center md:text-left">
            <span className="eng-font text-[12px]">
              <link_1.default href={`mailto:${siteInformationData.info_email}`} aria-label={`Send an email to ${siteInformationData.info_email}`}>
                {siteInformationData.info_email}
              </link_1.default>
              <span className="pl-1">||</span> {siteInformationData.address_one}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end col-span-1 md:col-span-1">
            <SocialLinks_1.default siteInformationData={siteInformationData}/>
          </div>
        </div>
      </div>
    </div>);
}
