// Define the CategoryData interface for the fetched data
interface CategoryData {
  name: string;
  id: number;
  name_bangla: string;
}

export const CategoryDataSet = async (): Promise<CategoryData[]> => {
  try {
    const response = await fetch("https://backoffice.ajkal.us/news-category");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
