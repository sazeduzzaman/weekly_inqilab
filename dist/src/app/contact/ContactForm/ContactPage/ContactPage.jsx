"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const SiteInformation_1 = require("@/lib/api/SiteInformation");
const link_1 = __importDefault(require("next/link"));
const ContactForm_1 = __importDefault(require("../ContactForm"));
const ContactPage = () => {
    const [activeTab, setActiveTab] = (0, react_1.useState)("bangla");
    const [siteInformationData, setSiteInformationData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const data = await (0, SiteInformation_1.SiteInformation)();
                setSiteInformationData(data);
            }
            catch (error) {
                console.error("Failed to fetch site information:", error);
            }
        };
        fetchData();
    }, []);
    return (<div className="container mx-auto px-4 py-10 bg-white text-gray-900 min-h-screen">
      {/* Tabs */}
      <div className="flex items-center justify-center border-b border-gray-300 mb-6">
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === "bangla"
            ? "border-b-2 border-indigo-600 text-indigo-600"
            : "text-gray-500 hover:text-indigo-500"}`} onClick={() => setActiveTab("bangla")}>
          বাংলা
        </button>
        <button className={`ml-4 px-4 py-2 text-sm font-medium ${activeTab === "english"
            ? "border-b-2 border-indigo-600 text-indigo-600"
            : "text-gray-500 hover:text-indigo-500"}`} onClick={() => setActiveTab("english")}>
          English
        </button>
      </div>

      {/* Content */}
      {activeTab === "bangla" && (<div className="grid grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6 text-start">
              ইনকিলাব নিউজপেপার যোগাযোগ
            </h1>

            <div>
              <h2 className="text-xl font-semibold mb-2">প্রধান অফিস</h2>
              <p>{siteInformationData?.address_one}</p>
              <p>
                অফিস:{" "}
                {siteInformationData?.primary_phone && (<link_1.default href={`tel:${siteInformationData.primary_phone}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.primary_phone}
                  </link_1.default>)}
              </p>
              <p>
                বিজ্ঞাপন:{" "}
                {siteInformationData?.primary_phone && (<link_1.default href={`tel:${siteInformationData.primary_phone}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.primary_phone}
                  </link_1.default>)}
              </p>
              <p>
                ফ্যাক্স:
                {siteInformationData?.fax && (<link_1.default href={`tel:${siteInformationData.fax}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.fax}
                  </link_1.default>)}
              </p>
              <p>
                ই-পেপার:{" "}
                {siteInformationData?.primary_phone && (<link_1.default href={`tel:${siteInformationData.primary_phone}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.primary_phone}
                  </link_1.default>)}
                (সকাল ১০টা-সন্ধ্যা ৬টা, ফোন ও হোয়াটসঅ্যাপ)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">ইমেইল</h2>
              <p>
                {siteInformationData?.primary_email && (<link_1.default href={`mailto:${siteInformationData.primary_email}`} target="_blank" className="text-indigo-600 hover:underline">
                    {siteInformationData.primary_email}
                  </link_1.default>)}
              </p>
              <p>
                প্রিন্ট বিজ্ঞাপন বিক্রয়:
                {siteInformationData?.support_email && (<link_1.default href={`mailto:${siteInformationData.support_email}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.support_email}
                  </link_1.default>)}
              </p>
              <p>
                ডিজিটাল বিজ্ঞাপন বিক্রয়:
                {siteInformationData?.support_email && (<link_1.default href={`mailto:${siteInformationData.support_email}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.support_email}
                  </link_1.default>)}
              </p>
              <p>
                ফ্যাক্স:
                {siteInformationData?.fax && (<link_1.default href={`tel:${siteInformationData.fax}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.fax}
                  </link_1.default>)}
              </p>

              <p>
                ই-পেপার:
                {siteInformationData?.primary_email && (<link_1.default href={`mailto:${siteInformationData.primary_email}`} target="_blank" className="text-indigo-600 hover:underline ps-2">
                    {siteInformationData.primary_email}
                  </link_1.default>)}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">আমাদের অনুসরণ করুন</h2>
              {siteInformationData?.primary_email && (<link_1.default href={siteInformationData.primary_email} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.primary_email}
                </link_1.default>)}
              <br />
              {siteInformationData?.facebook_url && (<link_1.default href={siteInformationData.facebook_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.facebook_url}
                </link_1.default>)}
              <br />
              {siteInformationData?.instagram_url && (<link_1.default href={siteInformationData.instagram_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.instagram_url}
                </link_1.default>)}
              <br />
              {siteInformationData?.linkedin_url && (<link_1.default href={siteInformationData.linkedin_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.linkedin_url}
                </link_1.default>)}
              <br />
              {siteInformationData?.whatsapp_url && (<link_1.default href={siteInformationData.whatsapp_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.whatsapp_url}
                </link_1.default>)}
              <br />
              {siteInformationData?.twitter_url && (<link_1.default href={siteInformationData.twitter_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.twitter_url}
                </link_1.default>)}
              <br />
              {siteInformationData?.youtube_url && (<link_1.default href={siteInformationData.youtube_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.youtube_url}
                </link_1.default>)}{" "}
              <br />
              {siteInformationData?.pinterest_url && (<link_1.default href={siteInformationData.pinterest_url} target="_blank" className="text-indigo-600 hover:underline">
                  {siteInformationData.pinterest_url}
                </link_1.default>)}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6 text-start">
              আমাদের কে জানান!
            </h1>
            <ContactForm_1.default />
          </div>
        </div>)}

      {activeTab === "english" && (<div className="grid grid-cols-2">
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
                <a href="https://facebook.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  facebook.com/InqilabUSA
                </a>
              </p>
              <p>
                <a href="https://twitter.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  twitter.com/InqilabUSA
                </a>
              </p>
              <p>
                <a href="https://instagram.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  instagram.com/InqilabUSA
                </a>
              </p>
              <p>
                <a href="https://youtube.com/InqilabUSA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  youtube.com/InqilabUSA
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-6 text-start">
              Send Messages.
            </h1>
            <ContactForm_1.default />
          </div>
        </div>)}

      <p className="mt-10 text-start text-sm text-gray-500">
        Last updated: May 25, 2025
      </p>
    </div>);
};
exports.default = ContactPage;
