"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RajnitiDataSet = void 0;
const RajnitiDataSet = async () => {
    try {
        const response = await fetch("https://admin.weeklyinqilab.com/api/v1/category-news/politics", {
            next: { revalidate: 1 },
            // next: { revalidate: 1 },
        });
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.error("Failed to fetch news categories:", error);
        throw new Error("Something went wrong while fetching news categories.");
    }
};
exports.RajnitiDataSet = RajnitiDataSet;
