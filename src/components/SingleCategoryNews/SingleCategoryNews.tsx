import React from "react";
import CategoryFeature from "./CategoryFeature";
import CategoryNonFeature from "./CategoryNonFeature"; // assuming this works similarly
import { CommonNewsTypesOF } from "@/lib/types/CommonNewsTypesOF";

interface SingleCategoryNewsProps {
  singleCategoryData: CommonNewsTypesOF[];
}

const SingleCategoryNews = ({ singleCategoryData }: SingleCategoryNewsProps) => {
  const isFeatured = singleCategoryData.filter((item) => item.is_featured === 1);
  const nonFeatured = singleCategoryData.filter((item) => item.is_featured === 2);

  return (
    <div>
      <div>
        <CategoryFeature isFeatured={isFeatured} />
      </div>
      <div className="divider divider-primary">Non Feature</div>
      <div>
        <CategoryNonFeature nonFeatured={nonFeatured} />
      </div>
    </div>
  );
};

export default SingleCategoryNews;
