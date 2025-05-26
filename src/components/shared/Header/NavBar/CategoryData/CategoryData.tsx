import { CategoryListProps } from "@/lib/types/CategoryDataType";
import Link from "next/link";
import React from "react";

export default function CategoryData({ categoryItems }: CategoryListProps) {
  const categoryDataItems = categoryItems.slice(0, 13);

  return (
    <div className="container mx-auto">
      <ul className="flex items-center justify-center py-2 overflow-x-auto whitespace-nowrap">
        {categoryDataItems.map((item, index) => (
          <li key={index} className="flex items-center px-8 pt-2">
            <Link
              href={`/category/${item.slug}`}
              className="dark:text-white cta-menus text-white"
            >
             {item.bangla_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
