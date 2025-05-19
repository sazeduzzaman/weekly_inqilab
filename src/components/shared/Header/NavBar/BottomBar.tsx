// export default BottomBar;
import React from "react";
import CategoryData from "./CategoryData/CategoryData";
import MarqueSlider from "../MarqueSlide/MarqueSlider";
import { CategoryDataSet } from "@/lib/api/CategoryDataSet";

export default async function BottomBar() {
  const categoryItems = await CategoryDataSet();

  return (
    <div className="bg-black">
      <CategoryData categoryItems={categoryItems} />
      <MarqueSlider />
    </div>
  );
}
