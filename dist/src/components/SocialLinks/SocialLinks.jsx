"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const SocialLinks = () => {
    return (<div className="flex justify-end items-end">
      <link_1.default type="button" href={"https://www.facebook.com/inqilab"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-black border-0 text-white btn-sm">
          <fa_1.FaFacebookF className="text-[16px]"/>
        </button>
      </link_1.default>
      <link_1.default type="button" href={"https://www.youtube.com/@inqilab/featured"} className="me-2" target="_blank">
        <button className="btn btn-circle bg-black border-0 text-white btn-sm">
          <fa_1.FaYoutube className="text-[16px]"/>
        </button>
      </link_1.default>
      <link_1.default type="button" href="/auth/login" className="">
        <button className="btn btn-circle bg-black border-0 text-white btn-sm">
          <fa_1.FaUser className="text-[16px]"/>
        </button>
      </link_1.default>
    </div>);
};
exports.default = SocialLinks;
