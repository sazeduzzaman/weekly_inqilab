import Image from "next/image";
import React from "react";

const newsData = [
  {
    title: "মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ",
    date: "16 April 2025",
    image: "/images/news-1.webp",
  },
  {
    title: "রাজশাহীতে আমের মুকুলে মৌমাছির গুঞ্জন",
    date: "15 April 2025",
    image: "/images/news-1.webp",
  },
  {
    title: "পটুয়াখালীর নদীতে ধরা পড়ছে ইলিশ",
    date: "14 April 2025",
    image: "/images/news-1.webp",
  },
  {
    title: "বান্দরবানে পাহাড়ি ঝরনার সৌন্দর্য উপভোগ",
    date: "13 April 2025",
    image: "/images/news-1.webp",
  },
  {
    title: "নওগাঁয় ধান কাটার প্রস্তুতি চলছে",
    date: "12 April 2025",
    image: "/images/news-1.webp",
  },
  {
    title: "কক্সবাজারে পর্যটকের ভিড়",
    date: "11 April 2025",
    image: "/images/news-1.webp",
  },
];

const SaradeshNews = () => {
  return (
    <div>
      {newsData.map((item, index) => (
        <div
          key={index}
          className="card rounded-none card-side shadow-sm items-center mb-3"
        >
          <figure className="relative w-[150px] h-[135px] flex-none">
            <Image
              src={item.image}
              alt="News Thumbnail"
              fill
              className="object-cover"
              priority
            />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaradeshNews;
