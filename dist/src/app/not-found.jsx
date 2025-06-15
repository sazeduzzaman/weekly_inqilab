"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
exports.dynamic = "force-dynamic";
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const page = () => {
    return (<div className="h-screen w-full flex justify-center items-center bg-white relative">
      <image_1.default src="/images/404.gif" alt="Full screen animation" width={1300} height={800} objectFit="contain" priority/>
    </div>);
};
exports.default = page;
