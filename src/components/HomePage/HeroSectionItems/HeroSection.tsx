import React from "react";
import HeroSectionItems from "./HeroSectionItems";
import { SpotLightDataSet } from "@/lib/api/SpotLightDataSet";

export default async function HeroSection() {
  const spotLightItems = await SpotLightDataSet();
  console.log(spotLightItems, "spotLightItems");
  return (
    <div>
      <HeroSectionItems spotLightItems={spotLightItems} />
    </div>
  );
}
