// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import MarqueSlider from "../MarqueSlide/MarqueSlider";
// import CategoryData from "./CategoryData/CategoryData";

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
import React from "react";
import CategoryData from "./CategoryData/CategoryData";
import MarqueSlider from "../MarqueSlide/MarqueSlider";
import { CategoryDataSet } from "@/lib/api/CategoryDataSet";

export default async function BottomBar() {
  const categoryItems = await CategoryDataSet();
  console.log(categoryItems, "categoryItems");

  return (
    <div className="bg-black">
      <CategoryData categoryItems={categoryItems} />
      <MarqueSlider />
    </div>
  );
}
