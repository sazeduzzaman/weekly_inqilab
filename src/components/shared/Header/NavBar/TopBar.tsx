import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { SiteInfo } from "@/lib/api/SiteInformation";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";
import Link from "next/link";
import React from "react";

interface Props {
  siteInformationData: SiteInfo;
}
// export default async function MainSidebar() {
export default function TopBar({ siteInformationData }: Props) {
  return (
    <div className="bg-site-secondary py-0 top-bar">
      <div className="container mx-auto px-4">
        {/* Grid layout for larger screens and stacking on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {/* Time and Date */}
          <div className="flex items-center justify-center md:justify-start col-span-1 md:col-span-1">
            <CurrentTimeShower />
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-center col-span-1 md:col-span-1 text-center md:text-left">
            <span className="eng-font text-[12px]">
              <Link
                href={`mailto:${siteInformationData.info_email}`}
                aria-label={`Send an email to ${siteInformationData.info_email}`}
              >
                {siteInformationData.info_email}
              </Link>
              <span className="pl-1">||</span> {siteInformationData.address_one}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end col-span-1 md:col-span-1">
            <SocialLinks siteInformationData={siteInformationData} />
          </div>
        </div>
      </div>
    </div>
  );
}
