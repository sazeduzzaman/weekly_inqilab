"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialLinks_1 = __importDefault(require("../SocialLinks/SocialLinks"));
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const SectionTitle_1 = __importDefault(require("../SectionTitle/SectionTitle"));
const ri_1 = require("react-icons/ri");
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
const FirstSidebar = () => {
    return (<div className="mt-4">
      <SectionTitle_1.default title="আমাদের সম্পর্কে"/>
      <div className="card rounded-none shadow-sm p-5 mb-5">
        <figure className="flex justify-center">
          <image_1.default src="/favicon.ico" alt="Logo" width={200} height={200}/>
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
        <link_1.default href="#">
          <h1 className="text-center text-3xl site-text-secondary ">
            আমাদের ইপেপার
          </h1>
          <figure className="border border-red-700">
            <image_1.default src="/images/epaper/1.jpg" alt="Epaper Preview" width={400} height={300} layout="responsive"/>
          </figure>
        </link_1.default>
      </div>
      <div className="card rounded-none mt-3 ">
        <figure>
          <img src="/images/side-ad.jfif" alt="Shoes"/>
        </figure>
      </div>
      {/* <div className="card rounded-none mt-3">
          <figure>
            <img src="/images/side-ad-2.jpg" alt="Shoes" />
          </figure>
        </div> */}
    </div>);
};
exports.default = FirstSidebar;
