import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuDoorOpen } from "react-icons/lu";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 py-15">
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
          লগইন করুন।
        </h2>
        <form className="space-y-5 mt-15">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>
            <input
              type="email"
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
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="drawer-button btn btn-black px-5 py-6 search-menu w-1/1"
            >
              লগইন করুন <LuDoorOpen size={30} />
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 mt-15">
          একাউন্ট নেই?
          <Link
            href="/auth/register"
            className="text-indigo-600 font-medium ml-1 hover:underline"
          >
            এখন নিবন্ধন করুন
          </Link>
        </div>
        <p className="text-xs text-gray-500 text-center mt-4">
          লগইন করে আপনি আমাদের
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

export default LoginPage;
