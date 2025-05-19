// app/category/[id]/page.tsx

import CategoryNews from "@/components/CategoryNews/CategoryNews";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";

export const dynamic = "force-dynamic";
interface NewsItem {
  id: number;
  title: string;
  news_title: string;
  is_featured: number;
  title_img: string;
  news_time: string;
  category_name_bangla: string;
}
export default async function Page({ searchParams }: any) {
  const resolvedSearchParams = await searchParams;
  const categoryId = resolvedSearchParams.id;
  console.log(resolvedSearchParams, "categoryName");

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
  const categoryItemsName = categoryItems[1].category_name_bangla;
  return (
    <div className="container mx-auto">
      <div className="mt-4 flex justify-between border-b mb-4 ">
        <p className="font-semibold text-2xl">{categoryItemsName}</p>
        <CurrentTimeShower />
      </div>
      <CategoryNews categoryId={categoryId} />
    </div>
  );
}
