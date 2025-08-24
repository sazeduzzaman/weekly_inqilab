import NewsTimeShower from "@/utils/NewsTimeShower/NewsTimeShower";
import { useState } from "react";

export default function VideoNewsIframe({ itemData, fontSize }: any) {
  return (
    <div>
      <h1
        className="card-title inline-block border-b-2 border-current mb-4"
        style={{ fontSize: `${fontSize * 1.2}px` }}
      >
        {itemData.category_bangla_name ??
          itemData.subCategory_bangla_name ??
          "Inqilab"}
      </h1>

      <div className="relative w-full h-72 md:h-[500px] rounded-lg overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={
            itemData.video_url ||
            "https://www.youtube.com/embed/7MnspAYqEww?si=njgHsegNFUAa15LC"
          }
          title={itemData.bangla_title || "Video News"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="mt-4 flex items-center">
        <p
          className="text-base font-medium pt-2 lg:pt-0"
          style={{ fontSize: `${fontSize * 0.9}px` }}
        >
          {itemData.author ?? "প্রকাশিত:"}
        </p>
        <p
          className="text-gray-500 flex justify-center sm:justify-start flex-wrap ps-3"
          style={{ fontSize: `${fontSize * 0.8}px` }}
        >
          <NewsTimeShower newsTime={itemData.published_at} />
        </p>
      </div>
      <div>
        <h2
          className="mb-5 text-gray-800 leading-relaxed pt-3 text-justify"
          style={{ fontSize: `${fontSize}px` }}
        >
          {itemData.bangla_summary ?? ""}
        </h2>
      </div>
    </div>
  );
}
