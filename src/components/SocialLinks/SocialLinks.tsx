import { SiteInfo } from "@/lib/api/SiteInformation";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube, FaUser } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

interface Props {
  siteInformationData: SiteInfo;
}
// export default async function MainSidebar() {
export default function SocialLinks({ siteInformationData }: Props) {
  return (
    <div className="flex justify-end items-end">
      {siteInformationData?.facebook_url && (
        <Link
          type="button"
          href={siteInformationData?.facebook_url ?? "Facebook"}
          className="me-2"
          target="_blank"
        >
          <button className="btn btn-circle bg-red-500 shadow-none hover:bg-black border-0 text-white btn-sm">
            <FaFacebookF className="text-[16px]" />
          </button>
        </Link>
      )}
      {siteInformationData?.instagram_url && (
        <Link
          type="button"
          href={siteInformationData?.instagram_url ?? "Facebook"}
          className="me-2"
          target="_blank"
        >
          <button className="btn btn-circle bg-red-500 shadow-none hover:bg-black border-0 text-white btn-sm">
            <AiFillInstagram className="text-[16px]" />
          </button>
        </Link>
      )}
      {siteInformationData?.whatsapp_url && (
        <Link
          type="button"
          href={siteInformationData?.whatsapp_url ?? "Facebook"}
          className="me-2"
          target="_blank"
        >
          <button className="btn btn-circle bg-red-500 shadow-none hover:bg-black border-0 text-white btn-sm">
            <IoLogoWhatsapp className="text-[16px]" />
          </button>
        </Link>
      )}
      {siteInformationData?.youtube_url && (
        <Link
          type="button"
          href={siteInformationData.youtube_url}
          className="me-2"
          target="_blank"
        >
          <button className="btn btn-circle bg-red-500 shadow-none hover:bg-black border-0 text-white btn-sm">
            <FaYoutube className="text-[16px]" />
          </button>
        </Link>
      )}
      <Link type="button" href="/auth/login" className="">
        <button className="btn btn-circle bg-red-500 shadow-none hover:bg-black border-0 text-white btn-sm">
          <FaUser className="text-[16px]" />
        </button>
      </Link>
    </div>
  );
}
