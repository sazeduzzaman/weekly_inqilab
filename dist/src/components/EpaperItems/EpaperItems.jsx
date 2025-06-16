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
const image_1 = __importDefault(require("next/image"));
const react_1 = __importStar(require("react"));
const io_1 = require("react-icons/io");
const CalendarCard_1 = __importDefault(require("@/utils/DatePicker/CalendarCard"));
const EpaperItems = ({ epapersData }) => {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(new Date());
    const sortedEpapers = [...epapersData].sort((a, b) => (a.page_number ?? 0) - (b.page_number ?? 0));
    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };
    const goToPrevious = () => {
        setSelectedIndex((prev) => prev > 0 ? prev - 1 : sortedEpapers.length - 1);
    };
    const goToNext = () => {
        setSelectedIndex((prev) => prev < sortedEpapers.length - 1 ? prev + 1 : 0);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    if (sortedEpapers.length === 0) {
        return <div className="p-4">কোন পাতা পাওয়া যায়নি</div>;
    }
    return (<>
      {/* Left Sidebar */}
      <div className="order-2 lg:order-1 col-span-12 lg:col-span-2">
        <div className="card rounded-none shadow-sm mt-15 md:mt-5">
          <div className="card-header bg-black rounded-none text-center py-3 text-white">
            অনুসন্ধান করুন
          </div>
          <div className="card-body p-0 border-none">
            {/* CalendarCard component */}
            <CalendarCard_1.default date={selectedDate} onChange={handleDateChange}/>
            <div className="ps-2 pb-2">
              Selected: {selectedDate.toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>

        {/* All Pages Section */}
        <div className="card rounded-none shadow-sm mt-5">
          <div className="card-header bg-black rounded-none text-center py-3 text-white">
            সকল পাতা
          </div>
          <div className="card-body p-2">
            <div className="overflow-auto h-[1250px] epaper-all-page space-y-4">
              {sortedEpapers.map((item, index) => (<div key={item.id} onClick={() => handleImageClick(index)} className="cursor-pointer">
                  <div className="text-center">
                    Page {item.page_number || index + 1}
                  </div>
                  <div className={`w-full flex items-center relative h-[550px] md:h-[350px] rounded overflow-hidden ${selectedIndex === index
                ? "border-4 border-red-700"
                : "border border-gray-200"}`}>
                    <image_1.default src={item.epaper_image ?? "/images/default-epaper.webp"} alt={item.epaper_image_alt ||
                `Page ${item.page_number || index + 1}`} width={350} height={500} className="object-cover"/>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Preview */}
      <div className="order-1 lg:order-2 col-span-12 lg:col-span-8">
        <div className="mt-5 text-center">
          <div className="card-header bg-black rounded-none text-center py-3 text-white">
            ইপেপার পেইজ:{" "}
            {sortedEpapers[selectedIndex]?.page_number || selectedIndex + 1}
          </div>
          <div className="relative w-full h-[500px] md:h-[1685px] shadow-sm" style={{ marginTop: "-5px" }}>
            <image_1.default src={sortedEpapers[selectedIndex]?.epaper_image ??
            "/images/default-epaper.webp"} alt={sortedEpapers[selectedIndex]?.epaper_image_alt ||
            `Selected page ${selectedIndex + 1}`} width={1640} height={300} style={{ width: "100%", height: "auto" }} className="object-contain"/>

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
