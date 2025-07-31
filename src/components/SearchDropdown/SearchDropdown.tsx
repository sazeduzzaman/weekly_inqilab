import React from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenuSearchLine } from "react-icons/ri";
import SearchDropdownCanvas from "./SearchDropdownCanvas";
import Image from "next/image";
import Link from "next/link";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";
import { BsArrowRightCircle } from "react-icons/bs";
import { CategoryListProps } from "@/lib/types/CategoryDataType";

export default function SearchDropdown({ categoryItems }: CategoryListProps) {
  const categoryDataItems = categoryItems.slice(0);
  return (
    <div>
      <div className="drawer drawer-end z-50 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button bg-black btn text-white btn-black px-5 py-3 search-menu"
          >
            <RiMenuSearchLine color="red" size={20} />
            আরও দেখুন...
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <SearchDropdownCanvas />
          <div className="menu bg-white text-black min-h-full w-80 p-4">
            <div>
              <label
                htmlFor="my-drawer-4"
                className="btn btn-sm btn-black p-4 pb-4 -mt-0.5 me-2"
              >
                <IoMdClose />
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
                        {categoryDataItems.map((item, index) => (
                          <li
                            className="flex justify-start items-start w-auto "
                            key={index}
                          >
                            <Link
                              href={`/category/${item.name}?id=${item.id}`}
                              className="hover:text-red-900"
                            >
                              <BsArrowRightCircle color="red" />
                              {item.bangla_name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bottom-0 absolute flex flex-col justify-center items-center px-3 mb-2">
                      <div>
                        <Link href="/" className="hover:text-red-900">
                          <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={250}
                            height={100}
                          />
                        </Link>
                      </div>
                      <div className="text-[14px] text-gray-400 pt-3">
                        <CurrentTimeShower />
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
    </div>
  );
}
