// Define the CategoryData interface for the fetched data
interface RajnitiNewsData {
  id: number;
  name: string;
  name_bangla: string;
  category_id?: string; // optional now
  news_title?: string;
  image_url?: string;
  thumbnail?: string;
  thumbnail_img?: string;
}

export const RajnitiDataSet = async (): Promise<RajnitiNewsData[]> => {
  try {
    const response = await fetch(
      "https://admin.weeklyinqilab.com/api/v1/category-news/politics",
      {
        next: { revalidate: 1 },
      // next: { revalidate: 1 },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
