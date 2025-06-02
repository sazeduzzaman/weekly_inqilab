import FeaturedCategoryNews from "./FeaturedCategoryNews";
import NonFeaturedCategoryNews from "./NonFeaturedCategoryNews";

interface NewsItem {
  id: number;
  title: string;
  news_title: string;
  is_featured: number;
  thumbnail: string;
  news_time: string;
  news_short_brief: string;
  category_name: string;
  bangla_title: string;
  published_at: string;
  summary: string;
  name: string;
  bangla_summary: string;
  author: string;
  slug: string;
  category_bangla_name: string;
  subCategory_name: string;
  subCategory_bangla_name: string;
}

interface Props {
  categoryItems: NewsItem[];
}

export default function CategoryNews({ categoryItems }: Props) {
  const isFeatured = categoryItems.filter(
    // if date id 1 feature then add in isFeature
    (item) => item.is_featured === 1
  );
  const featureData = isFeatured;

  const isnonFeatured = categoryItems.filter((item) => item.is_featured === 0);
  const nonFeatureData = isnonFeatured;

  return (
    <div className="space-y-8">
      <div className="px-10 md:px-0">
        <FeaturedCategoryNews featureData={featureData} />
        <NonFeaturedCategoryNews nonFeatureData={nonFeatureData} />
      </div>
    </div>
  );
}
