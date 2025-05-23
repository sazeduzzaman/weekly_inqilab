"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tb_1 = require("react-icons/tb");
const ri_1 = require("react-icons/ri");
const FontSizeAdjustment = () => {
    return (<div className="flex mt-3">
      {/* <MdOutlineTextIncrease /> */}
      <button className="btn btn-circle me-2 p-1 w-8 h-8">
        <tb_1.TbTextIncrease />
      </button>
      <button className="btn btn-circle me-2 p-1 w-8 h-8">
        <tb_1.TbTextDecrease />
      </button>
      <button className="btn btn-circle p-1 w-8 h-8">
        <ri_1.RiResetLeftLine />
      </button>
    </div>);
};
exports.default = FontSizeAdjustment;
