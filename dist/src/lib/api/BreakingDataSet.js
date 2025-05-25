"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakingDataSet = void 0;
const BreakingDataSet = async () => {
    try {
        const response = await fetch("https://backoffice.ajkal.us/breaking-news");
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.error("Failed to fetch news categories:", error);
        throw new Error("Something went wrong while fetching news categories.");
    }
};
exports.BreakingDataSet = BreakingDataSet;
