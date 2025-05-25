// Define the CategoryData interface for the fetched data
interface LatestNewsData {
  id: number;
  name: string;
  name_bangla: string;
  category_id?: string; // optional now
  news_title?: string;
  image_url?: string;
  title_img?: string;
  thumbnail_img?: string;
  news_time?: string;
  title? : string;
  slug?: string;
}

export const LatestDataSet = async (): Promise<LatestNewsData[]> => {
  try {
    const response = await fetch("https://v2.weeklyinqilab.com/api/v1/latest-news");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
