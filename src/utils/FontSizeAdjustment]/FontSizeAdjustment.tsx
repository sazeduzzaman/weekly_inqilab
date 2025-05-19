import React from "react";
import { TbTextDecrease, TbTextIncrease } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";

const FontSizeAdjustment = () => {
  return (
    <div className="flex mt-3">
      {/* <MdOutlineTextIncrease /> */}
      <button className="btn btn-circle me-2 p-1 w-8 h-8">
        <TbTextIncrease />
      </button>
      <button className="btn btn-circle me-2 p-1 w-8 h-8">
        <TbTextDecrease />
      </button>
      <button className="btn btn-circle p-1 w-8 h-8">
        <RiResetLeftLine />
      </button>
    </div>
  );
};

export default FontSizeAdjustment;
