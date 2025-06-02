// app/category/[id]/page.tsx

import CategoryNews from "@/components/CategoryNews/CategoryNews";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";
import Image from "next/image";

export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: any) {
  const { slug } = await params; // <-- no await here

  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/category-news/${slug}`,
    {
      // next: { revalidate: 60 },
      cache: "no-store", // force no caching
    }
  );

  console.log(slug);
  console.log(`https://v2.weeklyinqilab.com/api/v1/category-news/${slug}`);
  if (!res.ok) {
    return {
      title: "সংবাদ বিস্তারিত - Error",
      description: "সংবাদ ডেটা পাওয়া যায়নি।",
    };
  }

  const data = await res.json();
  const metaData = data.category || {};

  return {
    title:
      metaData.bangla_name +
        " || " +
        "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর এবং নিউজ" || "",
    description:
      "সাপ্তাহিক ইনকিলাব এ সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন, এবং আরও অনেক বিষয় পড়ুন। সর্বদা আপডেট থাকুন।",
    keywords: [
      "সাপ্তাহিক ইনকিলাব",
      "বাংলা সংবাদ",
      "নিউজ",
      "বাংলাদেশ",
      "খেলা",
      "বিনোদন",
    ],
    openGraph: {
      title:
        metaData.bangla_name +
          " || " +
          "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর এবং নিউজ" || "",
      description:
        "সাপ্তাহিক ইনকিলাব এ সর্বশেষ বাংলা সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন, এবং আরও অনেক বিষয় পড়ুন। সর্বদা আপডেট থাকুন।",
      images: [
        {
          url: "/images/placeholderImage.webp",
          alt:
            metaData.bangla_name +
              " || " +
              "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা খবর এবং নিউজ" || "",
        },
      ],
    },
  };
}

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
  category_bangla_name: string;
  subCategory_bangla_name: string;
  bangla_name: string;
}
export default async function Page({ params }: any) {
  const { slug } = await params; // <-- no await here

  const res = await fetch(
    `https://v2.weeklyinqilab.com/api/v1/category-news/${slug}`,
    {
      // next: { revalidate: 60 },
      cache: "no-store", // force no caching
    }
  );
  const json = await res.json();
  const { category, data } = json;

  const categoryItems: NewsItem[] = Array.isArray(data) ? data : [];
  return (
    <div className="container mx-auto">
      <div className="mt-4 mb-4 px-10 md:px-0 border-b flex flex-col md:flex-row justify-between">
        <p className="font-semibold text-1xl ft-size">
          {category?.bangla_name ?? "অনির্ধারিত"} নিউজ
        </p>
        <CurrentTimeShower />
      </div>

      {categoryItems.length > 0 ? (
        <CategoryNews categoryItems={categoryItems} />
      ) : (
        <div className="text-center justify-center items-center flex h-screen">
          <div>
            <h2 className="text-4xl font-bold text-gray-700">
              কোনো সংবাদ পাওয়া যায়নি
            </h2>
            <p className="mt-2 text-gray-500">
              অনুগ্রহ করে পরে আবার চেষ্টা করুন অথবা অন্য ক্যাটেগরি নির্বাচন
              করুন।
            </p>

            <div>
              <Image
                className="flex justify-center mx-auto"
                src="/images/no-data-found.jpg"
                alt="Next.js logo"
                width={800}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
