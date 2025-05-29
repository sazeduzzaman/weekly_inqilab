import React from "react";
import JatiyoNews from "./Category/JatiyoNews";
// import WorldNews from "./Category/WorldNews";
import { ViewedDataSet } from "@/lib/api/ViewedDataSet";
import { RajnitiDataSet } from "@/lib/api/SingeCategory/RajnitiDataSet";
import Sorbadhik from "./Category/Sorbadhik";
import BusinessNews from "./Category/BusinessNews";
import { BusinessNewsSet } from "@/lib/api/SingeCategory/BusinessNewsDataSet";
// import { WordNewsSet } from "@/lib/api/SingeCategory/WordNewsDataSet";

export default async function CategoryWithSidebarItems() {
  const viewedItems = await ViewedDataSet();
  const rajnitiItems = await RajnitiDataSet();
  const businessNewsItems = await BusinessNewsSet();
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 ">
          <div className="mt-4">
            <Sorbadhik viewedItems={viewedItems} />
          </div>
        </div>
        <div className="col-span-8 ">
          <div className="mt-4">
            <JatiyoNews rajnitiItems={rajnitiItems} />
          </div>
        </div>
      </div>
      <div className="">
        <BusinessNews businessNewsItems={businessNewsItems} />
      </div>
    </div>
  );
}
