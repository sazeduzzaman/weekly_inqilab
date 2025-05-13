import React from "react";
import SaradeshNews from "./Category/SaradeshNews";
import JatiyoNews from "./Category/JatiyoNews";
import SectionTitle from "../SectionTitle/SectionTitle";

const CategoryWithSidebarItems = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 ">
            <SectionTitle title="সারাদেশ"/>
          <SaradeshNews />
        </div>
        <div className="col-span-8 ">
            <SectionTitle title="রাজনীতি"/>
          <JatiyoNews />
        </div>
      </div>
    </div>
  );
};

export default CategoryWithSidebarItems;
