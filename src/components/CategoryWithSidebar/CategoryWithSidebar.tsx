import React from "react";
import CategoryWithSidebarItems from "./CategoryWithSidebarItems";
import FirstSidebar from "../Sidebar/FirstSidebar";
import EconomicsNews from "./Category/EconomicsNews";
import { EconomicsDataSet } from "@/lib/api/SingeCategory/EconomicsDataSet";

export default async function CategoryWithSidebar() {
  const economicsItems = await EconomicsDataSet();
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-10">
          <CategoryWithSidebarItems />
        </div>
        <div className="col-span-12 md:col-span-2">
          <FirstSidebar />
        </div>
      </div>
      <div>
        <EconomicsNews economicsItems={economicsItems} />
      </div>
    </div>
  );
}
