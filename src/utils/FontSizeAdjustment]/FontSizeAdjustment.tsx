// FontSizeAdjustment.jsx
import React from "react";
import { TbTextDecrease, TbTextIncrease } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";

const FontSizeAdjustment = ({ onIncrease, onDecrease, onReset }: any) => {
  return (
    <div className="flex mt-3">
      <button onClick={onIncrease} className="btn btn-circle me-2 p-1 w-8 h-8">
        <TbTextIncrease />
      </button>
      <button onClick={onDecrease} className="btn btn-circle me-2 p-1 w-8 h-8">
        <TbTextDecrease />
      </button>
      <button onClick={onReset} className="btn btn-circle p-1 w-8 h-8">
        <RiResetLeftLine />
      </button>
    </div>
  );
};

export default FontSizeAdjustment;
