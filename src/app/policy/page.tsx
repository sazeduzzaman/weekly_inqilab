import React from "react";
import type { Metadata } from "next";
import PolicyPage from "./ChildComps/PolicyPage";

// ✅ Static metadata for home page
export const metadata: Metadata = {
  title: "সাপ্তাহিক ইনকিলাব - সর্বশেষ বাংলা সংবাদ",
  description:
    "সাপ্তাহিক ইনকিলাব এ পড়ুন সর্বশেষ বাংলা খবর, রাজনীতি, খেলাধুলা, বিনোদন ও আরও অনেক কিছু। বাংলাদেশ ও বিশ্বের আপডেট সংবাদ সবার আগে।",
  keywords: [
    "সাপ্তাহিক ইনকিলাব",
    "বাংলা খবর",
    "নিউজ",
    "বাংলাদেশ",
    "খেলা",
    "রাজনীতি",
    "বিনোদন",
  ],
  metadataBase: new URL("https://weeklyinqilab.com"), // Optional but helps for og/twitter
  openGraph: {
    title: "সাপ্তাহিক ইনকিলাব - বাংলা খবর",
    description:
      "বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ পড়ুন সাপ্তাহিক ইনকিলাবে। সব সময় আপডেট থাকুন।",
    url: "https://weeklyinqilab.com",
    siteName: "সাপ্তাহিক ইনকিলাব",
    type: "website",
    images: [
      {
        // url: "https://admin.weeklyinqilab.com/images/inqilab-og-image.jpg",
        url: "/images/placeholderImage.webp",
        alt: "সাপ্তাহিক ইনকিলাব - বাংলা খবর",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক ইনকিলাব - বাংলা সংবাদ",
    description:
      "সাপ্তাহিক ইনকিলাব এ সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা ও বিনোদনের খবর পড়ুন।",
    images: ["/images/placeholderImage.webp"],
  },
};
const Page = () => {
  return (
    <>
      <PolicyPage />
    </>
  );
};

export default Page;
