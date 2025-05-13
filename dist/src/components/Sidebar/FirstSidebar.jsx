"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialLinks_1 = __importDefault(require("../SocialLinks/SocialLinks"));
const link_1 = __importDefault(require("next/link"));
const FirstSidebar = () => {
    return (<div>
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
      <div className="card rounded-none shadow-sm">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes"/>
        </figure>
        <link_1.default href="#">
          <h1 className="text-center pt-4 text-3xl site-text-secondary">
            আমাদের ইপেপার
          </h1>
          <figure>
            <img src="/images/epaper/1.jpg" alt="Shoes"/>
          </figure>
        </link_1.default>
      </div>
    </div>);
};
exports.default = FirstSidebar;
