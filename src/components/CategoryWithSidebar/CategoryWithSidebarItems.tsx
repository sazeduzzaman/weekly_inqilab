import React from "react";
import SaradeshNews from "./Category/SaradeshNews";
import JatiyoNews from "./Category/JatiyoNews";
import SectionTitle from "../SectionTitle/SectionTitle";
import WorldNews from "./Category/WorldNews";

const CategoryWithSidebarItems = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 ">
          <SectionTitle title="সারাদেশ" />
          <div className="mt-4">
            <SaradeshNews />
          </div>
        </div>
        <div className="col-span-8 ">
          <SectionTitle title="রাজনীতি" />
          <div className="mt-4">
            <JatiyoNews />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <SectionTitle title="বিশ্ব সংবাদ" />
        <WorldNews />
      </div>
    </div>
  );
};

export default CategoryWithSidebarItems;
