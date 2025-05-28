"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Meta;
// components/MetaData/Meta.tsx
const head_1 = __importDefault(require("next/head"));
function Meta({ title, description, image, url, type }) {
    return (<head_1.default>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="og:url" content={url}/>
      <meta property="og:type" content={type}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
      <meta name="robots" content="index, follow"/>
      <link rel="icon" href="/favicon.ico"/>
    </head_1.default>);
}
