import React from "react";
import TopBar from "./NavBar/TopBar";
import CenterBar from "./NavBar/CenterBar";
import BottomBar from "./NavBar/BottomBar";
import { SiteInformation } from "@/lib/api/SiteInformation";

export default async function Header() {
  const siteInformationData = await SiteInformation();
  return (
    <div className="bg-white">
      <TopBar siteInformationData={siteInformationData} />
      <CenterBar />
      <BottomBar />
    </div>
  );
}
