"use client";

import Image from "next/image";
import React, { useState } from "react";

interface OptimizedNewsImageProps {
  imageName: string;
  altText?: string;
  priority?: boolean;
  className?: string;
  heightClass?: string; // CSS class to control height
  heightStyle?: string; // e.g. "200px" or "50vh"
  widthClass?: string; // CSS class to control width
  widthStyle?: string; // e.g. "300px" or "80vw"
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

  // Compose style for the container div
  const containerStyle = {
    ...(heightStyle ? { height: heightStyle } : {}),
    ...(widthStyle ? { width: widthStyle } : {}), // default width 100%
  };

  return (
    <div
      className={`relative ${heightClass} ${widthClass}`}
      style={containerStyle}
    >
      <Image
        className={`${baseClasses} ${className} ${hoverClass}`}
        src={hasError ? fallbackImageSrc : newsImageSrc}
        alt={altText}
        layout="fill"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default OptimizedNewsImage;
