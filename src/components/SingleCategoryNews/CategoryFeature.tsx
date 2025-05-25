import { CommonNewsTypes } from "@/lib/types/CommonNewsTypes";
import Link from "next/link";
import React from "react";

interface IsFeatureProps {
  isFeatured: CommonNewsTypes[];
}
const CategoryFeature = ({ isFeatured }: IsFeatureProps) => {
  return (
    <div>
      {isFeatured.map((item, index) => (
        <Link
          href='/'
          key={index}
        >
          <p>{item.news_title}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryFeature;
