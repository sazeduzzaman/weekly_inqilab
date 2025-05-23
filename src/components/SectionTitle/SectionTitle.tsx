import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="my-10 mt-5">
      <h1 className="ft-size  section-title mr-4 font-bold pb-2 text-shadow-0 section-title">
        {title}
      </h1>
      <div className="flex-1 border-b-1 border-black w-full"></div>
    </div>
  );
};

export default SectionTitle;
