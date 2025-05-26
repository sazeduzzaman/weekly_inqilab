// app/category/[id]/page.tsx

import CategoryNews from "@/components/CategoryNews/CategoryNews";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";

export const dynamic = "force-dynamic";
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
  slug: string;
  subCategory_name: string;
  author: string;
  subCategory_bangla_name: string;
}
export default async function Page({ params }: any) {
  const { slug } =await params; // <-- no await here

  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/category-news/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );
  const json = await res.json();
  const { category, data } = json;

  const categoryItems: NewsItem[] = Array.isArray(data) ? data : [];
  return (
    <div className="container mx-auto">
      <div className="mt-4 flex justify-between border-b mb-4 ">
        <p className="font-semibold text-1xl ft-size">
          {category.bangla_name} নিউজ
        </p>
        <CurrentTimeShower />
      </div>
      <CategoryNews categoryItems={categoryItems} />
    </div>
  );
}
