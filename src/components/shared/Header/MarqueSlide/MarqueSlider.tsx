import { BreakingDataSet } from "@/lib/api/BreakingDataSet";
import MarqueSliderItems from "./MarqueSliderItems";

export default async function MarqueSlider() {
  const breakingItems = await BreakingDataSet();
  console.log(breakingItems, "breakingItems")

  return (
    <div>
      <MarqueSliderItems breakingItems={breakingItems} />
    </div>
  );
}
