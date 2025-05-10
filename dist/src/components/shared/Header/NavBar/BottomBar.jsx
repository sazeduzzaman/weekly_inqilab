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
const link_1 = __importDefault(require("next/link"));
const react_1 = __importStar(require("react"));
const MarqueSlider_1 = __importDefault(require("../MarqueSlide/MarqueSlider"));
const BottomBar = () => {
    const [isFixed, setIsFixed] = (0, react_1.useState)(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true); // Fix the bar when scrolled 100px
        }
        else {
            setIsFixed(false); // Reset to original position
        }
    };
    (0, react_1.useEffect)(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (<div className={`bottom-bar bg-site-primary z-40 transition-all duration-500 ease-in-out ${isFixed ? "fixed top-0 left-0 w-full shadow-md" : "relative top-auto"}`}>
      <div className="container mx-auto">
        <ul className="flex items-center justify-center py-2 overflow-x-auto whitespace-nowrap">
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
        ].map((item, index) => (<li key={index} className="flex items-center px-8 pt-2">
              <link_1.default href="#" className="dark:text-white cta-menus text-white">
                {item}
              </link_1.default>
            </li>))}
        </ul>
      </div>
      <MarqueSlider_1.default />
    </div>);
};
exports.default = BottomBar;
