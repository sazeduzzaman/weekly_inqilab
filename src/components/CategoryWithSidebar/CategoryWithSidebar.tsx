import React from "react";
import CategoryWithSidebarItems from "./CategoryWithSidebarItems";
import FirstSidebar from "../Sidebar/FirstSidebar";
import EconomicsNews from "./Category/EconomicsNews";
import { EconomicsDataSet } from "@/lib/api/SingeCategory/EconomicsDataSet";
import VideoNews from "./Category/VideoNews";
import { VideoDataSet } from "@/lib/api/SingeCategory/VideoDataSet";
import ScienceTechnology from "./Category/ScienceTechnology";
import { ScienceTechnologyDataSet } from "@/lib/api/SingeCategory/ScienceTechnologyDataSet";
import Environment from "./Category/Environment";
import { EnvironmentDataSet } from "@/lib/api/SingeCategory/EnvironmentDataSet";

export default async function CategoryWithSidebar() {
  const economicsItems = await EconomicsDataSet();
  const videoItems = await VideoDataSet();
  const scienceTechnology = await ScienceTechnologyDataSet();
  const environment = await EnvironmentDataSet();
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
      <div>
        <VideoNews videoItems={videoItems} fontSize={16} />
      </div>
      <div>
        <ScienceTechnology scienceTechnology={scienceTechnology} fontSize={16} />
      </div>
      <div>
        <Environment environment={environment} fontSize={16} />
      </div>
    </div>
  );
}
