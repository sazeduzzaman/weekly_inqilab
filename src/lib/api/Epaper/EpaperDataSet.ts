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
  const res = await fetch("https://admin.weeklyinqilab.com/api/v1/epapers", {
    next: { revalidate: 1 },
      // next: { revalidate: 1 },
  });

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    epaper_image: item.epaper_image || "/images/default-epaper.webp", // Fallback string here
    epaper_image_alt:
      item.epaper_image_alt || `Page ${item.page_number || "unknown"}`,
    page_number: item.page_number,
  }));
};
