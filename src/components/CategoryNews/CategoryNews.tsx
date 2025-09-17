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
  // Normalize and trim published_at strings
  const normalizedItems: NewsItem[] = categoryItems.map((item) => ({
    ...item,
    is_featured: Number(item.is_featured),
    published_at: item.published_at.trim(),
  }));

  // Sort by published_at latest first
  const sortedItems = normalizedItems.sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  // Slice data
  const featured = sortedItems.slice(0, 5); // latest 5
  const nonFeatured = sortedItems.slice(5, 25); // 6 to 25 (20 items)

  return (
    <div className="space-y-8">
      <div className="px-10 md:px-0">
        <FeaturedCategoryNews featureData={featured} />
        <NonFeaturedCategoryNews nonFeatureData={nonFeatured} />
      </div>
    </div>
  );
}
