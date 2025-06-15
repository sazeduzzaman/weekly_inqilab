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
  // Normalize the data to ensure is_featured is a number
  const normalizedItems: NewsItem[] = categoryItems.map((item) => ({
    ...item,
    is_featured: Number(item.is_featured),
  }));

  // Filter after normalization
  const isFeatured = normalizedItems.filter((item) => item.is_featured === 1);
  const isNonFeatured = normalizedItems.filter(
    (item) => item.is_featured === 0
  );

  return (
    <div className="space-y-8">
      <div className="px-10 md:px-0">
        <FeaturedCategoryNews featureData={isFeatured} />
        <NonFeaturedCategoryNews nonFeatureData={isNonFeatured} />
      </div>
    </div>
  );
}
