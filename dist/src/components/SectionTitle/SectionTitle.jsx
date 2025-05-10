"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionTitle = ({ title }) => {
    return (<div className="my-2">
      <h1 className="text-2xl section-title inline-block border-b-4 border-red-600 mr-4">
        {title}
      </h1>
      <div className="flex-1 border-b-4 border-gray-200"></div>
    </div>);
};
exports.default = SectionTitle;
