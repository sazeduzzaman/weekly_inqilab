"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const ImageWithPlaceHolder = ({ src, width, height, blurDataURL, alt = "Image", className = "", }) => {
    return (<image_1.default src={src} alt={alt} width={width} height={height} placeholder="blur" blurDataURL={blurDataURL} className={className}/>);
};
exports.default = ImageWithPlaceHolder;
