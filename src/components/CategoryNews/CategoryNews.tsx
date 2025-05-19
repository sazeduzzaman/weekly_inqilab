import FeaturedCategoryNews from "./FeaturedCategoryNews";
import NonFeaturedCategoryNews from "./NonFeaturedCategoryNews";

interface NewsItem {
  id: number;
  title: string;
  news_title: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  news_short_brief: string;
  category_name: string;
  // Add more fields if needed
}

interface Props {
  categoryId: number;
}

export default async function CategoryNews({ categoryId }: Props) {
  const res = await fetch(
    `https://backoffice.ajkal.us/category-news/${categoryId}`,
    {
      next: { revalidate: 60 },
    }
  );

  const json = await res.json();

  const categoryItems: NewsItem[] = Array.isArray(json)
    ? json
    : json.data || json.news || [];

  const featureData = categoryItems.filter((item) => item.is_featured === 1);
  const nonFeatureData = categoryItems.filter((item) => item.is_featured === 2);

  return (
    <div className="space-y-8">
      <div>
        <FeaturedCategoryNews featureData={featureData} />
        <NonFeaturedCategoryNews nonFeatureData={nonFeatureData} />
      </div>
    </div>
  );
}
