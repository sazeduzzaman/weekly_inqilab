import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { SiteInformation } from "@/lib/api/SiteInformation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Footer() {
  const siteInformationData = await SiteInformation();
  return (
    <>

      <div className="bg-gray-200 border-t-1 border-red-200 not-mobile">
        <div className="container mx-auto">
          <div className="relative w-full header-logo py-10">
            {/* Mobile Logo */}
            <Link href="/">
              <Image
                src={siteInformationData.site_logo_black}
                alt="Logo"
                width={250}
                height={100}
              />
            </Link>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">সম্পাদকমণ্ডলীর</h1>
              <h1 className="text-1xl">সভাপতিঃ শাহ নেওয়াজ</h1>
              <h1 className="text-1xl">উপদেষ্টা সম্পাদকঃ পাভেল মাহমুদ</h1>
              <h1 className="text-1xl">ইংরেজি পাতার সম্পাদকঃ ফুহাদ হোসেন</h1>
              <h1 className="text-1xl">
                ব্যবস্থাপনা সম্পাদকঃ মোঃ বদরুদ্দোজা সাগর
              </h1>
              <h1 className="text-1xl">
                প্রকাশক ও সম্পাদকঃ মোহাম্মদ জাহিদ আলম
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="my-5">
                <Link
                  href="/about"
                  className="link link-hover btn btn-outline me-3"
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  href="/contact"
                  className="link link-hover btn btn-outline me-3"
                >
                  যোগাযোগ
                </Link>
                <Link
                  href="/policy"
                  className="link link-hover btn btn-outline me-3"
                >
                  ব্যবহারের শর্তাবলি
                </Link>
                <Link
                  href="/terms"
                  className="link link-hover btn btn-outline me-3"
                >
                  গোপনীয়তার নীতি
                </Link>
                <Link
                  href="/ad-cost"
                  className="link link-hover btn btn-outline"
                >
                  বিজ্ঞাপন
                </Link>
              </div>
              <div className="text-center">
                <span>অনুসরণ করুন</span>
                <SocialLinks siteInformationData={siteInformationData} />
              </div>
            </div>
          </div>
          {/* Bottom Footer */}
          <footer className="text-black flex justify-between items-center footer py-4 flex-col sm:flex-row">
            <aside className="">
              <p className="text-sm text-center sm:text-left">
                এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার
                বেআইনী।
                <br />
                <span>
                  {siteInformationData.copyright_title}
                </span>
              </p>
              <div className="text-black">
                <Link href={"https://flixzaglobal.com/"} target="_blank">
                  <p className="text-end flex items-center">
                    <small className="pt-1 pe-1">Developed With Love By</small>
                    <Image
                      className="w-[60px] p-1"
                      src="/images/logo-color-resized.png"
                      alt="Next.js logo"
                      width={180}
                      height={38}
                      priority
                    />
                  </p>
                </Link>
              </div>
            </aside>
            <aside className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0"></aside>
          </footer>
        </div>
      </div>

      {/* for mobile */}
      <footer className="bg-gray-200 border-t border-red-200 text-black for-mobile">
      <div className="container mx-auto px-4 py-10">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image
              src={siteInformationData.site_logo_black}
              alt="Logo"
              width={250}
              height={100}
              className="mx-auto"
            />
          </Link>
        </div>

        {/* Editorial Info + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-center">
          {/* Editorial Info */}
          <div>
            <h1 className="text-xl font-semibold mb-2">সম্পাদকমণ্ডলীর</h1>
            <ul className="space-y-1 text-sm">
              <li>সভাপতিঃ শাহ নেওয়াজ</li>
              <li>উপদেষ্টা সম্পাদকঃ পাভেল মাহমুদ</li>
              <li>ইংরেজি পাতার সম্পাদকঃ ফুহাদ হোসেন</li>
              <li>ব্যবস্থাপনা সম্পাদকঃ মোঃ বদরুদ্দোজা সাগর</li>
              <li>প্রকাশক ও সম্পাদকঃ মোহাম্মদ জাহিদ আলম</li>
            </ul>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[ 
                { href: "/about", label: "আমাদের সম্পর্কে" },
                { href: "/contact", label: "যোগাযোগ" },
                { href: "/policy", label: "ব্যবহারের শর্তাবলি" },
                { href: "/terms", label: "গোপনীয়তার নীতি" },
                { href: "/ad-cost", label: "বিজ্ঞাপন" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn btn-outline text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="text-sm text-center">
              <p className="mb-1">অনুসরণ করুন</p>
              <SocialLinks siteInformationData={siteInformationData} />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-4 flex flex-col items-center sm:flex-row sm:justify-between text-center text-sm gap-4">
          <p>
            এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনী।<br />
            <span>{siteInformationData.copyright_title}</span>
          </p>
          <Link href="https://flixzaglobal.com/" target="_blank">
            <div className="flex items-center justify-center">
              <small className="pt-1 pe-1">Developed With Love By</small>
              <Image
                className="w-[60px] p-1"
                src="/images/logo-color-resized.png"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
    </>
  );
}
