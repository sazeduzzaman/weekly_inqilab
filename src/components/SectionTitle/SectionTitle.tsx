import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl section-title inline-block border-b-4 border-red-600 mr-4">
        {title}
      </h1>
      <div className="flex-1 border-b-4 border-gray-200"></div>
    </div>
  );
};

export default SectionTitle;
