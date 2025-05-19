"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Features;
const react_1 = __importDefault(require("react"));
const FeaturesItems_1 = __importDefault(require("./FeaturesItems"));
const LatestDataSet_1 = require("@/lib/api/LatestDataSet");
async function Features() {
    const latestItems = await (0, LatestDataSet_1.LatestDataSet)();
    return (<div>
      <FeaturesItems_1.default latestItems={latestItems}/>
    </div>);
}
