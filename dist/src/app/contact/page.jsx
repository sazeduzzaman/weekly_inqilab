"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ContactPage = () => {
    const [activeTab, setActiveTab] = (0, react_1.useState)("bangla");
    return (<div className="container mx-auto px-4 py-10 bg-white text-gray-900 min-h-screen">
      {/* Tabs */}
      <div className="flex items-center justify-center border-b border-gray-300 mb-6">
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === "bangla"
            ? "border-b-2 border-indigo-600 text-indigo-600"
            : "text-gray-500 hover:text-indigo-500"}`} onClick={() => setActiveTab("bangla")}>
          বাংলা
        </button>
        <button className={`ml-4 px-4 py-2 text-sm font-medium ${activeTab === "english"
            ? "border-b-2 border-indigo-600 text-indigo-600"
            : "text-gray-500 hover:text-indigo-500"}`} onClick={() => setActiveTab("english")}>
          English
        </button>
      </div>

      {/* Content */}
      {activeTab === "bangla" && (<div className="space-y-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            ইনকিলাব নিউজপেপার যোগাযোগ
          </h1>

          <div>
            <h2 className="text-xl font-semibold mb-2">প্রধান অফিস</h2>
            <p>71-16 35th Ave, Jackson Heights, NY 11372, USA</p>
            <p>অফিস: +1646 267-7751</p>
            <p>বিজ্ঞাপন: +1646 267-7751</p>
            <p>ফ্যাক্স: 718-865-9130</p>
            <p>
              ই-পেপার: +1646 267-7751 (সকাল ১০টা-সন্ধ্যা ৬টা, ফোন ও
              হোয়াটসঅ্যাপ)
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">ইমেইল</h2>
            <p>info@inqilabusa.com</p>
            <p>প্রিন্ট বিজ্ঞাপন বিক্রয়: ad@inqilabusa.com</p>
            <p>ডিজিটাল বিজ্ঞাপন বিক্রয়: adsales@inqilabusa.com</p>
            <p>ফ্যাক্স: +1646 267-7751</p>
            <p>ই-পেপার: epaper@inqilabusa.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">আমাদের অনুসরণ করুন</h2>
            <p>info@inqilabusa.com</p>
            <p>
              <a href="https://facebook.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                facebook.com/InqilabUSA
              </a>
            </p>
            <p>
              <a href="https://twitter.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                twitter.com/InqilabUSA
              </a>
            </p>
            <p>
              <a href="https://instagram.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                instagram.com/InqilabUSA
              </a>
            </p>
            <p>
              <a href="https://youtube.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                youtube.com/InqilabUSA
              </a>
            </p>
          </div>
        </div>)}

      {activeTab === "english" && (<div className="space-y-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Inqilab Newspaper Contact Information
          </h1>

          <div>
            <h2 className="text-xl font-semibold mb-2">Head Office</h2>
            <p>71-16 35th Ave, Jackson Heights, NY 11372, USA</p>
            <p>Office: +1646 267-7751</p>
            <p>Advertisement: +1646 267-7751</p>
            <p>Fax: 718-865-9130</p>
            <p>ePaper: +1646 267-7751 (10am-6pm, Phone & WhatsApp)</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>info@inqilabusa.com</p>
            <p>Print Ad Sales: ad@inqilabusa.com</p>
            <p>Digital Ad Sales: adsales@inqilabusa.com</p>
            <p>Fax: +1646 267-7751</p>
            <p>ePaper: epaper@inqilabusa.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Follow us on</h2>
            <p>info@inqilabusa.com</p>
            <p>
              <a href="https://facebook.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                facebook.com/InqilabUSA
              </a>
            </p>
            <p>
              <a href="https://twitter.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                twitter.com/InqilabUSA
              </a>
            </p>
            <p>
              <a href="https://instagram.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                instagram.com/InqilabUSA
              </a>
            </p>
            <p>
              <a href="https://youtube.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                youtube.com/InqilabUSA
              </a>
            </p>
          </div>
        </div>)}

      <p className="mt-10 text-start text-sm text-gray-500">
        Last updated: May 25, 2025
      </p>
    </div>);
};
exports.default = ContactPage;
