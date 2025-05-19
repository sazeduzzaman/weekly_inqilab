"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LimitedText;
const react_1 = __importDefault(require("react"));
function LimitedText({ htmlContent, wordLimit, className, }) {
    // Strip tags and limit words
    function limitWordsFromHtml(html, limit) {
        const text = stripHtmlTags(html);
        const words = text.split(/\s+/).filter(Boolean);
        const limited = words.slice(0, limit).join(" ");
        return words.length > limit ? limited + "…" : limited;
    }
    function stripHtmlTags(html) {
        return html.replace(/<[^>]*>/g, " ");
    }
    const previewText = limitWordsFromHtml(htmlContent, wordLimit);
    return <div className={className}>{previewText}</div>;
}
