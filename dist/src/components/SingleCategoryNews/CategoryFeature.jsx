"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const CategoryFeature = ({ isFeatured }) => {
    return (<div>
      {isFeatured.map((item, index) => (<link_1.default href='/' key={index}>
          <p>{item.bangla_title}</p>
        </link_1.default>))}
    </div>);
};
exports.default = CategoryFeature;
