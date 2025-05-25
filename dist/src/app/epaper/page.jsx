"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EpaperItems_1 = __importDefault(require("@/components/EpaperItems/EpaperItems"));
const EpaperAdSidebar_1 = __importDefault(require("@/components/Sidebar/EpaperAdSidebar/EpaperAdSidebar"));
const Page = () => {
    return (<div className="container mx-auto">
      <div className="grid grid-cols-12 gap-3">
        {/* Right Sidebar */}
        <EpaperItems_1.default />
        <div className="col-span-2">
          <div className="mt-5">
            <div className="card-header bg-red-500 rounded-md text-center py-3 text-white">
              বিজ্ঞাপন
            </div>
            <EpaperAdSidebar_1.default />
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Page;
