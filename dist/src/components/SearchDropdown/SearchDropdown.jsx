"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchDropdown;
const react_1 = __importDefault(require("react"));
const io_1 = require("react-icons/io");
const ri_1 = require("react-icons/ri");
const SearchDropdownCanvas_1 = __importDefault(require("./SearchDropdownCanvas"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const CurrentTimeShower_1 = __importDefault(require("@/utils/CurrentTimeShower/CurrentTimeShower"));
const bs_1 = require("react-icons/bs");
function SearchDropdown({ categoryItems }) {
    const categoryDataItems = categoryItems.slice(0);
    return (<div>
      <div className="drawer drawer-end z-50 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-black px-5 py-3 search-menu">
            <ri_1.RiMenuSearchLine color="red" size={20}/>
            আরও দেখুন...
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <SearchDropdownCanvas_1.default />
          <div className="menu bg-white text-black min-h-full w-80 p-4">
            <div>
              <label htmlFor="my-drawer-4" className="btn btn-sm btn-black p-4 pb-4 -mt-0.5 me-2">
                <io_1.IoMdClose />
              </label>
            </div>
            {/* Close button */}
            {/* Sidebar content here */}
            <div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center flex justify-start items-center flex-col">
                    <div>
                      <ul className="mt-5 w-70">
                        <p className="font-bold text-start">
                          ইনকিলাব এ দেখুন...
                        </p>
                        {categoryDataItems.map((item, index) => (<li className="flex justify-start items-start w-auto " key={index}>
                            <link_1.default href={`/category/${item.name}?id=${item.id}`} className="hover:text-red-900">
                              <bs_1.BsArrowRightCircle color="red"/>
                              {item.bangla_name}
                            </link_1.default>
                          </li>))}
                      </ul>
                    </div>
                    <div className="bottom-0 absolute flex flex-col justify-center items-center px-3 mb-2">
                      <div>
                        <link_1.default href="/" className="hover:text-red-900">
                          <image_1.default src="/images/logo.png" alt="Logo" width={250} height={100}/>
                        </link_1.default>
                      </div>
                      <div className="text-[14px] text-gray-400 pt-3">
                        <CurrentTimeShower_1.default />
                      </div>
                      <div>
                        <p>
                          এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি
                          ছাড়া ব্যবহার বেআইনী। কপিরাইট © ২০২৫ <br /> সাপ্তাহিক
                          ইনকিলাব কর্তৃক সর্বসত্ব ® সংরক্ষিত
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
