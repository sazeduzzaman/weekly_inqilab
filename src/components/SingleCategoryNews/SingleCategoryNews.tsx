import React from "react";
import CategoryFeature from "./CategoryFeature";
import CategoryNonFeature from "./CategoryNonFeature";
import { CommonNewsTypes } from "@/lib/types/CommonNewsTypes";

interface SingleCategoryNewsProps {
  singleCategoryData: CommonNewsTypes[];
}

const SingleCategoryNews = ({
  singleCategoryData,
}: SingleCategoryNewsProps) => {
  //   Filter is the data Featured Or Not
  const isFeatured = singleCategoryData.filter(
    // if date id 1 feature then add in isFeature
    (item) => item.is_featured === 1
  );
  const nonFeatured = singleCategoryData.filter(
    // if date id 2 non feature then add in nonFeature
    (item) => item.is_featured === 2
  );

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
