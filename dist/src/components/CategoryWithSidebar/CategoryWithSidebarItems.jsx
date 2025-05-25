"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryWithSidebarItems;
const react_1 = __importDefault(require("react"));
const SaradeshNews_1 = __importDefault(require("./Category/SaradeshNews"));
const JatiyoNews_1 = __importDefault(require("./Category/JatiyoNews"));
const WorldNews_1 = __importDefault(require("./Category/WorldNews"));
const ViewedDataSet_1 = require("@/lib/api/ViewedDataSet");
const RajnitiDataSet_1 = require("@/lib/api/SingeCategory/RajnitiDataSet");
const WordNewsDataSet_1 = require("@/lib/api/SingeCategory/WordNewsDataSet");
async function CategoryWithSidebarItems() {
    const viewedItems = await (0, ViewedDataSet_1.ViewedDataSet)();
    const rajnitiItems = await (0, RajnitiDataSet_1.RajnitiDataSet)();
    const wordNewsItems = await (0, WordNewsDataSet_1.WordNewsSet)();
    return (<div className="">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 ">
          <div className="mt-4">
            <SaradeshNews_1.default viewedItems={viewedItems}/>
          </div>
        </div>
        <div className="col-span-8 ">
          <div className="mt-4">
            <JatiyoNews_1.default rajnitiItems={rajnitiItems}/>
          </div>
        </div>
      </div>
      <div className="">
        <WorldNews_1.default wordNewsItems={wordNewsItems}/>
      </div>
    </div>);
}
