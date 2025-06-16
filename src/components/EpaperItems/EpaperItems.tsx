"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CalendarCard from "@/utils/DatePicker/CalendarCard";

interface EpaperData {
  id: number;
  epaper_name: string;
  slug: string;
  epaper_title?: string;
  post_date?: string;
  epaper_image?: string;
  epaper_image_alt?: string;
  page_number?: number;
  total_pages?: number;
  epaper_pdf_url?: string;
  language?: string;
  region?: string;
  published_by?: string;
}

type Props = {
  epapersData: EpaperData[];
};

const EpaperItems = ({ epapersData }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sortedEpapers = [...epapersData].sort(
    (a, b) => (a.page_number ?? 0) - (b.page_number ?? 0)
  );

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : sortedEpapers.length - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev < sortedEpapers.length - 1 ? prev + 1 : 0
    );
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  if (sortedEpapers.length === 0) {
    return <div className="p-4">কোন পাতা পাওয়া যায়নি</div>;
  }

  return (
    <>
      {/* Left Sidebar */}
      <div className="order-2 lg:order-1 col-span-12 lg:col-span-2">
        <div className="card rounded-none shadow-sm mt-15 md:mt-5">
          <div className="card-header bg-black rounded-none text-center py-3 text-white">
            অনুসন্ধান করুন
          </div>
          <div className="card-body p-0 border-none">
            {/* CalendarCard component */}
            <CalendarCard date={selectedDate} onChange={handleDateChange} />
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
              {sortedEpapers.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleImageClick(index)}
                  className="cursor-pointer"
                >
                  <div className="text-center">
                    Page {item.page_number || index + 1}
                  </div>
                  <div
                    className={`w-full flex items-center relative h-[550px] md:h-[350px] rounded overflow-hidden ${
                      selectedIndex === index
                        ? "border-4 border-red-700"
                        : "border border-gray-200"
                    }`}
                  >
                    <Image
                      src={item.epaper_image ?? "/images/default-epaper.webp"}
                      alt={
                        item.epaper_image_alt ||
                        `Page ${item.page_number || index + 1}`
                      }
                      width={350}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
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
          <div
            className="relative w-full h-[500px] md:h-[1685px] shadow-sm"
            style={{ marginTop: "-5px" }}
          >
            <Image
              src={
                sortedEpapers[selectedIndex]?.epaper_image ??
                "/images/default-epaper.webp"
              }
              alt={
                sortedEpapers[selectedIndex]?.epaper_image_alt ||
                `Selected page ${selectedIndex + 1}`
              }
              width={1640}
              height={300}
              style={{ width: "100%", height: "auto" }}
              className="object-contain"
            />

            <button
              onClick={goToPrevious}
              className="absolute left-0 cursor-grab rounded-full top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-red-600 px-3 py-2"
            >
              <IoIosArrowBack size={30} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 cursor-grab rounded-full top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-red-600 px-3 py-2"
            >
              <IoIosArrowForward size={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpaperItems;
