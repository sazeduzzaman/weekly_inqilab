"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarqueSlider;
const BreakingDataSet_1 = require("@/lib/api/BreakingDataSet");
const MarqueSliderItems_1 = __importDefault(require("./MarqueSliderItems"));
async function MarqueSlider() {
    const breakingItems = await (0, BreakingDataSet_1.BreakingDataSet)();
    return (<div>
      <MarqueSliderItems_1.default breakingItems={breakingItems}/>
    </div>);
}
