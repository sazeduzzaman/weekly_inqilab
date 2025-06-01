"use client";
import React, { useEffect, useState } from "react";
import { SiteInformation } from "@/lib/api/SiteInformation";
import Link from "next/link";
import ContactForm from "../ContactForm";

export interface SiteInfo {
  website_name?: string;
  site_title?: string;
  site_motto?: string;
  site_logo_white?: string;
  site_logo_black?: string;
  site_favicon?: string;
  login_background_image?: string;
  primary_email?: string;
  support_email?: string;
  info_email?: string;
  news_email?: string;
  primary_phone?: string;
  fax?: string;
  alternative_phone?: string;
  whatsapp_number?: string;
  address_one?: string;
  address_two?: string;
  default_language?: string;
  default_currency?: string;
  system_timezone?: string;
  site_url?: string;
  meta_title?: string;
  meta_keyword?: string;
  meta_tags?: string;
  meta_description?: string;
  og_image?: string;
  og_title?: string;
  og_description?: string;
  canonical_url?: string;
  copyright_title?: string;
  copyright_url?: string;
  facebook_url?: string;
  instagram_url?: string;
  linkedin_url?: string;
  whatsapp_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  pinterest_url?: string;
  reddit_url?: string;
  tumblr_url?: string;
  tiktok_url?: string;
  website_url?: string;
  company_name?: string;
  theme_color?: string;
  dark_mode?: boolean;
  custom_css?: string | null;
  custom_js?: string | null;
}

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("bangla");
  const [siteInformationData, setSiteInformationData] =
    useState<SiteInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: SiteInfo = await SiteInformation();
        setSiteInformationData(data);
      } catch (error) {
        console.error("Failed to fetch site information:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-10 bg-white text-gray-900 min-h-screen">
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
        <div className="grid grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6 text-start">
              ইনকিলাব নিউজপেপার যোগাযোগ
            </h1>

            <div>
              <h2 className="text-xl font-semibold mb-2">প্রধান অফিস</h2>
              <p>{siteInformationData?.address_one}</p>
              <p>
                অফিস:{" "}
                {siteInformationData?.primary_phone && (
                  <Link
                    href={`tel:${siteInformationData.primary_phone}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.primary_phone}
                  </Link>
                )}
              </p>
              <p>
                বিজ্ঞাপন:{" "}
                {siteInformationData?.primary_phone && (
                  <Link
                    href={`tel:${siteInformationData.primary_phone}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.primary_phone}
                  </Link>
                )}
              </p>
              <p>
                ফ্যাক্স:
                {siteInformationData?.fax && (
                  <Link
                    href={`tel:${siteInformationData.fax}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.fax}
                  </Link>
                )}
              </p>
              <p>
                ই-পেপার:{" "}
                {siteInformationData?.primary_phone && (
                  <Link
                    href={`tel:${siteInformationData.primary_phone}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.primary_phone}
                  </Link>
                )}
                (সকাল ১০টা-সন্ধ্যা ৬টা, ফোন ও হোয়াটসঅ্যাপ)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">ইমেইল</h2>
              <p>
                {siteInformationData?.primary_email && (
                  <Link
                    href={`mailto:${siteInformationData.primary_email}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    {siteInformationData.primary_email}
                  </Link>
                )}
              </p>
              <p>
                প্রিন্ট বিজ্ঞাপন বিক্রয়:
                {siteInformationData?.support_email && (
                  <Link
                    href={`mailto:${siteInformationData.support_email}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.support_email}
                  </Link>
                )}
              </p>
              <p>
                ডিজিটাল বিজ্ঞাপন বিক্রয়:
                {siteInformationData?.support_email && (
                  <Link
                    href={`mailto:${siteInformationData.support_email}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.support_email}
                  </Link>
                )}
              </p>
              <p>
                ফ্যাক্স:
                {siteInformationData?.fax && (
                  <Link
                    href={`tel:${siteInformationData.fax}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.fax}
                  </Link>
                )}
              </p>

              <p>
                ই-পেপার:
                {siteInformationData?.primary_email && (
                  <Link
                    href={`mailto:${siteInformationData.primary_email}`}
                    target="_blank"
                    className="text-indigo-600 hover:underline ps-2"
                  >
                    {siteInformationData.primary_email}
                  </Link>
                )}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">আমাদের অনুসরণ করুন</h2>
              {siteInformationData?.primary_email && (
                <Link
                  href={siteInformationData.primary_email}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.primary_email}
                </Link>
              )}
              <br />
              {siteInformationData?.facebook_url && (
                <Link
                  href={siteInformationData.facebook_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.facebook_url}
                </Link>
              )}
              <br />
              {siteInformationData?.instagram_url && (
                <Link
                  href={siteInformationData.instagram_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.instagram_url}
                </Link>
              )}
              <br />
              {siteInformationData?.linkedin_url && (
                <Link
                  href={siteInformationData.linkedin_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.linkedin_url}
                </Link>
              )}
              <br />
              {siteInformationData?.whatsapp_url && (
                <Link
                  href={siteInformationData.whatsapp_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.whatsapp_url}
                </Link>
              )}
              <br />
              {siteInformationData?.twitter_url && (
                <Link
                  href={siteInformationData.twitter_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.twitter_url}
                </Link>
              )}
              <br />
              {siteInformationData?.youtube_url && (
                <Link
                  href={siteInformationData.youtube_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.youtube_url}
                </Link>
              )}{" "}
              <br />
              {siteInformationData?.pinterest_url && (
                <Link
                  href={siteInformationData.pinterest_url}
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  {siteInformationData.pinterest_url}
                </Link>
              )}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6 text-start">
              আমাদের কে জানান!
            </h1>
            <ContactForm />
          </div>
        </div>
      )}

      {activeTab === "english" && (
        <div className="grid grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6 text-start">
              Inqilab Newspaper Contact Information
            </h1>

            <div>
              <h2 className="text-xl font-semibold mb-2">Head Office</h2>
              <p>{siteInformationData?.address_one}</p>
              <p>
                Office:{" "}
                {siteInformationData?.primary_phone ??
                  siteInformationData?.alternative_phone}
              </p>
              <p>
                Advertisement:{" "}
                {siteInformationData?.primary_phone ??
                  siteInformationData?.alternative_phone}
              </p>
              <p>Fax: {siteInformationData?.fax}</p>
              <p>
                ePaper:{" "}
                {siteInformationData?.primary_phone ??
                  siteInformationData?.alternative_phone}{" "}
                (10am-6pm, Phone & WhatsApp)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p>{siteInformationData?.primary_email}</p>
              <p>Print Ad Sales: {siteInformationData?.support_email}</p>
              <p>Digital Ad Sales: {siteInformationData?.support_email}</p>
              <p>
                Fax:{" "}
                {siteInformationData?.primary_phone ??
                  siteInformationData?.alternative_phone}
              </p>
              <p>ePaper: {siteInformationData?.primary_email}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Follow us on</h2>
              <p>{siteInformationData?.primary_email}</p>
              <p>
                <a
                  href="https://facebook.com/InqilabUSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  facebook.com/InqilabUSA
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/InqilabUSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  twitter.com/InqilabUSA
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/InqilabUSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  instagram.com/InqilabUSA
                </a>
              </p>
              <p>
                <a
                  href="https://youtube.com/InqilabUSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  youtube.com/InqilabUSA
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6 text-start">
              Send Messages.
            </h1>
            <ContactForm />
          </div>
        </div>
      )}

      <p className="mt-10 text-start text-sm text-gray-500">
        Last updated: May 25, 2025
      </p>
    </div>
  );
};

export default ContactPage;
