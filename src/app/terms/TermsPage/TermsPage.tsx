"use client";
import React, { useState } from "react";

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState("bangla");
  return (
    <div className="container mx-auto px-4 py-10 bg-white text-gray-900">
      {/* Tabs */}
      <div className="flex items-center justify-center border-b border-gray-300 mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "bangla"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("bangla")}
        >
          বাংলা
        </button>
        <button
          className={`ml-4 px-4 py-2 text-sm font-medium ${
            activeTab === "english"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-indigo-500"
          }`}
          onClick={() => setActiveTab("english")}
        >
          English
        </button>
      </div>

      {/* Content */}
      {activeTab === "bangla" && (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-start">
            ইনকিলাব নিউজপেপার ব্যবহারের শর্তাবলী
          </h1>
          <p className="mb-4">
            আমাদের ওয়েবসাইট ব্যবহারের মাধ্যমে আপনি নিম্নলিখিত শর্তাবলীর সাথে
            সম্মত হচ্ছেন। অনুগ্রহ করে শর্তাবলী মনোযোগ সহকারে পড়ুন।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            ১. ব্যবহারকারীর দায়িত্ব
          </h2>
          <p className="mb-4">
            আপনি ওয়েবসাইট ব্যবহারকালে প্রদত্ত সকল তথ্যের সঠিকতা ও প্রাসঙ্গিকতার
            জন্য দায়ী থাকবেন। মিথ্যা বা বিভ্রান্তিকর তথ্য প্রদান আইনত দণ্ডনীয়।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            ২. কন্টেন্টের মালিকানা
          </h2>
          <p className="mb-4">
            ওয়েবসাইটের সকল কন্টেন্ট (লেখা, ছবি, ভিডিও ইত্যাদি) ইনকিলাবের
            সম্পত্তি এবং অনুমতি ছাড়া কপি বা ব্যবহার নিষিদ্ধ। আপনি এই কন্টেন্ট
            বাণিজ্যিকভাবে ব্যবহার করতে পারবেন না।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            ৩. তৃতীয় পক্ষের লিঙ্ক
          </h2>
          <p className="mb-4">
            ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিঙ্ক থাকতে পারে, যেগুলোর উপর
            ইনকিলাবের কোনো নিয়ন্ত্রণ নেই এবং তাদের বিষয়বস্তুর জন্য ইনকিলাব
            দায়ী নয়।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">৪. পরিবর্তন</h2>
          <p className="mb-4">
            ইনকিলাব যে কোনো সময় শর্তাবলী পরিবর্তন করতে পারে। পরিবর্তনসমূহ এই
            পেইজে প্রকাশ করা হবে এবং আপনি এসব পরিবর্তনের জন্য দায়ী থাকবেন।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">৫. ব্যবহার বিধি</h2>
          <p className="mb-4">
            আপনি ওয়েবসাইটে অবৈধ কার্যক্রম পরিচালনা করতে পারবেন না যেমন:
            হ্যাকিং, স্প্যামিং, বা অন্য ব্যবহারকারীর ব্যক্তিগত তথ্য সংগ্রহ।
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">৬. দায়মুক্তি</h2>
          <p className="mb-4">
            ওয়েবসাইট ব্যবহারে আপনার কোন ক্ষতি হলে ইনকিলাব তার জন্য দায়ী থাকবে
            না। ওয়েবসাইটটি যেমন আছে ভিত্তিতে প্রদান করা হয়।
          </p>
        </div>
      )}

      {activeTab === "english" && (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Inqilab Newspaper Terms of Use
          </h1>
          <p className="mb-4">
            By accessing our website, you agree to the following terms and
            conditions. Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. User Responsibility
          </h2>
          <p className="mb-4">
            You are responsible for the accuracy and relevance of all
            information you provide while using our services. Providing false or
            misleading data may result in termination.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Content Ownership
          </h2>
          <p className="mb-4">
            All content on the website (text, images, videos, etc.) is the
            property of Inqilab and may not be copied or used without
            permission. Commercial use is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Third-Party Links
          </h2>
          <p className="mb-4">
            Our site may contain links to third-party websites, which are not
            under our control and we are not responsible for their content.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes</h2>
          <p className="mb-4">
            Inqilab reserves the right to change these terms at any time.
            Updates will be posted on this page and you are responsible for
            reviewing them.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Acceptable Use</h2>
          <p className="mb-4">
            You may not use this site for any unlawful purposes such as hacking,
            spamming, or collecting personal data of other users.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimer</h2>
          <p className="mb-4">
            Inqilab is not liable for any damages resulting from the use of this
            website. All content is provided as is.
          </p>
        </div>
      )}

      <p className="mt-10 text-start text-sm text-gray-500">
        Last updated: May 25, 2025
      </p>
    </div>
  );
};

export default TermsPage;
