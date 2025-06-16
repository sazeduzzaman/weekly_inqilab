"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteInformation = void 0;
const SiteInformation = async () => {
    try {
        const res = await fetch("https://admin.weeklyinqilab.com/api/v1/site-informations", {
            next: { revalidate: 1 },
        });
        const json = await res.json();
        return json.data;
    }
    catch (err) {
        console.error("Failed to fetch site information:", err);
        throw new Error("Unable to load site information.");
    }
};
exports.SiteInformation = SiteInformation;
