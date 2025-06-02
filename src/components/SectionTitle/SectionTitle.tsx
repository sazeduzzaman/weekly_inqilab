import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="my-5">
      <h1 className="ft-size text-red-700 section-title pb-5 text-center md:text-start text-shadow-0">
        {title}
      </h1>
      <div className="flex-1 border-b-1 border-black w-full"></div>
    </div>
  );
};

export default SectionTitle;
