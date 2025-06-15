"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpaperDataSet = void 0;
const EpaperDataSet = async () => {
    const res = await fetch("https://admin.weeklyinqilab.com/api/v1/epapers", {
        next: { revalidate: 1 },
    });
    const json = await res.json();
    return json.data.map((item) => ({
        id: item.id,
        epaper_image: item.epaper_image || "/images/default-epaper.webp", // Fallback string here
        epaper_image_alt: item.epaper_image_alt || `Page ${item.page_number || "unknown"}`,
        page_number: item.page_number,
    }));
};
exports.EpaperDataSet = EpaperDataSet;
