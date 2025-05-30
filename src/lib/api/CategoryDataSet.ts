// Define the CategoryData interface for the fetched data
interface CategoryData {
  name: string;
  id: number;
  bangla_name: string;
}

export const CategoryDataSet = async (): Promise<CategoryData[]> => {
  try {
    const response = await fetch(
      "https://v2.weeklyinqilab.com/api/v1/categories",
      {
        next: { revalidate: 0 }
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
