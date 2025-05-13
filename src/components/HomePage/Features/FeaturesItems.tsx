import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Mock Data for Features
const featureData = [
  {
    id: 1,
    title: "নওগাঁয় একই পরিবারের দুজনকে হত্যার অভিযোগে যুবক গ্রেফতার",
    imageUrl: "/images/news-8.jpg",
    altText: "হত্যার",
    link: "#",
  },
  {
    id: 2,
    title: "পাকিস্তান সিরিজের জন্য বিসিবিকে পরিবর্তিত সূচি পাঠাল পিসিবি",
    imageUrl: "/images/news-9.jpg",
    altText: "Shoes",
    link: "#",
  },
  {
    id: 3,
    title: "মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ",
    imageUrl: "/images/news-1.webp",
    altText: "Shoes",
    link: "#",
  },
  {
    id: 4,
    title: "মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ",
    imageUrl: "/images/news-2.webp",
    altText: "Shoes",
    link: "#",
  },
  {
    id: 5,
    title: "মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ",
    imageUrl: "/images/news-1.webp",
    altText: "Shoes",
    link: "#",
  },
  {
    id: 6,
    title: "মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ",
    imageUrl: "/images/news-2.webp",
    altText: "Shoes",
    link: "#",
  },
];

const FeaturesItems = () => {
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="flex justify-between items-center">
        <SectionTitle title="বৈশিষ্ট্য" />
        <CurrentTimeShower />
      </div>
      <div className="grid grid-cols-6 gap-3">
        {featureData.map((item) => (
          <div key={item.id}>
            <Link href={item.link}>
              <div className="card rounded-none shadow-sm">
                <figure className="relative h-[200px] w-full overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <Image
                    className="object-fill"
                    src={item.imageUrl}
                    alt={item.altText}
                    fill
                    priority
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesItems;
