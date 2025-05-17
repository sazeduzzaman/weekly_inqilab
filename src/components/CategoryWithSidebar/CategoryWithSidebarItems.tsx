import React from "react";
import SaradeshNews from "./Category/SaradeshNews";
import JatiyoNews from "./Category/JatiyoNews";
import SectionTitle from "../SectionTitle/SectionTitle";
import WorldNews from "./Category/WorldNews";
import { ViewedDataSet } from "@/lib/api/ViewedDataSet";

export default async function CategoryWithSidebarItems() {
  const viewedItems = await ViewedDataSet();
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 ">
          <SectionTitle title="সর্বাধিক পঠিত" />
          <div className="mt-4">
            <SaradeshNews viewedItems={viewedItems} />
          </div>
        </div>
        <div className="col-span-8 ">
          <SectionTitle title="রাজনীতি" />
          <div className="mt-4">
            <JatiyoNews />
          </div>
        </div>
      </div>
      <div className="">
        <SectionTitle title="বিশ্ব সংবাদ" />
        <WorldNews />
      </div>
    </div>
  );
}
