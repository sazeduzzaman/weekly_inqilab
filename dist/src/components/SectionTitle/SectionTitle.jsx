"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionTitle = ({ title }) => {
    return (<div className="my-5">
      <h1 className="ft-size text-red-700 section-title pb-5 text-center md:text-start text-shadow-0">
        {title}
      </h1>
      <div className="flex-1 border-b-1 border-black w-full"></div>
    </div>);
};
exports.default = SectionTitle;
