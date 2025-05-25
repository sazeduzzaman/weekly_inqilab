import SocialLinks from "@/components/SocialLinks/SocialLinks";
import Link from "next/link";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

const MainSidebar = () => {
  return (
    <div className="mb-3">
      <div className="card rounded-none shadow-sm p-5">
        <figure>
          <img src="/favicon.ico" alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h1>আর জানতে</h1>
          <div>
            <SocialLinks />
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
        <Link href="#" className="">
          <h1 className="text-center pt-4 text-3xl site-text-secondary">
            আমাদের ইপেপার
          </h1>
          <figure>
            <img src="/images/side-ad.jfif" alt="Shoes" />
          </figure>
        </Link>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/side-ad-2.jpg" alt="Shoes" />
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/side-ad-3.jfif" alt="Shoes" />
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes" />
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes" />
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes" />
        </figure>
      </div>
      <div className="card rounded-none mt-5">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default MainSidebar;
