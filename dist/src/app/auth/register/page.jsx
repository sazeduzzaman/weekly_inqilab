"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const FormsItems_1 = __importDefault(require("./FormItems/FormsItems"));
const Page = () => {
    return (<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <link_1.default href="/">
            <image_1.default src="/images/logo.png" alt="Inqilab Logo" width={200} height={80}/>
          </link_1.default>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          নিবন্ধন করুন ।
        </h2>

        <FormsItems_1.default />

        <div className="text-center text-sm text-gray-600 mt-6">
          ইতিমধ্যে একাউন্ট আছে?
          <link_1.default href="/auth/login" className="text-indigo-600 font-medium ml-1 hover:underline">
            লগইন করুন
          </link_1.default>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          নিবন্ধন করে আপনি আমাদের
          <link_1.default href="/terms" className="mx-1 border-b border-gray-400 border-dotted">
            পরিষেবা শর্তাবলী
          </link_1.default>
          এবং
          <link_1.default href="/policy" className="mx-1 border-b border-gray-400 border-dotted">
            গোপনীয়তা নীতি
          </link_1.default>
          মেনে নিচ্ছেন।
        </p>
      </div>
    </div>);
};
exports.default = Page;
