"use client";

import Image from "next/image";
import React, { useState } from "react";

interface OptimizedNewsImageProps {
  imageName: string; // expected to be a full URL or valid relative path
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

  const fallbackImageSrc = "/images/placeholderImage.webp";

  // Helper to validate the src
  const isValidImageSrc = (src: string | undefined): boolean => {
    if (!src) return false;
    return src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://");
  };

  const resolvedImageSrc = isValidImageSrc(imageName) ? imageName : fallbackImageSrc;

  const baseClasses =
    "rounded-none object-cover transition duration-300 ease-in-out transform";
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
        src={hasError ? fallbackImageSrc : resolvedImageSrc}
        alt={altText}
        fill
        priority={priority}
        className={`${baseClasses} ${className} ${hoverClass} rounded-none` }
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default OptimizedNewsImage;
