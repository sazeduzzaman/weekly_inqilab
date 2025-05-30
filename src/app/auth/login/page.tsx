"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuDoorOpen } from "react-icons/lu";
import { toast } from "react-hot-toast"; // Optional: for showing toast messages
import type { Metadata } from "next";

// ✅ Static metadata for home page
export const metadata: Metadata = {
  title: "লগিন করুন | সাপ্তাহিক ইনকিলাব",
  description:
    "সাপ্তাহিক ইনকিলাব-এ যুক্ত হোন। বাংলা সংবাদ পড়তে এবং আরও অনেক ফিচার উপভোগ করতে লগিন করুন।",
  keywords: ["লগিন", "রেজিস্টার", "ইনকিলাব", "বাংলা নিউজ", "একাউন্ট তৈরি"],
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
        // url: "https://v2.weeklyinqilab.com/images/inqilab-og-image.jpg",
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content");

    const payload = { email, password };

    try {
      const res = await fetch("https://v2.weeklyinqilab.com/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // important!
          "X-CSRF-TOKEN": csrfToken || "",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      try {
        const result = JSON.parse(text);

        if (res.ok) {
          toast.success("লগইন সফল হয়েছে!");
          form.reset();
          // window.location.href = "/dashboard"; // optional redirect
        } else {
          toast.error("লগইন ব্যর্থ হয়েছে: " + result.message);
        }
      } catch {
        console.error("Failed to parse JSON. Server returned:", text);
        toast.error("সার্ভার থেকে অপ্রত্যাশিত উত্তর এসেছে।");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("সার্ভার ত্রুটি হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Inqilab Logo"
              width={200}
              height={80}
            />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          লগইন করুন
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="drawer-button btn btn-black px-5 py-5 search-menu w-100"
          >
            লগইন করুন <LuDoorOpen size={30} />
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          একাউন্ট নেই?
          <Link
            href="/auth/register"
            className="text-indigo-600 font-medium ml-1 hover:underline"
          >
            নিবন্ধন করুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
