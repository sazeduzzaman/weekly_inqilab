import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuDoorOpen } from "react-icons/lu";
import FormsItems from "./FormItems/FormsItems";

const Page = () => {
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
          নিবন্ধন করুন ।
        </h2>

        <FormsItems />

        <div className="text-center text-sm text-gray-600 mt-6">
          ইতিমধ্যে একাউন্ট আছে?
          <Link
            href="/auth/login"
            className="text-indigo-600 font-medium ml-1 hover:underline"
          >
            লগইন করুন
          </Link>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          নিবন্ধন করে আপনি আমাদের
          <Link
            href="/terms"
            className="mx-1 border-b border-gray-400 border-dotted"
          >
            পরিষেবা শর্তাবলী
          </Link>
          এবং
          <Link
            href="/policy"
            className="mx-1 border-b border-gray-400 border-dotted"
          >
            গোপনীয়তা নীতি
          </Link>
          মেনে নিচ্ছেন।
        </p>
      </div>
    </div>
  );
};

export default Page;
