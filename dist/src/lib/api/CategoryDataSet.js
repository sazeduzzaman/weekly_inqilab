"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDataSet = void 0;
const CategoryDataSet = async () => {
    try {
        const response = await fetch("https://backoffice.ajkal.us/news-category");
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.error("Failed to fetch news categories:", error);
        throw new Error("Something went wrong while fetching news categories.");
    }
};
exports.CategoryDataSet = CategoryDataSet;
