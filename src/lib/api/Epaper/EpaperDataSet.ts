interface EpaperData {
  id: number;
  epaper_name: string;
  slug: string;
  epaper_title?: string; // optional now
  post_date?: string;
  epaper_image?: string;
  epaper_image_alt?: string;
  page_number?: number;
  total_pages?: number;
  epaper_pdf_url?: string;
  language?: string;
  region?: string;
  published_by?: string;
}

export const EpaperDataSet = async (): Promise<EpaperData[]> => {
  try {
    const response = await fetch(
      "https://v2.weeklyinqilab.com/api/v1/epapers",
      {
        next: { revalidate: 2 },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
