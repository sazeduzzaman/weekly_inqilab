"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const disqus_react_1 = require("disqus-react");
const ClientReview = ({ slug, title }) => {
    const disqusShortname = "weeklyinqilab"; // Your Disqus shortname
    const disqusConfig = {
        url: `https://weekly-inqilab.vercel.app/details/${slug}`, // Full canonical URL of the article
        identifier: slug, // A unique identifier for the article
        title: title, // Article title
        language: "bn", // Optional: Bengali language
    };
    return (<div className="mt-10">
      <disqus_react_1.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
    </div>);
};
exports.default = ClientReview;
