"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroSection;
const react_1 = __importDefault(require("react"));
const HeroSectionItems_1 = __importDefault(require("./HeroSectionItems"));
const SpotLightDataSet_1 = require("@/lib/api/SpotLightDataSet");
async function HeroSection() {
    const spotLightItems = await (0, SpotLightDataSet_1.SpotLightDataSet)();
    return (<div className="mt-0 md:mt-5">
      <HeroSectionItems_1.default spotLightItems={spotLightItems}/>
    </div>);
}
