// Define the CategoryData interface for the fetched data
interface AdvertismentData {
  id: number;
  title: string; // maps to "title"
  ad_type: string; // e.g., "image"
  image_path: string | null; // URL of the image, can be null
  video_path: string | null; // URL of the video, can be null
  html_code: string | null; // optional HTML string, can be null
  link: string; // external link URL
  target_blank: number; // 1 if link opens in new tab, else 0
  position: string; // e.g. "sidebar_random"
  priority: number; // priority number
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  status: string; // e.g. "approved"
  company_name: string;
  company_website: string;
  availability: string; // e.g. "available"
}

export const Advertisment = async (): Promise<AdvertismentData[]> => {
  try {
    const response = await fetch(
      "https://admin.weeklyinqilab.com/api/v1/advertisements",
      {
        next: { revalidate: 2}
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
