"use client";
import React, { useState } from "react";

const PolicyPage = () => {
  const [activeTab, setActiveTab] = useState("bangla");
  return (
    <div className="container mx-auto px-4 py-10 bg-white text-gray-900">
      {/* Tabs */}
      <div className="flex items-center justify-center border-b border-gray-300 mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium cursor-grab ${
            activeTab === "bangla"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("bangla")}
        >
          বাংলায় পড়ুন
        </button>
        <button
          className={`ml-4 px-4 py-2 text-sm font-medium cursor-grab ${
            activeTab === "english"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("english")}
        >
          Read In English
        </button>
      </div>

      {/* Content */}
      {activeTab === "bangla" && (
        <div>
          <h1 className="text-3xl font-bold my-10 text-start">
            ইনকিলাব নিউজপেপার গোপনীয়তা নীতি
          </h1>
          <p className="mb-4">
            ইনকিলাব নিউজপেপার পাঠকদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করার জন্য
            প্রতিশ্রুতিবদ্ধ। আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই
            নীতিমালা মেনে নিতে সম্মত হচ্ছেন।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            ১. আমরা যেসব তথ্য সংগ্রহ করি
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>নাম, ইমেইল, ফোন নম্বর, ঠিকানা</li>
            <li>ব্যবহারকারীর লগইন ও নিবন্ধনের তথ্য</li>
            <li>
              ওয়েবসাইট ব্যবহারের সময় সংগৃহীত IP ঠিকানা, ব্রাউজারের ধরন, ডিভাইস
              তথ্য
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            ২. আমরা এই তথ্য কীভাবে ব্যবহার করি
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>সেবা প্রদান এবং গ্রাহক সহায়তার জন্য</li>
            <li>ওয়েবসাইট উন্নয়ন ও নিরাপত্তা নিশ্চিত করতে</li>
            <li>নতুন আপডেট ও সংবাদ পাঠাতে (আপনার অনুমতি নিয়ে)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">৩. কুকিজ নীতিমালা</h2>
          <p className="mb-4">
            আমরা ওয়েবসাইটের কার্যকারিতা উন্নত করতে কুকিজ ব্যবহার করি। আপনি
            চাইলে আপনার ব্রাউজার সেটিংস থেকে কুকিজ অক্ষম করতে পারেন।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">৪. তথ্য সুরক্ষা</h2>
          <p className="mb-4">
            আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে আমরা সর্বোচ্চ প্রচেষ্টা করি।
            ডেটা এনক্রিপশন, নিরাপদ সার্ভার ও নিয়মিত পর্যবেক্ষণের মাধ্যমে তথ্য
            রক্ষা করা হয়।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">৫. আপনার অধিকার</h2>
          <p className="mb-4">
            আপনি চাইলে আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন বা মুছে ফেলার
            অনুরোধ করতে পারেন।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">৬. পরিবর্তন</h2>
          <p className="mb-4">
            আমরা যেকোনো সময় এই গোপনীয়তা নীতি পরিবর্তন করতে পারি। পরিবর্তনগুলি
            আমাদের ওয়েবসাইটে প্রকাশ করা হবে।
          </p>
        </div>
      )}

      {activeTab === "english" && (
        <div>
          <h1 className="text-3xl font-bold my-10 text-start">
            Inqilab Newspaper Privacy Policy
          </h1>
          <p className="mb-4">
            Inqilab Newspaper is committed to safeguarding the personal
            information of our readers. By using our website, you agree to the
            practices described in this policy.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Name, email, phone number, and address</li>
            <li>User login and registration details</li>
            <li>
              Automatically collected info like IP address, browser type, device
              info
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>To provide services and customer support</li>
            <li>To improve website functionality and ensure security</li>
            <li>To send newsletters and updates (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies Policy</h2>
          <p className="mb-4">
            We use cookies to enhance user experience. You can disable cookies
            from your browser settings.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4">
            We implement strong measures to protect your data including
            encryption, secure servers, and regular monitoring.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
          <p className="mb-4">
            You may request access, correction, or deletion of your personal
            data at any time.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            6. Changes to the Policy
          </h2>
          <p className="mb-4">
            We reserve the right to change this policy at any time. Updates will
            be posted on our website.
          </p>
        </div>
      )}

      <p className="mt-10 text-start text-sm text-gray-500">
        Last updated: May 25, 2025
      </p>
    </div>
  );
};

export default PolicyPage;
