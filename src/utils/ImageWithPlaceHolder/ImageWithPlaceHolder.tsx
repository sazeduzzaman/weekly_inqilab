"use client";
import Image from "next/image";
import React from "react";

export interface ImageWithPlaceholderProps {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  alt?: string;
  className?: string;
}

const ImageWithPlaceHolder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  width,
  height,
  blurDataURL,
  alt = "Image",
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={className}
    />
  );
};

export default ImageWithPlaceHolder;
