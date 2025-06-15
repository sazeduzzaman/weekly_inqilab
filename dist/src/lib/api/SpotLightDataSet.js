"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotLightDataSet = void 0;
const SpotLightDataSet = async () => {
    try {
        const response = await fetch("https://admin.weeklyinqilab.com/api/v1/slider-news", {
            next: { revalidate: 1 }
        });
        const data = await response.json();
        return data.data;
    }
    catch (error) {
        console.error("Failed to fetch news categories:", error);
        throw new Error("Something went wrong while fetching news categories.");
    }
};
exports.SpotLightDataSet = SpotLightDataSet;
