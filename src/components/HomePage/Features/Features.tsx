import React from "react";
import FeaturesItems from "./FeaturesItems";
import { LatestDataSet } from "@/lib/api/LatestDataSet";

export default async function Features() {
  const latestItems = await LatestDataSet();

  return (
    <div>
      <FeaturesItems latestItems={latestItems}/>
    </div>
  );
}
