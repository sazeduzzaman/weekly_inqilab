import Image from "next/image";
import React from "react";
import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import SearchDropdown from "@/components/SearchDropdown/SearchDropdown";
import { RiFilePaper2Line } from "react-icons/ri";
import { CategoryDataSet } from "@/lib/api/CategoryDataSet";

export default async function CenterBar() {
    const categoryItems = await CategoryDataSet();
  // 1) Build the filesystem path
  const logoFsPath = path.join(process.cwd(), "public", "images", "logo.png");
  // 2) Read into a Buffer
  const logoBuffer = await fs.readFile(logoFsPath);
  // 3) Generate base64 + metadata (no more `img`!)
  const { base64 } = await getPlaiceholder(logoBuffer);

  return (
    <div className=" bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="navbar flex w-full flex-wrap">
          {/* Left Section: Logo */}
          <div className="navbar-start flex w-full sm:w-[20%]">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn border-0 bg-site-secondary lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
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

            <div className="relative w-full header-logo">
              {/* Mobile Logo */}
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={250}
                  height={100}
                  placeholder="blur"
                  blurDataURL={base64}
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
                className="btn btn-black px-5 py-3 search-menu"
              >
                <RiFilePaper2Line color="red" size={18} />
                <span>ইপেপার</span>
              </Link>
            </div>
          </div>

          {/* Right Section: Ad */}
          <div className="navbar-end flex w-full sm:w-[60%] justify-end d-sm-none">
            <div className="relative w-full aspect-[768/71] p">
              <Image
                src="/images/advertisement.png"
                alt="Ad banner"
                fill
                placeholder="blur"
                blurDataURL={base64}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
