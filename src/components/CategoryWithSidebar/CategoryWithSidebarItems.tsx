import React from "react";
import JatiyoNews from "./Category/JatiyoNews";
// import WorldNews from "./Category/WorldNews";
import { ViewedDataSet } from "@/lib/api/ViewedDataSet";
import Sorbadhik from "./Category/Sorbadhik";
import BusinessNews from "./Category/BusinessNews";
import { BusinessNewsSet } from "@/lib/api/SingeCategory/BusinessNewsDataSet";
import { JatioDataSet } from "@/lib/api/SingeCategory/JatioDataSet";
import RajnitiNews from "./Category/RajnitiNews";
import { RajnitiDataSet } from "@/lib/api/SingeCategory/RajnitiDataSet";
import SportsNews from "./Category/SportsNews";
import { SportsDataSet } from "@/lib/api/SingeCategory/SportsDataSet";
// import { WordNewsSet } from "@/lib/api/SingeCategory/WordNewsDataSet";

export default async function CategoryWithSidebarItems() {
  const viewedItems = await ViewedDataSet();
  const jatioItems = await JatioDataSet();
  const businessNewsItems = await BusinessNewsSet();
  const rajnitiItems = await RajnitiDataSet();
  const sportsItems = await SportsDataSet();
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4">
          <div className="mt-4">
            <Sorbadhik viewedItems={viewedItems} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="mt-4">
            <JatiyoNews jatioItems={jatioItems} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <BusinessNews businessNewsItems={businessNewsItems} />
      </div>
      <div className="mt-6">
        <RajnitiNews rajnitiItems={rajnitiItems} />
      </div>
      <div className="mt-6">
        <SportsNews sportsItems={sportsItems} />
      </div>
    </div>
  );
}
