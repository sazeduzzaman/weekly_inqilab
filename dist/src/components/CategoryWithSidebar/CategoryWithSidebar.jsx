"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CategoryWithSidebarItems_1 = __importDefault(require("./CategoryWithSidebarItems"));
const FirstSidebar_1 = __importDefault(require("../Sidebar/FirstSidebar"));
const CategoryWithSidebar = () => {
    return (<div className="container mx-auto mt-5 mb-6">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-10">
          <CategoryWithSidebarItems_1.default />
        </div>
        <div className="col-span-2">
          <FirstSidebar_1.default />
        </div>
      </div>
    </div>);
};
exports.default = CategoryWithSidebar;
