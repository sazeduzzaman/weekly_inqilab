// Define the CategoryData interface for the fetched data
interface SpotLightNewsData {
  name: string;
  id: number;
  name_bangla: string;
}

export const SpotLightDataSet = async (): Promise<SpotLightNewsData[]> => {
  try {
    const response = await fetch(
      "https://admin.weeklyinqilab.com/api/v1/slider-news",
      {
        next: { revalidate: 1 },
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
