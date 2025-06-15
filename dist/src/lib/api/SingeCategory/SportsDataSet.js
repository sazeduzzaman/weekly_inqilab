"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsDataSet = void 0;
const SportsDataSet = async () => {
    try {
        const response = await fetch("https://admin.weeklyinqilab.com/api/v1/category-news/sports", {
            next: { revalidate: 1 },
        });
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.error("Failed to fetch news categories:", error);
        throw new Error("Something went wrong while fetching news categories.");
    }
};
exports.SportsDataSet = SportsDataSet;
