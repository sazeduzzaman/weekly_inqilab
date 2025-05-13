"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MarqueSlider from "../MarqueSlide/MarqueSlider";

const BottomBar = () => {
  const [mode, setMode] = useState<"static" | "hidden" | "fixed">("static");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Scroll direction check
      const goingDown = scrollTop > lastScroll;
      setLastScroll(scrollTop);

      if (scrollTop < 100) {
        clearTimeout(timeout);
        setMode("static");
      } else if (scrollTop >= 100 && scrollTop < 200) {
        clearTimeout(timeout);
        setMode("hidden");
      } else if (scrollTop >= 200) {
        if (goingDown) {
          // Delay to allow transition
          clearTimeout(timeout);
          setMode("hidden"); // briefly hide first
          timeout = setTimeout(() => {
            setMode("fixed");
          }, 50); // small delay allows transition in
        } else {
          setMode("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScroll]);

  const commonClasses =
    "w-full transition-all duration-700 ease-in-out bg-site-primary z-40";

  const modeClass = {
    static: "relative opacity-100 translate-y-0",
    hidden: "absolute opacity-0 -translate-y-full pointer-events-none",
    fixed: "fixed top-0 left-0 opacity-100 translate-y-0",
  }[mode];

  return (
    <div className={`${commonClasses} ${modeClass}`}>
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
          ].map((item, index) => (
            <li key={index} className="flex items-center px-8 pt-2">
              <Link href="#" className="dark:text-white cta-menus text-white">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MarqueSlider />
    </div>
  );
};

export default BottomBar;
