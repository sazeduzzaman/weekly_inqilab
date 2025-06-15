"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const SiteInformation_1 = require("@/lib/api/SiteInformation");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
async function Footer() {
    const siteInformationData = await (0, SiteInformation_1.SiteInformation)();
    return (<>
      <div className="bg-gray-200 border-t-1 border-red-200 not-mobile">
        <div className="container mx-auto">
          <div className="relative w-full header-logo py-10">
            {/* Mobile Logo */}
            <link_1.default href="/">
              <image_1.default src={siteInformationData.site_logo_black} alt="Logo" width={250} height={100}/>
            </link_1.default>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">আমাদের সম্পর্কে</h1>
              <h1 className="text-1xl">সম্পাদকমণ্ডলীর সভাপতিঃ শাহ নেওয়াজ</h1>
              <h1 className="text-1xl">উপদেষ্টা সম্পাদকঃ পাভেল মাহমুদ</h1>
              <h1 className="text-1xl">ইংরেজি পাতার সম্পাদকঃ ফুহাদ হোসেন</h1>
              <h1 className="text-1xl">
                ব্যবস্থাপনা সম্পাদকঃ মোঃ বদরুদ্দোজা সাগর
              </h1>
              <h1 className="text-1xl">
                প্রকাশক ও সম্পাদকঃ মোহাম্মদ জাহিদ আলম
              </h1>
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
                <SocialLinks_1.default siteInformationData={siteInformationData}/>
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
                <span>{siteInformationData.copyright_title}</span>
              </p>
              <div className="text-black">
                <link_1.default href={"https://flixzaglobal.com/"} target="_blank">
                  <p className="text-end flex items-center">
                    <small className="pt-1 pe-1">Developed With Love By</small>
                    <image_1.default className="w-[60px] p-1" src="/images/logo-color-resized.png" alt="Next.js logo" width={180} height={38} priority/>
                  </p>
                </link_1.default>
              </div>
            </aside>
            <aside className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0"></aside>
          </footer>
        </div>
      </div>
      {/* for mobile */}
      <footer className="bg-gray-200 border-t border-red-200 text-black for-mobile">
        <div className="container mx-auto px-4 py-10">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <link_1.default href="/">
              <image_1.default src={siteInformationData.site_logo_black} alt="Logo" width={250} height={100} className="mx-auto"/>
            </link_1.default>
          </div>

          {/* Editorial Info + Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-center">
            {/* Editorial Info */}
            <div>
              <h1 className="text-xl font-semibold mb-2">আমাদের সম্পর্কে</h1>
              <ul className="space-y-1 text-sm">
                <li>সম্পাদকমণ্ডলীর সভাপতিঃ শাহ নেওয়াজ</li>
                <li>উপদেষ্টা সম্পাদকঃ পাভেল মাহমুদ</li>
                <li>ইংরেজি পাতার সম্পাদকঃ ফুহাদ হোসেন</li>
                <li>ব্যবস্থাপনা সম্পাদকঃ মোঃ বদরুদ্দোজা সাগর</li>
                <li>প্রকাশক ও সম্পাদকঃ মোহাম্মদ জাহিদ আলম</li>
              </ul>
            </div>

            {/* Links & Social */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {[
            { href: "/about", label: "আমাদের সম্পর্কে" },
            { href: "/contact", label: "যোগাযোগ" },
            { href: "/policy", label: "ব্যবহারের শর্তাবলি" },
            { href: "/terms", label: "গোপনীয়তার নীতি" },
            { href: "/ad-cost", label: "বিজ্ঞাপন" },
        ].map((link) => (<link_1.default key={link.href} href={link.href} className="btn btn-outline text-sm">
                    {link.label}
                  </link_1.default>))}
              </div>
              <div className="text-sm text-center">
                <p className="mb-1">অনুসরণ করুন</p>
                <SocialLinks_1.default siteInformationData={siteInformationData}/>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-4 flex flex-col items-center sm:flex-row sm:justify-between text-center text-sm gap-4">
            <p>
              এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
              বেআইনী।
              <br />
              <span>{siteInformationData.copyright_title}</span>
            </p>
            <link_1.default href="https://flixzaglobal.com/" target="_blank">
              <div className="flex items-center justify-center">
                <small className="pt-1 pe-1">Developed With Love By</small>
                <image_1.default className="w-[60px] p-1" src="/images/logo-color-resized.png" alt="Next.js logo" width={180} height={38} priority/>
              </div>
            </link_1.default>
          </div>
        </div>
      </footer>
    </>);
}
