"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Page = () => {
    return (<div>
      <section className="py-20 bg-white text-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-red-600">
              মূল্য নির্ধারণ
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl mt-2">
              আপনার জন্য সেরা পরিকল্পনা
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4 justify-center">
            {/* Beginner Card */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/4 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow border border-gray-300">
                <div className="space-y-2 text-center">
                  <h4 className="text-2xl font-bold">শুরু করুন</h4>
                  <span className="text-6xl font-bold text-green-600">
                    ফ্রি
                  </span>
                </div>
                <p className="leading-relaxed">
                  ছোট ব্যবসা ও ব্যক্তির জন্য আদর্শ। সহজ ব্যবহার ও সীমিত সুবিধা।
                </p>
                <button className="w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-green-600 text-white">
                  এখনই শুরু করুন
                </button>
              </div>
            </div>

            {/* Pro Card */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/4 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow border border-gray-300 bg-red-50">
                <div className="space-y-2 text-center">
                  <h4 className="text-2xl font-bold">প্রো</h4>
                  <span className="text-6xl font-bold text-red-600">
                    $24
                    <span className="text-sm tracking-wide">/মাস</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  অধিক সুবিধা, উন্নত ফিচার এবং প্রফেশনাল সাপোর্ট।
                </p>
                <button className="w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-red-600 text-white">
                  এখনই নিন
                </button>
              </div>
            </div>

            {/* Team Card */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/4 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow border border-gray-300">
                <div className="space-y-2 text-center">
                  <h4 className="text-2xl font-bold">দল</h4>
                  <span className="text-6xl font-bold text-blue-600">
                    $48
                    <span className="text-sm tracking-wide">/মাস</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  বড় টিমের জন্য সব ফিচার একসাথে, কাজ আরও সহজ ও দ্রুত।
                </p>
                <button className="w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-blue-600 text-white">
                  যোগাযোগ করুন
                </button>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/4 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow border border-gray-300 bg-gray-50">
                <div className="space-y-2 text-center">
                  <h4 className="text-2xl font-bold">এন্টারপ্রাইজ</h4>
                  <span className="text-4xl font-bold">কাস্টম</span>
                </div>
                <p className="leading-relaxed">
                  আপনার ব্যবসার জন্য কাস্টমাইজড সেবা ও ডেডিকেটেড সাপোর্ট।
                </p>
                <button className="w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-700 text-white">
                  যোগাযোগ করুন
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-lg font-semibold text-gray-700">
            আজই যোগাযোগ করুন!
            <br />
            ফোন:{" "}
            <a href="tel:+880123456789" className="text-red-600 underline">
              +880 1234 56789
            </a>
            &nbsp; | &nbsp; ওয়েবসাইট:{" "}
            <a href="mailto:info@inqilab.com" className="text-red-600 underline">
              info@inqilab.com
            </a>
          </div>
        </div>
      </section>
    </div>);
};
exports.default = Page;
