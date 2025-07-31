import Image from "next/image";
import React from "react";
import Link from "next/link";
import SearchDropdown from "@/components/SearchDropdown/SearchDropdown";
import { RiFilePaper2Line } from "react-icons/ri";
import { CategoryDataSet } from "@/lib/api/CategoryDataSet";
import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
import Advertisement from "@/components/Advertisement/Advertisement";
import { SiteInformation } from "@/lib/api/SiteInformation";
import MobileMenu from "@/components/SearchDropdown/MobileMenu";

export default async function CenterBar() {
  const categoryItems = await CategoryDataSet();
  const advertisementTopRight = await Advertisment();
  const siteInformationData = await SiteInformation();

  return (
    <div className=" bg-white shadow-sm w-full">
      <div className="container mx-auto">
        <div className="navbar flex w-full flex-wrap">
          {/* Left Section: Logo */}
          <div className="navbar-start flex w-full sm:w-[20%]">
            <div className="dropdown">

              {/* mobile  Menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white border-2 border-gray-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
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
                  <li key={index} className="">
                    <Link href="#" className="">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <MobileMenu categoryItems={categoryItems} />

            <div className="relative w-full header-logo">
              {/* Mobile Logo */}
              <Link href="/">
                <Image
                  src={siteInformationData.site_logo_black}
                  alt="Logo"
                  width={250}
                  height={100}
                />
              </Link>
            </div>
          </div>

          {/* Middle Section: Search */}
          <div className="navbar-center flex w-full sm:w-[20%] justify-center d-sm-none pr-3">
            <SearchDropdown categoryItems={categoryItems} />
            <div className="ms-3">
              <Link
                href="/epaper"
                className="btn btn-black bg-black text-white px-5 py-3 search-menu"
              >
                <RiFilePaper2Line color="red" size={18} />
                <span>ইপেপার পড়ুন</span>
              </Link>
            </div>
          </div>

          {/* Right Section: Ad */}
          <div className="navbar-end flex w-full sm:w-[60%] justify-end d-sm-none">
            {advertisementTopRight &&
            advertisementTopRight.length > 0 &&
            advertisementTopRight.some(
              (ad) => ad.position === "header_right"
            ) ? (
              <Advertisement
                advertisements={advertisementTopRight}
                position="header_right"
                availability="available"
                marginB={10}
              />
            ) : (
              <div>
                <Image
                  src="/images/ads-768x71.webp"
                  alt="Inqilab Logo"
                  width={915}
                  height={400}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
