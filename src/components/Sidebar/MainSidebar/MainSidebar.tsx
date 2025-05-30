import Advertisement from "@/components/Advertisement/Advertisement";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { Advertisment } from "@/lib/api/Advertisement/Advertisment";
import { SiteInfo } from "@/lib/api/SiteInformation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  siteInformationData: SiteInfo;
}
// export default async function MainSidebar() {
export default async function MainSidebar({ siteInformationData }: Props) {
  const advertisementSidebarRandom = await Advertisment();
  const AdvertisementSidebarRandom = advertisementSidebarRandom.slice(3, 8);
  return (
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
              style={{ width: "100%", height: "auto" }} // ✅ Responsive layout via style
            />
          </figure>
        </Link>
      </div>
      <div className="card rounded-none mt-5">
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
