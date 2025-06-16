"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripHtml = stripHtml;
// utils/stripHtml.ts
function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
}
