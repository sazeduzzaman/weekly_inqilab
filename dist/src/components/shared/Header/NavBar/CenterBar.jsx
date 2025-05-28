"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CenterBar;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const SearchDropdown_1 = __importDefault(require("@/components/SearchDropdown/SearchDropdown"));
const ri_1 = require("react-icons/ri");
const CategoryDataSet_1 = require("@/lib/api/CategoryDataSet");
async function CenterBar() {
    const categoryItems = await (0, CategoryDataSet_1.CategoryDataSet)();
    return (<div className=" bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="navbar flex w-full flex-wrap">
          {/* Left Section: Logo */}
          <div className="navbar-start flex w-full sm:w-[20%]">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn border-0 bg-site-secondary lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
              </div>
              {/* mobile  Menu */}
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white border-2 border-gray-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {[
            "সর্বশেষ",
            "জাতীয়",
            "সারাদেশ",
            "রাজনীতি",
            "বিশ্ব সংবাদ",
            "খেলা",
            "বিনোদন",
            "ধর্ম",
            "অর্থনীতি",
            "লাইফস্টাইল",
            "টেক",
            "অন্যান্য",
            "আইন-আদালত",
            "ভিডিও",
        ].map((item, index) => (<li key={index} className="">
                    <link_1.default href="#" className="">
                      {item}
                    </link_1.default>
                  </li>))}
              </ul>
            </div>

            <div className="relative w-full header-logo">
              {/* Mobile Logo */}
              <link_1.default href="/">
                <image_1.default src="/images/logo.png" alt="Logo" width={250} height={100}/>
              </link_1.default>
            </div>
          </div>

          {/* Middle Section: Search */}
          <div className="navbar-center flex w-full sm:w-[20%] justify-center d-sm-none pr-3">
            <SearchDropdown_1.default categoryItems={categoryItems}/>
            <div className="ms-3">
              <link_1.default href="/epaper" className="btn btn-black px-5 py-3 search-menu">
                <ri_1.RiFilePaper2Line color="red" size={18}/>
                <span>ইপেপার পড়ুন</span>
              </link_1.default>
            </div>
          </div>

          {/* Right Section: Ad */}
          <div className="navbar-end flex w-full sm:w-[60%] justify-end d-sm-none">
            <div className="relative w-full aspect-[768/71] p">
              <image_1.default src="/images/ads-768x71.webp" alt="Ad banner" fill className="object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
