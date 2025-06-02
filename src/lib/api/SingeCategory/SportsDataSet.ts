// Define the CategoryData interface for the fetched data
interface SportsNewsData {
  id: number;
  name: string;
  name_bangla: string;
  category_id?: string; // optional now
  news_title?: string;
  image_url?: string;
  thumbnail?: string;
  thumbnail_img?: string;
}

export const SportsDataSet = async (): Promise<SportsNewsData[]> => {
  try {
    const response = await fetch(
      "https://v2.weeklyinqilab.com/api/v1/category-news/sports",
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
