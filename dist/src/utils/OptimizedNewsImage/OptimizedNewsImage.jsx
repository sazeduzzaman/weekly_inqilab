"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = __importStar(require("react"));
const OptimizedNewsImage = ({ imageName, altText = "News image", priority = false, className = "", hoverEffect = false, heightClass = "", heightStyle, widthClass = "", widthStyle, }) => {
    const [hasError, setHasError] = (0, react_1.useState)(false);
    const newsImageSrc = imageName; // treat as full URL
    const fallbackImageSrc = "/images/placeholderImage.webp";
    const baseClasses = "rounded-md object-cover transition duration-300 ease-in-out transform";
    const hoverClass = hoverEffect ? "hover:scale-105" : "";
    const containerStyle = {
        ...(heightStyle ? { height: heightStyle } : {}),
        ...(widthStyle ? { width: widthStyle } : {}),
    };
    return (<div className={`relative overflow-hidden ${heightClass} ${widthClass}`} style={containerStyle}>
      <image_1.default src={hasError ? fallbackImageSrc : newsImageSrc} alt={altText} fill priority={priority} className={`${baseClasses} ${className} ${hoverClass}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} onError={() => setHasError(true)}/>
    </div>);
};
exports.default = OptimizedNewsImage;
