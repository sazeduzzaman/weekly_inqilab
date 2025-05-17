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
}

export const LatestDataSet = async (): Promise<LatestNewsData[]> => {
  try {
    const response = await fetch("https://backoffice.ajkal.us/latest-news");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
