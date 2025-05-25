"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const lu_1 = require("react-icons/lu");
const LoginPage = () => {
    return (<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 py-15">
        <div className="flex justify-center mb-6">
          <link_1.default href="/">
            <image_1.default src="/images/logo.png" alt="Inqilab Logo" width={200} height={80}/>
          </link_1.default>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          লগইন করুন।
        </h2>
        <form className="space-y-5 mt-15">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>
            <input type="email" placeholder="আপনার ইমেইল লিখুন" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>
            <input type="password" placeholder="আপনার পাসওয়ার্ড লিখুন" className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="drawer-button btn btn-black px-5 py-6 search-menu w-1/1">
              লগইন করুন <lu_1.LuDoorOpen size={30}/>
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 mt-15">
          একাউন্ট নেই?
          <link_1.default href="/auth/register" className="text-indigo-600 font-medium ml-1 hover:underline">
            এখন নিবন্ধন করুন
          </link_1.default>
        </div>
        <p className="text-xs text-gray-500 text-center mt-4">
          লগইন করে আপনি আমাদের
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
exports.default = LoginPage;
