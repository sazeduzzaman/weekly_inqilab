import SocialLinks from "@/components/SocialLinks/SocialLinks";
import Link from "next/link";
import React from "react";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdConnectWithoutContact } from "react-icons/md";
import { SiteInfo } from "@/lib/api/SiteInformation";
import Advertisement from "@/components/Advertisement/Advertisement";
import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
interface Props {
  siteInformationData: SiteInfo;
}
// export default async function MainSidebar() {
export default async function EpaperAdSidebar({ siteInformationData }: Props) {
  const advertisementSidebarRandom = await Advertisment();
  const AdvertisementSidebarRandom = advertisementSidebarRandom.slice(5, 10);
  return (
    <div>
      <div className="mb-3">
        <div className="card rounded-none shadow-sm p-5">
          <figure>
            <img src="/favicon.ico" alt="Shoes" />
          </figure>
          <div className="card-body flex justify-center items-center text-center">
            <h1>আর জানতে</h1>
            <div>
              <SocialLinks siteInformationData={siteInformationData} />
            </div>
          </div>
        </div>
        <div className="card rounded-none shadow-sm mt-5">
          <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
            গুরুত্বপূর্ণ
          </div>
          <div className="card-body">
            <div>
              <Link href="/ad-cost" className="flex items-center">
                <RiAdvertisementLine className="me-3" size={30} /> প্রিন্ট
                সংস্করণ
              </Link>
            </div>
            <div>
              <Link href="/epaper" className="flex items-center">
                <HiOutlineLightBulb className="me-3" size={30} /> অনলাইন সংস্করণ
              </Link>
            </div>
            <div>
              <Link href="/contact" className="flex items-center">
                <MdConnectWithoutContact className="me-3" size={30} /> যোগাযোগের
                ঠিকানা
              </Link>
            </div>
          </div>
        </div>
        <div className="card rounded-none mt-3 ">
          <Advertisement
            advertisements={AdvertisementSidebarRandom}
            position="sidebar_random"
            availability="available"
            marginB={10} // <-- string here
          />
        </div>
      </div>
    </div>
  );
}
