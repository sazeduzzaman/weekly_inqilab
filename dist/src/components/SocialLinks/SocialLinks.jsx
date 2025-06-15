"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocialLinks;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const ai_1 = require("react-icons/ai");
const io_1 = require("react-icons/io");
// export default async function MainSidebar() {
function SocialLinks({ siteInformationData }) {
    return (<div className="flex justify-end items-end">
      {siteInformationData?.facebook_url && (<link_1.default type="button" href={`https://${siteInformationData?.facebook_url ?? "www.facebook.com"}`} className="me-2" target="_blank">
          <button className="btn btn-circle bg-red-700 shadow-none hover:bg-black border-0 text-white btn-sm">
            <fa_1.FaFacebookF className="text-[16px]"/>
          </button>
        </link_1.default>)}
      {siteInformationData?.instagram_url && (<link_1.default type="button" href={`https://${siteInformationData?.instagram_url ?? "www.instagram.com"}`} className="me-2" target="_blank">
          <button className="btn btn-circle bg-red-700 shadow-none hover:bg-black border-0 text-white btn-sm">
            <ai_1.AiFillInstagram className="text-[16px]"/>
          </button>
        </link_1.default>)}
      {siteInformationData?.whatsapp_url && (<link_1.default type="button" href={`https://${siteInformationData?.whatsapp_url ?? "www.what'sapp.com"}`} className="me-2" target="_blank">
          <button className="btn btn-circle bg-red-700 shadow-none hover:bg-black border-0 text-white btn-sm">
            <io_1.IoLogoWhatsapp className="text-[16px]"/>
          </button>
        </link_1.default>)}
      {siteInformationData?.youtube_url && (<link_1.default type="button" href={`https://${siteInformationData?.youtube_url ?? "www.youtube.com"}`} className="me-2" target="_blank">
          <button className="btn btn-circle bg-red-700 shadow-none hover:bg-black border-0 text-white btn-sm">
            <fa_1.FaYoutube className="text-[16px]"/>
          </button>
        </link_1.default>)}
      <link_1.default type="button" href="/auth/login" className="">
        <button className="btn btn-circle bg-red-700 shadow-none hover:bg-black border-0 text-white btn-sm">
          <fa_1.FaUser className="text-[16px]"/>
        </button>
      </link_1.default>
    </div>);
}
