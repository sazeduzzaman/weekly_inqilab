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

      <div className="card rounded-none shadow-sm">
        <figure>
          <image_1.default src="/images/ads2-768x528.webp" alt="Advertisement" width={768} height={528} layout="responsive"/>
        </figure>
        <link_1.default href="#">
          <h1 className="text-center pt-10 text-3xl site-text-secondary ">
            আমাদের ইপেপার
          </h1>
          <figure className="border border-red-700">
            <image_1.default src="/images/epaper/1.jpg" alt="Epaper Preview" width={400} height={300} layout="responsive"/>
          </figure>
        </link_1.default>
      </div>
    </div>);
};
exports.default = FirstSidebar;
