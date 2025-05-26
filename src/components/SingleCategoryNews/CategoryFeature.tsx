import { NewsItem } from "@/lib/types/CommonNewsTypes";
import Link from "next/link";
import React from "react";

interface IsFeatureProps {
  isFeatured: NewsItem[];
}
const CategoryFeature = ({ isFeatured }: IsFeatureProps) => {
  return (
    <div>
      {isFeatured.map((item, index) => (
        <Link
          href='/'
          key={index}
        >
          <p>{(item as any).bangla_title}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryFeature;
