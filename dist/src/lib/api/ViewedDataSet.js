"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewedDataSet = void 0;
const ViewedDataSet = async () => {
    try {
        const response = await fetch("https://admin.weeklyinqilab.com/api/v1/viewed-news", {
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
exports.ViewedDataSet = ViewedDataSet;
