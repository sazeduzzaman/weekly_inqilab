"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryWithSidebarItems;
const react_1 = __importDefault(require("react"));
const JatiyoNews_1 = __importDefault(require("./Category/JatiyoNews"));
// import WorldNews from "./Category/WorldNews";
const ViewedDataSet_1 = require("@/lib/api/ViewedDataSet");
const Sorbadhik_1 = __importDefault(require("./Category/Sorbadhik"));
const BusinessNews_1 = __importDefault(require("./Category/BusinessNews"));
const BusinessNewsDataSet_1 = require("@/lib/api/SingeCategory/BusinessNewsDataSet");
const JatioDataSet_1 = require("@/lib/api/SingeCategory/JatioDataSet");
const RajnitiNews_1 = __importDefault(require("./Category/RajnitiNews"));
const RajnitiDataSet_1 = require("@/lib/api/SingeCategory/RajnitiDataSet");
const SportsNews_1 = __importDefault(require("./Category/SportsNews"));
const SportsDataSet_1 = require("@/lib/api/SingeCategory/SportsDataSet");
// import { WordNewsSet } from "@/lib/api/SingeCategory/WordNewsDataSet";
async function CategoryWithSidebarItems() {
    const viewedItems = await (0, ViewedDataSet_1.ViewedDataSet)();
    const jatioItems = await (0, JatioDataSet_1.JatioDataSet)();
    const businessNewsItems = await (0, BusinessNewsDataSet_1.BusinessNewsSet)();
    const rajnitiItems = await (0, RajnitiDataSet_1.RajnitiDataSet)();
    const sportsItems = await (0, SportsDataSet_1.SportsDataSet)();
    return (<div className="container">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4">
          <div className="mt-4">
            <Sorbadhik_1.default viewedItems={viewedItems}/>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="mt-4">
            <JatiyoNews_1.default jatioItems={jatioItems}/>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <BusinessNews_1.default businessNewsItems={businessNewsItems}/>
      </div>
      <div className="mt-6">
        <RajnitiNews_1.default rajnitiItems={rajnitiItems}/>
      </div>
      <div className="mt-6">
        <SportsNews_1.default sportsItems={sportsItems}/>
      </div>
    </div>);
}
