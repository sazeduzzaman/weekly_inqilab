import { CommonNewsTypes } from "@/lib/types/CommonNewsTypes";
import React from "react";

interface NonFeatureProps {
  nonFeatured: CommonNewsTypes[];
}

const CategoryNonFeature = ({ nonFeatured }: NonFeatureProps) => {
  console.log(nonFeatured, "nonFeatured");
  return (
    <div>
      {nonFeatured.map((item, index) => (
        <div key={index}>
          <p>{item.news_title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryNonFeature;
