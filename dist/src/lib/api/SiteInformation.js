"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteInformation = void 0;
const SiteInformation = async () => {
    try {
        const response = await fetch("https://admin.weeklyinqilab.com/api/v1/site-informations", {
            next: { revalidate: 1 }
        });
        const json = await response.json();
        return json.data;
    }
    catch (error) {
        console.error("Failed to fetch site information:", error);
        throw new Error("Something went wrong while fetching site information.");
    }
};
exports.SiteInformation = SiteInformation;
