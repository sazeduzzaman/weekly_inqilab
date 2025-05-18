import { CommonNewsTypes } from "@/lib/types/CommonNewsTypes";
import React from "react";

// Optional: define News type for type safety
// interface News {
//   news_title: string;
//   category_name: string;
//   news_author: string;
//   news_detail: string;
// }

interface Params {
  params: {
    categoryDetails: string;
    newDetails: string;
  };
}

export default async function Page({ params }: Params) {
  const { categoryDetails, newDetails } = await params;
  console.log(categoryDetails, "categoryDetails");

  // ✅ Fine to use revalidate for ISR
  const res = await fetch(
    `https://backoffice.ajkal.us/news-detail/${newDetails}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return <div>❌ News not found.</div>;
  }

  const json = await res.json();

  if (!json?.data) {
    return <div>❌ News not found.</div>;
  }

  const newsDetails: CommonNewsTypes = json.data;
  console.log(newsDetails.category_name, "newsDetails");

  return (
    <div className="bg-white dark:bg-white">
      <div className="container mx-auto sm:px-0">
        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12">
          <div className="col-span-12 xl:col-span-9">
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
              {/* News Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {newsDetails.news_title}
              </h1>
              {/* Author and Date */}
              <div className="text-sm text-gray-500 mb-4 flex justify-between">
                <span>🖊️ লেখক: নিউজ ডেস্ক</span>
                <span>🕒 প্রকাশ: ১৭ মে ২০২৫</span>
              </div>
              {/* Title Image */}
              {/* <div className="mb-6">
                <img
                  src="/path/to/uploads/17474680564888873.jpg"
                  alt="News Image"
                  className="w-full rounded-md object-cover"
                />
              </div> */}
              {/* News Brief */}
              <p className="text-base text-gray-700 italic mb-4">
                সময় মিডিয়া লিমিটেডের লাইসেন্সধারী ও প্রায় ১৮ শতাংশ শেয়ারের মালিক
                আহমেদ জোবায়ের টেলিভিশনটির ব্যবস্থাপনার দায়িত্ব ফিরে পেতে এই
                মামলাটি করেন
              </p>
              {/* News Detail */}
              <div className="text-gray-800 leading-relaxed space-y-4 text-justify">
                <p>
                  <strong>
                    দেশের জনপ্রিয় টেলিভিশন চ্যানেল সময় টিভির পরিচালনা নিয়ে
                    হাইকোর্টে মামলা চলছে গেলো বছরের ১৪ আগস্ট থেকে...
                  </strong>
                </p>
                <p>
                  সময় মিডিয়া লিমিটেড বনাম আহমেদ জোবায়ের শিরোনামের আলোচিত এই
                  মামলা...
                </p>
                {/* Add all the content from news_detail here using <p> elements */}
              </div>
              {/* Footer */}
              <div className="mt-8 text-sm text-gray-400">
                <p>
                  📌 বিভাগ:{" "}
                  <span className="text-blue-500 font-semibold">বাংলাদেশ</span>
                </p>
                <p>🧾 ভিউ: 11 বার</p>
                <p className="mt-2">
                  সূত্র: <span className="italic text-gray-500">আজকাল/এজে</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-3">
            <p className="text-black">Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
