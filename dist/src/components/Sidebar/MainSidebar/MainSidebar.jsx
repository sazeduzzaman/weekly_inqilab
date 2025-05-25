"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
const ri_1 = require("react-icons/ri");
const MainSidebar = () => {
    return (<div className="mb-3">
      <div className="card rounded-none shadow-sm p-5">
        <figure>
          <img src="/favicon.ico" alt="Shoes"/>
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h1>আর জানতে</h1>
          <div>
            <SocialLinks_1.default />
          </div>
        </div>
      </div>
      <div className="card rounded-none shadow-sm mt-5">
        <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
          গুরুত্বপূর্ণ
        </div>
        <div className="card-body">
          <div>
            <link_1.default href="/ad-cost" className="flex items-center">
              <ri_1.RiAdvertisementLine className="me-3" size={30}/> প্রিন্ট সংস্করণ
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
      <div className="card rounded-none shadow-sm mt-5">
        <link_1.default href="#" className="">
          <h1 className="text-center pt-4 text-3xl site-text-secondary">
            আমাদের ইপেপার
          </h1>
          <figure>
            <img src="/images/side-ad.jfif" alt="Shoes"/>
          </figure>
        </link_1.default>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/side-ad-2.jpg" alt="Shoes"/>
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/side-ad-3.jfif" alt="Shoes"/>
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes"/>
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes"/>
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes"/>
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes"/>
        </figure>
      </div>
    </div>);
};
exports.default = MainSidebar;
