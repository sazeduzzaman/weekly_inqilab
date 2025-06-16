"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Loading;
const image_1 = __importDefault(require("next/image"));
function Loading() {
    return (<div className="loader-overlay">
      <div className="text-center">
        <image_1.default src="/images/preloader.gif" alt="Loading..." width={80} // adjust as needed
     height={80} // adjust as needed
     className="mx-auto mb-4" priority // optional: loads image eagerly
    />
        {/* <p className="text-lg font-semibold text-gray-600">লোড হচ্ছে...</p> */}
      </div>
    </div>);
}
