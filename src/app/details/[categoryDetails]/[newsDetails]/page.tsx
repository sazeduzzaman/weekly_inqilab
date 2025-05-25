// app/details/[categoryDetails]/[newsDetails]/page.tsx

import NewsDetails from "@/components/NewsDetails/NewsDetails";

export const dynamic = "force-dynamic";

export default async function Page({ params }: any) {
  const resolvedParams = await params;

  const newsId = resolvedParams.newsDetails;


  const res = await fetch(`https://backoffice.ajkal.us/news-detail/${newsId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Failed to fetch news data");
    return <p>Failed to fetch news data</p>;
  }

  const data = await res.json();
  const singelNewsItems = data.data;

  return (
    <div className="p-4">
      <NewsDetails singelNewsItems={singelNewsItems} />
    </div>
  );
}
