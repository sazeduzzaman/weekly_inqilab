"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CenterBar;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const plaiceholder_1 = require("plaiceholder");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const link_1 = __importDefault(require("next/link"));
const SearchDropdown_1 = __importDefault(require("@/components/SearchDropdown/SearchDropdown"));
async function CenterBar() {
    // 1) Build the filesystem path
    const logoFsPath = path_1.default.join(process.cwd(), "public", "images", "logo.png");
    // 2) Read into a Buffer
    const logoBuffer = await promises_1.default.readFile(logoFsPath);
    // 3) Generate base64 + metadata (no more `img`!)
    const { base64 } = await (0, plaiceholder_1.getPlaiceholder)(logoBuffer);
    return (<div className=" bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="navbar flex w-full flex-wrap">
          {/* Left Section: Logo */}
          <div className="navbar-start flex w-full sm:w-[20%]">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn border-0 bg-site-secondary lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path_1.default strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
              </div>
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
              <link_1.default href="/">
                <image_1.default src="/images/logo.png" alt="Logo" width={250} height={100} placeholder="blur" blurDataURL={base64} unoptimized/>
              </link_1.default>
            </div>
          </div>

          {/* Middle Section: Search */}
          <div className="navbar-center flex w-full sm:w-[20%] justify-center d-sm-none">
            <SearchDropdown_1.default />
          </div>

          {/* Right Section: Ad */}
          <div className="navbar-end flex w-full sm:w-[60%] justify-end d-sm-none">
            <div className="relative w-full aspect-[768/71]">
              <image_1.default src="/images/advertisement.png" alt="Ad banner" fill placeholder="blur" blurDataURL={base64} unoptimized className="object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
