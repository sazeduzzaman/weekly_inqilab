"use client";
import React, { useState } from "react";


const AboutPage = () => {
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

      {/* Bangla Content */}
      {activeTab === "bangla" && (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-start">আমাদের সম্পর্কে</h1>
          <p className="mb-4">
            ইনকিলাব নিউজপেপার ১৯৮৬ সালে প্রতিষ্ঠিত একটি অন্যতম বিশ্বাসযোগ্য ও জনপ্রিয় সংবাদ মাধ্যম। আমাদের মূল লক্ষ্য
            দেশের ও বিশ্বের সাম্প্রতিক ও গুরুত্বপূর্ণ ঘটনা পাঠকদের কাছে সঠিক ও নির্ভরযোগ্য তথ্য হিসেবে পৌঁছে দেয়া।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">ইতিহাস ও ঐতিহ্য</h2>
          <p className="mb-4">
            ইনকিলাব দীর্ঘদিন ধরে সংবাদ মাধ্যম হিসেবে সামাজিক পরিবর্তন ও জনগণের সচেতনতা বৃদ্ধিতে গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে। স্বাধীনতার পর থেকে গণতন্ত্র ও মানবাধিকার প্রতিষ্ঠায় আমাদের অবদান অনস্বীকার্য। সময়ের সঙ্গে তাল মিলিয়ে ডিজিটাল নিউজ প্ল্যাটফর্মেও আমরা সক্রিয়।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">আমাদের মিশন</h2>
          <p className="mb-4">
            সংবাদ পরিবেশনে নিরপেক্ষতা বজায় রেখে জনগণকে সঠিক তথ্য সরবরাহ করা এবং সমাজের নৈতিক উন্নয়নে ভূমিকা রাখা। আমরা বিশ্বাস করি, তথ্যের স্বাধীনতা হল গণতন্ত্রের মেরুদণ্ড।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">ভিশন</h2>
          <p className="mb-4">
            একটি শক্তিশালী ও সৎ সাংবাদিকতা প্রতিষ্ঠা করে সমাজের উন্নতি ও শান্তি নিশ্চিত করা। নতুন প্রযুক্তি ও আধুনিক গবেষণার মাধ্যমে আমাদের নিউজ পরিবেশনাকে আরও সমৃদ্ধ করা।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">মূল্যবোধ</h2>
          <ul className="list-disc list-inside mb-4">
            <li>স্বচ্ছতা এবং সততা</li>
            <li>সাংবাদিকতার নৈতিকতা মেনে চলা</li>
            <li>সবার জন্য তথ্যের সহজলভ্যতা</li>
            <li>সামাজিক ন্যায় ও দায়িত্ববোধ</li>
            <li>নিরপেক্ষতা ও স্বাধীনতা</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">আমাদের টিম</h2>
          <p className="mb-4">
            ইনকিলাবে কাজ করছেন দক্ষ সাংবাদিক, সম্পাদক, গবেষক ও প্রযুক্তিবিদরা যারা সর্বদা নতুন খবর সংগ্রহ ও বিশ্লেষণে মনোনিবেশ করেন। আমাদের টিম নিয়মিত প্রশিক্ষণ এবং সাংবাদিকতা নীতিমালা অনুসরণ করে থাকে।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">সাফল্য ও পুরস্কার</h2>
          <p className="mb-4">
            ইনকিলাব নিউজপেপার পেয়েছে জাতীয় ও আন্তর্জাতিক বিভিন্ন পুরস্কার, যেমন গণমাধ্যমে অবদানের জন্য স্বীকৃতি ও সাংবাদিকতা ক্ষেত্রে শ্রেষ্ঠত্ব পুরস্কার। আমাদের গবেষণামূলক প্রতিবেদনের জন্যও প্রশংসা পেয়েছি।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">সমাজসেবা ও দায়িত্ব</h2>
          <p className="mb-4">
            সংবাদ পরিবেশনের পাশাপাশি ইনকিলাব সামাজিক উন্নয়নমূলক বিভিন্ন কার্যক্রমেও অংশগ্রহণ করে থাকে। আমরা শিশু শিক্ষা, স্বাস্থ্যসেবা ও পরিবেশ সংরক্ষণে সচেতনতা বৃদ্ধিতে সক্রিয় ভূমিকা পালন করছি।
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">যোগাযোগ</h2>
          <p>
            আমাদের সঙ্গে যোগাযোগ করুন:<br />
            ইমেইল: contact@inqilab.com<br />
            ফোন: +880 1234-567890<br />
            ঠিকানা: ইনকিলাব ভবন, ঢাকা, বাংলাদেশ
          </p>
        </div>
      )}

      {/* English Content */}
      {activeTab === "english" && (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-start">About Us</h1>
          <p className="mb-4">
            Established in 1986, Inqilab Newspaper is one of the most trusted and widely read news media outlets. Our primary goal is to deliver accurate and timely news on national and international affairs to our readers.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">History & Heritage</h2>
          <p className="mb-4">
            Over the years, Inqilab has played a vital role in social change and raising public awareness. Since the country's independence, we have contributed significantly to the promotion of democracy and human rights. We are also active in digital news platforms adapting to modern trends.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Our Mission</h2>
          <p className="mb-4">
            To provide impartial and factual information to the public and contribute to the ethical development of society. We firmly believe that freedom of information is the backbone of democracy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Vision</h2>
          <p className="mb-4">
            To establish strong and honest journalism that promotes societal progress and peace. We aim to enrich our news delivery through new technologies and modern research.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Core Values</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Transparency and Integrity</li>
            <li>Adherence to journalistic ethics</li>
            <li>Accessibility of information for all</li>
            <li>Social justice and responsibility</li>
            <li>Neutrality and independence</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">Our Team</h2>
          <p className="mb-4">
            Our team includes skilled journalists, editors, researchers, and technologists dedicated to delivering news with accuracy and depth. We regularly undergo training and follow strict journalistic standards.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Achievements & Awards</h2>
          <p className="mb-4">
            Inqilab Newspaper has received numerous national and international awards for media excellence and outstanding journalism. Our investigative reports have also earned critical acclaim.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Social Responsibility</h2>
          <p className="mb-4">
            Besides news reporting, Inqilab actively participates in social development initiatives. We support causes like child education, healthcare awareness, and environmental protection.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
          <p>
            Get in touch with us:<br />
            Email: contact@inqilab.com<br />
            Phone: +880 1234-567890<br />
            Address: Inqilab Building, Dhaka, Bangladesh
          </p>
        </div>
      )}

      <p className="mt-10 text-start text-sm text-gray-500">
        Last updated: May 25, 2025
      </p>
    </div>
  );
};

export default AboutPage;
