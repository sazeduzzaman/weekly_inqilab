<<<<<<< HEAD
export default async function ProductDetails({
  params,
}: {
  params: { categoryDetails: string; newsDetails: string };
}) {
  const { categoryDetails, newsDetails } = await params;

  return (
    <h1>
      Details for category: {categoryDetails}, News: {newsDetails}
    </h1>
=======
// app/details/[categoryDetails]/[newsDetails]/page.tsx

import NewsDetails from "@/components/NewsDetails/NewsDetails";

export const dynamic = "force-dynamic";

export default async function Page({ params }: any) {
  const resolvedParams = await params;

  const newsId = resolvedParams.newsDetails;

  console.log("Fetching news for ID:", newsId);

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
>>>>>>> bb0290d37c227578e2d795058f30949cb1acc760
  );
}
