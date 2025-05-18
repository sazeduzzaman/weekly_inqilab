import React from "react";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  is_featured: number;
  news_title: string;
}

interface NonFeatureProps {
  nonFeatured: NewsItem[];
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
