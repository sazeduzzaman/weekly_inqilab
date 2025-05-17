// Define the CategoryData interface for the fetched data
interface SpotLightNewsData {
  name: string;
  id: number;
  name_bangla: string;
}

export const SpotLightDataSet = async (): Promise<SpotLightNewsData[]> => {
  try {
    const response = await fetch("https://backoffice.ajkal.us/spotlight-news");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
