import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="my-2">
      <h1 className="text-[15px] section-title mr-4 font-bold pb-2 text-shadow-0 section-title">
        {title}
      </h1>
      <div className="flex-1 border-b-2 border-gray-200 w-full"></div>
    </div>
  );
};

export default SectionTitle;
