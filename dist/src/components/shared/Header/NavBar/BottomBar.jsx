"use strict";
// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import MarqueSlider from "../MarqueSlide/MarqueSlider";
// import CategoryData from "./CategoryData/CategoryData";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BottomBar;
// const BottomBar = () => {
//   const [mode, setMode] = useState<"static" | "hidden" | "fixed">("static");
//   const [lastScroll, setLastScroll] = useState(0);
//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       // Scroll direction check
//       const goingDown = scrollTop > lastScroll;
//       setLastScroll(scrollTop);
//       if (scrollTop < 100) {
//         clearTimeout(timeout);
//         setMode("static");
//       } else if (scrollTop >= 100 && scrollTop < 200) {
//         clearTimeout(timeout);
//         setMode("hidden");
//       } else if (scrollTop >= 200) {
//         if (goingDown) {
//           // Delay to allow transition
//           clearTimeout(timeout);
//           setMode("hidden"); // briefly hide first
//           timeout = setTimeout(() => {
//             setMode("fixed");
//           }, 50); // small delay allows transition in
//         } else {
//           setMode("fixed");
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(timeout);
//     };
//   }, [lastScroll]);
//   const commonClasses =
//     "w-full transition-all duration-700 ease-in-out bg-site-primary z-40";
//   const modeClass = {
//     static: "relative opacity-100 translate-y-0",
//     hidden: "absolute opacity-0 -translate-y-full pointer-events-none",
//     fixed: "fixed top-0 left-0 opacity-100 translate-y-0",
//   }[mode];
//   return (
//     <div className={`${commonClasses} ${modeClass}`}>
//       <CategoryData />
//       <MarqueSlider />
//     </div>
//   );
// };
// export default BottomBar;
const react_1 = __importDefault(require("react"));
const CategoryData_1 = __importDefault(require("./CategoryData/CategoryData"));
const MarqueSlider_1 = __importDefault(require("../MarqueSlide/MarqueSlider"));
const CategoryDataSet_1 = require("@/lib/api/CategoryDataSet");
async function BottomBar() {
    const categoryItems = await (0, CategoryDataSet_1.CategoryDataSet)();
    return (<div className="bg-black">
      <CategoryData_1.default categoryItems={categoryItems}/>
      <MarqueSlider_1.default />
    </div>);
}
