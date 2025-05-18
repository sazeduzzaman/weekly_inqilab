import React from "react";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  is_featured: number;
  news_title: string;
}

interface IsFeatureProps {
  isFeatured: NewsItem[];
}
const CategoryFeature = ({ isFeatured }: IsFeatureProps) => {
  console.log(isFeatured, "isFeatured");
  return (
    <div>
      {isFeatured.map((item, index) => (
        <div key={index}>
          <p>{item.news_title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryFeature;
