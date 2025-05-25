import { CategoryListProps } from "@/lib/types/CategoryDataType";
import React from "react";

export default function FooterCategoryItems({
  categoryItems,
}: CategoryListProps) {
  const categoryDataItemsPartOne = categoryItems.slice(0, 6);
  const categoryDataItemsPartTwo = categoryItems.slice(6, 12);

  return (
    <>
      <nav className="flex flex-col justify-center items-center sm:items-start">
        <h6 className="footer-title">Category</h6>
        {categoryDataItemsPartOne.map((item, index) => (
          <a key={index} className="link link-hover">
            {item.name}
          </a>
        ))}
      </nav>

      <nav className="flex flex-col justify-center items-center sm:items-start">
        <h6 className="footer-title">Company</h6>
        {categoryDataItemsPartTwo.map((item, index) => (
          <a key={index} className="link link-hover">
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
}
