// app/details/[categoryDetails]/[newsDetails]/page.tsx

import NewsDetails from "@/components/NewsDetails/NewsDetails";
import { Metadata } from "next";
import NotFoundPage from "@/app/_not-found/page";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const newsId = resolvedParams.newsDetails;

  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/news-details/${newsId}`
  );

  if (!res.ok) {
    return {
      title: "সংবাদ বিস্তারিত - Error",
      description: "সংবাদ ডেটা পাওয়া যায়নি।",
    };
  }

  const data = await res.json();
  const metaData = data.news_details;

  // Customize title and description based on fetched data
  return {
    title: metaData.bangla_title || "সংবাদ বিস্তারিত",
    description:
      metaData.bangla_summary || "বাংলা সংবাদ বিস্তারিত পড়ুন এবং আপডেট থাকুন।",
    keywords: ["সংবাদ", "বাংলা", "নিউজ", "বাংলাদেশ"],
    openGraph: {
      title: metaData.bangla_title || "সংবাদ বিস্তারিত",
      description:
        metaData.bangla_summary ||
        "বাংলা সংবাদ বিস্তারিত পড়ুন এবং আপডেট থাকুন।",
      images: [
        {
          url: metaData.thumbnail || "/images/placeholderImage.webp",
          alt: metaData.category_bangla_name || "সংবাদ",
        },
      ],
    },
  };
}
export default async function Page({ params }: any) {
  const resolvedParams = await params;
  const newsId = resolvedParams.newsDetails;

  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/news-details/${newsId}`,
    {
      // next: { revalidate: 60 },
      cache: "no-store", // force no caching
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch news data");
    return <NotFoundPage />;
  }

  const data = await res.json();
  const singelNewsItems = data;

  return (
    <div className="p-4">
      <NewsDetails singelNewsItems={singelNewsItems} />
    </div>
  );
}
