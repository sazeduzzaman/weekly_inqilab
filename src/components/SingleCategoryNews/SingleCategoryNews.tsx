import React from "react";
import CategoryFeature from "./CategoryFeature";
import CategoryNonFeature from "./CategoryNonFeature";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  is_featured: number;
  news_title: string;
}

interface SingleCategoryNewsProps {
  singleCategoryData: NewsItem[];
}

const SingleCategoryNews = ({
  singleCategoryData,
}: SingleCategoryNewsProps) => {
  console.log(singleCategoryData, "singleCategoryData");
  const isFeatured = singleCategoryData.filter(
    (item) => item.is_featured === 1
  );
  const nonFeatured = singleCategoryData.filter(
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
