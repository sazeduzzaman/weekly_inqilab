import ExtraMenus from "@/components/SearchDropdown/ExtraMenus";
import { CategoryListProps } from "@/lib/types/CategoryDataType";
import Link from "next/link";
import React from "react";

export default function CategoryData({ categoryItems }: CategoryListProps) {
  const customOrder = [
    "বাংলাদেশ",
    "যুক্তরাষ্ট্র",
    "রাজনীতি",
    "খেলা",
    "বিনোদন",
    "আন্তর্জাতিক",
    "অর্থনীতি",
    "বিজ্ঞান",
  ];

  // Filter only those with bangla_name in customOrder
  const filteredItems = categoryItems.filter((item) =>
    customOrder.includes(item.bangla_name)
  );

  // Sort by custom order
  const sortedItems = filteredItems.sort(
    (a, b) =>
      customOrder.indexOf(a.bangla_name) - customOrder.indexOf(b.bangla_name)
  );

  return (
    <div className="container mx-auto hidden md:block">
      <div className="flex justify-between items-center">
        <ul className="flex items-center justify-center py-2 overflow-x-auto whitespace-nowrap">
          {sortedItems.map((item, index) => (
            <li key={index} className="flex items-center px-8 pt-2">
              <Link
                href={`/category/${item.name.replace(/\b\b/gi, "").replace(/\s+/g, "-").toLowerCase()}?id=${item.id}`}
                className="dark:text-white cta-menus text-white"
              >
                {item.bangla_name}
              </Link>
            </li>
          ))}
        </ul>
        <ExtraMenus categoryItems={categoryItems} />
      </div>
    </div>
  );
}
