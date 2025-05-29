"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const CategoryWithSidebar_1 = __importDefault(require("@/components/CategoryWithSidebar/CategoryWithSidebar"));
const Features_1 = __importDefault(require("@/components/HomePage/Features/Features"));
const HeroSection_1 = __importDefault(require("@/components/HomePage/HeroSectionItems/HeroSection"));
function Home() {
    return (<div className="">
      {/* <Image
          className=""
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
      <HeroSection_1.default />
      <Features_1.default />
      <CategoryWithSidebar_1.default />
    </div>);
}
