"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_share_1 = require("react-share");
const ShareNews = ({ url, title }) => {
    return (<div className="flex items-center gap-3 ms-2">
      <react_share_1.FacebookShareButton url={url} title={title}>
        <react_share_1.FacebookIcon size={32} round/>
      </react_share_1.FacebookShareButton>

      <react_share_1.TwitterShareButton url={url} title={title}>
        <react_share_1.TwitterIcon size={32} round/>
      </react_share_1.TwitterShareButton>

      <react_share_1.LinkedinShareButton url={url} title={title}>
        <react_share_1.LinkedinIcon size={32} round/>
      </react_share_1.LinkedinShareButton>
    </div>);
};
exports.default = ShareNews;
