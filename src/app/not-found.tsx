"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6">
      {/* Image for 404 */}
      <div className="relative w-full max-w-md h-64 sm:h-80">
        <Image
          src="/images/13.png"
          alt="পৃষ্ঠা পাওয়া যায়নি"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Subtitle */}
      <h1 className="mt-6 text-6xl font-bold text-gray-900">৪০৪</h1>
      <p className="mt-2 text-xl text-gray-700 text-center">
        ওহ! পৃষ্ঠা পাওয়া যায়নি
      </p>
      <p className="mt-1 text-gray-500 text-center max-w-md">
        আপনি যে পৃষ্ঠা খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে।
      </p>

      {/* Back button */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-6 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
      >
        <BsArrowLeft className="w-5 h-5" />
        হোমে ফিরে যান
      </Link>
    </div>
  );
}
