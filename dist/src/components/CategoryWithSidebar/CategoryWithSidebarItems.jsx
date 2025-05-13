"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SaradeshNews_1 = __importDefault(require("./Category/SaradeshNews"));
const JatiyoNews_1 = __importDefault(require("./Category/JatiyoNews"));
const SectionTitle_1 = __importDefault(require("../SectionTitle/SectionTitle"));
const WorldNews_1 = __importDefault(require("./Category/WorldNews"));
const CategoryWithSidebarItems = () => {
    return (<div className="">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 ">
          <SectionTitle_1.default title="সারাদেশ"/>
          <div className="mt-4">
            <SaradeshNews_1.default />
          </div>
        </div>
        <div className="col-span-8 ">
          <SectionTitle_1.default title="রাজনীতি"/>
          <div className="mt-4">
            <JatiyoNews_1.default />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <SectionTitle_1.default title="বিশ্ব সংবাদ"/>
        <WorldNews_1.default />
      </div>
    </div>);
};
exports.default = CategoryWithSidebarItems;
