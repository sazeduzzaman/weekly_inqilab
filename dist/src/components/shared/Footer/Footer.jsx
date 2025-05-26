"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
async function Footer() {
    return (<>
      <div className="bg-gray-200 border-t-1 border-red-200">
        <div className="container mx-auto">
          <div className="relative w-full header-logo py-10">
            {/* Mobile Logo */}
            <link_1.default href="/">
              <image_1.default src="/images/logo.png" alt="Logo" width={250} height={100}/>
            </link_1.default>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">সম্পাদকমণ্ডলীর</h1>
              <h1 className="text-1xl">সভাপতিঃ শাহ নেওয়াজ</h1>
              <h1 className="text-1xl">উপদেষ্টা সম্পাদকঃ পাভেল মাহমুদ</h1>
              <h1 className="text-1xl">ইংরেজি পাতার সম্পাদকঃ ফুহাদ হোসেন</h1>
              <h1 className="text-1xl">ব্যবস্থাপনা সম্পাদকঃ মোঃ বদরুদ্দুজা সাগর</h1>
              <h1 className="text-1xl">প্রকাশক ও সম্পাদকঃ মোহাম্মদ জাহিদ আলম</h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="my-5">
                <link_1.default href="/about" className="link link-hover btn btn-outline me-3">
                  আমাদের সম্পর্কে
                </link_1.default>
                <link_1.default href="/contact" className="link link-hover btn btn-outline me-3">
                  যোগাযোগ
                </link_1.default>
                <link_1.default href="/policy" className="link link-hover btn btn-outline me-3">
                  ব্যবহারের শর্তাবলি
                </link_1.default>
                <link_1.default href="/terms" className="link link-hover btn btn-outline me-3">
                  গোপনীয়তার নীতি
                </link_1.default>
                <link_1.default href="/ad-cost" className="link link-hover btn btn-outline">
                  বিজ্ঞাপন
                </link_1.default>
              </div>
              <div className="text-center">
                <span>অনুসরণ করুন</span>
                <SocialLinks_1.default />
              </div>
            </div>
          </div>
          {/* Bottom Footer */}
          <footer className="text-black flex justify-between items-center footer py-4 flex-col sm:flex-row">
            <aside className="">
              <p className="text-sm text-center sm:text-left">
                এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
                বেআইনী।
                <br />
                <p>
                  কপিরাইট ©{" "}
                  {new Date()
            .getFullYear()
            .toString()
            .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)])}{" "}
                  সাপ্তাহিক ইনকিলাব কর্তৃক সর্বসত্ব ® সংরক্ষিত
                </p>
              </p>
              <div className="text-black">
                <link_1.default href={"https://flixzaglobal.com/"} target="_blank">
                  <p className="text-end flex items-center">
                    <small className="pt-1 pe-1">Developed With Love By</small>
                    <image_1.default className="w-[60px]  bg-red-500 p-1 rounded-2xl" src="https://control.ajkal.us/flixzaglobal.webp" alt="Next.js logo" width={180} height={38} priority/>
                  </p>
                </link_1.default>
              </div>
            </aside>
            <aside className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0"></aside>
          </footer>
        </div>
      </div>
    </>);
}
