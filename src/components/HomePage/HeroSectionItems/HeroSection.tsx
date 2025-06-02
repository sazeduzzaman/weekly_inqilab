import React from "react";
import HeroSectionItems from "./HeroSectionItems";
import { SpotLightDataSet } from "@/lib/api/SpotLightDataSet";

export default async function HeroSection() {
  const spotLightItems = await SpotLightDataSet();
  return (
    <div className="mt-0 md:mt-5">
      <HeroSectionItems spotLightItems={spotLightItems} />
    </div>
  );
}
