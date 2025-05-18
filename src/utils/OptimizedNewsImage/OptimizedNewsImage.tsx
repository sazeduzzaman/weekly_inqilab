"use client";

import Image from "next/image";
import React, { useState } from "react";

interface OptimizedNewsImageProps {
  imageName: string;
  altText?: string;
  priority?: boolean;
  className?: string;
  heightClass?: string;
  heightStyle?: string; // e.g. "300px"
  widthClass?: string;
  widthStyle?: string;  // e.g. "100%"
  hoverEffect?: boolean;
}

const OptimizedNewsImage: React.FC<OptimizedNewsImageProps> = ({
  imageName,
  altText = "News image",
  priority = false,
  className = "",
  hoverEffect = false,
  heightClass = "",
  heightStyle,
  widthClass = "",
  widthStyle,
}) => {
  const [hasError, setHasError] = useState(false);

  const newsImageSrc = `https://ajkal.us/img/news/${imageName}`;
  const fallbackImageSrc = `https://ajkal.us/img/settings/placeholder.jpg`;

  const baseClasses =
    "rounded-md object-cover transition duration-300 ease-in-out transform";
  const hoverClass = hoverEffect ? "hover:scale-105" : "";

  const containerStyle = {
    ...(heightStyle ? { height: heightStyle } : {}),
    ...(widthStyle ? { width: widthStyle } : {}),
  };

  return (
    <div
      className={`relative overflow-hidden ${heightClass} ${widthClass}`}
      style={containerStyle}
    >
      <Image
        src={hasError ? fallbackImageSrc : newsImageSrc}
        alt={altText}
        fill
        priority={priority}
        className={`${baseClasses} ${className} ${hoverClass}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default OptimizedNewsImage;
