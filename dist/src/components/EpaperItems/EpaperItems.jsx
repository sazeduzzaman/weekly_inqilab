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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CalendarCard_1 = __importDefault(require("@/utils/DatePicker/CalendarCard"));
const image_1 = __importDefault(require("next/image"));
const react_1 = __importStar(require("react"));
const io_1 = require("react-icons/io");
const imageList = [
    "/images/epaper/1.jpg",
    "/images/epaper/2.jpg",
    "/images/epaper/3.jpg",
    "/images/epaper/4.jpg",
    "/images/epaper/5.jpg",
    "/images/epaper/6.jpg",
];
const EpaperItems = () => {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(new Date());
    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };
    const goToPrevious = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
    };
    const goToNext = () => {
        setSelectedIndex((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (<>
      {/* Left Sidebar */}
      <div className="col-span-2">
        <div className="card rounded-none shadow-sm mt-5">
          <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
            অনুসন্ধান করুন
          </div>
          <div className="card-body p-0 border-none">
            <CalendarCard_1.default date={selectedDate} onChange={handleDateChange}/>
            <div className="ps-2 pb-2">
              Selected: {selectedDate.toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>

        {/* All Pages Section */}
        <div className="card rounded-none shadow-sm mt-5">
          <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
            সকল পাতা
          </div>
          <div className="card-body p-2">
            <div className="overflow-auto h-[1250px] epaper-all-page space-y-4">
              {imageList.map((img, index) => (<div key={index} onClick={() => handleImageClick(index)} className="cursor-pointer">
                  <div className="text-center">Page {index + 1}</div>
                  <div className={`w-full relative p-3 h-[400px] rounded overflow-hidden ${selectedIndex === index
                ? "border-4 border-red-500"
                : "border border-gray-200"}`}>
                    <image_1.default src={img} alt={`Page ${index + 1}`} layout="fill" className="object-cover"/>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Preview */}
      <div className="col-span-8">
        <div className="mt-5 text-center">
          <div className="card-header bg-black rounded-md text-center py-3 text-white">
            ইপেপার পেইজ: {selectedIndex + "" + "" + 1}
          </div>
          <div className="relative w-full h-[1640px] border" style={{ marginTop: "-5px" }}>
            <image_1.default src={imageList[selectedIndex]} alt={`Selected page ${selectedIndex + 1}`} layout="fill" className="object-contain"/>
            <button onClick={goToPrevious} className="absolute left-0 cursor-grab rounded-full top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-red-600 px-3 py-2">
              <io_1.IoIosArrowBack size={30}/>
            </button>
            <button onClick={goToNext} className="absolute right-0 cursor-grab rounded-full top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-red-600 px-3 py-2">
              <io_1.IoIosArrowForward size={30}/>
            </button>
          </div>
        </div>
      </div>
    </>);
};
exports.default = EpaperItems;
