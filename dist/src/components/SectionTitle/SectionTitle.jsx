"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionTitle = ({ title }) => {
    return (<div className="my-2">
      <h1 className="text-[15px] section-title mr-4 font-bold pb-2 text-shadow-0 section-title">
        {title}
      </h1>
      <div className="flex-1 border-b-1 border-black w-full"></div>
    </div>);
};
exports.default = SectionTitle;
