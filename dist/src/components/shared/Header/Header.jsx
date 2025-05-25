"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TopBar_1 = __importDefault(require("./NavBar/TopBar"));
const CenterBar_1 = __importDefault(require("./NavBar/CenterBar"));
const BottomBar_1 = __importDefault(require("./NavBar/BottomBar"));
const Header = () => {
    return (<div className="bg-white">
      <TopBar_1.default />
      <CenterBar_1.default />
      <BottomBar_1.default />
    </div>);
};
exports.default = Header;
