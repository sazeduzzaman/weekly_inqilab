import React from "react";
import CategoryWithSidebarItems from "./CategoryWithSidebarItems";
import FirstSidebar from "../Sidebar/FirstSidebar";

const CategoryWithSidebar = () => {
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-9">
          <CategoryWithSidebarItems />
        </div>
        <div className="col-span-3">
          <FirstSidebar />
        </div>
      </div>
    </div>
  );
};

export default CategoryWithSidebar;
