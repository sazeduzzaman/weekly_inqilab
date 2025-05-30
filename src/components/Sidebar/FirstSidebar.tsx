import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdConnectWithoutContact } from "react-icons/md";
import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
import Advertisement from "../Advertisement/Advertisement";
import { SiteInformation } from "@/lib/api/SiteInformation";

export default async function FirstSidebar() {
  const advertisementSidebarRandom = await Advertisment();
  const AdvertisementSidebarRandom = advertisementSidebarRandom.slice(0, 2);
   const siteInformationData = await SiteInformation();
  return (
    <div className="mt-4">
      <SectionTitle title="আমাদের সম্পর্কে" />
      <div className="card rounded-none shadow-sm p-5 mb-5">
        <figure className="flex justify-center">
          <Image src="/favicon.ico" alt="Logo" width={200} height={200} />
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
              <RiAdvertisementLine className="me-3" size={30} /> প্রিন্ট সংস্করণ
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

      <div className="card rounded-none shadow-sm mt-5">
        <Link href="/epaper">
          <h1 className="text-center text-3xl site-text-secondary ">
            আমাদের ইপেপার
          </h1>
          <figure className="border border-red-700">
            <Image
              src="/images/epaper/1.jpg"
              alt="Epaper Preview"
              width={400}
              height={300}
              layout="responsive"
            />
          </figure>
        </Link>
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
  );
}
