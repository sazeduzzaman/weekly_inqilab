"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MarqueSlider from "../MarqueSlide/MarqueSlider";

const BottomBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true); // Fix the bar when scrolled 100px
    } else {
      setIsFixed(false); // Reset to original position
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bottom-bar bg-site-primary z-40 transition-all duration-500 ease-in-out ${
        isFixed ? "fixed top-0 left-0 w-full shadow-md" : "relative top-auto"
      }`}
    >
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
      <MarqueSlider/>
    </div>
  );
};

export default BottomBar;
